import {Component} from 'react'
import Loader from 'react-loader-spinner'
import Footer from '../Footer'
import Header from '../Header'
import StatesListItem from '../StatesListItem'
import SearchState from '../SearchState'
import HomeTotalStats from '../HomeTotalStats'

const url = 'https://apis.ccbp.in/covid19-state-wise-data'

const statesList = [
  {
    stateCode: 'AN',
    stateName: 'Andaman and Nicobar Islands',
  },
  {
    stateCode: 'AP',
    stateName: 'Andhra Pradesh',
  },
  {
    stateCode: 'AR',
    stateName: 'Arunachal Pradesh',
  },
  {
    stateCode: 'AS',
    stateName: 'Assam',
  },
  {
    stateCode: 'BR',
    stateName: 'Bihar',
  },
  {
    stateCode: 'CH',
    stateName: 'Chandigarh',
  },
  {
    stateCode: 'CT',
    stateName: 'Chhattisgarh',
  },
  {
    stateCode: 'DN',
    stateName: 'Dadra and Nagar Haveli and Daman and Diu',
  },
  {
    stateCode: 'DL',
    stateName: 'Delhi',
  },
  {
    stateCode: 'GA',
    stateName: 'Goa',
  },
  {
    stateCode: 'GJ',
    stateName: 'Gujarat',
  },
  {
    stateCode: 'HR',
    stateName: 'Haryana',
  },
  {
    stateCode: 'HP',
    stateName: 'Himachal Pradesh',
  },
  {
    stateCode: 'JK',
    stateName: 'Jammu and Kashmir',
  },
  {
    stateCode: 'JH',
    stateName: 'Jharkhand',
  },
  {
    stateCode: 'KA',
    stateName: 'Karnataka',
  },
  {
    stateCode: 'KL',
    stateName: 'Kerala',
  },
  {
    stateCode: 'LA',
    stateName: 'Ladakh',
  },
  {
    stateCode: 'LD',
    stateName: 'Lakshadweep',
  },
  {
    stateCode: 'MH',
    stateName: 'Maharashtra',
  },
  {
    stateCode: 'MP',
    stateName: 'Madhya Pradesh',
  },
  {
    stateCode: 'MN',
    stateName: 'Manipur',
  },
  {
    stateCode: 'ML',
    stateName: 'Meghalaya',
  },
  {
    stateCode: 'MZ',
    stateName: 'Mizoram',
  },
  {
    stateCode: 'NL',
    stateName: 'Nagaland',
  },
  {
    stateCode: 'OR',
    stateName: 'Odisha',
  },
  {
    stateCode: 'PY',
    stateName: 'Puducherry',
  },
  {
    stateCode: 'PB',
    stateName: 'Punjab',
  },
  {
    stateCode: 'RJ',
    stateName: 'Rajasthan',
  },
  {
    stateCode: 'SK',
    stateName: 'Sikkim',
  },
  {
    stateCode: 'TN',
    stateName: 'Tamil Nadu',
  },
  {
    stateCode: 'TG',
    stateName: 'Telangana',
  },
  {
    stateCode: 'TR',
    stateName: 'Tripura',
  },
  {
    stateCode: 'UP',
    stateName: 'Uttar Pradesh',
  },
  {
    stateCode: 'UT',
    stateName: 'Uttarakhand',
  },
  {
    stateCode: 'WB',
    stateName: 'West Bengal',
  },
]

class Home extends Component {
  state = {
    statesData: [],
    isLoading: true,
    searchInput: '',
  }

  componentDidMount() {
    this.getStates()
  }

  onChangeSearchInput = event => {
    this.setState({
      searchInput: event.target.value,
    })
  }

  setLoading = isLoading => {
    this.setState({
      isLoading,
    })
  }

  getStates = async () => {
    const response = await fetch(url)
    const fetchedData = await response.json()
    const formattedData = statesList.map(eachState => {
      const stateData = fetchedData[eachState.stateCode].total
      const stateDetails = {
        ...eachState,
        ...stateData,
      }
      return stateDetails
    })

    this.setState({statesData: formattedData})
    this.setLoading(false)
  }

  renderLoader = () => (
    <div testid="homeRouteLoader">
      <Loader type="Oval" color="#black" height="50" />
    </div>
  )

  renderList = () => {
    const {statesData} = this.state

    return (
      <ul testid="searchResultsUnorderedList">
        {statesData.map(eachState => (
          <StatesListItem stateDetails={eachState} key={eachState.stateCode} />
        ))}
      </ul>
    )
  }

  renderTotal() {
    const {statesData} = this.state
    let sum = 0
    statesData.forEach(eachItem => {
      sum += eachItem.confirmed
    })
    let sum1 = 0
    statesData.forEach(eachItem => {
      sum1 += eachItem.deceased
    })
    let sum2 = 0
    statesData.forEach(eachItem => {
      sum2 += eachItem.recovered
    })
    let sum3 = 0
    statesData.forEach(eachItem => {
      sum3 = eachItem.confirmed - eachItem.recovered
    })
    return (
      <ul>
        <HomeTotalStats
          confirmed={sum}
          deceased={sum1}
          recovered={sum2}
          active={sum3}
          key={statesData.stateCode}
        />
      </ul>
    )
  }

  render() {
    const {isLoading, searchInput} = this.state

    const searchResults = statesList.filter(each =>
      each.stateName.includes(searchInput),
    )
    return (
      <div>
        <Header />
        <input
          type="search"
          testid="searchIcon"
          placeholder="Enter the State"
          onChange={this.onChangeSearchInput}
          value={searchInput}
        />
        {searchInput === '' ? (
          ''
        ) : (
          <ul>
            {searchResults.map(each => (
              <SearchState statesDetails={each} key={each.stateCode} />
            ))}
          </ul>
        )}
        {this.renderTotal()}

        {isLoading ? this.renderLoader() : this.renderList()}
        <Footer />
      </div>
    )
  }
}
export default Home
