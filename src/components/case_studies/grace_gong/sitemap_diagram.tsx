interface Point {
  x: number
  y: number
}

interface BoxSpec {
  x: number
  y: number
  w: number
  h: number
  label: string
  auto?: boolean
  note?: string
  compact?: boolean
}

const VIEW_W = 580
const VIEW_H = 520
const COL1_X = 16
const COL2_X = 196
const PARENT_W = 120
const PARENT_H = 42
const CHILD_H = 36
const CHIP_H = 28
const RADIUS = 10
const COL_GAP = 60

const cubicLink = (from: Point, to: Point): string => {
  const dx = Math.max(to.x - from.x, COL_GAP)
  const c1x = from.x + dx * 0.45
  const c2x = to.x - dx * 0.45
  return `M ${from.x} ${from.y} C ${c1x} ${from.y}, ${c2x} ${to.y}, ${to.x} ${to.y}`
}

const labelWidth = (label: string, hasAuto: boolean, compact = false): number => {
  const char = compact ? 6.6 : 7.1
  const pad = compact ? 22 : 26
  const autoPad = hasAuto ? (compact ? 36 : 40) : 0
  return Math.max(compact ? 88 : 128, Math.round(label.length * char + pad + autoPad))
}

const boxCenterRight = (box: BoxSpec): Point => ({ x: box.x + box.w, y: box.y + box.h / 2 })
const boxCenterLeft = (box: BoxSpec): Point => ({ x: box.x, y: box.y + box.h / 2 })

const ChildBox = ({ x, y, w, h, label, auto = false, note, compact = false }: BoxSpec): JSX.Element => {
  const badgeW = compact === true ? 28 : 30
  const badgeX = x + w - badgeW - 9
  return (
    <g>
      <rect
        className="grace-gong-ia-child"
        x={x}
        y={y}
        width={w}
        height={h}
        rx={compact === true ? 8 : RADIUS}
        ry={compact === true ? 8 : RADIUS}
      />
      <text className="grace-gong-ia-child-label" x={x + 12} y={y + h / 2 + 1} dominantBaseline="middle">
        {label}
      </text>
      {auto === true && (
        <g>
          <rect className="grace-gong-ia-auto" x={badgeX} y={y + h / 2 - 9} width={badgeW} height={18} rx={9} ry={9} />
          <text
            className="grace-gong-ia-auto-text"
            x={badgeX + badgeW / 2}
            y={y + h / 2 + 1}
            textAnchor="middle"
            dominantBaseline="middle"
          >
            auto
          </text>
        </g>
      )}
      {note !== undefined && (
        <text className="grace-gong-ia-note" x={x + 2} y={y + h + 15}>
          {note}
        </text>
      )}
    </g>
  )
}

const ParentBox = ({ label, y }: { label: string; y: number }): JSX.Element => (
  <g>
    <rect
      className="grace-gong-ia-parent"
      x={COL1_X}
      y={y}
      width={PARENT_W}
      height={PARENT_H}
      rx={RADIUS}
      ry={RADIUS}
    />
    <text
      className="grace-gong-ia-parent-label"
      x={COL1_X + PARENT_W / 2}
      y={y + PARENT_H / 2 + 1}
      textAnchor="middle"
      dominantBaseline="middle"
    >
      {label}
    </text>
  </g>
)

