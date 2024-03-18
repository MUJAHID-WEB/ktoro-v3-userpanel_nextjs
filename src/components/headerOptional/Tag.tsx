import React from "react";

interface Props {
    tag: string;
    onClick: (value: string) => void;
}

const Tag = ({ tag, onClick }: Props) => {
    return (
        <div
            onClick={() => onClick(tag)}
            className="px-4 py-1 rounded-3xl border border-black-secondary w-fit cursor-pointer"
        >
            {tag}
        </div>
    );
};

export default Tag;
