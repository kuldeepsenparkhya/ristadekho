import React from "react";

const Aggreement = () => {
  return (
    <React.Fragment>
      <div
        className="relative z-10"
        aria-labelledby="modal-title"
        role="dialog"
        aria-modal="true"
      >
        <div
          className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"
          aria-hidden="true"
        />
        <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
          <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
            <div className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
              <div className="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
                <div className="sm:flex sm:items-start">
                  <div className="mx-auto flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-red-100 sm:mx-0 sm:h-10 sm:w-10">
                    <svg
                      className="h-6 w-6 text-red-600"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      aria-hidden="true"
                      data-slot="icon"
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
                      className="text-base font-semibold leading-6 text-gray-900"
                      id="modal-title"
                    >
                      Terms and conditions
                    </h3>
                    <div className="mt-2">
                      <p className="text-sm text-gray-500">
                        Terms and Conditions for [Your Matrimonial Website Name]
                        Effective Date: [Insert Date] Welcome to [Your
                        Matrimonial Website Name]! By accessing or using our
                        website and services, you agree to comply with and be
                        bound by the following Terms and Conditions. If you do
                        not agree with these terms, please do not use our
                        services. 1. Acceptance of Terms By creating an account
                        on [Your Matrimonial Website Name], you confirm that you
                        have read, understood, and agree to be bound by these
                        Terms and Conditions. If you are creating an account on
                        behalf of another person or entity, you represent that
                        you have the authority to bind them to these terms. 2.
                        Eligibility To use our services, you must be at least
                        [insert minimum age, e.g., 18 years] old. By using our
                        website, you represent that you meet this eligibility
                        requirement. 3. Account Registration You must provide
                        accurate, complete, and current information during the
                        registration process. You are responsible for
                        maintaining the confidentiality of your account and
                        password. You agree to notify us immediately of any
                        unauthorized use of your account or any other breach of
                        security. 4. User Conduct You agree to use our services
                        only for lawful purposes and in a manner that does not
                        infringe on the rights of others or restrict or inhibit
                        anyone else’s use of the services. Prohibited activities
                        include, but are not limited to: Impersonating any
                        person or entity. Harassing, threatening, or
                        intimidating other users. Posting false or misleading
                        information. Using automated means (such as bots or
                        scrapers) to access the service without our prior
                        written consent. 5. User Content You are responsible for
                        the content you post on our website, including but not
                        limited to personal details, photographs, and any other
                        information. By posting content, you grant us a
                        non-exclusive, royalty-free, perpetual, and worldwide
                        license to use, reproduce, modify, publish, and
                        distribute such content. 6. Privacy Policy Your privacy
                        is important to us. Our Privacy Policy outlines how we
                        collect, use, and protect your personal information. By
                        using our services, you consent to the practices
                        described in our Privacy Policy. 7. Termination of
                        Account We reserve the right to suspend or terminate
                        your account at our sole discretion, without notice, for
                        any conduct that we believe violates these Terms and
                        Conditions or is harmful to other users or us. 8.
                        Disclaimers [Your Matrimonial Website Name] provides the
                        platform for users to connect with potential partners.
                        We do not guarantee the accuracy, reliability, or
                        quality of any information posted by users. We are not
                        responsible for any disputes or issues arising between
                        users. 9. Limitation of Liability To the fullest extent
                        permitted by law, [Your Matrimonial Website Name] shall
                        not be liable for any direct, indirect, incidental,
                        special, consequential, or punitive damages arising from
                        your use of our services or any content posted by users.
                        10. Changes to Terms We reserve the right to modify
                        these Terms and Conditions at any time. We will notify
                        you of any changes by updating the effective date at the
                        top of this document. Your continued use of our services
                        after any changes indicates your acceptance of the new
                        terms. 11. Governing Law These Terms and Conditions
                        shall be governed by and construed in accordance with
                        the laws of [Your Jurisdiction]. 12. Contact Us If you
                        have any questions or concerns regarding these Terms and
                        Conditions, please contact us at [Your Contact
                        Information]. By creating an account on [Your
                        Matrimonial Website Name], you acknowledge that you have
                        read, understood, and agree to these Terms and
                        Conditions.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
                <button
                  type="button"
                  className="inline-flex w-full justify-center rounded-md bg-red-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-red-500 sm:ml-3 sm:w-auto"
                >
                  Deactivate
                </button>
                <button
                  type="button"
                  className="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto"
                >
                  Cancel
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Aggreement;
