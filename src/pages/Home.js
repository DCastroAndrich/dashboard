import {
  CButton,
  CContainer,
  CTable,
  CTableBody,
  CTableDataCell,
  CTableFoot,
  CTableHead,
  CTableHeaderCell,
  CTableRow,
} from "@coreui/react";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteUser, loadUsers } from "../redux/action";
import { useHistory } from "react-router-dom";
//import User from "../components/user/User";
//import Table from "../layout/table/Table";

const Home = () => {
  let dispatch = useDispatch();
  let history = useHistory();

  const { users } = useSelector((state) => state.data);

  useEffect(() => {
    dispatch(loadUsers());
  }, []);

  const handleDelete = (id) => {
    if (window.confirm("Are yo sure wanted to delete the user?")) {
      dispatch(deleteUser(id));
    }
  };

  return (
    <CContainer>
      <h1>Dashboard</h1>
      <CContainer>
        <CTable hover responsive>
          <CTableHead color="dark">
            <CTableRow>
              <CTableHeaderCell scope="col">ID</CTableHeaderCell>
              <CTableHeaderCell scope="col">Name</CTableHeaderCell>
              <CTableHeaderCell scope="col">Username</CTableHeaderCell>
              <CTableHeaderCell scope="col">Email</CTableHeaderCell>
              <CTableHeaderCell scope="col">City</CTableHeaderCell>
              <CTableHeaderCell scope="col">Edit</CTableHeaderCell>
              <CTableHeaderCell scope="col">Delete</CTableHeaderCell>
            </CTableRow>
          </CTableHead>
          <CTableBody>
            {users &&
              users.map((user) => (
                <CTableRow align="middle" key={user.id}>
                  <CTableHeaderCell scope="row">{user.id}</CTableHeaderCell>
                  <CTableDataCell>{user.name} </CTableDataCell>
                  <CTableDataCell>{user.username} </CTableDataCell>
                  <CTableDataCell>{user.email} </CTableDataCell>
                  <CTableDataCell>{user.city} </CTableDataCell>
                  <CTableDataCell>
                    <CButton color="warning" onClick={()=> history.push(`/editUser/${user.id}`)}>edit</CButton>
                  </CTableDataCell>
                  <CTableDataCell>
                    <CButton
                      color="danger"
                      onClick={() => handleDelete(user.id)}
                    >
                      delete
                    </CButton>
                  </CTableDataCell>
                </CTableRow>
              ))}
          </CTableBody>
          <CTableFoot color="light">
            <CTableRow>
              <CTableHeaderCell colSpan="5">User List</CTableHeaderCell>
              <CTableDataCell colSpan="3">
                <CButton
                  color="primary"
                  onClick={() => history.push("/addUser")}
                >
                  Add new
                </CButton>{" "}
              </CTableDataCell>
            </CTableRow>
          </CTableFoot>
        </CTable>
      </CContainer>
    </CContainer>
  );
};

export default Home;
