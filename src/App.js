import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {autoLogin, login } from "./store/login"; 
import { somar } from './store/contador'

function App() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch()

  //ativar autologin
  React.useEffect(() => {
    dispatch(autoLogin())
  }, [dispatch])


  const { data } = useSelector((state) => state.login.user)
  function handleSubmit(e) {
    e.preventDefault()
    dispatch(login({username, password}))
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label style={{display:'block'}} htmlFor='username'>Usuário</label>
        <input id='username'
         type='text' 
         value={username}
         onChange={(e) => setUsername(e.target.value)}/>
        <label style={{display:'block'}} htmlFor='password'>Senha</label>
        <input id='password'
         type='password' 
         value={password}
         onChange={(e) => setPassword(e.target.value)}/>
         <button>Enviar</button>
         <p>{data?.email}</p>
      </form>
      <button onClick={() => dispatch(somar(5))}>Somar</button>
    </div>
  );
}

export default App;
