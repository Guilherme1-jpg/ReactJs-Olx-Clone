import React from 'react';
import {connect} from 'react-redux';
import {BrowserRouter} from 'react-router-dom';


import {Template} from './components/MainComponents';
import Header from './components/partials/Header'; 
import Footer from './components/partials/Footer';

import './App.css';

import Routes from './Routes';

const Page = (props) =>{

  return (

   
   <BrowserRouter>
        <Template>
          <Header/>
            <Routes/>
          <Footer/>
        </Template>
   </BrowserRouter>

    
  );

}

const mapStateToProps = (state)=>{
  return{
      user:state.user
  };

}

const mapDispathToProps = (dispatch)=>{
    return{

    };

}

export default connect(mapStateToProps, mapDispathToProps)(Page);
