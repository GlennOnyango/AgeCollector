import Container from "../UI/Container";
import Button from "../UI/Button";
import styles from "./AddUser.module.css";
const AddUser = ()=>{

    const addUserHandler = (e)=>{
        e.preventDefault();
    }

    return(
        <Container className={styles.input}>
        <form onSubmit={addUserHandler}>
            <label htmlFor="username"></label>
            <input type="text" id="username"/>
            <label htmlFor="age">Age(Years)</label>
            <input type="text" id="age"/>
            <Button type="submit">Add User</Button>
        </form>
        </Container>
        
    );
}
export default AddUser;