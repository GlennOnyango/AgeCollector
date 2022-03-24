import Button from "./Button";
import Container from "./Container";
import sytles from "./Error.module.css";
const ErrorModal = (props) => {

    const rem =()=>{
        props.clearerror();
    }


    return(
      <div>
 <div  className={sytles.backdrop} onClick={rem}/>
        <Container className={sytles.modal}>
            <header className={sytles.header}><h1>{props.title}</h1></header>
            <div className={sytles.content}>
            <p> {props.message}</p>
            </div>
            <footer className={sytles.action}>
                <Button type="button" onClick={props.rem}>okay</Button>
            </footer>
        </Container>

        </div>
           )
}
export default ErrorModal;