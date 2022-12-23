//import logo from './logo.svg';
//import './App.css';
import Header from './Pages/Components/Header'
import Footer from './Pages/Components/Footer'
import Body from './Pages/Components/Body'

function App() {
  return (
    <div className="App">
      <header className="App-header"> <>  <Header/></></header>
      <body className="mainbody">
        <><Body/></>
      </body>
   
    <footer className="footer"><><Footer/></></footer> 
    

    
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>Sindhu</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
    </div>
  );
}

export default App;
