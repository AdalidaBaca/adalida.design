import useIsMobile from 'hooks/use_is_mobile'

interface ColorChip {
  hex: string
  name: string
  bordered?: boolean
}

const COLOR_CHIPS: ColorChip[] = [
  { hex: '#D4C3F6', name: 'Light Lavender' },
  { hex: '#8C52FF', name: 'Bright Purple' },
  { hex: '#5B2986', name: 'Deep Purple' },
  { hex: '#B379C9', name: 'Mauve' },
  { hex: '#2E2E2E', name: 'Charcoal' },
  { hex: '#FEFFF2', name: 'Cream', bordered: true },
  { hex: '#FFFFFF', name: 'White', bordered: true }
]

const BrandSystemBoard = (): JSX.Element => {
  const isNarrow = useIsMobile(560) === true
  const dividerY = isNarrow ? 250 : 168
  const specimenY = dividerY + 122
  const typeLabelY = dividerY + 158

  return (
    <figure className="grace-gong-visual-card">
      <svg
        className="grace-gong-brand-board"
        viewBox={`0 0 520 ${isNarrow ? 515 : 430}`}
        role="img"
        aria-labelledby="brand-board-title brand-board-description"
      >
        <title id="brand-board-title">Grace Gong brand system</title>
        <desc id="brand-board-description">
          Seven brand colors and two type specimens for Cormorant Garamond and Inter.
        </desc>
        <style>
          {"@import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@400;500&display=swap');"}
        </style>

        <text className="brand-board-eyebrow" x="34" y="42">
          PALETTE
        </text>
        {COLOR_CHIPS.map((color, index) => {
          const secondRow = isNarrow && index >= 4
          const rowIndex = secondRow ? index - 4 : index
          const chipWidth = isNarrow ? 72 : 48
          const x = isNarrow ? (secondRow ? 92 : 35) + rowIndex * (secondRow ? 132 : 115) : 34 + index * 66
          const y = secondRow ? 150 : 62
          return (
            <g key={color.hex}>
              <rect
                className={color.bordered === true ? 'brand-board-chip brand-board-chip-light' : 'brand-board-chip'}
                x={x}
                y={y}
                width={chipWidth}
                height={chipWidth}
                rx="10"
                fill={color.hex}
              >
                <title>{color.name}</title>
              </rect>
              <text className="brand-board-hex" x={x + chipWidth / 2} y={y + chipWidth + 22} textAnchor="middle">
                {color.hex}
              </text>
            </g>
          )
        })}

        <line className="brand-board-divider" x1="34" y1={dividerY} x2="486" y2={dividerY} />
        <text className="brand-board-eyebrow" x="34" y={dividerY + 39}>
          TYPE
        </text>

        <g>
          <text className="brand-board-specimen brand-board-specimen-serif" x="34" y={specimenY}>
            Aa
          </text>
          <text className="brand-board-type-label" x="34" y={typeLabelY}>
            <tspan x="34">Cormorant Garamond</tspan>
            <tspan className="brand-board-type-detail" x="34" dy="20">
              headings + body
            </tspan>
          </text>
        </g>

        <line className="brand-board-type-divider" x1="260" y1={dividerY + 58} x2="260" y2={dividerY + 187} />

        <g>
          <text className="brand-board-specimen brand-board-specimen-sans" x="292" y={specimenY}>
            Aa
          </text>
          <text className="brand-board-type-label" x="292" y={typeLabelY}>
            <tspan x="292">Inter</tspan>
            <tspan className="brand-board-type-detail" x="292" dy="20">
              labels + metadata
            </tspan>
          </text>
        </g>
      </svg>
    </figure>
  )
}

export default BrandSystemBoard
