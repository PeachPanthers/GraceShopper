import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

const AdminDashboard = ({ isAdmin }) => {
  if (isAdmin) {
    return (
      <div className="manage">
        <div className="admin-home">
          <h2 className="admin-side"> Admin Dashboard</h2>
          <div className="first-content small ">
            <h3 className="fitting">
              {" "}
              <Link className="navbuttons" to="/admin-users">
                CUSTOMERS
              </Link>
            </h3>

            <p className="manage-p">
              {" "}
              View and manage current registered customers here.
            </p>
          </div>
          <div className="first-content small ">
            <h3 className="fitting">
              <Link to="/admin-products">
                <button>View and edit products</button>
              </Link>
            </h3>
            <p className="manage-p">
              View, create or update current stock of furntiure
            </p>
          </div>
        </div>
      </div>
    );
  }
};

const mapState = (state) => {
  return {
    isAdmin: state.auth.isAdmin,
  };
};

export default connect(mapState)(AdminDashboard);

