import React from 'react';

import './login.scss';

import BotonLogin from '../atoms/button-login/button-login';
import Images from '../atoms/images/images'
import image from '../../images/loginImage.png'
import logo from '../../images/logoPragmaLogin.svg';
function Login() {
  return (
    <>
      <div className="p-content-login">
        <div className="p-content-image">
          <Images Imagen={image} />
        </div>
        <div className="p-content-button">
          <div className="p-box-login">
            <div><Images Imagen={logo} /></div>
            <div>Sistema de informes financieros</div>
            <div>button</div>
          </div>
          {/* <BotonLogin /> */}
        </div>
      </div>
    </>
  );
}

export default Login;
