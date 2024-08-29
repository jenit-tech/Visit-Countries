import './index.css'

const VisitCountries = props => {
  const {listDetails, onClickChangeVisit} = props
  const {id, name, imageUrl, isVisited} = listDetails

  const onClickChange = () => {
    onClickChangeVisit(id)
  }
  return (
    <li className="country-item">
      <p className="country-name">{name}</p>
      {isVisited ? (
        <p className="country-visited"> Visited</p>
      ) : (
        <button className="country-button" onClick={onClickChange}>
          Visit
        </button>
      )}
    </li>
  )
}

export default VisitCountries
