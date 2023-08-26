import React from 'react';
import { Link } from 'react-router-dom';

const Register = () => {
  return (
    <div className="auth">
      <h1>Register</h1>
      <form action="">
        <input required type="text" placeholder="帳號" />
        <input required type="email" placeholder="信箱" />
        <input required type="password" placeholder="密碼" />
        <button>登入</button>
        <p>This is an error!!!</p>
        <span>
          已經有帳號了嗎? <Link to="/login">前往登入</Link>
        </span>
      </form>
    </div>
  );
};

export default Register;
