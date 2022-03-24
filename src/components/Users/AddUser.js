import {useState} from 'react';
import Container from "../UI/Container";
import Button from "../UI/Button";
import styles from "./AddUser.module.css";
import ErrorModal from '../UI/ErrorModal';

const AddUser = (props)=>{


    const [enteredUserName,setUserName] = useState('');
    const [enteredAge,setAge] = useState(0);
    const [error_state,setError] = useState(0);
    

    const addUserHandler = (e)=>{
        e.preventDefault();
       
        if(enteredUserName.trim().length === 0 || enteredAge < 1){
            setError(1)
        }else{
            props.addnewuser(enteredUserName,enteredAge);
            setUserName('');
            setAge(0);
        }
        
    }
    const addUserName = (e)=>{
        setUserName(e.target.value);
        
    }
    const addAge = (e)=>{
        setAge(e.target.value);
    }
    const removeError = ()=>{
        setError(0);
    }

    if(error_state === 1){
        return  <ErrorModal clearerror={removeError} title="An error occurred!" message="Something went wrong" rem={removeError}/>;
       
    }


    return(
        <div>
        <Container className={styles.input}>
        <form onSubmit={addUserHandler}>
            <label htmlFor="username"></label>
            <input type="text" value={enteredUserName} id="username" onChange={addUserName}/>
            <label htmlFor="age">Age(Years)</label>
            <input type="number" id="age" value={enteredAge} onChange={addAge}/>
            <Button type="submit">Add User</Button>
        </form>
        </Container>
        
        </div>
        
    );
}
export default AddUser;