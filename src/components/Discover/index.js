import './index.css'

import Header from '../Header'

const discoverData = {
  name: 'Arjun Raghav',
  logoUrl:
    'https://media.istockphoto.com/id/991308350/vector/face-rapper-man-in-a-cap-hip-hop-icon.jpg?s=2048x2048&w=is&k=20&c=s3Rt7BcpGSEETm4-V7ci2_k644l3DzqA8I5NrOpVnQ0=',
  star:
    'https://static.vecteezy.com/system/resources/previews/011/732/718/non_2x/funny-cute-happy-4-star-characters-bundle-set-hand-drawn-doodle-style-cartoon-character-illustration-icon-design-isolated-on-white-background-cute-five-four-mascot-character-collection-vector.jpg',
  content:
    'I am writing this after reflecting on my one month stay with Bricabin in Ladakh. Right from picking us up at the airport to dropping us back there after a month, Urgan was very responsible and took good care of my friends and me.',
}

const Discover = () => (
  <>
    <Header />
    <h1 className="discover">Discover</h1>
    <div className="container">
      <div className="row">
        <div className="col-12 col-md-4 review-container">
          <div className="profile-container">
            <img
              src={discoverData.logoUrl}
              alt="profile"
              className="profile-image"
            />
            <div className="profile-details">
              <h1 className="profile-name">{discoverData.name}</h1>
              <img src={discoverData.star} alt="star rating" className="star" />
            </div>
          </div>
          <p className="content">
            {discoverData.content}
            <span className="read-more"> read more...</span>
          </p>
        </div>

        <div className="col-12 col-md-4 review-container">
          <div className="image-container">
            <img
              src="https://img.freepik.com/free-photo/aerial-shot-annapurna-conservation-area-chhusang-nepal_181624-47985.jpg?t=st=1731152906~exp=1731156506~hmac=617fdbd2a7ea737c23813b6200f8e1d815b5d3be29d83af1a9d008302055bbbb&w=900"
              alt="Ladakh"
              className="ladakh-mountain"
            />
          </div>
          <div className="profile-container">
            <img
              src={discoverData.logoUrl}
              alt="profile"
              className="profile-image"
            />
            <div className="profile-details">
              <h1 className="profile-name">{discoverData.name}</h1>
              <img src={discoverData.star} alt="star rating" className="star" />
            </div>
          </div>
          <p className="content">
            {discoverData.content}
            <span className="read-more"> read more...</span>
          </p>
        </div>
        <div className="col-12 col-md-4 review-container">
          <div className="profile-container">
            <img
              src={discoverData.logoUrl}
              alt="profile"
              className="profile-image"
            />
            <div className="profile-details">
              <h1 className="profile-name">{discoverData.name}</h1>
              <img src={discoverData.star} alt="star rating" className="star" />
            </div>
          </div>
          <p className="content">
            {discoverData.content}
            <span className="read-more"> read more...</span>
          </p>
        </div>
      </div>
    </div>
  </>
)

export default Discover
