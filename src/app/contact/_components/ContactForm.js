"use client";
import React, { useState } from "react";
import { toast, Toaster } from "sonner";

function ContactForm() {
  const [isLoading, setIsLoading] = useState(false);
  const handleFormSubmit = (e) => {
    e.preventDefault();

    const form = e.target;
    const formData = new FormData(form);

    const data = {
      fullName: formData.get("fullName"),
      email: formData.get("email"),
      phoneNumber: formData.get("phoneNumber"),
      subject: formData.get("subject"),
      message: formData.get("message"),
    };

    sendEmail(data, form);
  };

  async function sendEmail(data, form) {
    setIsLoading(true);
    try {
      const response = await fetch("/api/contact-us", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          sentMessage: `
            <h1>Contact Us Form Submission</h1>
            <p><strong>Full Name:</strong> ${data.fullName}</p>
            <p><strong>Email:</strong> ${data.email}</p>
            <p><strong>Phone Number:</strong> ${data.phoneNumber}</p>
            <p><strong>Subject:</strong> ${data.subject}</p>
            <p><strong>Message:</strong></p>
            <p>${data.message}</p>
          `,
        }),
      });

      const result = await response.json();

      if (result?.isSuccess) {
        toast.success("Message Sent!", {
          description:
            "Our team will review your details and get back to you as soon as possible",
        });

        form.reset();
      } else {
        toast.error("Oops! Something Went Wrong", {
          description:
            "We encountered an issue while processing your request. Please try again later or contact support if the problem persists.",
        });
      }
    } catch (error) {
      toast.error("Oops! Something Went Wrong", {
        description:
          "We encountered an issue while processing your request. Please try again later or contact support if the problem persists.",
      });
    }

    setIsLoading(false);
  }

  return (
    <form onSubmit={handleFormSubmit}>
      <div className="row">
        <div className="col-md-6">
          <div className="form-inner mb-30">
            <label>Full Name*</label>
            <input
              type="text"
              name="fullName"
              placeholder="Enter Full Name"
              required
            />
          </div>
        </div>
        <div className="col-md-6">
          <div className="form-inner mb-30">
            <label>Your Email*</label>
            <input
              type="email"
              name="email"
              placeholder="Enter Email"
              required
            />
          </div>
        </div>
        <div className="col-md-6">
          <div className="form-inner mb-30">
            <label>
              Phone Number <span>(Optional)</span>
            </label>
            <input
              type="number"
              name="phoneNumber"
              placeholder="Enter Phone Number"
            />
          </div>
        </div>
        <div className="col-md-6">
          <div className="form-inner mb-30">
            <label>Subject</label>
            <input type="text" name="subject" placeholder="Enter Subject" />
          </div>
        </div>
        <div className="col-md-12">
          <div className="form-inner mb-30">
            <label>How can We Help You?</label>
            <textarea
              name="message"
              placeholder="How can we help"
              required
            ></textarea>
          </div>
        </div>
      </div>
      <div className="form-inner">
        <button
          className="primary-btn2 btn-hover"
          type="submit"
          disabled={isLoading}
          style={{
            opacity: isLoading ? 0.4 : 1,
          }}
        >
          {isLoading ? "Submitting..." : "Submit"}
          <svg
            width={12}
            height={12}
            viewBox="0 0 12 12"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M10.0035 3.40804L1.41153 12L0 10.5885L8.59097 1.99651H1.01922V0H12V10.9808H10.0035V3.40804Z"></path>
          </svg>
          <span style={{ top: "50.5px", left: "83.75px" }} />
        </button>
      </div>
      <Toaster richColors />
    </form>
  );
}

export default ContactForm;
