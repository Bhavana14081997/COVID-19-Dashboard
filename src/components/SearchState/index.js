import {Link} from 'react-router-dom'
import {BiChevronRightSquare} from 'react-icons/bi'

const SearchState = props => {
  const {statesDetails} = props
  const {stateName, stateCode} = statesDetails
  return (
    <div>
      <Link to={`/state/${stateCode}`}>
        <li>
          <p>{stateName}</p>
          <BiChevronRightSquare testid="searchResultChevronRightIcon" />
          <p>{stateCode}</p>
        </li>
      </Link>
    </div>
  )
}

export default SearchState
