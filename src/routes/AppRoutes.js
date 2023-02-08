import { onAuthStateChanged } from 'firebase/auth';
import React, { useEffect, useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from '../components/Home';
import Login from '../components/Login';
import Register from '../components/Register';
import { auth } from '../firebase/firebaseConfig';
import { PrivateRoutes } from './Private';
import { PublicRoutes } from './Public';

const AppRoutes = () => {
    const [isLogged, setIsLogged] = useState(false);

    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user?.uid) {
                setIsLogged(true);
                user.getIdToken().then((token) => {
                    return token;
                });
            } else {
                setIsLogged(false);
            }
        });
    }, []);

    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={
                    <PublicRoutes isAuthenticated={isLogged}>
                        <Login />
                    </PublicRoutes>}
                />
                <Route path="/signup" element={
                    <PublicRoutes isAuthenticated={isLogged}>
                        <Register />
                    </PublicRoutes>}
                />
                <Route path="/home" element={
                    <PrivateRoutes isAuthenticated={isLogged}>
                        <Home />
                    </PrivateRoutes>}
                />
            </Routes>
        </BrowserRouter>
    );
};

export default AppRoutes;