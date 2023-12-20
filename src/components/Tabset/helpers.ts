type updateContensSingleProps = {
  tab: any;
  tabContents?: any;
  setTabFn?: any;
}

export function tabUpdateContents ({ tab, tabContents, setTabFn }: updateContensSingleProps  ) {
  setTabFn({
    ...tab,
    renderContent: () => tabContents
  })
}
