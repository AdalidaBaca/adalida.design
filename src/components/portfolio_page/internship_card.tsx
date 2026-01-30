import { IconArrowNarrowRight } from '@tabler/icons-react'

import type { InternshipItem } from 'data/internship_portfolio'

interface Props {
  item: InternshipItem
}

const InternshipCard = ({ item }: Props): JSX.Element => {
  const cardContent = (
    <>
      <div className="internship-portfolio-card-text">
        <h6 className="internship-portfolio-card-title">{item.title}</h6>
        <p className="internship-portfolio-card-description">{item.description}</p>
      </div>
      {item.link && (
        <div className="internship-portfolio-card-cta-section">
          <a
            href={item.link}
            target="_blank"
            rel="noopener noreferrer"
            className="internship-portfolio-card-cta"
            aria-label={`View ${item.title}`}
          >
            <span className="internship-portfolio-card-cta-label">View document</span>
            <IconArrowNarrowRight size={20} strokeWidth={2} aria-hidden />
          </a>
        </div>
      )}
    </>
  )

  return (
    <div className="internship-portfolio-card" data-aos="fade-up" data-aos-offset="100">
      {cardContent}
    </div>
  )
}

export default InternshipCard
