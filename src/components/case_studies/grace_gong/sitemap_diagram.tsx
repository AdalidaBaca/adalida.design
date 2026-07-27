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

const VIEW_W = 600
const VIEW_H = 600
const COL1_X = 16
const COL2_X = 196
const PARENT_W = 120
const PARENT_H = 42
const CHILD_H = 36
const CHIP_H = 28
const RADIUS = 10
const COL_GAP = 60
const STACK_GAP = 10

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

const CmsNote = ({ box }: { box: BoxSpec }): JSX.Element => (
  <text className="grace-gong-ia-note" x={box.x + box.w + 6} y={box.y + box.h / 2 + 1} dominantBaseline="middle">
    CMS
  </text>
)

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
  const top = 24
  const bottom = VIEW_H - PARENT_H - 24
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

  // Home has three separate CMS modules — never "Podcast Voices + Events" as one node.
  const homeGap = 12
  const homeEpisodes: BoxSpec = {
    x: COL2_X,
    y: 14,
    w: labelWidth('Latest episodes', false),
    h: CHILD_H,
    label: 'Latest episodes'
  }
  const homeVoices: BoxSpec = {
    x: COL2_X,
    y: homeEpisodes.y + CHILD_H + homeGap,
    w: labelWidth('Podcast Voices', false),
    h: CHILD_H,
    label: 'Podcast Voices'
  }
  const homeEvents: BoxSpec = {
    x: COL2_X,
    y: homeVoices.y + CHILD_H + homeGap,
    w: labelWidth('Events', false),
    h: CHILD_H,
    label: 'Events'
  }
  const homeChildren = [homeEpisodes, homeVoices, homeEvents]
  const homeStackBottom = homeEvents.y + homeEvents.h

  const podcastChild: BoxSpec = {
    x: COL2_X,
    y: Math.max(alignChildY(podcastsParentY, CHILD_H), homeStackBottom + 20),
    w: labelWidth('Episode pages', true),
    h: CHILD_H,
    label: 'Episode pages',
    auto: true,
    note: 'dynamic pages, 300+'
  }

  // Events section fans to Dinner (above) and Summit (below) — separate from Home → Events.
  const dinnerChild: BoxSpec = {
    x: COL2_X,
    y: Math.max(eventsParentY - 34, podcastChild.y + podcastChild.h + 36),
    w: labelWidth('Dinner pages', true),
    h: CHILD_H,
    label: 'Dinner pages',
    auto: true,
    note: 'dynamic pages'
  }
  const summitChild: BoxSpec = {
    x: COL2_X,
    y: dinnerChild.y + CHILD_H + 48,
    w: labelWidth('Summit pages', false),
    h: CHILD_H,
    label: 'Summit pages'
  }

  const col2Right = Math.max(
    homeEpisodes.w,
    homeVoices.w,
    homeEvents.w,
    podcastChild.w,
    dinnerChild.w,
    summitChild.w,
    labelWidth('Fellows', true),
    labelWidth('Advisors', true),
    labelWidth('Sponsor application', false, true)
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

  // Stack Fellows above Advisors with a real gap; push below the summit note when needed.
  const fellowsStackTop = Math.max(fellowsParentY - 22, summitNoteY + 14)
  const fellowsChild: BoxSpec = {
    x: COL2_X,
    y: fellowsStackTop,
    w: labelWidth('Fellows', true),
    h: CHILD_H,
    label: 'Fellows',
    auto: true
  }
  const advisorsChild: BoxSpec = {
    x: COL2_X,
    y: fellowsStackTop + CHILD_H + STACK_GAP,
    w: labelWidth('Advisors', true),
    h: CHILD_H,
    label: 'Advisors',
    auto: true
  }

  // About fans to linked pages/sections.
  const aboutLabels = ['Books', 'Sponsor application', 'Intro link'] as const
  const aboutStackH = aboutLabels.length * CHIP_H + (aboutLabels.length - 1) * STACK_GAP
  const aboutStackTop = Math.max(
    advisorsChild.y + advisorsChild.h + 16,
    Math.min(aboutParentY + (PARENT_H - aboutStackH) / 2, VIEW_H - aboutStackH - 16)
  )
  const aboutChildren: BoxSpec[] = aboutLabels.map((label, index) => ({
    x: COL2_X,
    y: aboutStackTop + index * (CHIP_H + STACK_GAP),
    w: labelWidth(label, false, true),
    h: CHIP_H,
    label,
    compact: true
  }))

  const parentExit = (parentY: number): Point => ({
    x: COL1_X + PARENT_W,
    y: parentY + PARENT_H / 2
  })

  return (
    <figure className="grace-gong-visual-card grace-gong-sitemap-diagram" aria-label="Site information architecture">
      <svg
        className="grace-gong-ia-svg"
        viewBox={`0 0 ${VIEW_W} ${VIEW_H}`}
        preserveAspectRatio="xMidYMid meet"
        role="img"
        aria-labelledby="grace-gong-ia-title grace-gong-ia-desc"
      >
        <title id="grace-gong-ia-title">Site information architecture</title>
        <desc id="grace-gong-ia-desc">
          Home surfaces latest episodes, podcast voices, and events as separate CMS-fed modules. Podcasts generate
          dynamic episode pages. Events generate dynamic dinner pages and summit pages, with agenda and speakers managed
          in the CMS. G-Fellows generate fellows and advisors from the CMS. About links to books, sponsor application,
          and intro.
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
            <path d="M 0 1.5 L 9 5 L 0 8.5 Z" className="grace-gong-ia-arrowhead" fill="context-stroke" />
          </marker>
        </defs>

        {parents.map(parent => (
          <ParentBox key={parent.label} label={parent.label} y={parent.y} />
        ))}

        {homeChildren.map((child, index) => (
          <path
            key={`link-home-${index}-${child.label}`}
            className="grace-gong-ia-link"
            d={cubicLink(parentExit(homeParentY), boxCenterLeft(child))}
            markerEnd="url(#grace-gong-ia-arrow)"
          />
        ))}
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
        {aboutChildren.map(child => (
          <path
            key={`link-${child.label}`}
            className="grace-gong-ia-link"
            d={cubicLink(parentExit(aboutParentY), boxCenterLeft(child))}
            markerEnd="url(#grace-gong-ia-arrow)"
          />
        ))}

        {homeChildren.map((child, index) => (
          <g key={`home-${index}-${child.label}`}>
            <ChildBox {...child} />
            <CmsNote box={child} />
          </g>
        ))}
        <ChildBox {...podcastChild} />
        <ChildBox {...dinnerChild} />
        <ChildBox {...summitChild} />
        <text className="grace-gong-ia-note" x={summitNoteX} y={summitNoteY}>
          custom per event
        </text>
        <ChildBox {...agendaChip} />
        <ChildBox {...speakersChip} />
        <CmsNote box={agendaChip} />
        <CmsNote box={speakersChip} />
        <ChildBox {...fellowsChild} />
        <ChildBox {...advisorsChild} />
        <CmsNote box={fellowsChild} />
        <CmsNote box={advisorsChild} />
        {aboutChildren.map(child => (
          <ChildBox key={child.label} {...child} />
        ))}
      </svg>
    </figure>
  )
}

export default SitemapDiagram
