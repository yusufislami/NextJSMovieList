import { Navbar,Nav,Container } from "react-bootstrap"
const NavigationBar = () => {
    return(
    <Navbar>
        {/* <hl>Navigasi Testing</hl> */}
        <Navbar.Brand>Jayakarta Movies</Navbar.Brand>
        <Nav>
            <Nav.Link>Trending</Nav.Link>
            <Nav.Link>Superhero</Nav.Link>
        </Nav>
    </Navbar>
    )
}
export default NavigationBar