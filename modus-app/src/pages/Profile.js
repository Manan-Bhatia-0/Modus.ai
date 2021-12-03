/* eslint-disable */
import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import { deleteCurrentUser } from "../firebase";
import { Link, useHistory } from "react-router-dom";
import { confirm } from "react-confirm-box";
import { getUserName, editProfile } from "../firebase";

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
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [gender, setGender] = useState("");
  const [birthday, setBirthday] = useState("");
  // var select = document.getElementById('gender');
  // var gender = select.options[select.selectedIndex].value;
  //const history = useHistory();
  return (
    <div class="profile container">
      <h1 class="text-primary">Edit Profile</h1>
      <label class="name-field">Name:</label>
      <input
        class="form-control"
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <label class="age-field">Age:</label>
      <input
        class="form-control"
        type="text"
        value={age}
        onChange={(e) => setAge(e.target.value)}
      />
      <label class="gender-field">Gender:</label>
      <input class="form-control" type="text" value={gender} onChange = {(e) => setGender(e.target.value)}/>
      {/* <select
        id="genderForm"
        class="form-control"
        value={gender}
        onChange={(e) => setGender(e.target.value)}
      > */}
        {/* <option value="Female">Female</option>
        <option value="Male">Male</option>
        <option value="Other">Other</option>
      </select> */}
      <label class="birthday-field">Birthday:</label>
      /*{" "}
      <input
        class="form-control"
        type="date"
        value={birthday}
        onChange={(e) => setBirthday(e.target.value)}
      />
      <button
        className="saveProfile"
        onClick={() => editProfile(name, gender, age, birthday)}
      >
        Save Profile
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
