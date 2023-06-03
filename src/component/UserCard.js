import React, { useContext } from "react";
import { UsersCtx } from "../context/usersContext";

const UserCard = ({ user }) => {
  const { setUserFormMode, setEditUserObj, deleteUser } = useContext(UsersCtx);

  const handleEdit = () => {
    console.log("handleEdit", user);
    setEditUserObj(user);
    setUserFormMode("edit");
  };
  const handleDelete = () => {
    deleteUser(user.email);
  };
  return (
    <div class="p-6 max-w-md mx-auto bg-white rounded-xl shadow-lg flex items-center justify-between space-x-4 m-3">
      <div class="shrink-0">
        <img
          class="h-12 w-12"
          src={require("./../assets/useravatar.png")}
          alt="ChitChat Logo"
        />
      </div>
      <div>
        <div className="flex items-center">
          <div class="text-xl font-medium text-black text-left">
            {user.firstname} {user.lastname}
          </div>
          <div className="px-2">|</div>
          <div>{user.age}</div>
        </div>
        <p class="text-slate-600 text-left">{user.phoneNumber}</p>
        <p class="text-slate-500">{user.email}</p>
      </div>
      <div className="flex">
        <button
          className="bg-blue-400 bg-cyan mr-2 px-2 rounded"
          onClick={handleEdit}
        >
          Edit
        </button>
        <button className="bg-red-500 px-2 rounded" onClick={handleDelete}>
          Delete
        </button>
      </div>
    </div>
  );
};

export default UserCard;
