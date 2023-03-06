import React from "react";

const Navbar = ({ isMobile, handleMenuClick }) => {
  return (
    <nav className="flex justify-between">
      <div className="flex justify-between items-center w-full">
        {isMobile ? (
          <>
            <div onClick={handleMenuClick}>
            <svg width="32" height="18" xmlns="http://www.w3.org/2000/svg">
              <g fill="#151515" fillRule="evenodd">
                <path d="M0 0h32v2H0zM0 8h32v2H0zM0 16h32v2H0z" />
              </g>
            </svg>
            </div>
          </>
        ) : (
          <>
            
             
              <ul className="flex justify-between items-center text-mediumGray text-sm ml-16">
                <li className="mr-5">
                  <a
                    href="#"
                    alt=""
                    className="flex items-center hover:text-almostBlack transiton duration-150"
                  >
                    Features
                    <svg
                      width="10"
                      height="6"
                      xmlns="http://www.w3.org/2000/svg"
                      className="ml-1"
                    >
                      <path
                        stroke="#686868"
                        strokeWidth="1.5"
                        fill="none"
                        d="m1 1 4 4 4-4"
                      />
                    </svg>
                  </a>
                </li>
                <li className="mr-5">
                  <a
                    href="#"
                    alt=""
                    className="flex items-center hover:text-almostBlack transiton duration-150"
                  >
                    Company
                    <svg
                      width="10"
                      height="6"
                      xmlns="http://www.w3.org/2000/svg"
                      className="ml-1"
                    >
                      <path
                        stroke="#686868"
                        strokeWidth="1.5"
                        fill="none"
                        d="m1 1 4 4 4-4"
                      />
                    </svg>
                  </a>
                </li>
                <li className="mr-5">
                  <a
                    href="#"
                    alt=""
                    className="hover:text-almostBlack transiton duration-150"
                  >
                    Career
                  </a>
                </li>
                <li className="mr-5">
                  <a
                    href="#"
                    alt=""
                    className="hover:text-almostBlack transiton duration-150"
                  >
                    About
                  </a>
                </li>
              </ul>
            

            <div className="flex justify-end text-sm text-mediumGray">
              <button className="hover:text-almostBlack transiton duration-150">
                Login
              </button>
              <button className="border-2 border-mediumGray hover:border-almostBlack hover:text-almostBlack ml-10 rounded-lg px-3 py-2">
                Register
              </button>
            </div>
          </>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
