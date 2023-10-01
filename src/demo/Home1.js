import React, { useState } from 'react'
import { GoogleLogout,GoogleLogin } from 'react-google-login'
const clientid ='127920699354-9looq7eihdqsjvct6ami91snm8805cr1.apps.googleusercontent.com';
const Home1 = () => {
   
    const[Login,setLogin] =useState(true)
    const[logout,setLogout] =useState(false)
   
    const successlogin = (res) => {
        console.log("login Successfull",res.profileObj)
        setLogin(false);
        setLogout(true);
    }

    const failure = (res)=>{
        console.log("login UnSuccessfull",res)
       
    }
    function logoutUser(res){
        alert("you have been sign in")
        setLogin(true);
        setLogout(false)

    }
    
    
  return (
    <div>
       <div>
     

{Login ?
       <GoogleLogin
    clientId={clientid}
    buttonText="Login"
    onSuccess={successlogin}
    onFailure={failure}
    cookiePolicy={'single_host_origin'}
  />:null}
  {logout ? 
    <GoogleLogout
      clientId={clientid}
      buttonText="Logout"
      onLogoutSuccess={logoutUser}
    >
    </GoogleLogout>:null}
      {/* <div class="section-wrapper">
        <div class="guided-form-wrapper mt-5">
          <div class="left-section content">
            <div class="heading"><img src='./logo192.png' style={{ height: "40px", width: "40px" }}></img></div>
            <div class="title center-content">Organize, Invite & Hire Right</div>
            <div class="center-content mt-3 brand">
              <img src="https://42f2671d685f51e10fc6-b9fcecea3e50b3b59bdc28dead054ebc.ssl.cf5.rackcdn.com/illustrations/content_creator_xeju.svg" width="250px" />
            </div>
          </div>
          <div class="right-section content">
            <div id='sg1'>
            <h2>Create A Account</h2>
            <button class="loginBtn loginBtn--facebook">
              Login with Facebook
            </button>

            <button class="loginBtn loginBtn--google">
              Login with Google
            </button>
            <center><p id='or'>-OR-</p></center>
            <div class="form">
              <form method="post">
                <div class="form-field">
                  <label>Full Name</label>
                  <input name="text" />
                </div>
                <div class="form-field">
                  <label>Email</label>
                  <input name="email" />
                </div>
                <div class="form-field">
                  <label>Password</label>
                  <input name="email" type='password' />
                </div>
                <button class="btn btn-primary" id='sg2'>Submit</button>
                <br /><br />
                <p>Already Have An Account ? <a href='' style={{ textDecoration: "none" }}>Login</a></p>
              </form>
              </div>
            </div>
          </div>
        </div>
      </div> */}
    </div>
    </div>
  )
}

export default Home1
