import { Link } from 'react-router-dom'
import './Home.css'
import images from './images.json'
import PageTitle from './PageTitle'
import strings from './strings.json'

function Art({ type }) {
  return (
    <>
      <PageTitle>{strings.traditionalArt}</PageTitle>
      <div className="row">
        {images
          .filter((image) => image.type === type)
          .map((image) => (
            <div className="col-sm-4 mb-4 text-center" key={image.id}>
              <Link to={`/art-details/${image.id}`}>
                <img
                  alt={image.title}
                  title={image.title}
                  src={image.image}
                  className="w-100 rounded thumbnail"
                  style={{
                    objectFit: 'cover',
                    height: '200px',
                    '&:hover': {
                      filter: 'grayscale(100%)',
                    },
                  }}
                />
              </Link>
              {image.title}
            </div>
          ))}
      </div>
    </>
  )
}

export default Art
