import React from "react";
import UsersList from "../components/UsersList";

const Users = () => {
  const USERS = [
    {
      id: "u1",
      name: "Lotfi something",
      image:
        "https://cdn.pixabay.com/photo/2018/08/28/12/41/avatar-3637425_960_720.png",
      places: 5,
    },
    {
      id: "u2",
      name: "Samir Anything",
      image:
        "https://cdn.pixabay.com/photo/2018/08/28/12/41/avatar-3637425_960_720.png",
      places: 25,
    },
  ];
  return (
    <div>
      <h3>Users List</h3>
      <UsersList items={USERS} />
    </div>
  );
};

export default Users;
