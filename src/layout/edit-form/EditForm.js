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
import React, { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getSingleUser, updateUser } from "../../redux/action";

const EditForm = () => {
  let history = useHistory();
  let dispatch = useDispatch();

  const [state, setState] = useState({
    name: "",
    username: "",
    email: "",
    city: "",
  });

  const [error, setError] = useState("");
  let {id} = useParams()
  const {user} = useSelector(state => state.data)

  const { name, username, email, city } = state;

  useEffect(()=>{
      dispatch(getSingleUser(id))
  }, [])

  useEffect(()=>{
    if (user){
        setState({...user})
    }
  }, [user])

  const handleInputChange = (e) => {
    let { name, value } = e.target;
    setState({ ...state, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !username || !email) {
      setError("Please input all inputfields!");
    } else {
      dispatch(updateUser(state, id));
      history.push("/");
      setError("");
    }
  };
  return (
    <>
      <CContainer>
        <h1>Edit Form</h1>
        {error && <h3>{error}</h3>}
        <CForm onSubmit={handleSubmit}>
          <CRow className="mb-3">
            <CCol sm={4}>
              <CFormLabel htmlFor="exampleInputName">Name</CFormLabel>
              <CFormInput
                type="text"
                aria-describedby="nameHelp"
                name="name"
                value={name || ""}
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
                value={username || ""}
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
                value={email || ""}
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
                value={city || ""}
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
            Update
          </CButton>
        </CForm>
      </CContainer>
    </>
  );
};

export default EditForm;
