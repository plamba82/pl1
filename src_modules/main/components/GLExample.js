import React from 'react';
import  GoogleLogin   from './GoogleLogin';


const responseGoogle = (googleUser) => {  
    var id_token = googleUser.getAuthResponse().id_token;
    console.log({accessToken: id_token});

};
  

const GLExample = () => {

  return (
      <div>
        <GoogleLogin socialId="yourClientID"
                     className="google-login"
                     scope="profile"
                     fetchBasicProfile={false}
                     responseHandler={responseGoogle}
                     buttonText="Login With Google"/>
      </div>
  );

};

 

export default GLExample;