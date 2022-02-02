import {
  CButton,
  CCol,
  CContainer,
  CForm,
  CFormInput,
  CFormLabel,
  CFormText,
  CRow,
} from "@coreui/react";
import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addUser } from "../../redux/action";

const Form = () => {
  let history = useHistory();
  let dispatch = useDispatch();

  const [state, setState] = useState({
    id: "",
    name: "",
    username: "",
    email: "",
    city: "",
  });

  const [error, setError] = useState("");

  const { id, name, username, email, city } = state;

  const handleInputChange = (e) => {
    let { name, value } = e.target;
    setState({ ...state, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !username || !email) {
      setError("Please input all inputfields!");
    } else {
      dispatch(addUser(state));
      history.push("/");
      setError("");
    }
  };
  return (
    <>
      <CContainer>
        <h1>Form</h1>
        {error && <h3>{error}</h3>}
        <CForm onSubmit={handleSubmit}>
          <CRow className="mb-3">
            <CCol sm={4}>
              <CFormLabel htmlFor="exampleInputName">Name</CFormLabel>
              <CFormInput
                type="text"
                aria-describedby="nameHelp"
                name="name"
                value={name}
                onChange={handleInputChange}
              />
              <CFormText id="nameHelp">Please insert the full name!</CFormText>
            </CCol>
            <CCol sm={4}>
              <CFormLabel htmlFor="exampleInputUserName">Username</CFormLabel>
              <CFormInput
                type="text"
                aria-describedby="userNameHelp"
                name="username"
                value={username}
                onChange={handleInputChange}
              />
              <CFormText id="nameHelp">Please insert the username!</CFormText>
            </CCol>
            <CCol sm={4}>
              <CFormLabel htmlFor="exampleInputEmail">Email</CFormLabel>
              <CFormInput
                type="email"
                aria-describedby="emailHelp"
                name="email"
                value={email}
                onChange={handleInputChange}
              />
              <CFormText id="emailHelp">Please insert a valid email!</CFormText>
            </CCol>
            <CCol sm={4}>
              <CFormLabel htmlFor="exampleInputCity">City address</CFormLabel>
              <CFormInput
                type="text"
                aria-describedby="cityHelp"
                name="city"
                value={city}
                onChange={handleInputChange}
              />
              <CFormText id="emailHelp">
                Please insert the city address!
              </CFormText>
            </CCol>
          </CRow>

          <CButton color="danger" onClick={() => history.push("/")}>
            Cancel
          </CButton>

          <CButton type="submit" color="success">
            Submit!
          </CButton>
        </CForm>
      </CContainer>
    </>
  );
};

export default Form;
