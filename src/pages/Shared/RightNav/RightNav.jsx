import React from "react";
import { Button, ListGroup } from "react-bootstrap";
import {
  FaFacebook,
  FaGithub,
  FaGoogle,
  FaInstagram,
  FaTwitter,
} from "react-icons/fa";
import QZone from "../Qzone/Qzone";
import bg from "../../../assets/bg.png";

const RightNav = () => {
  return (
    <div>
      <h4 className="mt-4">Login With</h4>
      <Button className="mb-2" variant="outline-primary">
        <FaGoogle /> Login with Google
      </Button>
      <Button variant="outline-secondary">
        <FaGithub />
        Login with github
      </Button>

      <div>
        <h4 className="mt-4">Find Us On</h4>
        <ListGroup>
          <ListGroup.Item>
            <FaFacebook /> Facebook
          </ListGroup.Item>
          <ListGroup.Item>
            <FaTwitter /> Twitter
          </ListGroup.Item>
          <ListGroup.Item>
            <FaInstagram /> Instagram
          </ListGroup.Item>
        </ListGroup>
      </div>
      <QZone />
      <div className="position-relative">
        <img src={bg} alt="" />
        <span className="position-absolute top-50 start-50 translate-middle text-white">
          <h4 className="border  border-primary p-3">
            Create an amazing newspaper
          </h4>
          <p className="text-light">
            Discover thousand of options, easy to customize layouts, one-click
            to import demo and much more
          </p>
          <Button variant="danger">Learn More</Button>
        </span>
      </div>
    </div>
  );
};

export default RightNav;
