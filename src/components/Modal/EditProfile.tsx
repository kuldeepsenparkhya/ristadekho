"use client";
import React, { useState } from "react";
import Modal from "./Modal";

const EditProfile = () => {
  const [showModal, setShowModal] = useState(false);

  const handleModalClose = () => {
    setShowModal(false);
  };

  const handleSubmit = () => {
    alert("Form Submitted!");
    setShowModal(false);
  };

  const footerActions = [
    {
      label: "Cancel",
      onClick: handleModalClose,
      className:
        "inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto",
    },
    {
      label: "Submit",
      onClick: handleSubmit,
      className:
        "inline-flex w-full justify-center rounded-md bg-blue-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 sm:ml-3 sm:w-auto",
    },
  ];

  return (
    <div>
      <button
        onClick={() => setShowModal(true)}
        className="bg-blue-500 text-white px-4 py-2 rounded-md"
      >
        Open Modal
      </button>

      <Modal
        show={showModal}
        onClose={handleModalClose}
        title="Edit Profile"
        size="lg"
        footerActions={footerActions}
      >
        <form>
          <label>
            First Name:
            <input type="text" placeholder="Enter your first name" />
          </label>
          <br />
          <label>
            Last Name:
            <input type="text" placeholder="Enter your last name" />
          </label>
        </form>
      </Modal>
    </div>
  );
};

export default EditProfile;
