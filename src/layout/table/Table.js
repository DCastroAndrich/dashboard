import React from "react";
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
import User from "../../components/user/User";

const Table = () => {
  return (
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
          <User />
        </CTableBody>
        <CTableFoot color="light">
          <CTableRow>
            <CTableHeaderCell colSpan="5">User List</CTableHeaderCell>
            <CTableDataCell colSpan="3">
              <CButton color="primary">Add new</CButton>{" "}
            </CTableDataCell>
          </CTableRow>
        </CTableFoot>
      </CTable>
    </CContainer>
  );
};

export default Table;
