import React from "react";
import { Link } from "react-router-dom";

function FormSuccess() {
  return (
    <div className="my-auto mx-auto font-montserrat ">
      <h2 className="font-bold">Thanks for Reaching out to us.</h2>
      <p className="mt-4">
        Return to{" "}
        <Link to="/" className="text-blue">
          Home
        </Link>
      </p>
    </div>
  );
}

export default FormSuccess;
