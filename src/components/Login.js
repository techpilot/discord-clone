import React from 'react'
import "./Login.css"
import { Button } from '@material-ui/core'
import { auth, provider } from './firebaseConfig';

function Login() {
  const signIn = () => {
    auth.signInWithPopup(provider).catch((error) => alert(error.message))
  }

  return (
    <div className='login'>
      <div className="login__logo">
        <img
          src="https://logos-download.com/wp-content/uploads/2021/01/Discord_Logo-1.png"
          alt=""
        />
      </div>

      <Button onClick={signIn}>Sign in</Button>
    </div>
  )
}

export default Login
