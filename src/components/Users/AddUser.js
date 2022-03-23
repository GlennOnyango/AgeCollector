import {useState} from 'react';
import Container from "../UI/Container";
import Button from "../UI/Button";
import styles from "./AddUser.module.css";
const AddUser = ()=>{


    const [enteredUserName,setUserName] = useState('');
    const [enteredAge,setAge] = useState();

    const addUserHandler = (e)=>{
        e.preventDefault();
        setUserName('');
        setAge();
    }
    const addUserName = (e)=>{
        setUserName(e.target.value);
    }
    const addAge = (e)=>{
        setAge(e.target.value);
    }
    return(
        <Container className={styles.input}>
        <form onSubmit={addUserHandler}>
            <label htmlFor="username"></label>
            <input type="text" id="username" onChange={addUserName}/>
            <label htmlFor="age">Age(Years)</label>
            <input type="text" id="age" onChange={addAge}/>
            <Button type="submit">Add User</Button>
        </form>
        </Container>
        
    );
}
export default AddUser;