import axios from "axios";
import { useEffect, useState } from "react";
import ENDPOINTS from "../config/endPoints";

export const useUsersHook = () => {
  const [users, setUsers] = useState([]);
  const [userFormMode, setUserFormMode] = useState("");
  const [editUserObj, setEditUserObj] = useState({});

  const addUser = (userData) => {
    axios
      .post(ENDPOINTS.addUser, userData)
      .then((res) => {
        if (res.data.success) {
          //api call successful
          setUsers(res.data.data);
          setUserFormMode("");
        } else {
          // api call failed
          console.log("an error occured while adding user");
        }
      })
      .catch((err) => {
        console.log("an error occured while adding user");
      });
  };

  const deleteUser = (email) => {
    axios
      .post(ENDPOINTS.removeUser, { email })
      .then((res) => {
        // console.log(res.data);
        if (res.data.success) {
          loadUsers();
        } else {
          console.log(" an error occured while deleting ");
        }
      })
      .catch((err) => {
        console.log(" an error occured while deleting");
      });
  };

  const editUser = (userData) => {
    axios
      .post(ENDPOINTS.updateUser, userData)
      .then((res) => {
        if (res.data.success) {
          //api call successful
          loadUsers();
          setUserFormMode("");
        } else {
          // api call failed
          console.log("an error occured while updating user");
        }
      })
      .catch((err) => {
        console.log("an error occured while updating user");
      });
  };

  const loadUsers = () => {
    axios
      .get(ENDPOINTS.fetchUsers)
      .then((res) => {
        if (res.data.success) {
          //api call succeeded
          setUsers(res.data.data);
        } else {
          //api call failed
        }
      })
      .catch((err) => {
        console.log("an error occured while fetching users");
      });
  };

  useEffect(() => {
    // mount
    loadUsers();
  }, []);

  return {
    addUser,
    deleteUser,
    editUser,
    loadUsers,
    users,
    userFormMode,
    setUserFormMode,
    editUserObj,
    setEditUserObj,
  };
};
