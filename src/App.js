import React,{useState} from 'react';
import UserList from './components/UI/UsersList';
import AddUser from './components/Users/AddUser';

function App() {
  
  const [userlist,setUserList] = useState([]);
  const getUser = (uname,uage)=>{
    setUserList(previouslist=>{
      return [...previouslist,{"key":Math.random(),"username":uname,"age":uage}];
    });
  }

  return (
    <>
<AddUser addnewuser={getUser} />
<UserList users={userlist}/>
    </>
     );
}

export default App;
