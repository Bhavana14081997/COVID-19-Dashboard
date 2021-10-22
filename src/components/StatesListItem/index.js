import './index.css'

const StatesListItem = props => {
  const {stateDetails} = props
  const {confirmed, deceased, recovered, stateName} = stateDetails
  let sum = 0
  sum = confirmed - recovered

  return (
    //   <div testid="stateWiseCovidDataTable">

    //   </div>
    <div>
      <table className="tableStyle" testid="stateWiseCovidDataTable">
        <td>{stateName}</td>
        <td>{confirmed}</td>
        <td>{sum}</td>
        <td>{recovered}</td>
        <td>{deceased}</td>
      </table>
    </div>
  )
}

export default StatesListItem
