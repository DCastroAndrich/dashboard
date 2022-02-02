import * as types from "./actionType";
import axios from "axios";

const getUsers = (users) => ({
  type: types.GET_USER,
  payload: users,
});

const userDeleted = () => ({
  type: types.DELETE_USER,
});

const userAdded = () => ({
  type: types.ADD_USER,
});

const getUser = (user) => ({
  type: types.GET_SINGLE_USER,
  payload: user,
});

const userUpdated = () => ({
  type: types.UPDATE_USER,
});

export const loadUsers = () => {
  return function async(dispatch) {
    axios
      .get(`${process.env.REACT_APP_URL}`)
      .then((res) => {
        console.log("res", res);
        dispatch(getUsers(res.data));
      })
      .catch((error) => console.log(error));
  };
};

export const deleteUser = (id) => {
  return function (dispatch) {
    axios
      .delete(`${process.env.REACT_APP_URL}/${id}`)
      .then((res) => {
        console.log("res", res);
        dispatch(userDeleted());
        dispatch(loadUsers());
      })
      .catch((error) => console.log(error));
  };
};

export const addUser = (user) => {
  return function (dispatch) {
    axios
      .post(`${process.env.REACT_APP_URL}`, user)
      .then((res) => {
        console.log("res", res);
        dispatch(userAdded());
        dispatch(loadUsers());
      })
      .catch((error) => console.log(error));
  };
};

export const getSingleUser = (id) => {
  return function (dispatch) {
    axios
      .get(`${process.env.REACT_APP_URL}/${id}`)
      .then((res) => {
        console.log("res", res);
        dispatch(getUser(res.data));
      })
      .catch((error) => console.log(error));
  };
};



export const updateUser = (user, id) => {
  return function (dispatch) {
    axios
      .put(`${process.env.REACT_APP_URL}/${id}`, user)
      .then((res) => {
        console.log("res", res);
        dispatch(userUpdated());
        dispatch(loadUsers());
      })
      .catch((error) => console.log(error));
  };
};