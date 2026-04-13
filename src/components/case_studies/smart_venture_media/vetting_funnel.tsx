const VettingFunnel = (): JSX.Element => {
  return (
    <div
      className="smart-vetting-funnel"
      role="img"
      aria-label="Volunteer vetting funnel: group chat, contact directory, group call and early setup, role sign-up, day-of team confirmed"
    >
      <svg width="100%" viewBox="0 0 680 640" preserveAspectRatio="xMidYMid meet" aria-hidden="true">
        <defs>
          <marker
            id="smart-vetting-arrow"
            viewBox="0 0 10 10"
            refX="5"
            refY="5"
            markerWidth="8"
            markerHeight="8"
            orient="auto"
          >
            <path d="M1 2L9 5L1 8z" className="smart-vetting-arrow-head" strokeLinejoin="round" />
          </marker>
        </defs>

        <g className="smart-vetting-stage-shape">
          <polygon points="2,8 678,8 630,138 50,138" strokeWidth="0.7" />
          <text x="340" textAnchor="middle" className="smart-vetting-stage-line">
            <tspan x="340" y="74" className="smart-vetting-th">
              Group chat
            </tspan>
            <tspan x="340" dy="1.3em" className="smart-vetting-ts">
              Volunteers added by the founder
            </tspan>
          </text>
        </g>

        <g className="smart-vetting-stage-shape">
          <polygon points="22,154 658,154 608,290 72,290" strokeWidth="0.7" />
          <text x="340" textAnchor="middle" className="smart-vetting-stage-line">
            <tspan x="340" y="216" className="smart-vetting-th">
              Contact directory
            </tspan>
            <tspan x="340" dy="1.3em" className="smart-vetting-ts">
              Fill it out: committed. Skip: not committed.
            </tspan>
          </text>
        </g>

        <g className="smart-vetting-stage-shape">
          <polygon points="52,306 628,306 576,458 104,458" strokeWidth="0.7" />
          <text x="340" textAnchor="middle" className="smart-vetting-stage-line">
            <tspan x="340" y="378" className="smart-vetting-th">
              Group call + early setup
            </tspan>
            <tspan x="340" dy="1.3em" className="smart-vetting-ts">
              Personalities and follow-through assessed
            </tspan>
          </text>
        </g>

        <g className="smart-vetting-stage-shape">
          <polygon points="88,476 592,476 534,578 146,578" strokeWidth="0.7" />
          <text x="340" textAnchor="middle" className="smart-vetting-stage-line">
            <tspan x="340" y="526" className="smart-vetting-th">
              Role sign-up
            </tspan>
            <tspan x="340" dy="1.3em" className="smart-vetting-ts">
              Assigned based on reliability
            </tspan>
          </text>
        </g>

        <line
          x1="340"
          y1="578"
          x2="340"
          y2="606"
          className="smart-vetting-arrow-line"
          strokeWidth="1.5"
          fill="none"
          markerEnd="url(#smart-vetting-arrow)"
        />
        <text className="smart-vetting-tail-label" x="340" y="632" textAnchor="middle">
          Day-of team confirmed
        </text>
      </svg>
    </div>
  )
}

export default VettingFunnel
