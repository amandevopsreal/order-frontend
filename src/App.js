import logo from './logo.svg';
import './App.css';
import Login from './Components/Login/Login';
import CustForm from './Components/CustForm/CustForm';
import AdminData from './Components/AdminData/AdminData';
import { useState,useEffect } from 'react';

const App = () => {
  const [route, setRoute] = useState("login")
  const [user,setUser]=useState("")
  const[adminData,setAdminData]=useState([])
    useEffect(()=>{
        fetch("https://t2-2oil.onrender.com/admin")
        .then(res=>res.json())
        .then(data=>setAdminData(data))
    })

  const onLogin=(value,ID)=>
  {
    setRoute(value);
    setUser(ID);
  }


  return (
    <div className="App">
      {route === "login" ?
        <>
          <Login onLogin={onLogin} route={route} />
        </> :
        route==="custform"?<CustForm user={user} />
        :<AdminData adminData={adminData}/>
      }


    </div>
  );
}

export default App;
