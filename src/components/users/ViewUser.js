import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { delete_single_user, get_user } from "../../redux/action/action";
import Avatar from 'react-avatar';
import { NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const ViewUser = () => {
  const getData = useSelector((state) => state.userData);
  const user = getData?.user?.data;
  console.log(user);
  const dispatch = useDispatch();
const Navigate= useNavigate();
  useEffect(() => {
    dispatch(get_user());
  }, [dispatch]);

  const deleteUser = (id)=>{
    if(window.confirm('are you sure')){  
    dispatch(delete_single_user(id));
    Navigate('add-user')
    }
  }
  return (
    <div>
      <div class="container mx-auto px-4 sm:px-8">
        <div class="py-8">
          <div>
            <h2 class="text-2xl font-semibold leading-tight">User List</h2>
          </div>
          <div class="-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto">
            <div class="inline-block min-w-full shadow-md rounded-lg overflow-hidden">
              <table class="min-w-full leading-normal">
                <thead>
                  <tr>
                    
                    <th class="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                      first Name
                    </th>
                    <th class="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                      Last Name
                    </th>
                    <th class="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                      Phone Number
                    </th>
                    <th class="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                      Age
                    </th>

                    <th class="px-5 py-3 border-b-2 border-gray-200 bg-gray-100"></th>
                  </tr>
                </thead>
                <tbody>
                  {user &&
                    user.length > 0 &&
                    user.map((item, index) => {
                      const { firstName, lastName, age, phoneNumber,_id } = item;
                      return (
                        <>
                          <tr>
                            
                            <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                              <p class="text-gray-900 whitespace-no-wrap">
                                {firstName}
                              </p>
                            </td>
                            <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                              <p class="text-gray-900 whitespace-no-wrap">
                                {lastName}
                              </p>
                            </td>
                            <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                              <span class="relative inline-block px-3 py-1 font-semibold text-green-900 leading-tight">
                                <span
                                  aria-hidden
                                  class="absolute inset-0 bg-green-200 opacity-50 rounded-full"
                                ></span>
                                <span class="relative">{phoneNumber}</span>
                              </span>
                            </td>
                            <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                              <p class="text-gray-900 whitespace-no-wrap">
                                {age}
                              </p>
                            </td>
                            <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm text-right">
                            <div class="inline-flex">
  <button  class="bg-teal-300 hover:bg-gray-400 text-white-200 hover:text-white font-bold py-2 px-4 rounded-l">
    <NavLink to={`edit/${_id}`}>Edit</NavLink>
  </button>
  <button class="bg-teal-300 hover:bg-gray-400 text-white-200 hover:text-white font-bold py-2 px-4 rounded-r" onClick={()=>deleteUser(_id)}>
    Delete
  </button>
</div>
                            </td>
                          </tr>
                        </>
                      );
                    })} {user <1 ? <h1>No data found</h1>:''}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ViewUser;
