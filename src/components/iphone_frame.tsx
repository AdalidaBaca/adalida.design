import IphoneFrameImage from 'images/iphone17 frame.webp'
import IphoneMask from 'images/iphone17 mask.svg'

const FRAME_ASPECT_RATIO = '950 / 1971' // Width / Height
const SCREEN_ASPECT_RATIO = '201 / 437' // Simplified from 1206 x 2622 iPhone 1 Pro

const IphoneFrame = ({ videoURL }: { videoURL: string }): JSX.Element => (
  <div
    style={{
      position: 'relative',
      maxWidth: '100%',
      maxHeight: '100%',
      aspectRatio: FRAME_ASPECT_RATIO,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }}
  >
    <div
      style={{
        maxHeight: '100%',
        maxWidth: '100%',
        aspectRatio: SCREEN_ASPECT_RATIO,
        position: 'absolute',
        zIndex: -1
      }}
    >
      <video
        src={videoURL}
        autoPlay
        loop
        muted
        playsInline
        style={{
          width: '100%',
          height: '100%',
          objectFit: 'contain',
          maskImage: `url(${IphoneMask})`,
          WebkitMaskImage: `url(${IphoneMask})`,
          maskSize: '100% 100%',
          WebkitMaskSize: '100% 100%',
          maskRepeat: 'no-repeat',
          WebkitMaskRepeat: 'no-repeat'
        }}
      />
    </div>
    <img
      src={IphoneFrameImage}
      alt=""
      style={{
        width: '100%',
        height: '100%',
        objectFit: 'contain',
        userSelect: 'none',
        pointerEvents: 'none',
        zIndex: 2
      }}
    />
  </div>
)

export default IphoneFrame
