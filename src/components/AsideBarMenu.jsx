import React from "react";

const AsideBarMenu = ({
  FEATURES_LIST,
  featuresOpen,
  COMPANY_LIST,
  companyOpen,
  handleMenuClick,
  handleFeatureClick,
  handleCompanyClick,
}) => {
  return (
    <aside className=" flex justify-end items-center bg-almostBlack fixed bg-opacity-60 w-full h-screen">
      <div className="bg-almostWhite h-screen w-2/3 z-40 pt-4 px-6">
        <div className="flex justify-end mb-6" onClick={handleMenuClick}>
          <svg width="26" height="26" xmlns="http://www.w3.org/2000/svg">
            <g fill="#151515" fill-rule="evenodd">
              <path d="m2.393.98 22.628 22.628-1.414 1.414L.979 2.395z" />
              <path d="M.98 23.607 23.609.979l1.414 1.414L2.395 25.021z" />
            </g>
          </svg>
        </div>
        <ul className="flex-col justify-between items-center text-mediumGray">
          <li className="mb-4">
            <a
              onClick={handleFeatureClick}
              alt=""
              className="hover:text-almostBlack transiton duration-150"
            >
              <span className="flex items-center">
                Features
                {featuresOpen ? (
                  <svg
                    width="10"
                    height="6"
                    xmlns="http://www.w3.org/2000/svg"
                    className="ml-3"
                  >
                    <path
                      stroke="#686868"
                      stroke-width="1.5"
                      fill="none"
                      d="m1 5 4-4 4 4"
                    />
                  </svg>
                ) : (
                  <svg
                    width="10"
                    height="6"
                    xmlns="http://www.w3.org/2000/svg"
                    className="ml-3"
                  >
                    <path
                      stroke="#686868"
                      stroke-width="1.5"
                      fill="none"
                      d="m1 1 4 4 4-4"
                    />
                  </svg>
                )}
              </span>
              {featuresOpen && (
                <ul className="my-3 w-2/3">
                  {FEATURES_LIST.map(({ icon, feature }) => {
                    return (
                      <li className="flex justify-start items-center mb-4 pl-5">
                        <span className="mr-3">{icon}</span>
                        <span>{feature}</span>
                      </li>
                    );
                  })}
                </ul>
              )}
            </a>
          </li>
          <li className="mb-4" onClick={handleCompanyClick}>
            <a
              href="#"
              alt=""
              className="flex items-center hover:text-almostBlack transiton duration-150"
            >
              Company
              <span>
                {companyOpen ? (
                  <svg
                    width="10"
                    height="6"
                    xmlns="http://www.w3.org/2000/svg"
                    className="ml-3"
                  >
                    <path
                      stroke="#686868"
                      stroke-width="1.5"
                      fill="none"
                      d="m1 5 4-4 4 4"
                    />
                  </svg>
                ) : (
                  <svg
                    width="10"
                    height="6"
                    xmlns="http://www.w3.org/2000/svg"
                    className="ml-3"
                  >
                    <path
                      stroke="#686868"
                      strokeWidth="1.5"
                      fill="none"
                      d="m1 1 4 4 4-4"
                    />
                  </svg>
                )}
              </span>
            </a>
            {companyOpen && (
              <ul className="my-3 w-2/3">
                {COMPANY_LIST.map((company) => {
                  return (
                    <li className="flex justify-start items-center mb-4 pl-5">
                      <span>{company}</span>
                    </li>
                  );
                })}
              </ul>
            )}
          </li>
          <li className="mb-4">
            <a
              href="#"
              alt=""
              className="hover:text-almostBlack transiton duration-150"
            >
              Career
            </a>
          </li>
          <li className="mb-4">
            <a
              href="#"
              alt=""
              className="hover:text-almostBlack transiton duration-150"
            >
              About
            </a>
          </li>
        </ul>

        <div className="text-mediumGray py-6 my-6">
          <button className="w-full hover:text-almostBlack transiton duration-150 mb-3">
            Login
          </button>
          <button className="w-full border-2 border-mediumGray hover:border-almostBlack hover:text-almostBlack transiton duration-150 rounded-lg px-3 py-2">
            Register
          </button>
        </div>
      </div>
    </aside>
  );
};

export default AsideBarMenu;
