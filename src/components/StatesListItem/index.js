import './index.css'

const StatesListItem = props => {
  const {stateDetails} = props
  const {stateName, total, meta} = stateDetails
  const {confirmed, deceased, recovered} = total
  const {population} = meta
  let sum = 0
  sum = confirmed - recovered

  return (
    <div className="tableDisplay">
      <li>{stateName}</li>
      <li>{confirmed}</li>
      <li>{sum}</li>
      <li>{recovered}</li>
      <li>{deceased}</li>
      <li>{population}</li>
    </div>
  )
}

export default StatesListItem
