import React, { useEffect, useState } from 'react';






class CProgress extends React.Component
{
    constructor(props)
    {
       super(props);
       this.state={
           percentValue:0,
       }
    }

    componentDidMount()
    {
       let run=setInterval(()=>{
            this.setState({ percentValue:this.state.percentValue+1});
            if(this.state.percentValue>this.props.percentage)
            {
                clearInterval(run);
            }
        },200);
        this.circumference=50*2*Math.PI;
    }
    render()
    {  
        const styling={
        'stroke':this.props.strokeColor,
        'fill':'none',
        'strokeWidth':'10px',
        'strokeDasharray':this.circumference,
        'strokeDashoffset':this.circumference-(this.state.percentValue/100)*this.circumference+'px'
    }
        return (
            <div className='circ_progress'>
               <svg height='250px' width='250px'>
                   <circle className='circle' cx='125px' cy='125px' r='50px' fill='none' strokeWidth='10px' stroke='#111'  />
                   <circle className='circle' cx='125px' cy='125px' r='50px' style={{...styling}} />
               </svg>
           <h2>{this.state.percentValue}<span>%</span></h2>
            <h3>{this.props.label}</h3>
           </div>
              )   
    }
}

export default CProgress;