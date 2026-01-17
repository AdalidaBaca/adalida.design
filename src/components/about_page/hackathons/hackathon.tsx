import { IconArrowNarrowRight } from '@tabler/icons-react'
import UniversalLink from 'components/universal_link'
import type { Hackathon as HackathonType } from 'hackathons'
import React from 'react'

const Hackathon = ({ hackathon }: { hackathon: HackathonType }): JSX.Element => {
  return (
    <div className="glass card hackathon">
      <div className="inside">
        <div className="info-row">
          <div className="caption-1">{hackathon.location}</div>
          <div className="caption-1">{hackathon.year}</div>
        </div>
        <div className="subtitle-1">
          <strong>{hackathon.name}</strong>
        </div>
        <div className="info-row caption-1">{hackathon.sponsor}</div>
        <div className="caption-1">{hackathon.description}</div>
      </div>
      <UniversalLink to={hackathon.link} className="btn animated-link">
        VIEW PRESENTATION <IconArrowNarrowRight />
      </UniversalLink>
    </div>
  )
}

export default Hackathon
