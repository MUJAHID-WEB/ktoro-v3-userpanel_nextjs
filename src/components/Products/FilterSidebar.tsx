import React, { useState } from "react";
import { filterOptions } from "@/static";
import Plus from "../svg/Plus";
import Minus from "../svg/Minus";

type FilterSidebarItemProps = {
    title: string;
    options: {
        id: number;
        name: string;
    }[];
};

// Sidebar Items Component
const FilterSidebarItem = ({
    filterOption,
}: {
    filterOption: FilterSidebarItemProps;
}) => {
    const [isOpen, setIsOpen] = useState<boolean>(true);
    const [isExpanded, setIsExpanded] = useState<boolean>(false);
    const { title, options } = filterOption;

    const handleExpanded = () => {
        setIsExpanded(!isExpanded);
    };

    const displayedOptions = isExpanded ? options : options.slice(0, 5);

    return (
        <div className="border-b">
            <div
                className="flex justify-between items-center p-4 cursor-pointer"
                onClick={(e: React.MouseEvent<HTMLElement>) =>
                    setIsOpen(!isOpen)
                }
            >
                <h3 className="font-bold">{title}</h3>
                <div>{!isOpen ? <Plus /> : <Minus />}</div>
            </div>
            <div className={`${isOpen ? "block" : "hidden"} p-4`}>
                <input
                    type="text"
                    className="border border-black-700 rounded-md p-2 mb-4 w-full"
                    placeholder="Search for brands"
                    onChange={(e) => console.log(e.target.value)}
                />
                {displayedOptions.map(
                    (option: { id: number; name: string }, index: number) => {
                        const { name } = option;
                        return (
                            <div
                                key={index}
                                className="flex gap-2 justify-between items-center py-2"
                            >
                                <label
                                    className="font-semibold"
                                    htmlFor={`${index}`}
                                >
                                    {name}
                                </label>
                                <input type="checkbox" id={`${index}`} />
                            </div>
                        );
                    }
                )}
                <div className="mt-4 text-right">
                    {!isExpanded ? (
                        <button
                            className="lowercase text-blue-400 font-semibold underline"
                            onClick={handleExpanded}
                        >
                            See More
                        </button>
                    ) : (
                        <button
                            className="lowercase text-blue-400 font-semibold underline"
                            onClick={handleExpanded}
                        >
                            See Less
                        </button>
                    )}
                </div>
            </div>
        </div>
    );
};

const FilterSidebar = () => {
    return (
        <div>
            <p className="font-semibold border-b pb-3">Sort by</p>
            <div className="space-y-2">
                {filterOptions.map((filterOption, index) => (
                    <FilterSidebarItem
                        key={index}
                        filterOption={filterOption}
                    />
                ))}
            </div>
        </div>
    );
};

export default FilterSidebar;
