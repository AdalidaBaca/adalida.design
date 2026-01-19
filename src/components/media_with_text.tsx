import Image from 'components/image'
import type { CSSProperties } from 'react'

export const makeMediaTag = ({
  media,
  style = {},
  imgObjectFit,
  imgObjectPosition
}: {
  media: string
  style?: CSSProperties
  imgObjectFit?: CSSProperties['objectFit']
  imgObjectPosition?: CSSProperties['objectPosition']
}): JSX.Element => {
  if (media.endsWith('.png') || media.endsWith('.jpg') || media.endsWith('.webp')) {
    return (
      <Image
        path={media}
        style={{ width: '100%', height: 'auto', ...style }}
        imgStyle={{ objectFit: imgObjectFit ?? 'contain', objectPosition: imgObjectPosition }}
        alt={media}
        objectFit={imgObjectFit ?? 'contain'}
        objectPosition={imgObjectPosition}
      />
    )
  }
  if (media.endsWith('.mp4')) {
    return <video src={media} autoPlay loop muted playsInline width="100%" style={style} />
  }
  if (media.endsWith('.gif')) {
    // @ts-expect-error We're using type to hack the behavior - double check if this is needed
    return <img alt="" src={media} type="video/mp4" autoPlay style={style} />
  }
  if (media.endsWith('.svg')) {
    return <img alt="" src={media} style={style} />
  }
  throw new Error(`Could not identify type of media ${media}`)
}
