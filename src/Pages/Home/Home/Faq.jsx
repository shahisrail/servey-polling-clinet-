/* eslint-disable no-unused-vars */
import React from "react";

const Faq = () => {
  return (
    <div className="mt-5">
      <div className="collapse collapse-plus bg-base-200 mb-5">
        <input type="radio" name="my-accordion-3" />
        <div className="collapse-title text-xl font-medium">
          In what ways can I use surveys for effective data collection?
        </div>
        <div className="collapse-content">
          <p>
            Our platform offers versatile survey templates designed for market
            research, customer feedback, and employee engagement, ensuring
            comprehensive data acquisition across various domains.
          </p>
        </div>
      </div>
      <div className="collapse collapse-plus bg-base-200 mb-5">
        <input type="radio" name="my-accordion-3" />
        <div className="collapse-title text-xl font-medium">
          How secure is the data collected through your polling system?
        </div>
        <div className="collapse-content">
          <p>
            We employ state-of-the-art encryption methods and stringent data
            security measures, guaranteeing the confidentiality and protection
            of all survey responses and participant information
          </p>
        </div>
      </div>
      <div className="collapse collapse-plus bg-base-200 mb-5">
        <input type="radio" name="my-accordion-3" />
        <div className="collapse-title text-xl font-medium">
          Can I access real-time analytics and reporting for survey insights?
        </div>
        <div className="collapse-content">
          <p>
            Our survey tool provides intuitive dashboards and real-time
            reporting features, empowering users to swiftly analyze responses,
            generate detailed reports, and derive actionable insights
            on-the-fly.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Faq;
