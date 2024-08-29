import {Component} from 'react'
import VisitCountries from '../VisitCountries'

import './index.css'

class CountriesList extends Component {
  state = {
    initialList: this.props.initialCountriesList,
  }

  onClickChangeVisit = id => {
    this.setState(prevState => ({
      initialList: prevState.initialList.map(eachItem => {
        if (id === eachItem.id) {
          return {...eachItem, isVisited: !eachItem.isVisited}
        }
        return eachItem
      }),
    }))
  }

  removeItem = id => {
    this.setState(prevState => ({
      initialList: prevState.initialList.map(eachItem => {
        if (id === eachItem.id) {
          return {...eachItem, isVisited: !eachItem.isVisited}
        }
        return eachItem
      }),
    }))
  }

  render() {
    const {initialList} = this.state

    const updateList = initialList.filter(country => country.isVisited === true)
    return (
      <div className="app-container">
        <div className="responsive-container">
          <h1 className="responsive-heading">Countries</h1>
          <ul className="countries-list">
            {initialList.map(eachList => (
              <VisitCountries
                key={eachList.id}
                listDetails={eachList}
                onClickChangeVisit={this.onClickChangeVisit}
              />
            ))}
          </ul>
          <h1 className="responsive-heading">Visited Countries</h1>
          {updateList.length > 0 ? (
            <ul className="visited-countries-container">
              {initialList.map(eachList =>
                eachList.isVisited ? (
                  <li key={eachList.id} className="visited-countries-items">
                    <div className="visited-countries-item">
                      <img
                        className="visited-countries-img"
                        src={eachList.imageUrl}
                        alt="thumbnail"
                      />
                      <div className="visited-countries-card">
                        <p className="visited-countries-name">
                          {eachList.name}{' '}
                        </p>
                        <button
                          className="remove-button"
                          onClick={() => this.removeItem(eachList.id)}
                        >
                          Remove
                        </button>
                      </div>
                    </div>
                  </li>
                ) : (
                  ' '
                ),
              )}
            </ul>
          ) : (
            <div className="nocountry-container">
              <p className="nocountry-heading">No Countries Visited Yet</p>
            </div>
          )}
        </div>
      </div>
    )
  }
}

export default CountriesList
