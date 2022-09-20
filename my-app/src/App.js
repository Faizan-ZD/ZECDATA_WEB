import React from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from "./container/home/home";
import Navbar from "./component/Header/navbar";
import CaseStudy from "./container/case-study/Case-study";
import AnimatedCursor from "react-animated-cursor";



function App() {
  return (
    <div className="App">
      <AnimatedCursor 
       innerSize={8}
       outerSize={18}
       color='0,0,255'
       innerScale={0.7}
       outerScale={5}
      />
     <Router>
        <Navbar />
        <div className='container'>
          <Routes>
            <Route exact path='/' element={<Home />}/>
            <Route path='/casestudy' element={<CaseStudy />}/>
           </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;
