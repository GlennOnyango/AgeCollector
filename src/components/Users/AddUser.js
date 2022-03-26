import {useState, useRef} from 'react';
import Container from "../UI/Container";
import Button from "../UI/Button";
import styles from "./AddUser.module.css";
import ErrorModal from '../UI/ErrorModal';

const AddUser = (props)=>{


    const [error_state,setError] = useState(0);
    const enteredUserName = useRef();
    const enteredAge = useRef();

    const addUserHandler = (e)=>{
        e.preventDefault();

        let name = enteredUserName.current.value;
        let age = enteredAge.current.value;

        if(name.trim().length === 0 || age < 1){
            setError(1)
        }else{
            props.addnewuser(name,age);
            enteredUserName.current.value = '';
            enteredAge.current.value = '';
        }
        
    }

    const removeError = ()=>{
        setError(0);
    }

    return(
        <>
        {error_state && <ErrorModal clearerror={removeError} title="An error occurred!" message="Something went wrong" rem={removeError}/>}
        <Container className={styles.input}>
        <form onSubmit={addUserHandler}>
            <label htmlFor="username"></label>
            <input type="text" id="username" ref={enteredUserName}/>
            <label htmlFor="age">Age(Years)</label>
            <input type="number" id="age" ref={enteredAge}/>
            <Button type="submit">Add User</Button>
        </form>
        </Container>
        
        </>
        
    );
}
export default AddUser;