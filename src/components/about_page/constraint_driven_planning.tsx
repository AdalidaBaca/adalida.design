import { IconArrowDown, IconArrowUp } from '@tabler/icons-react'
import Section from './section'

interface MetricProps {
  value: string
  label: string
  direction: 'down' | 'up'
}

const Metric = ({ value, label, direction }: MetricProps) => {
  const Icon = direction === 'down' ? IconArrowDown : IconArrowUp
  return (
    <div className="cdp-metric">
      <span className="cdp-metric-value">{value}</span>
      <Icon className="cdp-metric-arrow" size={20} strokeWidth={1.5} aria-hidden />
      <span className="cdp-metric-label">{label}</span>
    </div>
  )
}

const ConstraintDrivenPlanning = (): JSX.Element => (
  <Section
    title="Constraint-Driven Planning"
    subtitle="Some problems aren't products — but they reward the same thinking."
  >
    <div className="cdp">
      <p className="cdp-lead">
        I wanted to get married in Paris and spend two months traveling Europe. The binding constraint wasn't itinerary
        or vacation time — it was San Francisco rent at over $3,000 a month. A traditional 'save up' approach would have
        taken years. Instead, I treated it like any other system constraint: identify the bottleneck, then eliminate it
        structurally.
      </p>
      <p className="cdp-lead">
        I moved out of my apartment and put everything in a storage unit in Santa Rosa, dropping monthly fixed costs
        from $3,000+ to $150. That single change freed up the budget for the trip. The result was two months across
        Europe — wedding included — for under $15,000.
      </p>
      <div className="cdp-metrics">
        <Metric value="$3,000+" label="Monthly SF rent" direction="down" />
        <Metric value="$150" label="Monthly storage" direction="down" />
        <Metric value="< $15k" label="Trip + wedding" direction="up" />
      </div>
    </div>
  </Section>
)

export default ConstraintDrivenPlanning
