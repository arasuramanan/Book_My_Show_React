import './App.css';
import Navbar from './components/Navbar';
import './bootstrap.min.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Signin from './components/Signin';
import { Container } from 'react-bootstrap';
import Screen from './components/Screen';
import Register from './components/Register';
import Signup from './components/Signup';
import Footer from './components/Footer';

function App() {
  return <>
<Router>
  <Navbar/>
  <main>
    <Container>
        <Screen/>
    </Container>
    <Routes>
      <Route exact path="/signin" element={<Signin/>} />
      <Route exact path="/register" element={<Register/>} />
      <Route exact path="/signup" element={<Signup/>} />
    </Routes>
    </main>
    <Footer />
</Router>
    </> 
  
}

export default App;
