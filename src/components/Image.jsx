const Image = ({ src, lazy }) => {
  return (
    <>
      {src != '' && lazy ?
        <img src={src} loading="lazy" alt=""  /> :
        src != '' && !lazy ?
        <img src={src} alt=""  /> :
        <div><span className="material-symbols-outlined notSupported">image_not_supported</span></div>
      }
    </>
  )
}

export default Image