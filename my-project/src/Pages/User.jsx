import React from 'react'
import { useAuth0 } from '@auth0/auth0-react'


const User = () => {
    const { loginWithRedirect , isAuthenticated , Logout} = useAuth0();
  return (
    <div>
    {
        isAuthenticated ? (
            <button onClick={() => Logout()}>Logout</button>
            ):(
        <button onClick={() => loginWithRedirect()}>Log In</button>
        )
    }
    </div>
  )
}

export default User
