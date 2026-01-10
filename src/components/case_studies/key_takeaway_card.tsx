import React, { useContext } from 'react'

import Context from './context'

interface Props {
  title?: string
  children: React.ReactNode
}

const KeyTakeawayCard = ({ title, children }: Props): JSX.Element => {
  const backgroundImage = useContext(Context)?.colors?.primary
  return (
    <div className='glass card' data-aos='fade-up'>
      <div className='key-takeaways-card-content'>
        {title !== undefined && (
          <div
            className='subtitle-2 case-study-gradient-text'
            style={backgroundImage !== undefined ? { backgroundImage } : {}}
          >
            <strong>{title}</strong>
          </div>
        )}
        {children}
      </div>
    </div>
  )
}

export default KeyTakeawayCard
