import React from 'react';
import logo from './images/logo.png';
import './App.css';
import '../node_modules/@fortawesome/fontawesome-free/css/all.css';

function App() {
  return (
    <section className="first-screen">
      <section className="container-login">
        <header className="header-login">
          <div><img className="logo-login" src={logo} alt="" /></div>
          <div>No More </div>
          <div>COMMUNITY</div>
        </header>
        <section className="content-login">
          <p id="error-message"></p>
          <input className="form" type="text" id="email2" name="email" placeholder="Ingresa tu correo" required />
          <input className="form" type="password" id="password2" name="password" placeholder="Ingresa tu contraseña" required />
          <button className="btn-login" id="sign-in" type="submit">Iniciar Sesión</button>
          <button className="btn-google" id="btn-google">
            <i className="fab fa-google"></i>
            <span>Inicia sesión con Google</span>
          </button>
        </section>
        <footer className="footer-login">
          <button className="btn-footer">¿Olvidaste tu contraseña?</button>
          <span>¿No tienes cuenta? <button className="btn-footer">Regístrate</button></span>

        </footer>
      </section>
    </section>
  );
}
export default App;
