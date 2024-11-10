import './index.css'

const ServiceItem = props => {
  const {serviceDetails} = props
  const {title, imageUrl, description} = serviceDetails

  return (
    <div className="service-container col-12 col-md-4">
      <img src={imageUrl} alt={title} className="service-image" />
      <h1 className="service-title">{title}</h1>
      <p className="service-description">{description}</p>
    </div>
  )
}
export default ServiceItem
