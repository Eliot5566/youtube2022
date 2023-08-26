import { BrowserRouter, Routes, Route, Outlet } from 'react-router-dom';

import Register from './pages/Register';
import Login from './pages/Login';
import Single from './pages/Single';
import Write from './pages/Write';
import Home from './pages/Home';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import '@fortawesome/fontawesome-free/css/all.min.css';

import './style.css';
const Layout = () => {
  return (
    <div>
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
};

function App() {
  return (
    <BrowserRouter>
      <div className="app">
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="/register" element={<Register />} />
            <Route path="/login" element={<Login />} />
            <Route path="/single/:id" element={<Single />} />
            <Route path="/write" element={<Write />} />
          </Route>
        </Routes>
      </div>
    </BrowserRouter>

    //只有home login 有layout
    // <BrowserRouter>
    //   <div className="app">
    //     <Routes>
    //       <Route className="container" path="/" element={<Layout />}>
    //         <Route index element={<Home />} />
    //         <Route path="/login" element={<Login />} />
    //         <Route path="/register" element={<Register />} />
    //       </Route>

    //       <Route path="/single/:id" element={<Single />} />
    //       <Route path="/write" element={<Write />} />
    //     </Routes>
    //   </div>
    // </BrowserRouter>
  );
}

export default App;
