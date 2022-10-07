import './index.css'

const Appitem = props => {
  const {appsList} = props
  return (
    <li className="app-item">
      <img
        src={appsList.imageUrl}
        alt={appsList.appName}
        className="app-image"
      />
      <p className="app-description">{appsList.appName}</p>
    </li>
  )
}

export default Appitem
