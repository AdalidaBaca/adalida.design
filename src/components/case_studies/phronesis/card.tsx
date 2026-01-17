import React from 'react'

import { makeMediaTag } from '../../media_with_text'

const Card = ({ media }: { media: string }): JSX.Element => (
  <div className="phronesis-card">
    {makeMediaTag({ media, style: { height: '100%', width: '100%', minWidth: '100%' } })}
  </div>
)

export default Card
