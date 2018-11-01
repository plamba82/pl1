import React from 'react';
import { Header } from 'semantic-ui-react';
import  FacebookLogin  from './FacebookLogin';
import Layout from '../Layout';


const responseFacebook = () => {  
 console.log(response) ;
};
  

const DynamicPage = () => {

  return (
    // <Layout>
    //   <Header as="h2">Dynamic Page</Header>
    //   <p>This page was loaded asynchronously!!!</p>
    // </Layout>
          <div>
        <FacebookLogin socialId="yourAppID"
                       language="en_US"
                       scope="public_profile,email"
                       responseHandler={responseFacebook}
                       xfbml={true}
                       fields="id,email,name"
                       version="v2.5"
                       className="facebook-login"
                       buttonText="Login With Facebook"/>
      </div>
  );

};

 

export default DynamicPage;