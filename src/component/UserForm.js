import React, { useContext, useState } from "react";
import { UsersCtx } from "../context/usersContext";

const UserForm = () => {
  const { userFormMode, addUser, editUser, editUserObj, setUserFormMode } =
    useContext(UsersCtx);

  const [formData, setFormData] = useState(
    userFormMode === "add"
      ? {
          firstname: "",
          lastname: "",
          age: undefined,
          email: "",
          phoneNumber: undefined,
          password: "",
        }
      : editUserObj
  );

  const handleSubmit = (e) => {
    e.preventDefault();
    if (userFormMode === "add") {
      addUser(formData);
    }

    if (userFormMode === "edit") {
      editUser(formData);
    }
  };

  const handleCancel = () => {
    setUserFormMode("");
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  return (
    <div className="flex justify-center p-5 max-w-md">
      <form className="w-64">
        <div className="p-3 flex flex-col">
          <label for="firstname" className="font-bold">
            First Name
          </label>
          <input
            value={formData.firstname}
            onChange={handleChange}
            type="text"
            id="firstname"
            placeholder="Enter first name"
            className="mt-1 border p-2 "
          />
        </div>
        <div className="p-3 flex flex-col">
          <label for="lastname" className="font-bold">
            Last Name
          </label>
          <input
            value={formData.lastname}
            onChange={handleChange}
            type="text"
            id="lastname"
            placeholder="Enter last name"
            className="mt-1 border p-2 "
          />
        </div>
        <div className="p-3 flex flex-col">
          <label for="age" className="font-bold">
            Age
          </label>
          <input
            className="mt-1 border p-2 "
            value={formData.age}
            onChange={handleChange}
            type="number"
            id="age"
            placeholder="Enter your age"
          />
        </div>
        <div className="p-3 flex flex-col">
          <label for="phoneNumber" className="font-bold">
            Phone #
          </label>
          <input
            className="mt-1 border p-2 "
            value={formData.phoneNumber}
            onChange={handleChange}
            type="number"
            id="phoneNumber"
            placeholder="Enter your phone number"
          />
        </div>
        <div className="p-3 flex flex-col">
          <label for="email" className="font-bold">
            Email
          </label>
          <input
            className="mt-1 border p-2 "
            value={formData.email}
            onChange={handleChange}
            type="email"
            id="email"
            placeholder="Enter your email address"
          />
        </div>
        <div className="p-3 flex flex-col">
          <label for="password" className="font-bold">
            Password
          </label>
          <input
            className="mt-1 border p-2 "
            value={formData.password}
            onChange={handleChange}
            type="password"
            id="password"
            placeholder="Enter your password"
          />
        </div>
        <div className="flex justify-center pt-3">
          <button
            onClick={handleCancel}
            className="bg-gray-500 text-white px-3 py-2 rounded "
          >
            Cancel
          </button>
          <button
            onClick={handleSubmit}
            className="bg-green-500 text-white px-3 py-2 rounded ml-2 "
          >
            {userFormMode === "add" ? "Add" : "Update"}
          </button>
        </div>
      </form>
    </div>
  );
};

export default UserForm;
