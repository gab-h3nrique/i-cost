import { useEffect, useState } from "react";



const Login = ( props: any ) =>{
    const {setEmail, setPassword, button, login} = props.user;

    const handleEmail = (e:any) => {
        setEmail(e.target.value)
    }
    const handlePassword = (e:any) => {
        setPassword(e.target.value)
    }

    return (
      <div className="bg-white">
          <div className="w-96 px-4 mx-auto pt-6">
              <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-2xl rounded-lg  border-0">
                  <div className="rounded-t mb-0 px-6 py-6">
                      <div className="text-center mb-3">
                          <h6 className="text-gray-500 text-sm font-bold">
                              Login in with
                          </h6>
                      </div>
                      <div className="btn-wrapper text-center">
                          {/* github e google */}
                      </div>
                      <hr className="mt-6 border-b-1 border-gray-300"/>
                  </div>
                  <div className="flex-auto px-4 lg:px-10 py-10 pt-0">
                      <div className="text-gray-400 text-center mb-3 font-bold">
                      <small>Login in with credentials</small>
                      </div>
                      <form>
                      <div className="relative w-full mb-3">
                          <label className="block  text-gray-700 text-xs font-bold mb-2" htmlFor="grid-password">Email</label><input onChange={(e)=>{handleEmail(e)}} type="email" className="border-0 px-3 py-3 placeholder-gray-300 text-gray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150" placeholder="Email" />
                      </div>
                      <div className="relative w-full mb-3">
                          <label className="block  text-gray-700 text-xs font-bold mb-2" htmlFor="grid-password">Password</label><input onChange={(e)=>{handlePassword(e)}} type="password" className="border-0 px-3 py-3 placeholder-gray-300 text-gray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150" placeholder="Password"  />
                      </div>
                      <div className="text-center mt-6">
                          <button disabled={!button} onClick={()=>login()} className="bg-black text-white active:bg-gray-600 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 w-full ease-linear transition-all duration-150" type="button"> Login In </button>
                      </div>
                      </form>
                  </div>
              </div>
          </div>
      </div>
    )
  }
  
  export default Login