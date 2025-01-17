import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './assets/css/portal.css';
import Header from './Header';
import Wapper from './Wapper';

const StatsMeta = (props) => {
    return (
        <>
            {(() => {
              if (props.percent == 'news'){
                  return (
                      <Text>data</Text>
                  )
              }
              
              return null;
            })()}
            
            <div class="stats-meta text-success">
                <svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-arrow-down" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" d="M8 1a.5.5 0 0 1 .5.5v11.793l3.146-3.147a.5.5 0 0 1 .708.708l-4 4a.5.5 0 0 1-.708 0l-4-4a.5.5 0 0 1 .708-.708L7.5 13.293V1.5A.5.5 0 0 1 8 1z" />
                </svg> 5% </div>
        </>


    );
}

export default StatsMeta;
