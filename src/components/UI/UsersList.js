import Container from "./Container";
import styles from "./UserList.module.css";
const UserList = props=>{


    return(
        <Container className={styles.users}>
        <ul>
           {props.users.map((user)=>{

               return <li key={user.key}>{user.username} ({user.age} years)</li>

            })} 
        </ul>
        
        </Container>
        
    );

    
}
export default UserList