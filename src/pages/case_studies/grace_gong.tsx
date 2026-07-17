import GraceGong from 'components/case_studies/grace_gong'

import Seo from 'components/seo'

const GraceGongPage = (): JSX.Element => <GraceGong />

export const Head = (): JSX.Element => (
  <Seo title="Grace Gong" description="A content architecture and data systems case study for gracegong.com." />
)

export default GraceGongPage
