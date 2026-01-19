import { spawn } from 'node:child_process'
import { exit } from 'node:process'

const mode = process.argv[2] === 'fix' ? 'fix' : 'check'

const commands = {
  check: [
    { name: 'Parsimony (Knip)', cmd: 'knip' },
    { name: 'Grammar (Biome)', cmd: 'biome check .' },
    { name: 'Structure (ESLint)', cmd: 'eslint' },
    { name: 'Soundness (TypeScript)', cmd: 'tsc' },
    { name: 'Proofs (Vitest)', cmd: 'vitest run' },
    { name: 'Style (StyleLint)', cmd: 'stylelint "src/**/*.{css,scss}"' },
    { name: 'Build', cmd: 'npm run build' }
  ],
  fix: [
    { name: 'Pruning (Knip)', cmd: 'knip --fix' },
    { name: 'Syntactic Normalization', cmd: 'biome check --write --unsafe .' },
    { name: 'Structure (ESLint)', cmd: 'eslint --fix' },
    { name: 'Soundness (TypeScript)', cmd: 'tsc' },
    { name: 'Proofs (Vitest)', cmd: 'vitest run' },
    { name: 'Style (StyleLint)', cmd: 'stylelint --fix "src/**/*.{css,scss}"' },
    { name: 'Build', cmd: 'npm run build' }
  ]
}

async function runCommand(_name: string, fullCommand: string): Promise<boolean> {
  return new Promise(resolve => {
    // shell: true is required to resolve the binaries from node_modules/.bin
    const child = spawn(fullCommand, { stdio: 'inherit', shell: true })

    child.on('close', code => {
      resolve(code === 0)
    })
  })
}

async function main(): Promise<void> {
  let allPassed = true
  for (const step of commands[mode]) {
    const success = await runCommand(step.name, step.cmd)
    if (!success) {
      allPassed = false
      if (mode === 'check') {
        break
      }
    }
  }

  if (allPassed) {
    exit(0)
  } else {
    exit(1)
  }
}

main()
