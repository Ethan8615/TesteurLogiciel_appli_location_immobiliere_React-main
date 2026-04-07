const Banner = ({ title, subtitle }) => {
  return (
    <section className="banner" role="region" aria-label="Bannière">
      <div className="container">
        <h1>{title}</h1>
        {subtitle && <p className="muted">{subtitle}</p>}
      </div>
    </section>
  )
}

export default Banner
