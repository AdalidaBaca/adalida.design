import IphoneFrameImage from 'images/iphone17 frame.webp'
import IphoneMask from 'images/iphone17 mask.svg'

// Derived from image analysis
// This locks the video exactly into the "hole" of the bezel
const SCREEN_GEOMETRY = {
  top: '1.24%',
  left: '3.32%',
  width: '93.37%',
  height: '97.51%'
}

const FRAME_ASPECT_RATIO = '950 / 1971'

const IphoneFrame = ({ videoURL }: { videoURL: string }): JSX.Element => (
  <div
    style={{
      position: 'relative',
      maxWidth: '100%',
      maxHeight: '100%',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      aspectRatio: FRAME_ASPECT_RATIO,
      marginLeft: 'auto',
      marginRight: 'auto',
      // Fixes Safari overflow/clipping bugs
      transform: 'translate3d(0, 0, 0)',
      isolation: 'isolate'
    }}
  >
    <div
      style={{
        top: SCREEN_GEOMETRY.top,
        left: SCREEN_GEOMETRY.left,
        width: SCREEN_GEOMETRY.width,
        height: SCREEN_GEOMETRY.height,
        zIndex: 1,
        overflow: 'hidden',
        // Safari Hardware Acceleration Fix
        transform: 'translateZ(0)'
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
          objectFit: 'cover',
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
      alt="iPhone Frame"
      style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        objectFit: 'contain',
        pointerEvents: 'none',
        zIndex: 2 // Must be higher than video
      }}
    />
  </div>
)

export default IphoneFrame
