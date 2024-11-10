import './index.css'

import ServiceItem from '../ServiceItem'

import Header from '../Header'

const servicesData = [
  {
    id: 1,
    imageUrl: '',
    title: 'High Speed Internet',
    description:
      'Optical fiber connections provided in not only in your cabins but rather to all of the BriSphere science working spaces and dinning areas.',
  },
  {
    id: 2,
    imageUrl: '',
    title: 'Healthy Meals',
    description:
      'A healthy breakfast and pleasant dinner will be serviced at your space every single day for your entire duration of stay with option of paid order with BriSphere',
  },
  {
    id: 3,
    imageUrl: '',
    title: 'Homely Stay',
    description:
      'Designed for working professionals with specious interiors, comfortable beds and sleekly attached kitchen are some of comforts providedin your space.',
  },
  {
    id: 4,
    imageUrl: '',
    title: 'Transportation',
    description:
      'Optical fiber connections provided in not only in your cabins but rather to all of the BriSphere science working spaces and dinning areas.',
  },
  {
    id: 5,
    imageUrl: '',
    title: 'Food Delivery',
    description:
      'Optical fiber connections provided in not only in your cabins but rather to all of the BriSphere science working spaces and dinning areas.',
  },
  {
    id: 6,
    imageUrl: '',
    title: 'Tourism',
    description:
      'Optical fiber connections provided in not only in your cabins but rather to all of the BriSphere science working spaces and dinning areas.',
  },
  {
    id: 7,
    imageUrl: '',
    title: 'Job',
    description:
      'Optical fiber connections provided in not only in your cabins but rather to all of the BriSphere science working spaces and dinning areas.',
  },
  {
    id: 8,
    imageUrl: '',
    title: 'Rental Service',
    description:
      'Optical fiber connections provided in not only in your cabins but rather to all of the BriSphere science working spaces and dinning areas.',
  },
  {
    id: 9,
    imageUrl: '',
    title: 'Online Shop',
    description:
      'Optical fiber connections provided in not only in your cabins but rather to all of the BriSphere science working spaces and dinning areas.',
  },
]

const Services = () => (
  <div id="Service">
    <Header />
    <h1 className="services">Services</h1>
    <div className="service-list-container container">
      <div className="row">
        {servicesData.map(eachData => (
          <ServiceItem serviceDetails={eachData} key={eachData.id} />
        ))}
      </div>
    </div>
  </div>
)

export default Services
