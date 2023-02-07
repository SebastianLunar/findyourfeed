import React from 'react';
import icong from '../assets/google.png'
import { Boton, SOCIAL, REGISTER } from '../styles/Global';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { loginGoogle } from '../redux/actions/loginActions';
import { actionRegisterAsync } from '../redux/actions/registerActions';
import { Formik, Form, Field } from 'formik'
import * as Yup from 'yup'
import '../styles/styles.css'
import styled from 'styled-components';
import background from '../assets/background.jpg'

const BACK = styled.div`
    background-image: url(${background});
    background-size: cover;
    background-repeat: no-repeat;
    width: -webkit-fill-available;
    height: -webkit-fill-available;
    position: absolute;
    z-index: 0;
`
const CONTENT = styled.div`
    text-align: center;
    position: absolute;
    width: 40%;
    z-index: 1;
    height: 100%;
    background-color: rgb(255 255 255 / 60%);
    display: flex;
    flex-direction: column;
    justify-content: center;
`


const Register = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const SignupSchema = Yup.object().shape({
        name: Yup.string().min(2, 'Name too short').max(20).required("This field is required"),
        email: Yup.string().email('Should be example@mail.com').required("This field is required"),
        password: Yup.string().min(6, 'Password too short').max(20).required("This field is required")
    })

    return (
        <>
            <BACK></BACK>
            <CONTENT>
                <REGISTER>
                    <h1>Sign Up</h1>
                    <Formik
                        initialValues={{
                            name: '',
                            email: '',
                            password: '',
                            image: 'https://res.cloudinary.com/dd5yolnde/image/upload/v1656300664/buffalo-sprint3/user_fa0maw.png'
                        }}
                        validationSchema={SignupSchema}
                        onSubmit={values => {
                            dispatch(actionRegisterAsync(values.name, values.email, values.password, values.image),
                                navigate("/home"))
                        }}
                    >
                        {({ errors, touched }) => (
                            <Form>
                                <Field className="entrada" type="text" placeholder="Full name" name="name" style={{ marginBottom: "10px" }} />
                                {errors.name && touched.name ? (<div>{errors.name}</div>) : null}
                                <Field className="entrada" type="email" placeholder="Email" name="email" style={{ marginBottom: "10px" }} />
                                {errors.email && touched.email ? (<div>{errors.email}</div>) : null}
                                <Field className="entrada" type="password" placeholder="Password" name="password" style={{ marginBottom: "54px" }} />
                                {errors.password && touched.password ? (<div>{errors.password}</div>) : null}
                                <Boton type='submit'>Sign Up</Boton>
                            </Form>
                        )}
                    </Formik>
                    <div>
                        <h4>OR Sign in with</h4>
                        <img src={icong} style={{ cursor: "pointer" }} alt="" onClick={() => dispatch(loginGoogle(), navigate('/home'))} />
                    </div>
                </REGISTER>
            </CONTENT>
        </>
    );
};

export default Register;