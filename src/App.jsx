import { Route, Routes } from 'react-router-dom';
import './App.css'
import Home from './views/Home';
import Cart from './views/Cart';
import LoginForm from './views/LoginForm';
import RegisterPage from './views/RegisterPage';
import NotFound from './views/NotFound';
import Pizza from './components/Pizza';
import Profile from './views/Profile';

function App() {

  return (
    <>
     <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/loginform" element={<LoginForm />} />
        <Route path="/registerpage" element={<RegisterPage />} />
        <Route path="/pizza/:id" element={<Pizza />} />
        <Route path="/profile" element={<Profile />} /> 
        <Route path="*" element={<NotFound />} />
      </Routes> 
    </>
  ) 
}

export default App;
