import React from "react";
import { Link } from "react-router-dom";
import './signup-page.component.css';

class SignUp extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div id="signup" className="container h-100">
                <div className="row h-100 justify-content-center align-items-center">
                    <div className="col-10 col-lg-8 col-lg-6">
                        <form className="jumbotron">
                            <img
                                src="../../../images/FlexDiet.png"
                                alt="flexdiet"
                                className="mx-auto d-block h-25 w-25"
                            />
                            <h1 className="d-flex justify-content-center mb-5">
                                Гъвкава диета
                            </h1>

                            <label className="mb-1 d-flex justify-content-center">
                                Име
                            </label>
                            <div className="d-flex justify-content-center">
                                <input
                                    type="text"
                                    placeholder="Име"
                                    className="form-control mb-3 w-50"
                                />
                            </div>

                            <label className="mb-1 d-flex justify-content-center">
                                Фамилия
                            </label>
                            <div className="d-flex justify-content-center">
                                <input
                                    type="text"
                                    placeholder="Фамилия"
                                    className="form-control mb-3 w-50"
                                />
                            </div>

                            <label className="mb-1 d-flex justify-content-center">
                                Електронна поща
                            </label>
                            <div className="d-flex justify-content-center">
                                <input
                                    type="text"
                                    placeholder="Email"
                                    className="form-control mb-3 w-50"
                                />
                            </div>

                            <label className="mb-1 d-flex justify-content-center">
                                Парола
                            </label>
                            <div className="d-flex justify-content-center">
                                <input
                                    type="password"
                                    placeholder="Парола"
                                    className="form-control mb-3 w-50"
                                />
                            </div>

                            <label className="mb-1 d-flex justify-content-center">
                                Повторете паролата
                            </label>
                            <div className="d-flex justify-content-center">
                                <input
                                    type="password"
                                    placeholder="Парола"
                                    className="form-control mb-3 w-50"
                                />
                            </div>

                            <div className="d-flex justify-content-center">
                                <Link
                                    to="/home"
                                    className="btn btn-danger btn-md my-2"
                                >
                                    Присъедини се
                                </Link>
                            </div>
                            <div className="d-flex justify-content-center">
                                <Link className="ml-1" to="">
                                    Вече има акаунт
                                </Link>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}

export default SignUp;
