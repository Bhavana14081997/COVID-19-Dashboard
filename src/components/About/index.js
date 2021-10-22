import {Component} from 'react'
import Loader from 'react-loader-spinner'
import Header from '../Header'
import Footer from '../Footer'
import FaqDataDetailed from '../FaqDataDetailed'

const url = 'https://apis.ccbp.in/covid19-faqs'

class About extends Component {
  state = {faq: {}, isLoading: true}

  componentDidMount() {
    this.getData()
  }

  setFaq = (formattedData, isLoading) => {
    this.setState({
      faq: formattedData,
      isLoading,
    })
  }

  getData = async () => {
    const response = await fetch(url)
    const data = await response.json()
    const formattedData = data.faq.map(eachfaq => ({
      question: eachfaq.question,
      qno: eachfaq.qno,
      answer: eachfaq.answer,
      category: eachfaq.category,
    }))
    this.setFaq(formattedData, false)
  }

  renderFaqList = () => {
    const {faq} = this.state
    return (
      <ul testid="faqsUnorderedList">
        {faq.map(eachfaq => (
          <FaqDataDetailed faqData={eachfaq} key={eachfaq.qno} />
        ))}
      </ul>
    )
  }

  renderLoader = () => (
    <div testid="aboutRouteLoader">
      <Loader type="Oval" color="#black" height="50" />
    </div>
  )

  render() {
    const {isLoading} = this.state
    return (
      <div>
        <Header />
        <h1>About</h1>
        <p>Last updated on</p>
        <p>COVID-19 vaccines be ready for distribution</p>
        {isLoading ? this.renderLoader() : this.renderFaqList()}
        <Footer />
      </div>
    )
  }
}

export default About
