import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
// import './App.css'
import './context.css';

import { MyContext } from './MyContext'
import MyComponent from './MyComponent'
import { ThemeContext } from './ThemeContext'
import Header from './ComponentsContext/Header'
import Hero from './ComponentsContext/Hero'
import About from './ComponentsContext/About'
import CallToAction from './ComponentsContext/CallToAction'
import Footer from './ComponentsContext/Footer'


function App() {

const [isDarkMode, setIsDarkMode]= useState(0);

const toggleTheme=()=>{
  setIsDarkMode(!isDarkMode);
}
  {/* by creating a context object, 
defining a provider component, 
and consuming the context in other components -- we can share data across our app*/}

  const [text, setText]=useState('');
  
  return (
    <>
    <div className={isDarkMode? "App Dark" : "App" }>
      <ThemeContext.Provider value={{isDarkMode, toggleTheme}}>
        <Header/>
        <Hero/>
        <About/>
        <CallToAction/>
        <Footer/>
      </ThemeContext.Provider>

    </div>





    {/* <div>
      <MyContext.Provider value={{text, setText}} > {/**PROVIDER COMPONENT 
        <MyComponent/>
      </MyContextProvider> </div> */}
    
    {/* <AllComments /> */}
    
    
     
    </>
  )
}

export default App


{/* <div>
<a href="https://vitejs.dev" target="_blank">
  <img src={viteLogo} className="logo" alt="Vite logo" />
</a>
<a href="https://react.dev" target="_blank">
  <img src={reactLogo} className="logo react" alt="React logo" />
</a>
</div>
<h1>Vite + React</h1>
<div className="card">
<button onClick={() => setCount((count) => count + 1)}>
  count is {count}
</button>
<p>
  Edit <code>src/App.jsx</code> and save to test HMR
</p>
</div>
<p className="read-the-docs">
Click on the Vite and React logos to learn more
</p> */}
