import {Component} from 'react'
import {Link} from 'react-router-dom'

// const tabsList = [
//   {tabId: 'HOME', displayText: 'Home'},
//   {tabId: 'ABOUT', displayText: 'About'},
// ]

class Header extends Component {
  //   state = {
  //     activeTabId: tabsList[0].tabId,
  //   }

  //   clickTabItem = tabValue => {
  //     this.setState({activeTabId: tabValue})
  //   }

  render() {
    return (
      <div className="liClassName">
        <ul>
          <li>
            <Link to="/">
              <h1>COVID19INDIA</h1>
            </Link>
          </li>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
        </ul>

        {/* {tabsList.map(tabDetails => (
            <TabItem
              key={tabDetails.tabId}
              tabDetails={tabDetails}
              clickTabItem={this.clickTabItem}
              isActive={activeTabId === tabDetails.tabId}
            />
          ))} */}
      </div>
    )
  }
}
export default Header
