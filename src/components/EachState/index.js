import {Component} from 'react'
import Loader from 'react-loader-spinner'

class EachState extends Component {
  state = {eachStateData: [], isLoading: true}

  componentDidMount() {
    this.getEachState()
  }

  getEachState = async () => {
    const {match} = this.props
    const {params} = match
    const {stateCode} = params

    const response = await fetch('https://apis.ccbp.in/covid19-state-wise-data')
    const data = await response.json()
    console.log(data[stateCode])
    this.setState({eachStateData: data[stateCode], isLoading: false})
  }

  render() {
    const {isLoading} = this.state

    return (
      <div className="blog-container">
        {isLoading ? (
          <Loader type="TailSpin" color="#00BFFF" height={50} width={50} />
        ) : (
          ''
        )}
      </div>
    )
  }
}

export default EachState
