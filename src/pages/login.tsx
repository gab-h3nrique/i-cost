import type { NextPage } from 'next'
import { useEffect, useState } from 'react';
import { authApi } from '../../lib/api';

import Router from 'next/router';

import LoginForm from '../components/LoginForm';

const Home: NextPage = () => {
 
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [button, setButton] = useState(false);
  
  const login = async() => {
    let data = await authApi('/api/login', 'POST', {name, email, password});
    if(false) {

      Router.push('/app');
    }
    console.log('novo', data)
  }

  useEffect(() => {
    if(email && password) {
      setButton(true)
    } else {
      setButton(false)
    }
  },[email, password])

return (
  <>
      <LoginForm user={ {setName, setEmail, setPassword, button, login} } />
  </>
)
}

export default Home
