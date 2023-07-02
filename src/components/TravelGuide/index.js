import './index.css'

const TravelGuide = props => {
  const {eachData} = props
  const {name, imageUrl, description} = eachData
  return (
    <li className="list-item">
      <img src={imageUrl} alt={name} className="image" />
      <h1 className="name">{name}</h1>
      <p className="description">{description}</p>
    </li>
  )
}

export default TravelGuide
