import { Link } from 'react-router-dom';
import './Home.css';
import projects from '../config/projects';
import PageTitle from './PageTitle';
import strings from '../config/strings';

function Art({ type }) {
  return (
    <>
      <PageTitle>
        {projects.type === 'traditional'
          ? strings.traditionalArt
          : strings.digitalArt}
      </PageTitle>
      <div className="row">
        {projects
          .filter((projects) => projects.type === type)
          .map((project) => {
            return (
              <div className="col-sm-4 mb-4 text-center" key={project.slug}>
                <Link to={`/art-details/${project.slug}`}>
                  <img
                    alt={project.title}
                    title={project.title}
                    src={project.images[0].url}
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
                {`${project.title} (${project.images.length})`}
              </div>
            );
          })}
      </div>
    </>
  );
}

export default Art;
