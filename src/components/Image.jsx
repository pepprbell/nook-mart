import { Suspense } from "react"

const Image = ({ src, lazy }) => {
  const notSupported = () => {
    return (
      <span className="material-symbols-outlined notSupported">image_not_supported</span>
    )
  }

  return (
    <>
      {src != '' && lazy ?
        <Suspense fallback={<notSupported/>}>
          <img src={src} loading="lazy" alt=""  />
        </Suspense> :
        src != '' && !lazy ?
        <img src={src} alt=""  /> :
        <div><notSupported/></div>
      }
    </>
  )
}

export default Image