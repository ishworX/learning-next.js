import React from "react";

const TabButton = ({ active, selectTab, children }) => {
    const buttonClasses = active
        ? "text-colors_default border-purple-500 border-b"
        : "text-colors_default]";

    return (
        <button onClick={selectTab}>
            <p className={`mr-3 font-semibold hover:text--colors_default ${buttonClasses}`}>
                {children}
            </p>
        </button>
    );
};

export default TabButton;