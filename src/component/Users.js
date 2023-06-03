import React, { useContext } from "react";
import UserCard from "./UserCard";
import { UsersCtx } from "../context/usersContext";

const Users = () => {
  const { users } = useContext(UsersCtx);
  return (
    <div>
      {users.map((user) => {
        return <UserCard user={user} />;
      })}
    </div>
  );
};

export default Users;
