import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { add_user, edit_single_user, single_user } from "../../redux/action/action";

const EditUser = () => {
const editUserData = useSelector(state=>state?.single_user_data);
const single_data = editUserData?.user?.data
console.log(single_data,'single_user_datasingle_user_data')
  const { id } = useParams();
  const dispatch = useDispatch();
  const [addUser, setAddUser] = useState({
    fname: single_data?.firstName,
    lname: single_data?.lastName,
    phone: single_data?.phoneNumber,
    age: single_data?.age,
  });
  const [msg, setMsg] = useState();
  const adddata = (e) => {
    const { name, value } = e.target;
    setAddUser((pre) => {
      return {
        ...pre,
        [name]: value,
      };
    });
  };

  const sendData = async (e) => {
    e.preventDefault();
    const { fname, lname, phone, age } = addUser;

    const userData = {
      firstName: fname,
      lastName: lname,
      phoneNumber: phone,
      age: age,
    };
    if (fname && lname && phone && age == " ") {
      setMsg("All filed requied");
    } else {
      dispatch(edit_single_user(userData,id));
      setTimeout(() => {
        setMsg("User add successfully");
      }, 2000);
      setMsg("");

    }
  };

  useEffect(()=>{
    console.log(id,'id')
    dispatch(single_user(id))
},dispatch)

  return (
    <div class="max-w-screen-md mx-auto p-5">
      <div class="text-center mb-16">
        <h3 class="text-3xl sm:text-4xl leading-normal font-extrabold tracking-tight text-gray-900">
         Edit  <span class="text-indigo-600">User</span>
        </h3>
      </div>

      <form class="w-full">
        <div class="flex flex-wrap -mx-3 mb-6">
          <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
            <label
              class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              for="grid-first-name"
            >
              First Name
            </label>
            <input
              class="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
              id="grid-first-name"
              type="text"
              value={addUser.fname}
              onChange={adddata}
              name="fname"
              placeholder="Enter First Name"
            />
            <p class="text-red-500 text-xs italic"></p>
          </div>
          <div class="w-full md:w-1/2 px-3">
            <label
              class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              for="grid-last-name"
            >
              Last Name
            </label>
            <input
              class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="grid-last-name"
              type="text"
              value={addUser.lname}
              onChange={adddata}
              placeholder="Enter Last Name"
              name="lname"
            />
          </div>
        </div>

        <div class="flex flex-wrap -mx-3 mb-6">
          <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
            <label
              class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              for="grid-first-name"
            >
              Phone
            </label>
            <input
              class="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
              id="grid-first-name"
              type="text"
              value={addUser.phone}
              onChange={adddata}
              name="phone"
              placeholder="Enter your 10 digit Phone number"
            />
            <p class="text-red-500 text-xs italic"></p>
          </div>
          <div class="w-full md:w-1/2 px-3">
            <label
              class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              for="grid-last-name"
            >
              Age
            </label>
            <input
              class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="grid-last-name"
              type="text"
              value={addUser.age}
              onChange={adddata}
              placeholder="Enter your age"
              name="age"
            />
          </div>
        </div>

        <div class="flex flex-wrap -mx-3 mb-6">
          <p className="text-danger ...">{msg}</p>
          <br>
          </br>
          <div class="flex justify-between w-full px-3">
            <button
              class="shadow bg-indigo-600 hover:bg-indigo-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-6 rounded"
              type="submit"
              onClick={sendData}
            >
             Edit User
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default EditUser;
