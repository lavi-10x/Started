const Contact = () => {
  return (
    <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
      <div className="max-w-xl mx-auto">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-gray-800 sm:text-4xl dark:text-white">
            Contact us
          </h1>
          <p className="mt-1 text-gray-600 dark:text-gray-400">
            We&apos;d love to talk about how we can help you.
          </p>
        </div>
      </div>

      <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-8">
        <a
          className="group flex flex-col text-center rounded-lg p-4 sm:p-6 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 dark:hover:bg-white/10 dark:focus:bg-white/10"
          href="#"
        >
          <svg
            className="w-9 h-9 text-gray-800 dark:text-white mx-auto"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <circle cx="12" cy="12" r="10" />
            <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" />
            <path d="M12 17h.01" />
          </svg>
          <div className="mt-5">
            <h3 className="text-lg font-semibold text-gray-800 dark:text-white">
              Knowledgebase
            </h3>
            <p className="mt-1 text-gray-500 dark:text-gray-400">
              We&apos;re here to help with any questions or code.
            </p>
            <p className="mt-5 inline-flex items-center gap-x-1 font-medium text-yellow-400 dark:text-yellow-400">
              Contact support
              <svg
                className="shrink-0 w-4 h-4 transition ease-in-out group-hover:translate-x-1 group-focus:translate-x-1"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="m9 18 6-6-6-6" />
              </svg>
            </p>
          </div>
        </a>

        <a
          className="group flex flex-col text-center rounded-lg p-4 sm:p-6 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 dark:hover:bg-white/10 dark:focus:bg-white/10"
          href="#"
        >
          <svg
            className="w-9 h-9 text-gray-800 dark:text-white mx-auto"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M14 9a2 2 0 0 1-2 2H6l-4 4V4c0-1.1.9-2 2-2h8a2 2 0 0 1 2 2v5Z" />
            <path d="M18 9h2a2 2 0 0 1 2 2v11l-4-4h-6a2 2 0 0 1-2-2v-1" />
          </svg>
          <div className="mt-5">
            <h3 className="text-lg font-semibold text-gray-800 dark:text-white">
              FAQ
            </h3>
            <p className="mt-1 text-gray-500 dark:text-gray-400">
              Search our FAQ for answers to anything you might ask.
            </p>
            <p className="mt-5 inline-flex items-center gap-x-1 font-medium text-yellow-400 dark:text-yellow-400">
              Visit FAQ
              <svg
                className="shrink-0 w-4 h-4 transition ease-in-out group-hover:translate-x-1 group-focus:translate-x-1"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="m9 18 6-6-6-6" />
              </svg>
            </p>
          </div>
        </a>

        <a
          className="group flex flex-col text-center rounded-lg p-4 sm:p-6 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 dark:hover:bg-white/10 dark:focus:bg-white/10"
          href="#"
        >
          <svg
            className="w-9 h-9 text-gray-800 dark:text-white mx-auto"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="m7 11 2-2-2-2" />
            <path d="M11 13h4" />
            <rect width="18" height="18" x="3" y="3" rx="2" ry="2" />
          </svg>
          <div className="mt-5">
            <h3 className="text-lg font-semibold text-gray-800 dark:text-white">
              Developer APIs
            </h3>
            <p className="mt-1 text-gray-500 dark:text-gray-400">
              Check out our development quickstart guide.
            </p>
            <p className="mt-5 inline-flex items-center gap-x-1 font-medium text-yellow-400 dark:text-yellow-400">
              Contact sales
              <svg
                className="shrink-0 w-4 h-4 transition ease-in-out group-hover:translate-x-1 group-focus:translate-x-1"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="m9 18 6-6-6-6" />
              </svg>
            </p>
          </div>
        </a>
      </div>
      </div>
  );
}

Contact.displayName = "Contact";

export default Contact;