import './index.css'

const Tabs = props => {
  const {tabsList, tabsId, changeTab} = props
  const tabChanged = event => {
    changeTab(event.target.textContent)
  }
  const tabStyle =
    tabsList.tabId.toUpperCase() === tabsId.toUpperCase()
      ? 'button-active'
      : 'button'
  return (
    <li>
      <button type="button" className={tabStyle} onClick={tabChanged}>
        {tabsList.displayText}
      </button>
    </li>
  )
}

export default Tabs
