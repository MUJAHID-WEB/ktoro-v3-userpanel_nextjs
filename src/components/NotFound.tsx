import Link from "next/link";
import React from "react";

const NotFound = () => {
    return (
        <div className="flex flex-col justify-center items-center py-12 px-2">
            {/* title  */}
            <h1 className="font-[750] xl:text-[300px] lg:text-[300px] md:text-[250px] text-[200px] text-[#333]">
                404
            </h1>
            {/* sub title  */}
            <h5 className="font-bold xl:text-[60px] lg:text-[60px] md:text-[50px] text-[40px] text-[#333] -mt-16">
                Page Not Found
            </h5>
            {/* description  */}
            <p className="font-normal text-base text-[#606060] mt-4 text-center">
                The page you are looking for does not exist or has been moved.
            </p>

            {/* home button  */}
            <button className="">
                <Link
                    href={"/"}
                    className="flex flex-row text-white items-center bg-[#333] px-6 py-4 rounded-2xl mt-6"
                >
                    <p className="font-bold text-lg pr-2 text-[#fff]">
                        Go to Home
                    </p>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="14"
                        height="13"
                        viewBox="0 0 14 13"
                        fill="none"
                    >
                        <path
                            d="M7.83057 1.60156L12.9998 6.40156L7.83057 11.2016M12.2819 6.40156H1.7998"
                            stroke="white"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />
                    </svg>
                </Link>
            </button>
        </div>
    );
};

export default NotFound;
