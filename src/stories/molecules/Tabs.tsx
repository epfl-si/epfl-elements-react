import React, { useState, useEffect } from 'react';
import '../assets/custumStyles.css';

type Item = {
  title: string;
  tabContent?: React.ReactNode;
  content: React.ReactNode;
}

interface TabsProps {
  items: Item[]
}

export const Tabs = ({
    items
  }: TabsProps) => {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <div style={{width: '100%', verticalAlign: "top", display: "inline"}}>
      <ul className="nav nav-tabs" role="tablist">
        {items.map((c, index) => (
          <li className="nav-item">
            <a className={`text-center nav-link ${index === activeTab ? 'active' : ''}`} id={c.title.concat("-tab")} data-toggle="tab" href={"#".concat(c.title)} role="tab" aria-controls={c.title}
               aria-selected="true" onClick={(event) => { event.preventDefault(); setActiveTab(index); } }>
                {c.title}
                {c.tabContent}
            </a>
          </li>
        ))}
      </ul>
      <div className="tab-content p-3">
        {items.map((c, index) => (
          <div className={`tab-pane fade ${index === activeTab ? 'show active' : ''}`} id={c.title} role="tabpanel" aria-labelledby={c.title.concat("-tab")} key={c.title}>
            {c.content}
          </div>
        ))}
      </div>
    </div>
  );
};
