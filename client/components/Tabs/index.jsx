"use client"
import React, {useState, createContext, useContext} from "react";

const TabContext = createContext();

function Tabs({ children, className }) {
    const [activeTab, setActiveTab] = useState(0);

    const setTab = tab => {
        setActiveTab(tab);
    };

    return (
        <TabContext.Provider value={{ activeTab, setTab }}>
            <div className={`tabs ${className}`}>{children}</div>
        </TabContext.Provider>
    );
}

function TabSwitcher({
    children,
    tabId,
    activeClass = "tabs__head__item--active"
}) {
    const { activeTab, setTab } = useContext(TabContext);

    const onClick = () => {
        setTab(tabId);
        
        setTimeout(() => {
            const glider = document.getElementById("tabs__head__glider");
            const activeEl = document.getElementsByClassName("tabs__head__item--active");
            const activeElPos = activeEl[1].offsetLeft

            glider.style.left = `${activeElPos}px`
        }, 100)
    };

    const className = ["tabs__head__item"];
    if (activeTab === tabId) className.push(activeClass);
    return (
        <button className={className.join(" ")} onClick={onClick}>
            {children}
        </button>
    );
}


function TabContent({ children, id }) {
    const { activeTab } = useContext(TabContext);
    return (
        <div className={`tabs__content__item ${id === activeTab ? "tabs__content__item--active" : ""}`}>{children}</div>
    );
}

export { Tabs, TabSwitcher, TabContent };
