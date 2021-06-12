import React from 'react'
import { useNewContexts } from '../../../contexts/contexts'

function LoginPage() {
    const {google_login} = useNewContexts()
    return (
        <div>
            <button onClick={google_login} style={{color:'white', background:"crimson"}}>Login with google</button>
        </div>
    )
}

export default LoginPage
