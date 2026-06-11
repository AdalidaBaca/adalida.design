import SectionHeading from 'components/section_heading'

interface Props {
  title: string
  subtitle?: string
  headerAction?: React.ReactNode
  children: React.ReactNode
  aos?: string | 'none'
  aosOffset?: number
}

const Section = ({ title, subtitle, headerAction, children, aos = 'fade-up', aosOffset }: Props): JSX.Element => {
  const isTestimonials = title === 'Testimonials'
  const isResources = title === 'Resources'
  const isContributions = title === 'Contributions'
  const isBuilderFoundations = title === 'Foundations'
  const isToolkit = title === 'Toolkit'
  const isContact = title === "Let's talk"
  const sectionClass = isTestimonials
    ? 'testimonials-section'
    : isResources
      ? 'resources-section'
      : isContributions
        ? 'contributions-section'
        : isBuilderFoundations
          ? 'my-process-section'
          : isToolkit
            ? 'toolkit-section'
            : isContact
              ? 'contact-section'
              : undefined
  return (
    <section
      data-aos={aos !== 'none' ? aos : undefined}
      data-aos-offset={aos !== 'none' ? aosOffset : undefined}
      className={sectionClass}
      aria-label={title}
    >
      <SectionHeading title={title} subtitle={subtitle} headerAction={headerAction} />
      {children}
    </section>
  )
}

export default Section
