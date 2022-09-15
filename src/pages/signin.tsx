import type { NextPage } from 'next'
import Router from 'next/router';
import { useContext, useEffect, useState } from 'react';
import { authApi } from '../../lib/api';

import SignForm from '../components/SignForm';
import { AuthContext } from '../context/auth';

const Signin: NextPage = () => {

    const [name, setName] = useState();
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const [button, setButton] = useState(false);
    const [message, setMessage] = useState();

    const { setAuthUserLogin }:any = useContext(AuthContext)
    
    const signIn = async() => {
      let data = await authApi('/api/signin','POST', {name, email, password});
      if(data.accessToken && data.user) {
        await setAuthUserLogin()
        Router.push('/app');
      } else {
        setMessage(data.message);
      }
    }

    useEffect(() => {
      if(name && email && password) {
        setButton(true)
      } else {
        setButton(false)
      }
    },[name, email, password])

  return (
    <>
        <SignForm user={ {setName, setEmail, setPassword, message, button, signIn} } />
    </>
  )
}

export default Signin

