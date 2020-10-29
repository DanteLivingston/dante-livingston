import { useState } from 'react'
import { Link } from 'react-router-dom'
import {
  Carousel,
  CarouselCaption,
  CarouselControl,
  CarouselIndicators,
  CarouselItem,
} from 'reactstrap'
import './Home.css'
import images from './images.json'
import PageTitle from './PageTitle'
import strings from './strings.json'

function Home() {
  const [activeIndex, setActiveIndex] = useState(0)
  const [animating, setAnimating] = useState(false)

  const next = () => {
    if (animating) return
    const nextIndex = activeIndex === images.length - 1 ? 0 : activeIndex + 1
    setActiveIndex(nextIndex)
  }

  const previous = () => {
    if (animating) return
    const nextIndex = activeIndex === 0 ? images.length - 1 : activeIndex - 1
    setActiveIndex(nextIndex)
  }

  const goToIndex = (newIndex) => {
    if (animating) return
    setActiveIndex(newIndex)
  }

  return (
    <>
      <PageTitle>{strings.home}</PageTitle>
      <Carousel activeIndex={activeIndex} next={next} previous={previous}>
        <CarouselIndicators
          items={images}
          activeIndex={activeIndex}
          onClickHandler={goToIndex}
        />
        {images.map((image) => {
          return (
            <CarouselItem
              onExiting={() => setAnimating(true)}
              onExited={() => setAnimating(false)}
              key={image.id}>
              <Link to={`/art-details/${image.id}`}>
                <img
                  src={image.image}
                  alt={image.title}
                  className="w-100"
                  height="300"
                />
              </Link>

              <CarouselCaption
                captionText={image.description}
                captionHeader={image.title}
              />
            </CarouselItem>
          )
        })}
        <CarouselControl
          direction="prev"
          directionText="Previous"
          onClickHandler={previous}
        />
        <CarouselControl
          direction="next"
          directionText="Next"
          onClickHandler={next}
        />
      </Carousel>
      <hr className="border-secondary my-4" />
      <div className="row">
        <div className="col-sm-6">
          <div class="card">
            {/* <img src="..." class="card-img-top" alt="..." /> */}
            <div class="card-body">
              <h5 class="card-title">Digital Art</h5>
              <p class="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
              <Link to="/digital-art">Digital Art</Link>
            </div>
          </div>
        </div>
        <div className="col-sm-6">
          <div class="card">
            {/* <img src="..." class="card-img-top" alt="..." /> */}
            <div class="card-body">
              <h5 class="card-title">Traditional Art</h5>
              <p class="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
              <Link to="/digital-art">Traditional Art</Link>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Home
