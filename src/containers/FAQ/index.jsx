import React from 'react'
import Title from '../../components/Title';

function FAQ() {
  return (
    <section className="py-16 sm:py-24">
      <div className="container" data-aos="fade-up" data-aos-duration={2000}>
        <Title
          title="FAQ"
          page="Frequently Asked Questions"
          text="Here are some of the basic types of questions for our customers"
        />
        <div
          data-fc-type="accordion"
          className="mt-14 lg:w-3/4 lg:mx-auto 2xl:w-2/3"
        >
          {/* 1 */}
          <div className="border border-gray-300 rounded-lg">
            <bu
              p-5tton
              className="inline-flex p-5 items-center justify-between w-full font-semibold text-left transition"
              data-fc-type="collapse"
            >
              Can I use this template for my client?
              <span className="material-symbols-rounded text-xl block transition-all fc-collapse-open:rotate-180">
                <i className="fa-solid fa-angle-down" />
              </span>
            </bu>
            <div className="w-full overflow-hidden transition-[height] duration-300">
              <p className="text-gray-700 dark:text-gray-300 pt-3 p-5">
                Yup, the marketplace license allows you to use this theme in any
                end products. For more information on licenses, please refere
                license terms on marketplace.
              </p>
            </div>
          </div>
          {/* 2 */}
          <div className="border border-gray-300 rounded-lg mt-4">
            <button
              className="p-5 inline-flex items-center justify-between w-full font-semibold text-left transition"
              data-fc-type="collapse"
            >
              Can this theme work with WordPress?
              <span className="material-symbols-rounded text-xl block transition-all fc-collapse-open:rotate-180">
                <i className="fa-solid fa-angle-down" />
              </span>
            </button>
            <div className="hidden w-full overflow-hidden transition-[height] duration-300">
              <p className="text-gray-700 dark:text-gray-300 pt-3 p-5">
                No. This is a HTML template. It won't directly with WordPress,
                though you can convert this into WordPress compatible theme.
              </p>
            </div>
          </div>
          {/* 3 */}
          <div className="border border-gray-300 rounded-lg mt-4" id="faq">
            <button
              className="p-5 inline-flex items-center justify-between w-full font-semibold text-left transition"
              data-fc-type="collapse"
            >
              How do I get help with the theme?
              <span className="material-symbols-rounded text-xl block transition-all fc-collapse-open:rotate-180">
                <i className="fa-solid fa-angle-down" />
              </span>
            </button>
            <div className="hidden w-full overflow-hidden transition-[height] duration-300">
              <p className="text-gray-700 dark:text-gray-300 pt-3 p-5">
                Use our dedicated support email (support@coderthemes.com) to
                send your issues or feedback. We are here to help anytime.
              </p>
            </div>
          </div>
          {/* 4 */}
          <div className="border border-gray-300 rounded-lg mt-4">
            <button
              className="p-5 inline-flex items-center justify-between w-full font-semibold text-left transition"
              data-fc-type="collapse"
            >
              Will you regularly give updates of Prompt ?
              <span className="material-symbols-rounded text-xl block transition-all fc-collapse-open:rotate-180">
                <i className="fa-solid fa-angle-down" />
              </span>
            </button>
            <div className="hidden w-full overflow-hidden transition-[height] duration-300">
              <p className="text-gray-700 dark:text-gray-300 pt-3 p-5">
                Yes, We will update the Prompt regularly. All the future updates
                would be available without any cost.
              </p>
            </div>
          </div>
        </div>
        <div className="text-center mt-14">
          <p className="inline-flex flex-wrap gap-1 bg-gray-100 text-sm rounded-lg py-2 px-5">
            Still have unanswered questions?
            <a href="#" className="hover:text-primary transition-all">
              {" "}
              Contact Us
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}

export default FAQ