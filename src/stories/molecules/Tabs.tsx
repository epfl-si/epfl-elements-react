import React, { Children, useState } from 'react';
import './tabs.css';

export interface TabsProps {
  children?: React.ReactNode[];
}

type TabTitleProps = { children: React.ReactNode };
type TabContentProps = { children: React.ReactNode };
type TabProps = { id: string, children: React.ReactNode };

const TabsFC = ({children}: TabsProps) => {
  const tabArray = (Children.toArray(children || []).filter(
    (child : React.ReactElement) => child.type === Tabs.Tab)) as React.ReactElement<TabProps>[];
  const [activeTab, setActiveTab] = useState(0);

  function c_id(child: React.ReactElement<TabProps>) {
    return child.props.id;
  }

  function c_title(children: React.ReactNode) {
    const title = (Children.toArray(children || []).find(
      (child : React.ReactElement) => child.type === Tabs.Tab.Title)) as React.ReactElement<TabTitleProps>;
    return title.props.children;
  }

  function c_content(children: React.ReactNode) {
    const content = (Children.toArray(children || []).find(
      (child : React.ReactElement) => child.type === Tabs.Tab.Content)) as React.ReactElement<TabContentProps>;
    return content.props.children;
  }

  return (
    <div className="tabs-div">
      <ul className="nav nav-tabs" role="tablist">
        {tabArray.map((child, index) => (
          <li className="nav-item">
            <a className={`text-center nav-link ${index === activeTab ? 'active' : ''}`} id={c_id(child).concat("-tab")} data-toggle="tab" href={"#".concat(c_id(child))} role="tab" aria-controls={c_id(child)}
               aria-selected="true" onClick={(event) => { event.preventDefault(); setActiveTab(index); } }>
              {c_title(child.props.children)}
            </a>
          </li>
        ))}
      </ul>
      <div className="tab-content p-3">
        {tabArray.map((child, index) => (
          <div className={`tab-pane fade ${index === activeTab ? 'show active' : ''}`} id={c_id(child)} role="tabpanel" aria-labelledby={c_id(child).concat("-tab")} key={c_id(child)}>
            {c_content(child.props.children)}
          </div>
        ))}
      </div>
    </div>
  );
}

/**
 * A tabs group.
 * For each tab it is possible to define a “Title” and a “Content”, both with children
 */
export const Tabs =
  Object.assign(
    TabsFC,
    {
      Tab: Object.assign(() => <></> as React.FC<TabProps>,
      {
        Title: (() => <></>) as React.FC<TabTitleProps>,
        Content: (() => <></>) as React.FC<TabContentProps>
      })
    }
  );
