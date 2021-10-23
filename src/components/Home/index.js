import {Component} from 'react'
import Loader from 'react-loader-spinner'
import {FcGenericSortingAsc, FcGenericSortingDesc} from 'react-icons/fc'
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
      const stateData = fetchedData[eachState.stateCode]
      const stateDetails = {
        ...eachState,
        ...stateData,
      }

      return stateDetails
    })

    this.setState({statesData: formattedData})
    this.setLoading(false)
    console.log(formattedData)
  }

  renderLoader = () => (
    <div testid="homeRouteLoader">
      <Loader type="TailSpin" color="#00BFFF" height={50} width={50} />
    </div>
  )

  //   sortAscending = () => {
  //     const {statesData} = this.state
  //     stateName.sort((a, b) => a - b)
  //     this.setState({statesData})
  //   }

  //   sortDescending = () => {
  //     const {statesData} = this.state
  //     stateName.sort((a, b) => a - b).reverse()
  //     this.setState({statesData})
  //   }

  renderList = () => {
    const {statesData} = this.state
    // console.log(statesData)
    return (
      <div testid="stateWiseCovidDataTable" className="tableStyle">
        <p testid="ascendingSortIcon">{FcGenericSortingAsc}</p>
        <p testid="descendingSortIcon">{FcGenericSortingDesc}</p>
        <h1>States/UT</h1>
        <p>Confirmed</p>
        <p>Active</p>
        <p>Recovered</p>
        <p>Deceased</p>
        <p>Population</p>
        <div>
          <ul testid="stateWiseCovidDataTable">
            {statesData.map(eachState => (
              <StatesListItem
                stateDetails={eachState}
                key={eachState.stateCode}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }

  renderTotal() {
    const {statesData} = this.state

    return (
      <ul testid="stateWiseCovidDataTable">
        {statesData.map(eachState => (
          <HomeTotalStats stateDetails={eachState} key={eachState.stateCode} />
        ))}
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
          <ul testid="searchResultsUnorderedList">
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
