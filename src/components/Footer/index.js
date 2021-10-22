import {FiInstagram} from 'react-icons/fi'
import {FaTwitter} from 'react-icons/fa'
import {VscGithubAlt} from 'react-icons/vsc'

export default function Footer() {
  return (
    <div>
      <h1>COVID19INDIA</h1>
      <p>we stand with everyone fighting on the front lines</p>
      <p>
        <VscGithubAlt testid="githubIcon" />
        <FiInstagram testid="instagramIcon" />
        <FaTwitter testid="twitterIcon" />
      </p>
    </div>
  )
}
