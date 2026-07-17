import type { ReactNode } from 'react'

interface Quote {
  text: ReactNode
  author: string
}

interface QuoteSection {
  id: string
  title: string
  description: string
  quotes: Quote[]
}

export const HERO_QUOTE: Quote = {
  text: 'The most important requirement for an object to be considered beautiful is that it fulfills the purpose for which it was conceived.',
  author: 'Antoni Gaudí'
}

export const FOOTER_QUOTE: Quote = {
  text: "Sometimes the things that may or may not be true are the things a man needs to believe in the most. People are basically good; that honor, courage, and virtue mean everything; that power and money, money and power mean nothing; that good always triumphs over evil; and I want you to remember this, that love... true love never dies. You remember that, boy. You remember that. Doesn't matter if it's true or not. You see, a man should believe in those things, because those are the things worth believing in.",
  author: 'Hub, Second Hand Lions'
}

export const QUOTE_SECTIONS: QuoteSection[] = [
  {
    id: 'philosophers',
    title: 'Philosophers',
    description: 'Truth, value, and ethics.',
    quotes: [
      {
        text: 'For I was conscious that I knew practically nothing...',
        author: 'Socrates'
      },
      {
        text: 'What is, and what is not cannot be.',
        author: 'Parmenides'
      },
      {
        text: 'Confine thyself to the present.',
        author: 'Marcus Aurelius'
      },
      {
        text: 'Act only according to the maxim whereby you can at the same time will that it should become a universal law.',
        author: 'Immanuel Kant'
      },
      {
        text: 'It is better to be a human dissatisfied than a pig satisfied; better to be Socrates dissatisfied than a fool satisfied.',
        author: 'John Stuart Mill'
      },
      {
        text: 'It is one of the chief skills of the philosopher not to occupy himself with questions which do not concern him.',
        author: 'Ludwig Wittgenstein'
      },
      {
        text: 'Uttering a word is like striking a note on the keyboard of the imagination.',
        author: 'Ludwig Wittgenstein'
      },
      {
        text: 'Propositions show what they say: tautologies and contradictions show that they say nothing.',
        author: 'Ludwig Wittgenstein'
      }
    ]
  },
  {
    id: 'mathematicians',
    title: 'Mathematicians',
    description: 'Mind, proof, and the delight of the infinite.',
    quotes: [
      {
        text: 'Either Mathematics is too big for the human mind or the human mind is more than a machine.',
        author: 'Kurt Gödel'
      },
      {
        text: 'The safest general characterization of the European philosophical tradition is that it consists of a series of footnotes to Plato.',
        author: 'Alfred North Whitehead'
      },
      {
        text: 'The whole problem with the world is that fools and fanatics are always so certain of themselves, and wiser people so full of doubts.',
        author: 'Bertrand Russell'
      },
      {
        text: 'The true spirit of delight, the exaltation, the sense of being more than Man, which is the touchstone of the highest excellence, is to be found in mathematics as surely as poetry.',
        author: 'Bertrand Russell'
      }
    ]
  },
  {
    id: 'mentors',
    title: 'Mentors',
    description: 'Professors and voices that shaped how I think.',
    quotes: [
      {
        text: 'Be ready to begin again.',
        author: 'Paul Livingston'
      },
      {
        text: (
          <>
            The world is only <em>our</em> experience of the world.
          </>
        ),
        author: 'Michael Candelaria'
      },
      {
        text: "It's not about the answer, it's about the process.",
        author: 'Michael Candelaria'
      },
      {
        text: 'All arguments reduce to definitions.',
        author: 'Peter Kierst'
      },
      {
        text: 'An inaction is still an action.',
        author: 'Hannah'
      }
    ]
  },
  {
    id: 'media',
    title: 'Media',
    description: 'Film, literature, and voices from the screen.',
    quotes: [
      {
        text: 'Words are finite of the infinite mind.',
        author: 'Ralph Waldo Emerson'
      },
      {
        text: 'Do not do something that somebody tells you to do that makes you not be true to yourself. DONT.',
        author: 'Edward James Olmos'
      },
      {
        text: "When opportunity meets preparedness, that's what I call luck. So you should always be prepared. The preparedness comes before the opportunity and that's the key.",
        author: 'Edward James Olmos'
      },
      {
        text: "Chicano is not a color, it's the way you think and the way you live and if you're willing to give up your life for another Carnal.",
        author: 'Blood In Blood Out'
      }
    ]
  }
]
