import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { login } from "./store/login";

function App() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const dispatch = useDispatch()
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
    </div>
  );
}

export default App;
