import { spawn } from 'node:child_process'
import { exit } from 'node:process'

const green = (text: string) => `\x1b[32m${text}\x1b[0m`
const red = (text: string) => `\x1b[31m${text}\x1b[0m`
const blue = (text: string) => `\x1b[34m${text}\x1b[0m`

const mode = process.argv[2] === 'fix' ? 'fix' : 'check'

/**
 * Axioms: Local binaries only.
 * npm run verify ensures node_modules/.bin is in the PATH.
 */
const commands = {
  check: [
    { name: 'Parsimony (Knip)', cmd: 'knip' },
    { name: 'Grammar (Biome)', cmd: 'biome check .' },
    { name: 'Soundness (TypeScript)', cmd: 'tsc' },
    { name: 'Proofs (Vitest)', cmd: 'vitest run' },
    { name: 'Style (StyleLint)', cmd: 'stylelint "**/*.{css,scss}"' }
  ],
  fix: [
    { name: 'Syntactic Normalization', cmd: 'biome check --write --unsafe .' },
    { name: 'Pruning (Knip)', cmd: 'knip --fix' },
    { name: 'Soundness (TypeScript)', cmd: 'tsc' },
    { name: 'Proofs (Vitest)', cmd: 'vitest run' },
    { name: 'Style (StyleLint)', cmd: 'stylelint "**/*.{css,scss}" --fix' }
  ]
}

async function runCommand(name: string, fullCommand: string): Promise<boolean> {
  console.log(`\n${blue('--- Running:')} ${name} ---`)

  return new Promise((resolve) => {
    // shell: true is required to resolve the binaries from node_modules/.bin
    const child = spawn(fullCommand, { stdio: 'inherit', shell: true })

    child.on('close', (code) => {
      resolve(code === 0)
    })
  })
}

async function main(): Promise<void> {
  console.log(blue(`\nInitializing Verification [${mode.toUpperCase()}]...`))

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
    console.log(green('\n✨ System is Sound. ✨'))
    exit(0)
  } else {
    console.log(red('\n🚨 Verification Failed. 🚨'))
    exit(1)
  }
}

main()
