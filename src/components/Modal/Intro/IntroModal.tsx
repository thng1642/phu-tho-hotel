import { createPortal } from "react-dom"
import './index.scss'
import { useEffect, useRef } from "react"
type Props = {
  children: JSX.Element
}

function WrapperIntro({ children }: Props) {
  const wrapperEle = document.getElementById('portal-video')
  if (wrapperEle === null) return null
  return createPortal(children, wrapperEle)
}
type Props1 = {
  isOpen: boolean,
  handleClose: () => void
}
function IntroModal({ isOpen, handleClose }: Props1) {
  const videoRef = useRef<HTMLVideoElement | null>(null)

  useEffect(() => {
    const closeOnEscapeKey = (e: KeyboardEvent) => e.key === "Escape" ? handleClose() : null;
    document.body.addEventListener("keydown", closeOnEscapeKey);
    return () => {
      document.body.removeEventListener("keydown", closeOnEscapeKey);
    };
  }, [handleClose])
  useEffect(() => {
    const closeOnClick = (e: MouseEvent) => {
      if (e.target !== videoRef.current && isOpen) {
        handleClose()
      }
    }
    document.body.addEventListener("click", closeOnClick, true)
    return () => {
      document.body.removeEventListener('click', closeOnClick)
    }
  }, [handleClose])
  if (!isOpen) return null
  return (
    <WrapperIntro>
      <div className="modal-intro">
        <video width={'1520px'} height={'887px'} controls ref={videoRef}>
          <source src="https://firebasestorage.googleapis.com/v0/b/alta-875f0.appspot.com/o/intro-video.mp4?alt=media&token=39430df0-418f-47e2-bcaa-f8b8b3fbd453" type="video/mp4" />
        </video>
      </div>
    </WrapperIntro>
  )
}
export default IntroModal