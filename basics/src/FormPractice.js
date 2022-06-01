import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "react-bootstrap/Navbar";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import FormControl from "react-bootstrap/FormControl";
import Button from "react-bootstrap/Button";
import { useState } from "react";

function FormPractice(){
    const [name, setName] = useState('');
    const [number, setNumber] = useState('');
    
    const HandleNameChange = (e) => {
        e.preventDefault();
        setName(e.target.value);
        console.log(name);
    }
    const HandleNumberChange = (e) => {
        e.preventDefault();
        setNumber(e.target.value);
        console.log(number);
    }

    const HandleSub = (e) => {
        e.preventDefault()
        alert("YOUR NAME IS" + name + "YOUR NUMBER IS " + number)
    }
    return(
        <>
            Please input your name and number!
            
            <Form inline onSubmit={HandleSub}> 
                <input type='text' placeholder='name' onChange={e => HandleNameChange(e)}></input>
                <input type='text' placeholder='number' onChange={e => HandleNumberChange(e)}></input>
                
                <Button>Submit</Button>
            </Form>
        </>
        
        
    )
}

export default FormPractice;