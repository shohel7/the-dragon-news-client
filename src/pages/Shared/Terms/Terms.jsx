import React from "react";
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";

const Terms = () => {
  return (
    <Container>
      <h2>Terms and conditions</h2>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore,
        quisquam, amet incidunt tenetur est quibusdam consequuntur illum
        repudiandae maxime natus hic officiis possimus delectus sed eligendi
        magnam quaerat reiciendis nostrum! Aspernatur corrupti rerum
        necessitatibus eaque aut! Cumque harum quam quo, distinctio commodi modi
        numquam, aliquid adipisci eveniet soluta repellat suscipit, rerum
        ratione. Ullam doloribus odit a? Inventore, veritatis. Dicta tenetur
        odio dolorem reprehenderit suscipit accusamus adipisci veritatis aliquid
        ratione excepturi quod blanditiis quasi, necessitatibus eum enim modi
        aliquam laudantium. Eum.
      </p>
      <p>
        Go back to <Link to="/register">Register</Link>
      </p>
    </Container>
  );
};

export default Terms;
