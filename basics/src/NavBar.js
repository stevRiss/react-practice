import {Navbar, Nav, Form, Button, NavDropdown} from 'react-bootstrap'
import "bootstrap/dist/css/bootstrap.min.css";
function NavBar(){
    return(
        <>
        <Navbar bg='dark' expand='lg'>
            <Navbar.Brand href='#nav'>REACT practice bar</Navbar.Brand>
            <Navbar.Toggle />
            <Navbar.Collapse />
            <Nav.Link href="/">home</Nav.Link>
            <NavDropdown title='Droppin'>
                <NavDropdown.Item href='/form'>Form</NavDropdown.Item>
            </NavDropdown>
        </Navbar>
        </>
    )
}

export default NavBar;