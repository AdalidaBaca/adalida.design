const InsightFlowGraphic = (): JSX.Element => {
  return (
    <div className="insight-flow-graphic" role="img" aria-label="Solution flow: Wix booking to intake form to WIX CMS">
      <div className="insight-flow-main">
        <div className="insight-flow-node insight-flow-node-main">Booking - WIX</div>
        <div className="insight-flow-arrow insight-flow-arrow-main" aria-hidden="true">
          <svg
            width="24"
            height="28"
            viewBox="0 0 24 28"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
          >
            <title>Flow arrow</title>
            <path
              d="M12 0v24M12 24l-5-6M12 24l5-6"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
        <div className="insight-flow-node-wrap">
          <div className="insight-flow-node insight-flow-node-main insight-flow-node-intake"> Intake Form - Tally</div>
          <p className="insight-flow-annotation">
            <span className="insight-flow-annotation-line">
              ↳ <span className="insight-flow-strike">Zapier (rejected / paid gating)</span>
            </span>
            <span className="insight-flow-annotation-branch">↳ Tally webhook sends data</span>
          </p>
        </div>
        <div className="insight-flow-arrow insight-flow-arrow-main" aria-hidden="true">
          <svg
            width="24"
            height="28"
            viewBox="0 0 24 28"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
          >
            <title>Flow arrow</title>
            <path
              d="M12 0v24M12 24l-5-6M12 24l5-6"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
        <div className="insight-flow-node-wrap">
          <div className="insight-flow-node insight-flow-node-main">Data Updated - WIX CMS</div>
          <p className="insight-flow-annotation">↳ Custom endpoint in WIX listens for data</p>
        </div>
      </div>
    </div>
  )
}

InsightFlowGraphic.displayName = 'InsightFlowGraphic'

export default InsightFlowGraphic
