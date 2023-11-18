const Club = ({ clubs }) => {
  return (
    <section className="card-section">
      {clubs.map((club) => {
        const { id, title, address, img, url } = club
        const splitUrl = url.split('/')[2].split('.')
        const sanitizedURL = splitUrl.slice(1).join('.')

        return (
          <div className="card" key={id}>
            <img className="card-img" src={img} alt="essen" />
            <div className="card-text">
              <h2>{title}</h2>
              <p>{address}</p>
              <a
                className="card-link"
                href={url}
                target="_blank"
                rel="noreferrer"
              >
                {sanitizedURL}
              </a>
            </div>
          </div>
        )
      })}
    </section>
  )
}
export default Club
