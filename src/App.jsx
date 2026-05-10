import './App.css'
//import Home from './components/Home';
import Footer from './components/Footer';
// import LoginForm from './components/LoginForm';
// import RegisterPage from './components/RegisterPage';
import Header from './components/Header';
// import Cart from './components/Cart';
import Navbar from './components/Navbar';
import Pizza from './components/Pizza';

function App() {

  return (
    <>
      <Navbar />
      <Header />
      {/* <Home /> */}
      {/* <Cart /> */}
      {/* <LoginForm /> */}
      {/* <RegisterPage /> */}
      <Pizza />
      <Footer />
    </>
  )
}

export default App;
