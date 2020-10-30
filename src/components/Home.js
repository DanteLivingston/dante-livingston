import { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Carousel,
  CarouselCaption,
  CarouselControl,
  CarouselIndicators,
  CarouselItem,
} from 'reactstrap';
import './Home.css';
import projects from '../config/projects';
import PageTitle from './PageTitle';
import strings from '../config/strings';
import { useHistory } from 'react-router-dom';

function Home() {
  let history = useHistory();
  const [activeIndex, setActiveIndex] = useState(0);
  const [animating, setAnimating] = useState(false);

  const firstDigitalImage = projects.find(({ type }) => type === 'digital')
    .images[0];
  const firstTraditionalImage = projects.find(
    ({ type }) => type === 'traditional'
  ).images[0];

  const next = () => {
    if (animating) return;
    const nextIndex = activeIndex === projects.length - 1 ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
  };

  const previous = () => {
    if (animating) return;
    const nextIndex = activeIndex === 0 ? projects.length - 1 : activeIndex - 1;
    setActiveIndex(nextIndex);
  };

  const goToIndex = (newIndex) => {
    if (animating) return;
    setActiveIndex(newIndex);
  };
  // TODO- carousel shows first image
  return (
    <>
      <PageTitle>{strings.home}</PageTitle>
      <Carousel activeIndex={activeIndex} next={next} previous={previous}>
        <CarouselIndicators
          items={projects}
          activeIndex={activeIndex}
          onClickHandler={goToIndex}
        />
        {projects.map((image) => {
          const firstImage = projects[0].images[0];
          return (
            <CarouselItem
              onExiting={() => setAnimating(true)}
              onExited={() => setAnimating(false)}
              key={image.slug}
            >
              <Link to={`/art-details/${image.slug}`}>
                <img
                  src={firstImage.url}
                  alt={firstImage.title}
                  className="w-100"
                  height="500"
                />
              </Link>

              <CarouselCaption
                captionText={image.description}
                captionHeader={image.title}
              />
            </CarouselItem>
          );
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
          <div className="card">
            <img
              src={firstDigitalImage.url}
              className="card-img-top cursor-pointer"
              alt={firstDigitalImage.title}
              onClick={() => history.push('digital-art')}
              height="300"
            />
            <div className="card-body">
              <h5 className="card-title">Digital Art</h5>
              <p className="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
              <Link to="/digital-art">Digital Art</Link>
            </div>
          </div>
        </div>
        <div className="col-sm-6">
          <div className="card">
            <img
              src={firstTraditionalImage.url}
              className="card-img-top cursor-pointer"
              alt={firstTraditionalImage.title}
              onClick={() => history.push('traditional-art')}
              height="300"
            />
            <div className="card-body">
              <h5 className="card-title">Traditional Art</h5>
              <p className="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
              <Link to="/digital-art">Traditional Art</Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
