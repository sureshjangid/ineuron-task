import axios from "axios";
import { CREATE_USER, DELETE_USER, GET_USER, SINGLE_DATA, UPDATE_USER } from "./api";

// get user data
export const get_user = () => async (dispatch) => {
  try {
    const data = await axios.get(GET_USER);
    const res = data.data;
    dispatch({ type: "SUCCESS", payload: res });
  } catch (error) {
    dispatch({ type: "FAIL", payload: error.response });
  }
};

// add user data
export const add_user = (userData) => async (dispatch) => {
  try {
    const user = await axios.post(CREATE_USER, userData);
    const storeData = user.data;
    dispatch({
      type: "ADD_USER",
      payload: storeData,
    });
  } catch (error) {
    dispatch({
      type: "FAILED_USER",
      payload: error.response,
    });
  }
};


// Single user data
export const single_user = (id) => async (dispatch) => {
  try {
    console.log(id, "idididid");
    const single_user = await axios.get(
      `${SINGLE_DATA}${id}`
    );
    const resData = single_user.data;
    console.log(resData, "cart");
    dispatch({ type: "SINGLE_USER", payload: resData });
  } catch (error) {
    console.log(error, "cart");
    dispatch({ type: "FAILED_SINGLE_USER", payload: error.response });
  }
};


// Edit single user data 
export const edit_single_user = (userData,id) => async (dispatch) => {
  try {
    const user = await axios.patch(`${UPDATE_USER}${id}`, userData);
    const storeData = user.data;
    dispatch({
      type: "UPDATE",
      payload: storeData,
    });
  } catch (error) {
    dispatch({
      type: "FAILED_UPDATE",
      payload: error.response,
    });
  }
};


// Delete single user data
export const delete_single_user = (id) => async (dispatch) => {
  console.log(id,'id');
    try {
      const delete_user = await axios.delete(`${DELETE_USER}${id}`);
    console.log(delete_user,'delete_userdelete_user')
    dispatch({
      type: "DELETE",
      payload: delete_user.data,
    });
    } catch (error) {
      console.log(error,'error')
    }
  
  
};

