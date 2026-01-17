import HackathonsList from 'hackathons'
import React from 'react'

import Section from '../section'
import Hackathon from './hackathon'

// TODO: Handle more than 5 hackathons
const firstTwoHackathons = HackathonsList.slice(0, 2)
const remainingHackathons = HackathonsList.slice(2)

const Hackathons = (): React.ReactElement => (
  <Section title="Hackathons">
    <div className="body-2">
      I enjoy solving complex problems in fast-paced, 1-2 day hackathons. Check out my past submissions:
    </div>
    <div className="hackathons odd">
      {firstTwoHackathons.map((hackathon) => (
        <Hackathon key={hackathon.name} hackathon={hackathon} />
      ))}
    </div>
    <div className="hackathons even">
      {remainingHackathons.map((hackathon) => (
        <Hackathon key={hackathon.name} hackathon={hackathon} />
      ))}
    </div>
  </Section>
)

export default Hackathons
