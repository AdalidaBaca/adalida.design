import React from 'react'

import Section from './section'
import { IconNotes, IconBrandNotion, IconBrandFigma, IconBooks } from '@tabler/icons-react'
import BadgeButton from 'components/badge_button'

const Resources = (): JSX.Element => {
  const writingUrl = 'https://adalida.substack.com/?utm_source=site&utm_medium=resources&utm_campaign=writing_primary'
  const highlightsUrl = '/experiments'
  const templatesUrl = 'https://www.notion.com/@adalidabaca'
  const figmaUrl = 'https://www.figma.com/@adalida'

  const handleKeyActivate = (event: React.KeyboardEvent, href: string): void => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault()
      window.location.assign(href)
    }
  }

  return (
    <Section title='Resources'>
      <div className='hackathons odd'>
        <div
          className='glass card hackathon resource-card'
          role='link'
          tabIndex={0}
          aria-label='Read the latest issue on Substack'
          onClick={() => { window.location.assign(writingUrl) }}
          onKeyDown={(e) => { handleKeyActivate(e, writingUrl) }}
        >
          <div className='inside'>
            <div className='resource-header'>
              <div className='title-wrap'>
                <div className='subtitle-1'><strong>Writing</strong></div>
                <div className='caption-1 secondary-subtitle'>A Heavenly Read</div>
              </div>
            </div>
            <div style={{ display: 'flex', gap: '0.5em', flexWrap: 'wrap' }}>
              <div className='platform-badge'>
                <IconNotes size={16} />
                <span>Substack</span>
              </div>
              <div className='platform-badge'>
                <IconBooks size={16} />
                <span>Academic</span>
              </div>
            </div>
            <div className='caption-1'>
              I write at the intersection of design, philosophy, and technology. Writing is how I clarify ideas before they
              turn into product decisions. Some pieces explore history and place, including my roots in New Mexico.
            </div>
          </div>
          <div className='resource-cta'>
            <BadgeButton to={writingUrl}>SUBSTACK</BadgeButton>
            <BadgeButton to={highlightsUrl}>ACADEMIC</BadgeButton>
          </div>
        </div>
        <div
          className='glass card hackathon resource-card'
          role='link'
          tabIndex={0}
          aria-label='Browse templates on Notion'
          onClick={() => { window.location.assign(templatesUrl) }}
          onKeyDown={(e) => { handleKeyActivate(e, templatesUrl) }}
        >
          <div className='inside'>
            <div className='resource-header'>
              <div className='title-wrap'>
                <div className='subtitle-1'><strong>Design</strong></div>
                <div className='caption-1 secondary-subtitle'>Community Templates</div>
              </div>
            </div>
            <div style={{ display: 'flex', gap: '0.5em', flexWrap: 'wrap' }}>
              <div className='platform-badge'>
                <IconBrandNotion size={16} />
                <span>Notion</span>
              </div>
              <div className='platform-badge'>
                <IconBrandFigma size={16} />
                <span>Figma</span>
              </div>
            </div>
            <div className='caption-1'>
              I design templates and documents to structure thinking, planning, and execution. These are tools I use to support
              product, research, and operational work. Each template is designed to be practical and reusable.
            </div>
          </div>
          <div className='resource-cta'>
            <BadgeButton to={templatesUrl}>NOTION</BadgeButton>
            <BadgeButton to={figmaUrl}>FIGMA</BadgeButton>
          </div>
        </div>
      </div>
    </Section>
  )
}

export default Resources

