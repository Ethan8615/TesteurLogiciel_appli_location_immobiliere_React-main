import React, { useEffect, useState } from 'react'
import './Carousel.css'

const Carousel = ({ images = [], alt = '' }) => {
  const [index, setIndex] = useState(0)
  const length = images.length

  useEffect(() => {
    setIndex(0)
  }, [images])

  useEffect(() => {
    const onKey = (e) => {
      if (length <= 1) return
      if (e.key === 'ArrowLeft') prev()
      if (e.key === 'ArrowRight') next()
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [index, images, length])

  const prev = () => setIndex((i) => (i - 1 + length) % length)
  const next = () => setIndex((i) => (i + 1) % length)

  if (length === 0) return null

  return (
    <div className="carousel">
      <img src={images[index]} alt={alt} className="carousel__img" />

      {length > 1 && (
        <>
          <button className="carousel__btn carousel__btn--left" onClick={prev} aria-label="Image précédente" />
          <button className="carousel__btn carousel__btn--right" onClick={next} aria-label="Image suivante" />
        </>
      )}

      <span className="carousel__count">{index + 1} / {length}</span>
    </div>
  )
}

export default Carousel
