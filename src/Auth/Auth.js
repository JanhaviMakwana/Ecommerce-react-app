import React from 'react';
import * as actionTypes from '../store/actionTypes';
import AuthService from '../services/authService';
import { withState } from '../ecom-context';
import { withRouter } from 'react-router-dom';
import './Auth.css'

class Auth extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            error: null,
            email: '',
            password: '',
            isSignUp: true
        }
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        });
    }

    authModeChangeHandler = () => {
        this.setState({ isSignUp: !this.state.isSignUp });
    }

    handleSubmit = async (event) => {
        event.preventDefault();
        this.setState({ error: '' });

        if (this.state.isSignUp) {
            const { email, password } = this.state;
            AuthService.signup(email, password).then(res => {
                console.log(res);
                this.props.dispatch({ type: actionTypes.AUTH_SUCCESS, user: res, userType: "user", cart: [] })
                this.props.history.push('/');
            }).catch(err => {
                this.props.dispatch({ type: actionTypes.AUTH_FAIL, error: 'Email already is use!!' })
            })
        } else {
            const { email, password } = this.state;
            AuthService.login(email, password).then(res => {
                const data = res.slice(0, 1).shift()
                console.log(data);
                this.props.dispatch({ type: actionTypes.AUTH_SUCCESS, user: data, userType: data.role, cart: data.cart ? data.cart : [] })
                this.props.history.push('/');
            }).catch(err => {
                this.props.dispatch({ type: actionTypes.AUTH_FAIL, error: 'User Not Found' })
            })
        }
    };

    render() {
        console.log(this.props.state);
        return (
            <div className="auth">
                <form
                    className="mt-5 py-5 px-5"
                    onSubmit={(ev) => this.handleSubmit(ev)}
                >
                    <p className="head">Fill in the form below to login to your account.</p>
                    <div className="form-group row">
                        <label className="col-sm-2 col-form-label">Email</label>
                        <div className="col-sm-10">
                            <input
                                className="form-control"
                                placeholder="Email"
                                name="email"
                                type="email"
                                onChange={this.handleChange}
                                value={this.state.email}
                            />
                        </div>
                    </div>
                    <div className="form-group row">
                        <label className="col-sm-2 col-form-label">Password</label>
                        <div className="col-sm-10">
                            <input
                                className="form-control"
                                placeholder="Password"
                                name="password"
                                type="password"
                                onChange={this.handleChange}
                                value={this.state.password}
                            />
                        </div>
                    </div>
                    <div className="form-group">
                        {this.state.error ? <p className="text-danger">{this.state.error}</p> : null}
                        <button type="submit" className="btn btn-primary px-5">
                            {this.state.isSignUp
                                ? "SIGN UP"
                                : "SIGN IN"
                            }
                        </button>
                    </div>
                    {/* <hr></hr> */}
                </form>
                <button onClick={this.authModeChangeHandler}>
                    {!this.state.isSignUp
                        ? "Don't have an account? Sign up"
                        : "Already have an account? Sign in"
                    }
                </button>
            </div>
        );
    }
};

export default withRouter(withState(Auth));