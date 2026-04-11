const VettingFunnel = (): JSX.Element => {
  return (
    <div className="smart-vetting-funnel" role="img" aria-label="Volunteer vetting funnel with four stages">
      <svg width="100%" viewBox="0 0 680 596" preserveAspectRatio="xMidYMid meet" aria-hidden="true">
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
          <polygon points="2,8 678,8 630,110 50,110" strokeWidth="0.7" />
          <text className="smart-vetting-th" x="340" y="52" textAnchor="middle" dominantBaseline="central">
            Group chat
          </text>
          <text className="smart-vetting-ts" x="340" y="78" textAnchor="middle" dominantBaseline="central">
            All volunteers added by Grace
          </text>
        </g>

        <g className="smart-vetting-stage-shape">
          <polygon points="22,138 658,138 608,248 72,248" strokeWidth="0.7" />
          <text className="smart-vetting-th" x="340" y="182" textAnchor="middle" dominantBaseline="central">
            Directory
          </text>
          <text className="smart-vetting-ts" x="340" y="212" textAnchor="middle" dominantBaseline="central">
            Fill it out: dependable. Skip it: flagged.
          </text>
        </g>

        <g className="smart-vetting-stage-shape">
          <polygon points="52,274 628,274 576,396 104,396" strokeWidth="0.7" />
          <text className="smart-vetting-th" x="340" y="314" textAnchor="middle" dominantBaseline="central">
            Group call + day before setup
          </text>
          <text className="smart-vetting-ts" x="340" y="354" textAnchor="middle" dominantBaseline="central">
            Personalities assessed. Follow-through confirmed.
          </text>
        </g>

        <g className="smart-vetting-stage-shape">
          <polygon points="88,432 592,432 534,530 146,530" strokeWidth="0.7" />
          <text className="smart-vetting-th" x="340" y="468" textAnchor="middle" dominantBaseline="central">
            Role sign-up
          </text>
          <text className="smart-vetting-ts" x="340" y="498" textAnchor="middle" dominantBaseline="central">
            Earned based on reliability
          </text>
        </g>

        <line
          x1="340"
          y1="530"
          x2="340"
          y2="556"
          className="smart-vetting-arrow-line"
          strokeWidth="1.5"
          fill="none"
          markerEnd="url(#smart-vetting-arrow)"
        />
        <text className="smart-vetting-tail-label" x="340" y="588" textAnchor="middle">
          Day-of team confirmed
        </text>
      </svg>
    </div>
  )
}

export default VettingFunnel
