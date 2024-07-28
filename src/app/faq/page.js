import React from "react";
import ContactForm from "../contact/_components/ContactForm";
import { defaultMetaData, faqs } from "../../../data/data";

export const metadata = {
  ...defaultMetaData,
  title: defaultMetaData.title + " | " + "Faqs",
};

function Faq() {
  return (
    <>
      <div className="faq-section pt-130 mb-130">
        <div className="container-lg container-fluid">
          <div className="section-title six mb-70">
            <h2>FAQ’s</h2>
            <div className="dash-and-paragraph">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 877 64">
                <path d="M0.333333 3C0.333333 4.47276 1.52724 5.66667 3 5.66667C4.47276 5.66667 5.66667 4.47276 5.66667 3C5.66667 1.52724 4.47276 0.333333 3 0.333333C1.52724 0.333333 0.333333 1.52724 0.333333 3ZM875 3L875.271 3.42013L876.697 2.5H875V3ZM842.084 64L845.265 59.1819L839.502 58.836L842.084 64ZM3 3.5H875V2.5H3V3.5ZM874.729 2.57987C861.302 11.2438 844.485 27.4669 841.856 59.4675L842.852 59.5494C845.45 27.938 862.03 11.9643 875.271 3.42013L874.729 2.57987Z" />
              </svg>
            </div>
          </div>
          <div className="faq-wrap">
            <div className="row g-4">
              {faqs.map((data, index) => {
                return (
                  <div className="col-lg-6">
                    <div className="single-faq">
                      <h6>
                        {index + 1}. {data.question}
                      </h6>
                      <p>{data.answer}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
      <div className="faq-contact-area mb-130">
        <div className="container-lg container-fluid">
          <div className="faq-contact-top-area">
            <svg
              className="vector"
              width={251}
              height={215}
              viewBox="0 0 251 215"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M179.588 -45.6792L180 -45.0786L180.412 -45.6792L235.082 -125.32L232.391 -28.7033L232.37 -27.9741L233.058 -28.2182L324.266 -60.6116L265.209 15.9142L264.762 16.493L265.463 16.6994L358.229 44L265.463 71.3006L264.762 71.507L265.209 72.0858L324.266 148.612L233.058 116.218L232.37 115.974L232.391 116.703L235.082 213.32L180.412 133.679L180 133.079L179.588 133.679L124.919 213.32L127.609 116.703L127.63 115.974L126.942 116.218L35.8752 148.612L94.7917 72.0853L95.2371 71.5068L94.5367 71.3006L1.77101 44L94.5367 16.6994L95.2371 16.4932L94.7917 15.9147L35.8752 -60.6116L126.942 -28.2183L127.63 -27.9737L127.609 -28.7033L124.919 -125.32L179.588 -45.6792Z" />
            </svg>
            <div className="section-title six">
              <h2>Do you have any question in your mind?</h2>
              <div className="dash-and-paragraph">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 877 64">
                  <path d="M0.333333 3C0.333333 4.47276 1.52724 5.66667 3 5.66667C4.47276 5.66667 5.66667 4.47276 5.66667 3C5.66667 1.52724 4.47276 0.333333 3 0.333333C1.52724 0.333333 0.333333 1.52724 0.333333 3ZM875 3L875.271 3.42013L876.697 2.5H875V3ZM842.084 64L845.265 59.1819L839.502 58.836L842.084 64ZM3 3.5H875V2.5H3V3.5ZM874.729 2.57987C861.302 11.2438 844.485 27.4669 841.856 59.4675L842.852 59.5494C845.45 27.938 862.03 11.9643 875.271 3.42013L874.729 2.57987Z" />
                </svg>
                <p>
                  Offer a wide range of services to help businesses establish.
                </p>
              </div>
            </div>
          </div>
          <div className="faq-contact-form-area">
            <div className="row justify-content-center">
              <div className="col-lg-10">
                <div className="faq-contact-form-wrap">
                  <ContactForm />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Faq;
