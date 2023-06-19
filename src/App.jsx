import React, { useState } from 'react';

const Tabs = ({ tabs }) => {
  const [activeTab, setActiveTab] = useState(0);

  const handleTabClick = (index) => {
    setActiveTab(index);
  };

  return (
    <div>
      <ul className="tab-list">
        {tabs.map((tab, index) => (
          <li
            key={index}
            className={`tab ${index === activeTab ? 'active' : ''}`}
            onClick={() => handleTabClick(index)}
          >
            {tab.title}
          </li>
        ))}
      </ul>
      <div className="tab-content">
        {tabs[activeTab].content}
      </div>
    </div>
  );
};

// Usage:
const tabs = [
  { title: "Tab 1", content: "This is the content for Tab 1" },
  { title: "Tab 2", content: "Tab 2" },
  { title: "Tab 3", content: "Tab 3" }
];

const App = () => {
  return (
    <div>
      <Tabs tabs={tabs} />
    </div>
  );
};

export default App;

