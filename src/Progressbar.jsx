import React, { useEffect, useState } from 'react';



class Progressbar extends React.Component
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
    }
    render()
    {  
       
        return (
            <div className='bar' style={{'--back':this.props.Color}}>
                <div className='percentage--indicator' dataset={this.state.percentValue+'%'}></div>
                <div className='progressbar'>
                 <div className='progress' style={{'background':this.props.Color,'width':this.state.percentValue+'%'}} >
                 <label className='label' style={{'left':this.state.percentValue+'%'}}>{this.props.label}</label>
                 </div>
                </div>
            </div>
              )   
    }
}

export default Progressbar;