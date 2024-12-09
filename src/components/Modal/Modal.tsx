"use client";
import React, { useEffect, useState } from "react";

const Modal = ({
  show,
  onClose,
  title,
  size = "md", // Default size is 'md'
  children,
  footerActions = [], // Array to pass footer actions dynamically (buttons)
  customCloseButton = true, // Allow turning off the close button
  backdropClose = true, // Allow closing by clicking on backdrop
}) => {
  const [isVisible, setIsVisible] = useState(show);

  useEffect(() => {
    if (show) {
      setIsVisible(true);
    } else {
      setTimeout(() => setIsVisible(false), 300); // Delay to match transition duration
    }
  }, [show]);

  const handleCloseClick = () => {
    if (backdropClose) {
      setIsVisible(false);
      setTimeout(() => onClose(), 300); // Wait for fade-out
    }
  };

  return (
    <React.Fragment>
      {isVisible && (
        <div
          className={`fixed inset-0 z-10 overflow-y-auto ${show ? 'fade-in' : 'fade-out'}`}
          role="dialog"
          aria-modal="true"
        >
          {/* Backdrop */}
          <div
            className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity duration-300"
            aria-hidden="true"
            onClick={handleCloseClick} // Clicking backdrop closes the modal
          />
          {/* Modal Content */}
          <div className="flex min-h-full items-center justify-center p-4 text-center sm:items-center sm:p-0">
            <div
              className={`relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-${size}`}
            >
              <div className="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
                <div className="sm:flex sm:items-start">
                  <div className="mx-auto flex size-12 shrink-0 items-center justify-center rounded-full bg-red-100 sm:mx-0 sm:size-10">
                    <svg
                      className="size-6 text-red-600"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126ZM12 15.75h.007v.008H12v-.008Z"
                      />
                    </svg>
                  </div>
                  <div className="mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left">
                    <h3
                      className="text-base font-semibold text-gray-900"
                      id="modal-title"
                    >
                      {title}
                    </h3>
                    <div className="mt-2">{children}</div>
                  </div>
                </div>
              </div>

              {/* Footer Actions */}
              <div className="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
                {footerActions.length === 0 ? (
                  <button
                    type="button"
                    onClick={handleCloseClick}
                    className="inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto"
                  >
                    Close
                  </button>
                ) : (
                  footerActions.map((action, index) => (
                    <button
                      key={index}
                      type="button"
                      onClick={action.onClick}
                      className={action.className}
                    >
                      {action.label}
                    </button>
                  ))
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </React.Fragment>
  );
};

export default Modal;
