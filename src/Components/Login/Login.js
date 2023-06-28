import React from "react";
import { useState } from "react";
const Login = ({ onLogin,route }) => {

    const [signInId, setSignInId] = useState("");
    const [signInPassword, setSignInPassword] = useState("");

    const onChangeId = (event => {
        setSignInId(event.target.value);
        console.log(signInId);
    })

    const onChangePassword = (event => {
        setSignInPassword(event.target.value);
        console.log(signInPassword)
    })

    const onSignIn = () => {
        fetch("https://t2-2oil.onrender.com/signin", {
            method: 'post',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                ID: signInId,
                Password: signInPassword
            })
        })
            .then(res => res.json())
            .then(data => {
                if (data.id === "customer1"||data.id === "customer2") {
                    onLogin("custform",data.id);
                }
                else if(data.id==="admin")
                {
                    onLogin("admindata",data.id);
                }
            })

    }
    return (
        <div class="pa4 black-80 measure center">
                <fieldset id="sign_in" class="ba b--transparent ph0 mh0">
                    <div class="mt3">
                        <label class="db fw6 lh-copy f6" for="id">ID</label>
                        <input onChange={onChangeId} class="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="text" name="id" id="id" />
                    </div>
                    <div class="mv3">
                        <label class="db fw6 lh-copy f6" for="password">Password</label>
                        <input onChange={onChangePassword} class="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="password" name="password" id="password" />
                    </div>
                </fieldset>
                <div class="">
                    <input onClick={onSignIn} class="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib" type="submit" value="SIGNIN" />
                </div>

        </div>
    );
}

export default Login;