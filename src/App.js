
import './App.css';
// import Header from './components/Header'


const name = "Merve"
const surname="Coskun"
const isLoggedIn=true;
 

function App(){
  return (
  <>
  {/* <h1>{name} {surname}</h1> */}
  {/* <h1>{`My name is ${name}, surname is ${surname}`}</h1> */}

  {/* <h1>
    {isLoggedIn && `My name is ${name}, surname is ${surname}`}
    {!isLoggedIn && 'You are not logged in.!'}
  </h1> */}

  <h1>
    {isLoggedIn ? `My name is ${name}, surname is ${surname}`: 'You are not logged in.!' }
  </h1>





  </>
  );
   
}
export default App;
