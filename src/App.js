import React from 'react'
import { Navbar,Brand,CTA,Article,Feature } from './components';
import { Blog,Features,Footer,Header,Possibility,WhatGPT3 } from './containers';
import './App.css'
import './index.css'
//rafce for react functional component
const App = () => {
  return (
<div className="App">
    <div className="gradient__bg">
        <Navbar/>
        <Header/>
    </div>
    <Brand/>
    <WhatGPT3/>
    <Features/>
    <Possibility/>
    <CTA/>
    <Blog/>
    <Footer/>
</div>
  )
}

export default App;
