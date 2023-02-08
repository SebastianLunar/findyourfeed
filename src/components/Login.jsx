import React from 'react';
import { Input } from '../styles/Global';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import useForm from '../hooks/useForm';
import { actionLoginAsync } from '../redux/actions/loginActions';
import { FormControl, FormLabel, Flex, Button } from '@chakra-ui/react'

const Login = () => {
    const dispatch = useDispatch()

    const [formValue, handleChange, reset] = useForm({
        email: '',
        password: '',
    })

    const { email, password } = formValue

    const handleSubmit = (e) => {
        e.preventDefault()
        dispatch(actionLoginAsync(email, password))
        reset()
    }

    return <Flex justifyContent={"center"} alignItems={"center"} width={"100vw"} height={"100vh"} maxWidth={"100vw"} maxHeight={"100vh"} position={"relative"}
        bgImage="url('https://www.teahub.io/photos/full/171-1718121_high-resolution-restaurant-images-hd.jpg')">
        <Flex position="absolute" top="0" left="0" px={4} py={2} zIndex={101} direction={"column"} bg={"whiteAlpha.900"} width={"37vw"} height="100vh" justifyContent="center">
            <FormControl my="auto">
                <form onSubmit={handleSubmit}>
                    <FormLabel>Email address</FormLabel>
                    <Input type="email" name="email" placeholder="Email" value={formValue.email} onChange={handleChange} style={{ marginBottom: "10px" }} />
                    <FormLabel>Password</FormLabel>
                    <Input type="password" name="password" placeholder="Password" value={formValue.password} onChange={handleChange} style={{ marginBottom: "2rem" }} />
                    <Button colorScheme='teal' variant='solid' type='submit'>
                        Sign In
                    </Button>
                </form>
            </FormControl>
            <Flex>
                <span>Don't have an account?</span>
                <span><Link to="/signup"> Sign Up</Link></span>
            </Flex>
        </Flex>
    </Flex>
};

export default Login;