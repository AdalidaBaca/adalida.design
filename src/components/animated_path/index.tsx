import React, { forwardRef, type SVGAttributes, useImperativeHandle, useRef } from 'react'

type Path = SVGAttributes<SVGPathElement>['d']

interface Props {
  startPath: Path
  endPath: Path
  dur: SVGAttributes<SVGPathElement>['dur']
  opacity: SVGAttributes<SVGPathElement>['opacity']
}

const animateProps = {
  begin: 'indefinite',
  attributeName: 'd',
  attributeType: 'XML',
  fill: 'freeze'
}

export interface Animate {
  animateForward: () => void
  animateReverse: () => void
}

const AnimatedPath = forwardRef((props: Props, ref: React.Ref<Animate>): JSX.Element => {
  const { startPath, endPath, dur, opacity } = props
  const animateRef = useRef<SVGAnimateElement>(null)
  const animateReverseRef = useRef<SVGAnimateElement>(null)

  useImperativeHandle(ref, () => ({
    animateForward: () => {
      animateRef.current?.beginElement?.()
    },
    animateReverse: () => {
      animateReverseRef.current?.beginElement?.()
    }
  }))

  return (
    <path d={startPath} opacity={opacity}>
      <animate ref={animateRef} from={startPath} to={endPath} dur={dur} {...animateProps} />
      <animate ref={animateReverseRef} from={endPath} to={startPath} dur={dur} {...animateProps} />
    </path>
  )
})

AnimatedPath.displayName = 'AnimatedPath'

export default AnimatedPath
