import React, {useEffect, useState} from "react";
import Button from "../../components/Form/Button";

const Login = (route) => {
    const [isLogged, setIsLogged] = useState(false);

    // Fake auth. So that we can test private routes
    useEffect(() => {
        const token = localStorage.getItem('token');
        if(token){
            setIsLogged(true);
        }
    }, []);

    const logIn = () => {
        setIsLogged(true);
        localStorage.setItem('token', 'true');
        route.history.push('/brands');
    };

    const logOut = () => {
        setIsLogged(false);
        localStorage.removeItem('token');
    };

    return (
        <div className="login">
            <h2 style={{marginBottom: '20px'}}>{isLogged ? 'You are logged' : 'Please login to get to Phones page'}</h2>
            <Button
                type="button"
                onClick={isLogged ? logOut : logIn}
                text={isLogged ? 'Log out' : 'Log in'}
            />
        </div>
    );
};

export default Login;
