import React, { useEffect, useState } from 'react'
import Rotate from './flip-rotate';

const HomeWidget = ({states}:{
    states:any
}) => {
    console.log("rendered");
    const[stateData, setStateData]= useState(states);

  useEffect(()=>{
    const intervalId = setInterval(()=>{
        const activeIndex=stateData.findIndex((item:any)=>item.active);
        let newStateData=[];
        if(activeIndex>-1){
          newStateData = stateData.map((eachState:any,index:number)=>{
            return {
              ...eachState,
              active:activeIndex===stateData.length-1 && index===0 ? true : index==activeIndex+1 ? true :false
            }
          })
        }
        setStateData(newStateData);
    }, 20000)

    return(()=>{
        clearInterval(intervalId);
    })
  },[states])
  return (
    <>
    {
      stateData.map((eachState:any)=>   
        <div className="row" key={eachState.state}>
            <div className="head-blk">
                <h3>{eachState.state}</h3>
            </div>
          {
            eachState.results.map((result:any)=>
              <Rotate rotate={eachState.active} key={result.party} resultData={result}/>
              )
          }
        </div>
        )
    }
    <style jsx>{`
    .head-blk{
        display:flex;
        width:280px;
        height:260px;
        align-items:center;
        justify-content:center;
        background-color: #d1e0e0;
    }
    .row{
      display:flex;
    }
    `}</style>
    </>
  )
}

export default HomeWidget