import React from "react";

export const Contact = () => {
  const handleFormSubmit = (formData) => {
    const formInputData = Object.fromEntries(formData.entries());
    console.log(formInputData);
  };
  return (
    <section className="section-contact">
      <h2 className="container-title">Contact Us</h2>
      <div className="contact-wrapper container">
        <form action={handleFormSubmit}>
          <input
            type="text"
            className="form-control"
            placeholder="Enter your name"
            name="username"
            required
            autoComplete="false"
          />
          <input
            type="email"
            className="form-control"
            placeholder="Enter your email"
            name="email"
            required
            autoComplete="false"
          />
          <textarea
            className="form-control"
            rows="7"
            placeholder="Enter your message"
            name="message"
            required
            autoComplete="false"
          ></textarea>
          <button type="submit" value="send">send</button>
        </form>
      </div>
    </section>
  );
};
