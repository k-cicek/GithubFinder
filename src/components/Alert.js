import React, { useContext } from "react";
import AlertContext from "../context/alert/alertContext";

const Alert = () => {
  const { alert } = useContext(AlertContext);

  return (
    alert !== null && (
      <div className="container my-2">
        <div
          className={`alert alert-${alert.type} alert-dismissible fade show`}
        >
          {alert.msg}
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="alert"
            aria-label="Close"
          ></button>
        </div>
      </div>
    )
  );
};

export default Alert;
