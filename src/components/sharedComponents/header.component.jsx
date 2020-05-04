import React from "react";
import {
    Navbar,
    Nav,
    NavDropdown,
    Form,
    FormControl,
    Button,
} from "react-bootstrap";
import "./header.component.css";

class Header extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        window.addEventListener("resize", this.resize.bind(this));
        this.resize();
    }

    resize() {
        if (window.innerWidth <= 1550) {
            this.is1Shown = false;
        }
    }
    render() {
        return (
            <nav className="jumbotron pt-0 pb-1 mb-0" id="header">
                <Navbar
                    fixed="top"
                    sticky="top"
                    expand="lg"
                >
                    <Navbar.Brand href="#home">Flexible diet</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav"></Navbar.Toggle>
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ml-auto">
                            <NavDropdown
                                title="Рецепти"
                                id="basic-nav-dropdown"
                            >
                                <NavDropdown.Item href="#action/3.1">
                                    Супи
                                </NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.2">
                                    Основни
                                </NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.3">
                                    Десерти
                                </NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="#action/3.4">
                                    Затвори менюто
                                </NavDropdown.Item>
                            </NavDropdown>
                            <Nav.Link id="daily-intake" href="home">
                                Твоят дневен прием
                            </Nav.Link>
                            <Nav.Link id="calculate-intake" href="link1">
                                Изчисли дневен прием
                            </Nav.Link>
                            <Nav.Link id="nutritions-info" href="#link2">
                                Данни за макронутриентите
                            </Nav.Link>
                            <Nav.Link id="propose-new-recipe" href="#link3">
                                Предложи нова рецепта
                            </Nav.Link>
                        </Nav>
                        {
                            <Form inline>
                                <FormControl
                                    type="text"
                                    placeholder="Търси"
                                    className="mr-sm-2"
                                />
                                <Button variant="outline-danger">Търси</Button>
                            </Form>
                        }
                    </Navbar.Collapse>
                </Navbar>
                <hr />
            </nav>
        );
    }
}

export default Header;
