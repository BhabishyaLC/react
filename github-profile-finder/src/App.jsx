import { useEffect, useState } from "react";
import "./App.css";
import InputUser from "./components/InputUser";
import Loading from "./components/Loading";
import UserProfile from "./components/UserProfile";
function App() {
  const [userName, setUserName] = useState("BhabishyaLC");
  const [userData,setUserData]=useState(null)
  const [loading,setLoading]=useState(true)
  async function fetchUserData() {
    setLoading(true)
    const res = await fetch(`https://api.github.com/users/${userName}`);
    const data = await res.json();
    console.log(data);
    if(data){
      setUserData(data)
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchUserData();
  }, []);
if(loading){
  return <Loading/>
}
  function searchButton() {
    fetchUserData();
  }
  return (
    <div className=" h-screen w-full bg-slate-900">
      <div className="bg-blue-500  flex justify-center gap-3">
        <InputUser
          userDetail={userName}
          onUserNameChange={(userName) => setUserName(userName)}
        />
        <button
          className=" p-3 bg-yellow-500 rounded-xl text-white"
          onClick={searchButton}
        >
          Search
        </button>
      </div>

      {userData!==null?<UserProfile users={userData}/>:null}
    </div>
  );
}

export default App;
