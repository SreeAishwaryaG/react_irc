import { BrowserRouter,Route,Routes } from 'react-router-dom';
import './App.css';

import Navbar from './Components/navbar';

import LoginForm from './Components/Login';
import RegisterForm from './Components/Register';
import ToyStoreHomePage from './Components/Home';
import Footer from './Components/Footer';
import AgeZero from './Components/AgeZero';
import AgeOne from './Components/AgeOne';
import AgeSeven from './Components/AgeSeven';
import AgeAdult from './Components/AgeAdult';
import Details from './Components/Details';
import ToyCar from './Components/Toycar';
import Board from './Components/Board';
import Art from './Components/Art';
import Puzzles from './Components/Puzzles';
import {ThemeProvider} from './Components/ThemeContext.jsx';
import Terms from './Components/Terms';
import About from './Components/About';
import PaymentPage from './Components/Payment';
function App() {
  return (
        <ThemeProvider>
    <div className="App">
         
     
     <BrowserRouter>
        <Navbar/>
        <Routes>
      <Route exact path='/' element={<ToyStoreHomePage />} />
          <Route path='/reg' element={<RegisterForm/>}/>
          <Route path='/login' element={<LoginForm/>}/>
          <Route path='/agezero' element={<AgeZero/>}/>
          <Route path='/ageone' element={<AgeOne/>}/>
          <Route path='/ageseven' element={<AgeSeven/>}/>
          <Route path='/ageadult' element={<AgeAdult/>}/>
          <Route path='/details' element={<Details/>}/>
          <Route path='/board' element={<Board/>}/>
          <Route path='/puzzles' element={<Puzzles/>}/>
          <Route path='/art' element={<Art/>}/>
          <Route path='/toycar' element={<ToyCar/>}/>
          <Route path='/terms' element={<Terms/>}/>
          <Route path='/about' element={<About/>}/>
          <Route path='/pay' element={<PaymentPage/>}/>


        </Routes>
        <Footer/>
        </BrowserRouter> 
      
        </div>
    </ThemeProvider>
  );
}

export default App;
