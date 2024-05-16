import { useState } from 'react'

type TabsetProps = {
  tabs: any
}

import 'epfl-elements/dist/css/elements.min.css'

export function Tabset ({ tabs }: TabsetProps) {
  const getTabsIds = (tabsObj: any) => Object.keys(tabsObj)

  const [activeTab, setActiveTab] = useState(tabs[getTabsIds(tabs).filter(
    tabid => tabs[tabid].isActive)[0]].id)

  async function clickHandler (tab: any) {
    if (activeTab === tab.id) {
      // Tab already selected
      return
    }
    if (!tab.disableSwitch) {
      setActiveTab(tab.id)
    }
    if (tab.clickFn) {
      await tab.clickFn()
    }
  }

  function getHeaderClass (tab: any) {
    const baseClass = 'nav-link'
    if (tab.id === activeTab) {
      return `${baseClass} active`
    } else if (tab.disabled) {
      return `${baseClass} disabled`
    }
    return baseClass
  }

  const getTabHeader = (tab: any) =>
    <li key={`${tab.id}-tab-li`} className='nav-item'>
      <a  
        className={getHeaderClass(tab)}
        id={`${tab.id}-tab`}
        key={`${tab.id}-tab`}
        data-toggle='tab'
        onClick={() => clickHandler(tab)}
      >
        {tab.label}
      </a>
    </li>

  const getTabContent = (tab: any) =>
    <div
      key={`${tab.id}-div`} className={tab.id === activeTab ? 'tab-pane fade show active' : 'tab-pane fade'}
      id={`${tab.id}`}
      role='tabpanel'
    >
      {tab.renderContent && tab.renderContent()}
    </div>

  return (
    <div className='container-full'>
      <ul className='nav nav-tabs' role='tablist'>
        {getTabsIds(tabs).map(id => getTabHeader(tabs[id]))}
      </ul>
      <div className={`tab-content p-${getTabsIds(tabs).length}`}>
        {getTabsIds(tabs).map(id => getTabContent(tabs[id]))}
      </div>
    </div>
  )
}

