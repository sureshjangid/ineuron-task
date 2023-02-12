import Navbar from "./components/Header/Navbar";
import {Route,Routes } from "react-router-dom";
import AddUser from "./components/users/AddUser";
import ViewUser from "./components/users/ViewUser";
import EditUser from "./components/users/EditUser";
import Footer from "./components/footer/footer";
function App() {
  return (
   <>
<Navbar/>

<Routes>
<Route path="/" element={<ViewUser/>}/>
  <Route path="/add-user" element={<AddUser/>}/>
  <Route path="/edit/:id" element={<EditUser/>}/>

</Routes>
<Footer/>
   </>
  );
}

export default App;
