import React from 'react';
import './style.css';
import CProgress from './CProgress.jsx';
import Progressbar from './Progressbar.jsx';
const App=()=>{
    return(
      <section className='container'>
          <h1>SKILLS</h1>
     <div className='CircularProgress'>
     <CProgress label='Express' strokeColor='orangered' percentage={60} />
     <CProgress label='CSS' strokeColor='crimson' percentage={80} />
     <CProgress label='Javascript' strokeColor='yellow' percentage={60} />
     <CProgress label='React' strokeColor='purple' percentage={70} />
     <CProgress label='NodeJS' strokeColor='lightgreen' percentage={65} />
     </div>
     <div className='barProgress'>
     <Progressbar label='Express' Color='orangered' percentage={60} />
     <Progressbar label='CSS' Color='crimson' percentage={80} />
     <Progressbar label='Javascript' Color='yellow' percentage={60} />
     <Progressbar label='React' Color='purple' percentage={70} />
     <Progressbar label='NodeJS' Color='lightgreen' percentage={65} />
     </div>
      </section>
    ) 
}

export default App;