import type { NextPage } from 'next'
import { useState } from 'react';

import SignForm from '../components/SignForm';

const Signin: NextPage = () => {

    const [name, setName] = useState();
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    
    const signIn = async() => {
      let data = await postUser({name, email, password});
      console.log(data)
    }
  

  return (
    <>
        <SignForm user={ {setName, setEmail, setPassword, signIn} } />
    </>
  )
}

export default Signin

const postUser = async(user:any) => {
  let rawResponse = await fetch('/api/signin', {
    method: 'POST',
    headers: {'Content-Type': 'application/json;charset=utf-8'},
    body: JSON.stringify(user)
  });
  rawResponse = await rawResponse.json();

  return rawResponse;
}