import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { add_user } from "../../redux/action/action";



const AddUser = () => {

  const dispatch = useDispatch();
  const [addUser, setAddUser] = useState({
    fname: "",
    lname: "",
    phone: "",
    age: "",
  });
const [msg,setMsg] = useState()
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
    e.preventDefault()
    const { fname, lname, phone, age } = addUser;
    if(fname.length=='0'){
      setMsg("All filed requied");
     }else{
    const userData = {
      firstName: fname,
      lastName: lname,
      phoneNumber: phone,
      age: age, 
    };
  
    dispatch(add_user(userData))
    setMsg("User add successfully");
    setTimeout(() => {
      setMsg('')
    }, 2000);
   }
  };
  return (
    <div class="max-w-screen-md mx-auto p-5">
      <div class="text-center mb-16">
        <h3 class="text-3xl sm:text-4xl leading-normal font-extrabold tracking-tight text-gray-900">
          Add <span class="text-indigo-600">User</span>
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
            <p class="text-red-500 text-xs italic">
            </p>
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
            <p class="text-red-500 text-xs italic">
            
            </p>
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
          <p className="bg text-danger ...">{msg}</p>
          <div class="flex justify-between w-full px-3">
            <button
              class="shadow bg-indigo-600 hover:bg-indigo-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-6 rounded"
              type="submit"
              onClick={sendData}
            >
              Add User
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default AddUser;
