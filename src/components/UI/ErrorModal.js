import Button from "./Button";
import Container from "./Container";
import sytles from "./Error.module.css";
import ReactDOM from "react-dom" 
const ErrorModal = (props) => {

    const rem =()=>{
        props.clearerror();
    }

    const Backdrop = ()=>{
        return <div  className={sytles.backdrop} onClick={rem}/>;
    }

    const Modal = (props)=>{
        console.log(props)
        return (<Container className={sytles.modal}>
        <header className={sytles.header}><h1>{props.title}</h1></header>
        <div className={sytles.content}>
        <p> {props.message}</p>
        </div>
        <footer className={sytles.action}>
            <Button type="button" onClick={rem}>okay</Button>
        </footer>
    </Container>);
    }



    return(
      <>
        {ReactDOM.createPortal(<Backdrop />,document.getElementById("backdrop-id"))}

        {ReactDOM.createPortal(<Modal title={props.title} message={props.message} />,document.getElementById("modal-id"))}


        </>
           )
}
export default ErrorModal;