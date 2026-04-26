import './App.css'
import Home from './components/Home';
import NavbarComponent from './components/Navbar';
import Footer from './components/Footer';
import LoginForm from './components/LoginForm';
import RegisterPage from './components/RegisterPage';

function App() {

  return (
    <>
      <NavbarComponent /> 
      {/* <Home /> */}
      {/*<RegisterPage /> */}
      <LoginForm />
      <Footer />
    </>
  )
}

export default App;
