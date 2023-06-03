import Users from "./component/Users";
import { UsersCtx } from "./context/usersContext";
import { useUsersHook } from "./hooks/users";
import UserForm from "./component/UserForm";
import "./App.css";

function App() {
  const {
    addUser,
    deleteUser,
    editUser,
    loadUsers,
    users,
    userFormMode,
    setUserFormMode,
    editUserObj,
    setEditUserObj,
  } = useUsersHook();

  const handleAdd = () => {
    setUserFormMode("add");
  };

  return (
    <UsersCtx.Provider
      value={{
        addUser,
        deleteUser,
        editUser,
        loadUsers,
        users,
        userFormMode,
        setUserFormMode,
        editUserObj,
        setEditUserObj,
      }}
    >
      <div className="text-center p-2">
        {userFormMode === "" ? (
          <button
            onClick={handleAdd}
            className="bg-green-500 text-white p-2 rounded "
          >
            Add User
          </button>
        ) : null}
      </div>
      {userFormMode === "" ? <Users /> : <UserForm />}
    </UsersCtx.Provider>
  );
}

export default App;
