import logo from './logo.svg';
import React, { useState } from 'react';
import './App.css';

function App() {
  const [name , setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');
  const [error , setError] = useState({});

  const ValidateForm = () =>{
    const error ={};
  

  if(!name.trim()){
    error.name = ' *required ';
  }

  if(!email.trim()){
    error.email = '*required ';
  } else if(!/\S+@\S+\.\S+/.test(email)){
    error.email = 'Email is Invalid ';
  } 

  if(!phone.trim()){
    error.phone = '*required ';
  }

  if(!password.trim()){
    error.password = ' *required'
  }
  return error ;
};

  const handleRegister= (e) => {
    e.preventDefault();
    const error = ValidateForm();

    if(Object.keys(error).length===0){
      console.log('Form is Submitted:',{name, email, phone, password});
      setName('');
      setEmail('');
      setPhone('');
      setPassword('');
      setError({});
    }else {
      setError(error);
    }
  };

  return (
    <div className=' bg-slate-700 w-full min-w-[320px] h-full min-h-[596px] '>
      <h1 className='text-white text-3xl font-extrabold translate-x-[642px]  translate-y-[125px] '>Form Validation</h1>
      <form className='bg-green-200 box-border border-black shadow-2xl shadow-cyan-500/50 space-y-4 border-4 w-[432px] p-4 translate-x-[532px] translate-y-[162px] rounded-lg'>
        <div className='mx-5 my-2'>
          <h1 className='font-bold text-lg '>Name</h1>
          <input type="text" vlaue={name} onChange={(e) => setName(e.target.value)} placeholder="User Name"></input>
          {error.name && <span>{error.name}</span>}
        </div>
        <div className='mx-5 my-2'>
          <h1 className='font-bold text-lg'>E-Mail</h1>
          <input type="email"  vlaue={email} onChange={(e) => setEmail(e.target.value)} placeholder="User E-mail "></input>
          {error.email && <span>{error.email}</span>}
        </div>
        <div className='mx-5 my-2'>
          <h1 className='font-bold text-lg'>Phone No.</h1>
          <input type='text' vlaue={phone} onChange={(e) => setPhone(e.target.value)} placeholder='User Phone'></input>
          {error.phone && <span>{error.phone}</span>}
        </div>
        <div className='mx-5 my-2'>
          <h1 className='font-bold text-lg'>Password</h1>
          <input type='text' vlaue={password} onChange={(e) => setPassword(e.target.value)} placeholder='User Password'></input>
          {error.password && <span>{error.password}</span>}
        </div>
        <div>
          <button type='submit' onClick={handleRegister} className='font-bold text-lg p-2 rounded-lg bg-emerald-600 translate-x-80 transition-all duration-200 text-white  hover:bg-cyan-700'>Register</button>
        </div>
      </form>
    </div>
  );
}

export default App;
