import PropTypes from "prop-types";
import clsx from "clsx";

const SectionTitleWithText = ({ spaceTopClass, spaceBottomClass }) => {
  return (
    <div className={clsx("welcome-area", spaceTopClass, spaceBottomClass)}>
      <div className="container">
        <div className="welcome-content text-center">
          <h5>Who Are We</h5>
          <h1>Welcome To Checkoutease</h1>
          <p>
          CheckOutEase is an ecommerce company that aims to simplify the online
          shopping experience for customers. Our website offers a wide variety 
          of products from different categories, including electronics, home 
          appliances, fashion, beauty, and more. We are committed to providing 
          our customers with high-quality products at competitive prices, and 
          we strive to ensure a seamless and secure checkout process. Our team 
          is dedicated to delivering exceptional customer service and making 
          online shopping convenient and enjoyable for everyone.{" "}
          </p>
        </div>
      </div>
    </div>
  );
};

SectionTitleWithText.propTypes = {
  spaceBottomClass: PropTypes.string,
  spaceTopClass: PropTypes.string
};

export default SectionTitleWithText;
