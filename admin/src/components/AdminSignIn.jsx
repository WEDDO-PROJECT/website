import React from 'react'
import axios from 'axios'
import image from "../imgs/weddoLogo.png"

export default function AdminSignIn(props) {
    const [email, setEmail] = React.useState("");
    const [password, setPassword] = React.useState("")
    const onclick= () => {
        signin();
        send();
    }
    const signin = () => {
        axios.post('http://localhost:3000/api/admins/signin', { email: email, password: password })
            .then(response => {
                console.log(response.data);
                if (response.data[0] === 'succesfully connected') {
                    props.setIndex(2)
                }
                if (response.data[0] === 'Login faild') {
                 alert('email or password incorrect please check again')
                }
            }
            )
            .catch((err) => {
                console.log(err)
            })
    }
    const send = (event)=> {
        if (document.getElementById('email').validity.valid) { return alert('missing password') }
        if (document.getElementById('password').validity.valid) { return alert('missing email') }
    
     }
    return (
        <div className="login">
            <img className="logo" src={image} />
            <h1 className="title">Hey Admin !</h1>
            <div className="login-form">

                <h2>Login</h2>
                <p>
                    <label>email address</label><br />
                    <input id="email" type="text" name="email" value={email} onChange={(event) => setEmail(event.target.value)}  />

                </p>
                <p>
                    <label>Password</label>

                    <br />
                    <input id="password" className="password" type="password" name="password" value={password} onChange={(event) => setPassword(event.target.value)} required />
                    {console.log(password)}
                </p>
                <button id="sub_btn" onClick={onclick}>Login</button>

            </div>
        </div>
    )
}