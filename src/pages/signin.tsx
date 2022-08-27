import type { NextPage } from 'next'
import { useEffect, useState } from 'react';
import { authApi } from '../../lib/api';

import SignForm from '../components/SignForm';

const Signin: NextPage = () => {

    const [name, setName] = useState();
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const [button, setButton] = useState(false);
    
    const signIn = async() => {
      let data = await authApi('/api/signin','POST', {name, email, password});

      console.log('novo', data)
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
        <SignForm user={ {setName, setEmail, setPassword, button, signIn} } />
    </>
  )
}

export default Signin

