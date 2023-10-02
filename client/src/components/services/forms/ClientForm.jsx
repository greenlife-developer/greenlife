import React from "react";

const ClientForm = () => {
  return (
    <div className="client-form-container">
      <form action="/clients/bookservice" method="POST">
        <div className="clients-details">
          <h1>Your Details</h1>
          <div className="form-field">
            <label htmlFor="name">Name</label>
            <input name="clientName" type="text" required />
          </div>
          <div className="form-field">
            <label htmlFor="email">Email</label>
            <input name="clientEmail" type="email" required />
          </div>
          <div className="form-field">
            <label htmlFor="phone">Phone Number</label>
            <input name="clientPhone" type="text" required />
          </div>
        </div>
        <div className="service-project-details">
          <div className="company">
            <h1>Company Details</h1>
            <div className="form-field">
              <label htmlFor="company-name">Company Name</label>
              <input
                name="companyName"
                type="text"
                placeholder="Leave empty if there no company"
              />
            </div>
            <div className="form-field">
              <label htmlFor="company size">Company Size</label>
              <select name="companySize" id="">
                <option value="">select</option>
                <option value="1-5">1 - 5</option>
                <option value="5-10">5 - 10</option>
                <option value="10-50">10 - 50</option>
                <option value="50+">50+</option>
              </select>
            </div>
          </div>
          <div className="project-name-scope">
            <h1>Project Details</h1>
            <div className="form-field">
              <label htmlFor="project-name">Project Name</label>
              <input name="projectName" type="text" placeholder="" />
            </div>
            <div className="form-field">
              <label htmlFor="project-scope">Project Scope</label>
              <textarea
                name="projectScope"
                id=""
                cols="30"
                rows="10"
                placeholder="Include everything you want us to build for you"
              ></textarea>
            </div>
            <div className="agreement">
              <div className="agreement-field">
                <input type="checkbox" name="note" id="" required />
                <span>
                  You will receive an email from us that contains the details
                  you have filled and a document that lets you decide whether we
                  should proceed with your work if you agree with the terms and
                  conditions.
                </span>
              </div>
              <div className="agreement-field">
                <input type="checkbox" name="sendDetails" id="" required />
                <span>
                  You will be required to send required details via email. You
                  may chat the phone number that will come with your project
                  details on WhatsApp if you have futher comments on your
                  project.
                </span>
              </div>
            </div>
            <div className="submit">
                <input type="submit" value="Submit" />
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default ClientForm;
