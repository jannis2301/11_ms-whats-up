import { Link } from 'react-router-dom'

const Activities = ({ activities }) => {
  return (
    <section className="activities-section">
      {activities.map((activity) => {
        const { id, title, link, image } = activity
        return (
          <div className="activity" key={id}>
            <Link className="activity-link" to={link}>
              <h2>{title}</h2>
            </Link>
            <img src={image} alt={title} />
          </div>
        )
      })}
    </section>
  )
}
export default Activities
