import './App.css';
import React, {useState} from 'react';
import loginImage from './login.jpeg';
function App() {
    const[email, setEmail] = useState('');
    const[senha, setSenha] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

        const handleSubmit = (event) => {
          event.preventDefault();
            if(!email ||!senha ){
              setErrorMessage('Por favor, preencha os campos obrigatórios');
            }
            setErrorMessage('');
            console.log('Email', email);
            console.log("Senha", senha);
            
            window.location.href = 'https://www.ulife.com.br/Login.aspx?redirectUrl=https://student.ulife.com.br/StudentHome#pageIndex=1'
        };
      return (
    <div className="App">
      <img src={loginImage} alt="user"/>
      <form name="logarForm" onSubmit={handleSubmit}>
        <h1><b>Login</b></h1><br/>
        <h3><b>E-mail</b></h3><br/>
        <input 
          type="email"
          placeholder="Digite seu e-mail"
          name="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          />
          <br />
          <h3><b>Senha</b></h3><br/>
          <input 
          type="password"
          placeholder="Digite sua senha"
          name="senha"
          required
          value={senha}
          onChange={(e) => setSenha(e.target.value)}
          />
          <br />
            <label htmlFor="Remember-me">
              <input type="checkbox" id="remember-me" name="remember-me"/>
              Relembrar-me
            </label>
            <br />
            {errorMessage && <p className="error-message">{errorMessage}</p>}
            <button type="submit">Logar</button>
            <button 
            type="button"
            onClick={() => window.location.href = 'https://gemini.google.com/app/be4951338fc36aa9'}>
              Não possuo conta
            </button>
            </form>
    </div>
  );
}

export default App;
