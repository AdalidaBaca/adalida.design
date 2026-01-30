import { IconCheck, IconX } from '@tabler/icons-react'
import { Fragment } from 'react'

type Indicator = 'yes' | 'no' | 'partial'

interface ColHeader {
  label: string
  helperText?: string
}

const COL_HEADERS: ColHeader[] = [
  { label: 'Low Cost' },
  { label: 'Data Capture' },
  { label: 'Data Updates' }
]

interface ApproachRow {
  label: string
  sub?: string
  cost: Indicator
  intakeData: Indicator
  dataUpdatability: Indicator
}

const APPROACH_ROWS: ApproachRow[] = [
  { label: 'Paper intake', sub: 'Current Solution', cost: 'yes', intakeData: 'no', dataUpdatability: 'no' },
  { label: 'WIX Pro', sub: '+$10 / month', cost: 'no', intakeData: 'yes', dataUpdatability: 'yes' },
  { label: 'Forms (CSV)', sub: 'Tally / Google', cost: 'yes', intakeData: 'yes', dataUpdatability: 'partial' }
]

const IndicatorIcon = ({ kind }: { kind: Indicator }): JSX.Element => {
  if (kind === 'yes') {
    return <IconCheck size={22} className="intake-tradeoffs-icon intake-tradeoffs-icon-yes" aria-hidden="true" />
  }
  if (kind === 'no') {
    return <IconX size={22} className="intake-tradeoffs-icon intake-tradeoffs-icon-no" aria-hidden="true" />
  }
  return (
    <span
      className="intake-tradeoffs-icon intake-tradeoffs-icon-partial"
      aria-hidden="true"
      title="Possible with additional system"
    >
      <svg
        width="22"
        height="22"
        viewBox="0 0 22 22"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        role="img"
        aria-label="Possible with additional system"
      >
        <title>Possible with additional system</title>
        <circle cx="11" cy="11" r="9" stroke="currentColor" strokeWidth="1.5" strokeDasharray="3 3" fill="none" />
      </svg>
    </span>
  )
}

const IntakeTradeoffsMatrix = (): JSX.Element => {
  return (
    <section className="intake-tradeoffs-matrix" aria-label="Competitive intake tradeoffs">
      <div className="intake-tradeoffs-grid">
        {/* Header row: empty corner, then column headers (criteria) */}
        <div className="intake-tradeoffs-corner" aria-hidden="true" />
        {COL_HEADERS.map((col, index) => (
          <div key={col.label} className="intake-tradeoffs-col-head" id={`intake-tradeoffs-col-${index}`}>
            <span className="intake-tradeoffs-col-title">{col.label}</span>
            {col.helperText !== undefined && <span className="intake-tradeoffs-col-sub">{col.helperText}</span>}
          </div>
        ))}

        {/* Data rows: row label (approach), then three indicator cells (per criterion) */}
        {APPROACH_ROWS.map(row => (
          <Fragment key={row.label}>
            <div className="intake-tradeoffs-row-label">
              <span className="intake-tradeoffs-section-label">{row.label}</span>
              {row.sub !== undefined && <span className="intake-tradeoffs-helper">{row.sub}</span>}
            </div>
            <div
              className="intake-tradeoffs-cell"
              role="img"
              aria-label={`Low Cost: ${row.cost === 'yes' ? 'supported' : row.cost === 'no' ? 'not supported' : 'possible with additional system'}`}
            >
              <IndicatorIcon kind={row.cost} />
            </div>
            <div
              className="intake-tradeoffs-cell"
              role="img"
              aria-label={`Intake data: ${row.intakeData === 'yes' ? 'supported' : row.intakeData === 'no' ? 'not supported' : 'possible with additional system'}`}
            >
              <IndicatorIcon kind={row.intakeData} />
            </div>
            <div
              className="intake-tradeoffs-cell"
              role="img"
              aria-label={`Data updatability: ${row.dataUpdatability === 'yes' ? 'supported' : row.dataUpdatability === 'no' ? 'not supported' : 'possible with additional system'}`}
            >
              <IndicatorIcon kind={row.dataUpdatability} />
            </div>
          </Fragment>
        ))}
      </div>

      <footer className="intake-tradeoffs-legend">
        <span className="intake-tradeoffs-legend-item">
          <IconCheck size={14} className="intake-tradeoffs-icon intake-tradeoffs-icon-yes" aria-hidden="true" />
          supported
        </span>
        <span className="intake-tradeoffs-legend-item">
          <span className="intake-tradeoffs-icon intake-tradeoffs-icon-partial" aria-hidden="true">
            <svg
              width="14"
              height="14"
              viewBox="0 0 22 22"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              role="img"
              aria-label="Possible with additional system"
            >
              <title>Possible with additional system</title>
              <circle cx="11" cy="11" r="9" stroke="currentColor" strokeWidth="1.5" strokeDasharray="3 3" fill="none" />
            </svg>
          </span>
          possible with additional system
        </span>
        <span className="intake-tradeoffs-legend-item">
          <IconX size={14} className="intake-tradeoffs-icon intake-tradeoffs-icon-no" aria-hidden="true" />
          not supported
        </span>
      </footer>
    </section>
  )
}

IntakeTradeoffsMatrix.displayName = 'IntakeTradeoffsMatrix'

export default IntakeTradeoffsMatrix
