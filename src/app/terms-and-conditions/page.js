import ServicesMarquee from "@/components/common/ServicesMarquee";
import React from "react";
import { defaultMetaData } from "../../../data/data";

export const metadata = {
  ...defaultMetaData,
  title: defaultMetaData.title + " | " + "Terms and Conditions",
};

function TermsAndConditions() {
  return (
    <>
      <div className="terms-and-conditions-page pt-130 mb-130">
        <div className="container-lg container-fluid">
          <div className="row mb-130">
            <div className="col-lg-12">
              <div className="section-title six">
                <h2>Terms &amp; Conditions</h2>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-12 ">
              <div className="update-date mb-30">
                <h6>
                  <i className="bi bi-caret-right-fill" /> Last Updated
                </h6>
                <p>28 July, 2024</p>
              </div>
            </div>
            <div className="col-lg-12 mb-40">
              <div className="terms-and-conditions">
                <h4>1. Terms &amp; Conditions</h4>
                <p>
                  Welcome to Rudisn. By accessing or using our services, you
                  agree to comply with and be bound by the following terms and
                  conditions. Please review them carefully.
                </p>
                <ul>
                  <li>
                    <strong>i ) Fees and Payment:</strong>
                    <p>
                      All fees for services provided by Rudisn are agreed upon
                      prior to the commencement of work. We offer two payment
                      methods:
                    </p>
                    <ul>
                      <li>
                        <strong>Plan 1:</strong>
                        <ul>
                          <li>30% Advance Payment to initiate the work.</li>
                          <li>
                            40% Payment after Completing half of the Modules.
                          </li>
                          <li>30% Payment after Project Delivery.</li>
                        </ul>
                      </li>
                      <li>
                        <strong>Plan 2:</strong>
                        <p>Divide the payment into monthly instalments.</p>
                      </li>
                    </ul>
                    <p>Late payments may incur additional charges.</p>
                  </li>
                  <li>
                    <strong>ii ) Termination and Cancellation:</strong>
                    <p>
                      Either party may terminate the agreement with written
                      notice. In the event of termination, the client is
                      responsible for payment of all work completed up to the
                      date of termination. Cancellation fees may apply.
                    </p>
                  </li>
                  <li>
                    <strong>iii ) Liability and Indemnification:</strong>
                    <p>
                      Rudisn is not liable for any indirect, incidental, or
                      consequential damages arising from the use of our
                      services. The client agrees to indemnify and hold Rudisn
                      harmless from any claims or damages resulting from their
                      use of our services.
                    </p>
                  </li>
                  <li>
                    <strong>iv ) Governing Law and Jurisdiction:</strong>
                    <p>
                      These terms and conditions are governed by the laws of the
                      jurisdiction in which Rudisn operates. Any disputes
                      arising from these terms shall be resolved in the courts
                      of that jurisdiction.
                    </p>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-12">
              <div className="terms-and-conditions">
                <h4>2. Privacy Policy</h4>
                <p>
                  Your privacy is important to us. This privacy policy outlines
                  how we collect, use, and protect your personal information.
                </p>
                <p>
                  <strong>Information Collection:</strong> We collect personal
                  information that you voluntarily provide to us, such as your
                  name, email address, phone number, and any other information
                  you choose to provide.
                </p>
                <p>
                  <strong>Use of Information:</strong> The information we
                  collect is used to provide and improve our services, respond
                  to inquiries, and communicate with you about our services. We
                  do not sell or share your personal information with third
                  parties without your consent.
                </p>
                <p>
                  <strong>Security:</strong> We implement security measures to
                  protect your personal information from unauthorized access,
                  use, or disclosure. However, no method of transmission over
                  the internet is 100% secure, and we cannot guarantee absolute
                  security.
                </p>
                <p>
                  <strong>Changes to the Privacy Policy:</strong> We may update
                  this privacy policy from time to time. Any changes will be
                  posted on this page, and we encourage you to review it
                  periodically.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default TermsAndConditions;
