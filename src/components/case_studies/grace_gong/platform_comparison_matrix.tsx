import { IconCheck, IconX } from '@tabler/icons-react'
import { Fragment } from 'react'

type Indicator = 'yes' | 'no' | 'partial'

interface PlatformRow {
  label: string
  sublabel: string
  sourceOfTruth: Indicator
  teamRunUpdates: Indicator
  lowOngoingCost: Indicator
  chosen?: boolean
}

const COLUMN_HEADERS = ['One Source of Truth', 'Team-Run Updates', 'Low Ongoing Cost']

const PLATFORM_ROWS: PlatformRow[] = [
  {
    label: 'Squarespace + Wix',
    sublabel: 'Status quo',
    sourceOfTruth: 'no',
    teamRunUpdates: 'yes',
    lowOngoingCost: 'no'
  },
  {
    label: 'Framer',
    sublabel: 'The consolidation attempt',
    sourceOfTruth: 'yes',
    teamRunUpdates: 'no',
    lowOngoingCost: 'no'
  },
  {
    label: 'Custom-coded site',
    sublabel: 'Considered, declined',
    sourceOfTruth: 'yes',
    teamRunUpdates: 'no',
    lowOngoingCost: 'partial'
  },
  {
    label: 'Wix CMS rebuild',
    sublabel: 'Chosen',
    sourceOfTruth: 'yes',
    teamRunUpdates: 'yes',
    lowOngoingCost: 'yes',
    chosen: true
  }
]

const getStatusLabel = (indicator: Indicator): string => {
  if (indicator === 'yes') {
    return 'supported'
  }
  if (indicator === 'no') {
    return 'not supported'
  }
  return 'possible with tradeoffs'
}

const IndicatorIcon = ({ kind, size = 22 }: { kind: Indicator; size?: number }): JSX.Element => {
  if (kind === 'yes') {
    return <IconCheck size={size} className="intake-tradeoffs-icon intake-tradeoffs-icon-yes" aria-hidden="true" />
  }
  if (kind === 'no') {
    return <IconX size={size} className="intake-tradeoffs-icon intake-tradeoffs-icon-no" aria-hidden="true" />
  }
  return (
    <span className="intake-tradeoffs-icon intake-tradeoffs-icon-partial" aria-hidden="true">
      <svg width={size} height={size} viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
        <title>Possible with tradeoffs</title>
        <circle cx="11" cy="11" r="9" stroke="currentColor" strokeWidth="1.5" strokeDasharray="3 3" fill="none" />
      </svg>
    </span>
  )
}

const PlatformComparisonMatrix = (): JSX.Element => (
  <section className="intake-tradeoffs-matrix grace-gong-platform-matrix" aria-label="Platform requirements comparison">
    <div className="intake-tradeoffs-grid">
      <div className="intake-tradeoffs-corner" aria-hidden="true" />
      {COLUMN_HEADERS.map((header, index) => (
        <div key={header} className="intake-tradeoffs-col-head" id={`platform-comparison-column-${index}`}>
          <span className="intake-tradeoffs-col-title">{header}</span>
        </div>
      ))}

      {PLATFORM_ROWS.map(row => {
        const rowClassName = row.chosen === true ? ' grace-gong-platform-matrix-chosen' : ''
        const indicators: Indicator[] = [row.sourceOfTruth, row.teamRunUpdates, row.lowOngoingCost]
        return (
          <Fragment key={row.label}>
            <div className={`intake-tradeoffs-row-label${rowClassName}`}>
              <span className="intake-tradeoffs-section-label">{row.label}</span>
              <span className="intake-tradeoffs-helper">{row.sublabel}</span>
            </div>
            {indicators.map((indicator, index) => (
              <div
                key={`${row.label}-${COLUMN_HEADERS[index]}`}
                className={`intake-tradeoffs-cell${rowClassName}`}
                role="img"
                aria-label={`${COLUMN_HEADERS[index]}: ${getStatusLabel(indicator)}`}
              >
                <IndicatorIcon kind={indicator} />
              </div>
            ))}
          </Fragment>
        )
      })}
    </div>

    <footer className="intake-tradeoffs-legend">
      <span className="intake-tradeoffs-legend-item">
        <IndicatorIcon kind="yes" size={14} />
        supported
      </span>
      <span className="intake-tradeoffs-legend-item">
        <IndicatorIcon kind="partial" size={14} />
        possible with tradeoffs
      </span>
      <span className="intake-tradeoffs-legend-item">
        <IndicatorIcon kind="no" size={14} />
        not supported
      </span>
    </footer>
  </section>
)

export default PlatformComparisonMatrix
