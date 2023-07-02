import {Component} from 'react'
import Loader from 'react-loader-spinner'
import TravelGuide from './components/TravelGuide'

import './App.css'

// Replace your code here
class App extends Component {
  state = {isLoading: true, travelList: []}

  componentDidMount() {
    this.getTravelData()
  }

  getTravelData = async () => {
    const url = 'https://apis.ccbp.in/tg/packages'
    const options = {
      method: 'GET',
    }
    const response = await fetch(url, options)
    const data = await response.json()
    const fetchedData = data.packages.map(eachData => ({
      id: eachData.id,
      name: eachData.name,
      imageUrl: eachData.image_url,
      description: eachData.description,
    }))
    this.setState({travelList: fetchedData, isLoading: false})
  }

  render() {
    const {travelList, isLoading} = this.state
    console.log(travelList)
    return (
      <div className="travel-home-container">
        <h1 className="main-heading">Travel Guide</h1>
        {isLoading ? (
          <div data-testid="loader">
            <Loader type="TailSpin" color="#00BFFF" height={50} width={50} />
          </div>
        ) : (
          <ul className="list-container">
            {travelList.map(eachData => (
              <TravelGuide eachData={eachData} key={eachData.id} />
            ))}
          </ul>
        )}
      </div>
    )
  }
}

export default App
