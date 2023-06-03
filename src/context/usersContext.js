import { createContext } from "react";

const initialValue = {
  loadUsers: () => {},
  users: [],
  addUser: () => {},
  deleteUser: () => {},
  editUser: () => {},
  userFormMode: "",
  setUserFormMode: () => {},
  editUserObj: 0,
  setEditUserObj: () => {},
};

export const UsersCtx = createContext(initialValue);
