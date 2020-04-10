import React from "react";

const Login = (props) => {
    return <div>
        <h2>Login</h2>
        <form action="">
            <div>
                <input type="text" placeholder={"Login"}/>
            </div>
            <div>
                <input type="text" placeholder={"Password"}/>
            </div>
            <div>
                <input type="checkbox"/>
            </div>
            <div>
                <button>Sign up</button>
            </div>
        </form>
    </div>
};

export default Login;