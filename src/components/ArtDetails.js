import { useParams } from 'react-router-dom'
import images from './images.json'
import PageTitle from './PageTitle'

function ArtDetails() {
  let { id } = useParams()
  const image = images.find((image) => image.id === id)
  return (
    <>
      <PageTitle>{image.title}</PageTitle>
      <div className="row">
        <div className="col-sm-6">
          <img
            alt={image.title}
            title={image.title}
            src={image.image}
            className="w-100"
          />
        </div>
        <div className="col-sm-6">{image.description}</div>
      </div>
    </>
  )
}

export default ArtDetails
