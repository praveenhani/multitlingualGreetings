import './index.css'

const ActiveTabs = props => {
  const {tabDetails, clickTabItem, isActive} = props
  const {id, buttonText} = tabDetails

  const onClickTabItem = () => {
    clickTabItem(id)
  }

  const activeTabBtnClassName = isActive
    ? 'active-tab-btn'
    : 'not-active-tab-btn'

  return (
    <li className="tab-item-container">
      <button
        type="button"
        className={activeTabBtnClassName}
        onClick={onClickTabItem}
      >
        {buttonText}
      </button>
    </li>
  )
}

export default ActiveTabs
