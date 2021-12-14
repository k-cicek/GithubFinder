import React from "react";

const Alert = (props) => {
  return (
    props.alert !== null && (
      <div className="container my-2">
        <div
          className={`alert alert-${props.alert.type} alert-dismissible fade show`}
        >
          {props.alert.msg}
          <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>

        </div>
      </div>



    )
  );
};

export default Alert;
