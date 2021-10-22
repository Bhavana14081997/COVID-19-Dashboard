import './index.css'
import {Link} from 'react-router-dom'

const NotFound = () => (
  <div>
    <img
      src="https://res.cloudinary.com/ds8nwbsuv/image/upload/v1634839079/Vector_ugr3mz.png"
      alt="not-found-pic"
    />
    <h1>PAGE NOT FOUND</h1>
    <p>we are sorry, the page you requested could not be found</p>
    <button type="button">
      <Link to="/">Home</Link>
    </button>
  </div>
)

export default NotFound