const SitemapDiagram = (): JSX.Element => {
  // Five parents evenly spaced across the card height.
  const top = 28
  const bottom = VIEW_H - PARENT_H - 28
  const parentStep = (bottom - top) / 4
  const homeParentY = top
  const podcastsParentY = top + parentStep
  const eventsParentY = top + parentStep * 2
  const fellowsParentY = top + parentStep * 3
  const aboutParentY = bottom

  const parents = [
    { label: 'Home', y: homeParentY },
    { label: 'Podcasts', y: podcastsParentY },
    { label: 'Events', y: eventsParentY },
    { label: 'G-Fellows', y: fellowsParentY },
    { label: 'About', y: aboutParentY }
  ]

  const alignChildY = (parentY: number, childH: number): number => parentY + (PARENT_H - childH) / 2

  const homeChild: BoxSpec = {
    x: COL2_X,
    y: alignChildY(homeParentY, CHILD_H),
    w: labelWidth('Podcast Voices + Events', false),
    h: CHILD_H,
    label: 'Podcast Voices + Events',
    note: 'fed by CMS'
  }
  const podcastChild: BoxSpec = {
    x: COL2_X,
    y: alignChildY(podcastsParentY, CHILD_H),
    w: labelWidth('Episode pages', true),
    h: CHILD_H,
    label: 'Episode pages',
    auto: true,
    note: '1 row = 1 page, 300+'
  }

  // Events fans to Dinner (above parent center) and Summit (below parent center).
  const dinnerChild: BoxSpec = {
    x: COL2_X,
    y: eventsParentY - 34,
    w: labelWidth('Dinner pages', true),
    h: CHILD_H,
    label: 'Dinner pages',
    auto: true,
    note: '1 row = 1 page'
  }
  const summitChild: BoxSpec = {
    x: COL2_X,
    y: eventsParentY + PARENT_H + 2,
    w: labelWidth('Summit pages', false),
    h: CHILD_H,
    label: 'Summit pages'
  }

  const col2Right = Math.max(
    homeChild.w,
    podcastChild.w,
    dinnerChild.w,
    summitChild.w,
    labelWidth('Fellows', true),
    labelWidth('Advisors', true)
  )
  const COL3_X = COL2_X + col2Right + COL_GAP

  // Grandchildren sit in column 3, stacked beside Summit (never below it).
  const agendaChip: BoxSpec = {
    x: COL3_X,
    y: summitChild.y - 16,
    w: labelWidth('Agenda', true, true),
    h: CHIP_H,
    label: 'Agenda',
    auto: true,
    compact: true
  }
  const speakersChip: BoxSpec = {
    x: COL3_X,
    y: summitChild.y + summitChild.h - CHIP_H + 16,
    w: labelWidth('Speakers', true, true),
    h: CHIP_H,
    label: 'Speakers',
    auto: true,
    compact: true
  }

  // Under the summit box only, left-aligned so rightward curves stay clear.
  const summitNoteX = summitChild.x + 2
  const summitNoteY = summitChild.y + summitChild.h + 13

  const fellowsChild: BoxSpec = {
    x: COL2_X,
    y: fellowsParentY - 10,
    w: labelWidth('Fellows', true),
    h: CHILD_H,
    label: 'Fellows',
    auto: true
  }
  const advisorsChild: BoxSpec = {
    x: COL2_X,
    y: fellowsParentY + PARENT_H - CHILD_H + 10,
    w: labelWidth('Advisors', true),
    h: CHILD_H,
    label: 'Advisors',
    auto: true
  }

  const parentExit = (parentY: number): Point => ({
    x: COL1_X + PARENT_W,
    y: parentY + PARENT_H / 2
  })

  return (
    <figure className="grace-gong-visual-card grace-gong-sitemap-diagram" aria-label="Site information architecture">
      <svg
        className="grace-gong-ia-svg"
        viewBox={`0 0 ${VIEW_W} ${VIEW_H}`}
        role="img"
        aria-labelledby="grace-gong-ia-title grace-gong-ia-desc"
      >
        <title id="grace-gong-ia-title">Site information architecture</title>
        <desc id="grace-gong-ia-desc">
          Home feeds Podcast Voices and Events from the CMS. Podcasts generate episode pages. Events generate dinner and
          summit pages, with agenda and speakers to the right of summit pages. G-Fellows generate fellows and advisors.
          About remains a static page.
        </desc>
        <defs>
          <marker
            id="grace-gong-ia-arrow"
            viewBox="0 0 10 10"
            refX="9"
            refY="5"
            markerWidth="5.5"
            markerHeight="5.5"
            orient="auto"
            markerUnits="strokeWidth"
          >
            <path d="M 0 1.5 L 9 5 L 0 8.5 Z" className="grace-gong-ia-arrowhead" />
          </marker>
        </defs>

        {parents.map(parent => (
          <ParentBox key={parent.label} label={parent.label} y={parent.y} />
        ))}

        <path
          className="grace-gong-ia-link"
          d={cubicLink(parentExit(homeParentY), boxCenterLeft(homeChild))}
          markerEnd="url(#grace-gong-ia-arrow)"
        />
        <path
          className="grace-gong-ia-link"
          d={cubicLink(parentExit(podcastsParentY), boxCenterLeft(podcastChild))}
          markerEnd="url(#grace-gong-ia-arrow)"
        />
        <path
          className="grace-gong-ia-link"
          d={cubicLink(parentExit(eventsParentY), boxCenterLeft(dinnerChild))}
          markerEnd="url(#grace-gong-ia-arrow)"
        />
        <path
          className="grace-gong-ia-link"
          d={cubicLink(parentExit(eventsParentY), boxCenterLeft(summitChild))}
          markerEnd="url(#grace-gong-ia-arrow)"
        />
        <path
          className="grace-gong-ia-link"
          d={cubicLink(boxCenterRight(summitChild), boxCenterLeft(agendaChip))}
          markerEnd="url(#grace-gong-ia-arrow)"
        />
        <path
          className="grace-gong-ia-link"
          d={cubicLink(boxCenterRight(summitChild), boxCenterLeft(speakersChip))}
          markerEnd="url(#grace-gong-ia-arrow)"
        />
        <path
          className="grace-gong-ia-link"
          d={cubicLink(parentExit(fellowsParentY), boxCenterLeft(fellowsChild))}
          markerEnd="url(#grace-gong-ia-arrow)"
        />
        <path
          className="grace-gong-ia-link"
          d={cubicLink(parentExit(fellowsParentY), boxCenterLeft(advisorsChild))}
          markerEnd="url(#grace-gong-ia-arrow)"
        />

        <ChildBox {...homeChild} />
        <ChildBox {...podcastChild} />
        <ChildBox {...dinnerChild} />
        <ChildBox {...summitChild} />
        <text className="grace-gong-ia-note" x={summitNoteX} y={summitNoteY}>
          custom per event
        </text>
        <ChildBox {...agendaChip} />
        <ChildBox {...speakersChip} />
        <ChildBox {...fellowsChild} />
        <ChildBox {...advisorsChild} />

        <text
          className="grace-gong-ia-note"
          x={COL2_X + 2}
          y={aboutParentY + PARENT_H / 2 + 1}
          dominantBaseline="middle"
        >
          static page
        </text>
      </svg>
    </figure>
  )
}

export default SitemapDiagram
