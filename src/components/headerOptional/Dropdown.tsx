import React from "react";

interface Props {
    children: React.ReactNode;
    dropdownClass?: string;
}

const Dropdown = ({ children, dropdownClass }: Props) => {
    return (
        <div
            className={`bg-white w-fit shadow-md z-50 rounded-md absolute top-12 right-0 ${dropdownClass}`}
        >
            {children}
        </div>
    );
};

export default Dropdown;
