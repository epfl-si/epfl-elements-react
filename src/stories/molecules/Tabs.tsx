import React, { useState, useEffect } from 'react';
import '../assets/custumStyles.css';

type Item = {
  title: string;
  content: React.ReactNode;
}

interface TabsProps {
  items: Item[]
}

export const Tabs = ({
    items
  }: TabsProps) => {
  const [activeTab, setActiveTab] = useState(0); // State to track the active tab index

  return (
    <div style={{width: '100%', verticalAlign: "top", display: "inline"}}>
      <ul className="nav nav-tabs tabs" role="tablist">
        {items.map((c, index) => (
          <li className="nav-item">
            <a className={`nav-link ${index === activeTab ? 'active' : ''}`} id={c.title.concat("-tab")} data-toggle="tab" href={"#".concat(c.title)} role="tab" aria-controls={c.title}
               aria-selected="true" onClick={(event) => { event.preventDefault(); setActiveTab(index); } }>{c.title}</a>
          </li>
        ))}
      </ul>
      <div className="tab-content p-3 tabs">
        {items.map((c, index) => (
          <div className={`tab-pane fade ${index === activeTab ? 'show active' : ''}`} id={c.title} role="tabpanel" aria-labelledby={c.title.concat("-tab")} key={c.title}>
            {c.content}
          </div>
        ))}
      </div>
      <div className="flex-row justify-content-between cards">
        {items.map((c, index) => (
          <div className='tab-pane fade show active card-solid card-margin' id={c.title} role="tabpanel" aria-labelledby={c.title.concat("-tab")} key={c.title}>
            {c.content}
          </div>
        ))}
      </div>
    </div>
  );
};
