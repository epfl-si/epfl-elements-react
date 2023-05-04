type upateContensProps = {
  tabs?: any;
  tabId?: any;
  tabContents?: any;
  setTabsFn?: any;
}

type upateContensSingleProps = {
  tab: any;
  tabContents?: any;
  setTabFn?: any;
}


export function updateTabContents ({ tabs, tabId, tabContents, setTabsFn }: upateContensProps) {
  const updatedTabs = {
    ...tabs,
    [tabId]: {
      ...tabs[tabId],
      renderContent: () => tabContents
    }
  }
  setTabsFn(updatedTabs)
}

export function updateSingleTabContents ({ tab, tabContents, setTabFn }: upateContensSingleProps  ) {
  setTabFn({
    ...tab,
    renderContent: () => tabContents
  })
}
