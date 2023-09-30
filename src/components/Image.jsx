const Image = ({ src, idx }) => {
  const num = idx !== undefined ? idx : 0
  console.log(num)

  return (
    <>
      {src != '' && num >= 20 ?
        <img src={src} loading="lazy" alt=""  /> :
        src != '' && num < 20 ?
        <img src={src} alt=""  /> :
        <div><span className="material-symbols-outlined notSupported">image_not_supported</span></div>
      }
    </>
  )
}

export default Image