import React from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { actionRegisterAsync } from '../redux/actions/registerActions';
import { Formik, Form, Field } from 'formik'
import * as Yup from 'yup'
import '../styles/styles.css'
import { Button, Flex } from '@chakra-ui/react';

const Register = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const SignupSchema = Yup.object().shape({
        name: Yup.string().min(2, 'Name too short').max(20).required("This field is required"),
        email: Yup.string().email('Should be example@mail.com').required("This field is required"),
        password: Yup.string().min(6, 'Password too short').max(20).required("This field is required")
    })

    return <Flex justifyContent={"center"} alignItems={"center"} width={"100vw"} height={"100vh"} maxWidth={"100vw"} maxHeight={"100vh"} position={"relative"}
        bgImage="url('https://www.teahub.io/photos/full/171-1718121_high-resolution-restaurant-images-hd.jpg')">
        <Flex position="absolute" top="0" left="0" px={4} py={2} zIndex={101} direction={"column"} bg={"whiteAlpha.900"} width={"37vw"} height="100vh" justifyContent="center">
            <Formik
                initialValues={{
                    name: '',
                    email: '',
                    password: '',
                }}
                validationSchema={SignupSchema}
                onSubmit={values => {
                    dispatch(actionRegisterAsync(values.name, values.email, values.password, values.image),
                        navigate("/home"))
                }}
            >
                {({ errors, touched }) => (
                    <Form>
                        <h1>Sign Up</h1>
                        <Field className="entrada" type="text" placeholder="Full name" name="name" style={{ marginBottom: "10px" }} />
                        {errors.name && touched.name ? (<div>{errors.name}</div>) : null}
                        <Field className="entrada" type="email" placeholder="Email" name="email" style={{ marginBottom: "10px" }} />
                        {errors.email && touched.email ? (<div>{errors.email}</div>) : null}
                        <Field className="entrada" type="password" placeholder="Password" name="password" style={{ marginBottom: "54px" }} />
                        {errors.password && touched.password ? (<div>{errors.password}</div>) : null}
                        <Button colorScheme='teal' variant='solid' type='submit' margin={"0 34%"}>Sign Up</Button>
                    </Form>
                )}
            </Formik>
        </Flex>
    </Flex>
};

export default Register;