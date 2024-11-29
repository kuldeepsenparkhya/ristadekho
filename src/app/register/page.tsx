"use client";

import Aggreement from "@/components/Aggreement";
import { useFormik } from "formik";
import React, { useState } from "react";
// import * as Yup from "yup";

interface FormValues {
  fullName: string;
  email: string;
  dateOfBirth: string;
  mobile: string;
  gender: string;
  profile: string;
  password: string;
}

const page: React.FC = () => {
  const [showAggreement, setShowAggreement] = useState<boolean>(false);

  const initialValues: FormValues = {
    fullName: "",
    email: "",
    dateOfBirth: "",
    gender: "",
    mobile: "",
    profile: "",
    password: "",
  };

  const formik = useFormik({
    initialValues: initialValues,
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
      setShowAggreement(() => true);
    },
  });

  return (
    <React.Fragment>
      <div className="isolate bg-white px-6 py-24 sm:py-32 lg:px-8">
        {!showAggreement ? (
          <>
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="text-balance text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl">
                Let’s start building your profile
              </h2>
            </div>
            <form
              onSubmit={formik.handleSubmit}
              className="mx-auto mt-16 max-w-xl sm:mt-20"
            >
              <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
                <div>
                  <label
                    htmlFor="first-name"
                    className="block text-sm font-semibold leading-6 text-gray-900"
                  >
                    Full Name
                  </label>
                  <div className="mt-2.5">
                    <input
                      type="text"
                      name="fullName"
                      placeholder="Full Name"
                      onChange={formik.handleChange}
                      value={formik.values.fullName}
                      className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>
                <div>
                  <label
                    htmlFor="mobile"
                    className="block text-sm font-semibold leading-6 text-gray-900"
                  >
                    Mobile
                  </label>
                  <div className="mt-2.5">
                    <input
                      type="text"
                      name="mobile"
                      placeholder="Mobile number"
                      onChange={formik.handleChange}
                      value={formik.values.mobile}
                      className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="first-name"
                    className="block text-sm font-semibold leading-6 text-gray-900"
                  >
                    Date of Birth
                  </label>
                  <div className="mt-2.5">
                    <input
                      type="text"
                      name="dateOfBirth"
                      placeholder="Date of birth"
                      onChange={formik.handleChange}
                      value={formik.values.dateOfBirth}
                      className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>
                <div>
                  <label
                    htmlFor="last-name"
                    className="block text-sm font-semibold leading-6 text-gray-900"
                  >
                    Email
                  </label>
                  <div className="mt-2.5">
                    <input
                      type="email"
                      name="email"
                      placeholder="Email"
                      onChange={formik.handleChange}
                      value={formik.values.email}
                      className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="last-name"
                    className="block text-sm font-semibold leading-6 text-gray-900"
                  >
                    Gender
                  </label>
                  <div className="mt-2.5">
                    <select
                      name="password"
                      className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    >
                      <option value="male">Male</option>
                      <option value="female">Female</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="last-name"
                    className="block text-sm font-semibold leading-6 text-gray-900"
                  >
                    Create Password
                  </label>
                  <div className="mt-2.5">
                    <input
                      type="password"
                      name="password"
                      placeholder="Create password"
                      onChange={formik.handleChange}
                      value={formik.values.password}
                      className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>
              </div>

              <div className="mt-10">
                <button
                  type="submit"
                  className="block w-full rounded-md bg-indigo-600 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                  Next
                </button>
              </div>
            </form>
          </>
        ) : (
          <>
            <Aggreement />
          </>
        )}
      </div>
    </React.Fragment>
  );
};

export default page;
