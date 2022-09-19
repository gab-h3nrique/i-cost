import type { NextPage } from 'next'
import { useContext, useEffect, useState } from 'react';
import { authApi } from '../../lib/api';

import Router from 'next/router';

import LoginForm from '../components/LoginForm';
import { AuthContext } from '../context/auth';

const Home: NextPage = () => {
 
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [button, setButton] = useState(false);
  const [message, setMessage] = useState();

  const { setAuthUserLogin }:any = useContext(AuthContext)
  

  const logar = (user:any) => {
    fetch('/api/login', {
      method: "POST",
      body: JSON.stringify(user),
      headers: {"Content-type": "application/json; charset=UTF-8"}
    })
    .then(response => response.json()) 
    .then(json => {
      console.log(json)
      return json
    })
    .catch(err => err);
  }


  const login = async() => {
    // let data = await authApi('/api/login', 'POST', {name, email, password});
    // if(data.accessToken && data.user) {
    //   await setAuthUserLogin(data.user)
    //   Router.push('/app');
    // } else {
    //   setMessage(data.message);
    // }
    let data = logar({name, email, password})
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
      <LoginForm user={ {setName, setEmail, setPassword, message, button, login} } />
  </>
)
}

export default Home
