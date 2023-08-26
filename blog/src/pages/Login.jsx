import React from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
  return (
    <div className="auth">
      <h1>Login</h1>
      <form action="">
        <input type="text" placeholder="帳號" />
        <br />
        <input type="password" placeholder="密碼" />
        <button>登入</button>
        <p>This is an error!!!</p>
        <span>
          還沒註冊嗎? <Link to="/register">前往註冊</Link>
        </span>
      </form>
    </div>
  );
};

export default Login;
