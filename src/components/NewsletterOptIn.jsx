import React, { useState } from "react";

const NewsletterOptIn = () => {
  const [showOptinForm, setShowOptinForm] = useState(false);
  const [showOptinCard, setShowOptinCard] = useState(true);

  const handleClick = (e) => {
    setShowOptinForm(true);
    setShowOptinCard(false);
  };

  const closeOptinForm = (e) => {
    e.preventDefault();
    setShowOptinForm(false);
    setShowOptinCard(true);
  };

  return (
    <>
      <div className="sm:px-20 px-6 pb-10">
        <div className="rounded-3xl bg-black p-5 text-white sm:w-[50%] sm:mx-auto sm:mt-10">
          <div className="pointer-events-auto mb-2">
            <span className="float-left">
              <a href="" class="block px-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="w-6 h-6"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M21.75 9v.906a2.25 2.25 0 01-1.183 1.981l-6.478 3.488M2.25 9v.906a2.25 2.25 0 001.183 1.981l6.478 3.488m8.839 2.51l-4.66-2.51m0 0l-1.023-.55a2.25 2.25 0 00-2.134 0l-1.022.55m0 0l-4.661 2.51m16.5 1.615a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V8.844a2.25 2.25 0 011.183-1.98l7.5-4.04a2.25 2.25 0 012.134 0l7.5 4.04a2.25 2.25 0 011.183 1.98V19.5z"
                  />
                </svg>
                <span class="sr-only"> Search </span>
              </a>
            </span>

            {showOptinForm && (
              <span className="float-right" onClick={closeOptinForm}>
                <a href="" class="block px-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    class="w-6 h-6"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                  <span class="sr-only"> Search </span>
                </a>
              </span>
            )}
          </div>

          <br />

          {showOptinCard && (
            <p className="px-2 py-2">Subscribe to Samyak Khatua's Newsletter</p>
          )}

          {showOptinForm && (
            <div className="grid items-center">
              <p className="px-2 py-2">
                Get latest blogs, guides, updates in your inbox to accelerate
                your growth in life.
              </p>
              <input
                type="text"
                id="name"
                value=""
                placeholder="Your name"
                class="form-input px-4 py-2 my-2 rounded-2xl text-black"
              />

              <input
                type="email"
                id="lname"
                value=""
                placeholder="Your e-mail address"
                className="form-input px-4 py-2 rounded-2xl text-black"
              />

              <button
                className="bg-bermuda text-black w-full rounded-2xl py-2 mt-7"
                onClick={handleClick}
              >
                Subscribe
              </button>

              <p className="text-white py-2 text-xs text-center px-5">
                Your email is safe with me, I don't spam or sell your emails.
              </p>
            </div>
          )}

          {showOptinCard && (
            <div className="">
              <button
                className="bg-bermuda text-black w-full rounded-3xl py-2"
                onClick={handleClick}
              >
                Subscribe
              </button>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default NewsletterOptIn;
