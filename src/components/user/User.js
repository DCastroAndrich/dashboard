import {
  CButton,
  CTableDataCell,
  CTableHeaderCell,
  CTableRow,
} from "@coreui/react";
import React from "react";

const User = () => {
  return (
    <CTableRow align="middle">
      <CTableHeaderCell scope="row">1</CTableHeaderCell>
      <CTableDataCell>Damian Castro</CTableDataCell>
      <CTableDataCell>DCastro</CTableDataCell>
      <CTableDataCell>damian.castro@gmail.com</CTableDataCell>
      <CTableDataCell>La Plata</CTableDataCell>
      <CTableDataCell>
        <CButton color="warning">Edit</CButton>{" "}
      </CTableDataCell>
      <CTableDataCell>
        <CButton color="danger">Delete</CButton>{" "}
      </CTableDataCell>
    </CTableRow>
  );
};

export default User;
