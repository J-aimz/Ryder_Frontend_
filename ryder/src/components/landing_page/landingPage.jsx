import React from "react";

import bgImage from "../../images/slider-bg-img.svg";
import bgImage2 from "../../images/Pick-n-Pay.svg"; // Import the background image

// import required service icons

import secure_reliable from "../../images/icons/eos-icons_secure-data-outlined.svg";
import time_delivery from "../../images/icons/ic_baseline-access-time.svg";
import shipping from "../../images/icons/fa-solid_shipping-fast.svg";
import customer_service from "../../images/icons/ri_customer-service-fill.svg";
import world from "../../images/icons/bx_world.svg";
import building from "../../images/icons/fluent_building-shop-16-filled.svg";

// Define the list of services with their data
const servicesData = [
  {
    id: 1,
    icon: secure_reliable,
    description: "Reliable and secure",
    details:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In ante maecenas fusce orci nullam aenean arcu tellus. Massa rhoncus vestibulum, at nunc pellentesque ornare urna."
  },
  {
    id: 2,
    icon: time_delivery,
    description: "On-time delivery",
    details:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In ante maecenas fusce orci nullam aenean arcu tellus. Massa rhoncus vestibulum, at nunc pellentesque ornare urna."
  },
  {
    id: 3,
    icon: shipping,
    description: "Track your shipment",
    details:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In ante maecenas fusce orci nullam aenean arcu tellus. Massa rhoncus vestibulum, at nunc pellentesque ornare urna."
  },
  {
    id: 4,
    icon: customer_service,
    description: "Great Customer Service",
    details:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In ante maecenas fusce orci nullam aenean arcu tellus. Massa rhoncus vestibulum, at nunc pellentesque ornare urna."
  },
  {
    id: 5,
    icon: world,
    description: "Nationwide Delivery",
    details:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In ante maecenas fusce orci nullam aenean arcu tellus. Massa rhoncus vestibulum, at nunc pellentesque ornare urna."
  },
  {
    id: 6,
    icon: building,
    description: "Order Fulfilment",
    details:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In ante maecenas fusce orci nullam aenean arcu tellus. Massa rhoncus vestibulum, at nunc pellentesque ornare urna."
  }
];

const LandingPage = () => {
  return (
    <div>
      {/* First Section */}
      <section
        className="bg-image"
        style={{
          backgroundImage: `url(${bgImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: "100vh",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          textAlign: "center"
        }}
      >
        <div>
          <h1 className="text-light">
            Fast, Reliable & Quality Dispatch Service
          </h1>
          <p className="text-light">Send. Track. Receive.</p>
          <div className="d-flex justify-content-center mt-4">
            <button className="btn btn-warning me-2">
              Register as a Customer
            </button>
            <button className="btn btn-outline-light">
              Register as a Rider
            </button>
          </div>
        </div>
      </section>

      {/* Second Section */}
      <section className="container mb-5">
        <div className="container text-center">
          <h1
            className="text-center p-3"
            style={{
              color: "#FB8500",
              fontFamily: "Inter",
              fontWeight: "700px"
            }}
          >
            Top Notch Services
          </h1>
          <p className="text-wrap">
            Quickly integrate powerful solutions that give you more flexibility
            and control over your parcel shipping and logistics processes.
          </p>
          <div className="row mt-5">
            {servicesData.map((service) => (
              <div
                key={service.id}
                className="col-md-4 border d-flex align-items-center"
              >
                <div className="service-item">
                  <img
                    src={service.icon}
                    alt="Service Icon"
                    className="service-icon"
                  />
                  <p className="service-description ">{service.description}</p>
                  <p className="service-details ">{service.details}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Third Section */}
      <section
        style={{
          background: "rgba(0, 0, 0, 0.04)", // Background color with opacity
          padding: "50px 0" // Adjust padding as needed
        }}
      >
        <div className="container">
          <div className="row align-items-center">
            {/* First Div */}
            <div className="col-md-6">
              <img src={bgImage2} alt="Image" className="img-fluid" />
            </div>

            {/* Second Div */}
            <div className="col-md-6 p-4">
              <div>
                <h1
                  style={{
                    color: "#FB8500",
                    fontFamily: "Inter",
                    fontWeight: "700px"
                  }}
                >
                  Quality Riders & Partners Ready to Deliver
                </h1>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Convallis volutpat tortor ultricies tincidunt magna. Faucibus
                  tempus pretium sed enim integer at aliquet a. Semper vel id
                  lectus quis vitae, velit est. Orci mi sed dui viverra.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Content for the remaining sections will be added here */}
    </div>
  );
};

export default LandingPage;
