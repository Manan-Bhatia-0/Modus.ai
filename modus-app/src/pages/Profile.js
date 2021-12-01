/* eslint-disable */
import React from "react";
import ReactDOM from "react-dom";
import { deleteCurrentUser } from "../firebase";
import { Link, useHistory } from "react-router-dom";
import { confirm } from "react-confirm-box";

const optionsWithLabelChange = {
  closeOnOverlayClick: false,
  labels: {
    confirmable: "Confirm",
    cancellable: "Cancel",
  },
};

const onClick = async (options) => {
  const result = await confirm(
    "Are you sure you want to delete your account?",
    options
  );
  if (result) {
    deleteCurrentUser();
    history.push("/");
    console.log("Deleted User!");
    return;
  }
  console.log("Deleting Cancelled");
};

function Profile() {
  const history = useHistory();
  return (
    <div>
      <h1>Profile</h1>
      <button
        onClick={() => {
          onClick(optionsWithLabelChange);
        }}
        right="100px"
      >
        {" "}
        Delete Profile{" "}
      </button>
      <button
        right="100px"
        justifyContent="center"
        alignItems="center"
        onClick={() => {
          deleteCurrentUser();
        }}
      >
        {" "}
        Delete Profile{" "}
      </button>
    </div>
  );
}

export default Profile;
