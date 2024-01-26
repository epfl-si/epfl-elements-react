import React, { Children, useState } from 'react';
import './responsiveTabs.scss';
import type * as CSS from 'csstype';

interface Style extends CSS.Properties, CSS.PropertiesHyphen {}

export interface ResponsiveTabsProps {
  children?: React.ReactNode,
  cardStyle?: Style
}

type TabTitleProps = { children: React.ReactNode };
type TabContentProps = { children: React.ReactNode };
type TabProps = { id: string, children: React.ReactNode };

const ResponsiveTabsFC = ({ children, cardStyle }: ResponsiveTabsProps) => {
  const tabArray = (Children.toArray(children || []).filter(
    (child : React.ReactElement) => child.type === ResponsiveTabs.Tab)) as React.ReactElement<TabProps>[];
  const [activeTab, setActiveTab] = useState(0); // State to track the active tab index

  function c_id(child: React.ReactElement<TabProps>) {
    return child.props.id;
  }

  function c_title(children: React.ReactNode) {
    const title = (Children.toArray(children || []).find(
      (child : React.ReactElement) => child.type === ResponsiveTabs.Tab.Title)) as React.ReactElement<TabTitleProps>;
    return title.props.children;
  }

  function c_content(children: React.ReactNode) {
    const content = (Children.toArray(children || []).find(
      (child : React.ReactElement) => child.type === ResponsiveTabs.Tab.Content)) as React.ReactElement<TabContentProps>;
    return content.props.children;
  }

  return (
    <div className="responsive-tabs">
      <ul className="nav nav-tabs-light align-items-center tabs" role="tablist">
        {tabArray.map((child, index) => {
          return <li className="nav-item">
            <a className={`nav-link ${index === activeTab ? 'active' : ''}`} id={c_id(child).concat("-tab")}
               data-toggle="tab" href={"#".concat(c_id(child))} role="tab"
               aria-controls={c_id(child)}
               aria-selected="true" onClick={(event) => {
              event.preventDefault();
              setActiveTab(index);
            }}>{c_title(child.props.children)}</a>
          </li>
        })}
      </ul>
      <div className="tab-content p-3 tabs">
        {tabArray.map((child, index) => {
          return <div className={`tab-pane fade ${index === activeTab ? 'show active' : ''}`}
                      id={c_id(child)} role="tabpanel" style={{width: '100%'}}
                      aria-labelledby={c_id(child).concat("-tab")} key={c_id(child)}>
            {c_content(child.props.children)}
          </div>
        })}
      </div>
      <div className="flex-row justify-content-between box-container">
        {tabArray.map((child) => {
          return <div className='box card col-lg-4 d-flex align-items-stretch' id={c_id(child)}
                      aria-labelledby={c_id(child).concat("-tab")} key={c_id(child)} style={cardStyle}>
            <div className="card-body">
              <div className="card-title" >
                {c_title(child.props.children)}
              </div>
              <div className="card-text">
                <hr/>
                {c_content(child.props.children)}
              </div>
            </div>
          </div>
        })}
      </div>
    </div>
  );
}

/**
 * A responsive tabs group.
 * For small devices, tabs are shown, otherwise tabs content is shown in cards on the same page.
 * For each tab it is possible to define a “Title” and a “Content”, both with children
 */
export const ResponsiveTabs =
    Object.assign(
      ResponsiveTabsFC,
      {
        Tab: Object.assign(() => <></> as React.FC<TabProps>,
          {
            Title: (() => <></>) as React.FC<TabTitleProps>,
            Content: (() => <></>) as React.FC<TabContentProps>
          })
      }
    );
