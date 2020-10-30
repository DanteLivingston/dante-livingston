import { SocialIcon } from 'react-social-icons';
import PageTitle from './PageTitle';
import strings from '../config/strings';

function About() {
  return (
    <>
      <PageTitle>{strings.about}</PageTitle>
      <div className="row">
        <div className="col-4">
          <img
            alt="Dante Livingston"
            className="w-100"
            src="http://dummyimage.com/400x400.jpg/cc00dd/ffffff"
            height="300"
          />
        </div>
        <div className="col-8">{strings.aboutStatement}</div>
      </div>
      <hr className="border-secondary my-4" />
      <div className="row">
        <div className="col-sm-2"></div>
        <div className="col-sm-2 text-center">
          <SocialIcon
            network="github"
            rel="noopener noreferrer"
            target="_blank"
            url={strings.socialGitHubUrl}
          />
        </div>
        <div className="col-sm-2 text-center">
          <SocialIcon
            network="reddit"
            rel="noopener noreferrer"
            target="_blank"
            url={strings.socialRedditUrl}
          />
        </div>
        <div className="col-sm-2 text-center">
          <SocialIcon
            network="youtube"
            rel="noopener noreferrer"
            target="_blank"
            url={strings.socialYouTubeUrl}
          />
        </div>
        <div className="col-sm-2 text-center">
          <SocialIcon
            network="linkedin"
            rel="noopener noreferrer"
            target="_blank"
            url={strings.socialLinkedInUrl}
          />
        </div>
        <div className="col-sm-2"></div>
      </div>
    </>
  );
}

export default About;
