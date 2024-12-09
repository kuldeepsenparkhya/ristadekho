"use client";

import React from "react";

const LeftSideBar = () => {
  return (
    <React.Fragment>
      <div className="container mx-auto">
        <form className="left-filter-form ">
          {/* ************************* I'm looking for *************** */}
          <div className="mt-10 ">
            <div className="">
              <label
                htmlFor="country"
                className="block text-sm/6 font-medium text-yellow-800"
              >
                I'm looking for
              </label>
              <div className="mt-2">
                <select
                  id="country"
                  name="country"
                  autoComplete="country-name"
                  className="block w-full rounded-md border-0 py-1.5 text-yellow-800 shadow-sm ring-1 ring-inset ring-purple-900 focus:ring-2 focus:ring-inset focus:ring-purple-900 sm:max-w-xs sm:text-sm/6"
                >
                  <option>Select gender</option>
                  <option>Men</option>
                  <option>Women</option>
                </select>
              </div>
            </div>
          </div>

          {/* *************************Select Age*************** */}

          <div className="">
            <label
              htmlFor="country"
              className="block text-sm/6 font-medium text-yellow-800"
            >
              Age
            </label>
            <div className="mt-2 ">
              <select
                id="country"
                name="country"
                autoComplete="country-name"
                className="block  w-full rounded-md border-0 py-1.5 text-yellow-800 shadow-sm ring-1 ring-inset ring-purple-900 focus:ring-2 focus:ring-inset focus:ring-purple-900 sm:max-w-xs sm:text-sm/6"
              >
                <option>Select age</option>
                <option>18 to 30</option>
                <option>31 to 40</option>
                <option>41 to 50</option>
                <option>51 to 60</option>
                <option>61 to 70</option>
                <option>71 to 80</option>
                <option>81 to 90</option>
              </select>
            </div>
          </div>
          
          {/* *************************Select Religion*************** */}

          <div className="sm:col-span-3">
            <label
              htmlFor="country"
              className="block text-sm/6 font-medium text-yellow-800"
            >
              Select Religion
            </label>
            <div className="mt-2">
              <select
                id="country"
                name="country"
                autoComplete="country-name"
                className="block w-full rounded-md border-0 py-1.5 text-yellow-800 shadow-sm ring-1 ring-inset ring-purple-900 focus:ring-2 focus:ring-inset focus:ring-purple-900 sm:max-w-xs sm:text-sm/6"
              >
                <option>Select Religion</option>
                <option>Hindu</option>
                <option>Muslim</option>
                <option>Any</option>
                <option>Jain</option>
                <option>Christian</option>
              </select>
            </div>
          </div>

          {/* *************************Avality*************** */}
          <div className="space-y-4">
            <fieldset>
              <legend className="text-sm/6 font-semibold text-yellow-800">
                Availablity
              </legend>
              <div className="">
                <div className="flex items-center gap-x-3">
                  <input
                    id="push-everything"
                    name="push-notifications"
                    type="radio"
                    className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"
                  />
                  <label
                    htmlFor="push-everything"
                    className="block text-sm/6 font-medium text-yellow-800"
                  >
                    All
                  </label>
                </div>
                <div className="flex items-center gap-x-3">
                  <input
                    id="push-email"
                    name="push-notifications"
                    type="radio"
                    className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"
                  />
                  <label
                    htmlFor="push-email"
                    className="block text-sm/6 font-medium text-yellow-800"
                  >
                    Available
                  </label>
                </div>
                <div className="flex items-center gap-x-3">
                  <input
                    id="push-nothing"
                    name="push-notifications"
                    type="radio"
                    className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"
                  />
                  <label
                    htmlFor="push-nothing"
                    className="block text-sm/6 font-medium text-yellow-800"
                  >
                    Offline
                  </label>
                </div>
              </div>
            </fieldset>
          </div>

          {/* ******************Profile********************* */}
          <div className="space-y-4">
            <fieldset>
              <legend className="text-sm/6 font-semibold text-yellow-800">
                Profile
              </legend>
              <div className="">
                <div className="flex items-center gap-x-3">
                  <input
                    id="push-everything"
                    name="push-notifications"
                    type="radio"
                    className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"
                  />
                  <label
                    htmlFor="push-everything"
                    className="block text-sm/6 font-medium text-yellow-800"
                  >
                    Everything
                  </label>
                </div>
                <div className="flex items-center gap-x-3">
                  <input
                    id="push-email"
                    name="push-notifications"
                    type="radio"
                    className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"
                  />
                  <label
                    htmlFor="push-email"
                    className="block text-sm/6 font-medium text-yellow-800"
                  >
                    Premium
                  </label>
                </div>
                <div className="flex items-center gap-x-3">
                  <input
                    id="push-nothing"
                    name="push-notifications"
                    type="radio"
                    className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"
                  />
                  <label
                    htmlFor="push-nothing"
                    className="block text-sm/6 font-medium text-yellow-800"
                  >
                    Free
                  </label>
                </div>
              </div>
            </fieldset>
          </div>
        </form>
      </div>
    </React.Fragment>
  );
};

export default LeftSideBar;
