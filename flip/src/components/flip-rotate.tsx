import React from 'react'

const Rotate = ({rotate, resultData}:{
    rotate:boolean,
    resultData:any
}) => {
  return (
    <>
    {rotate ?
        <>
        <div id = "cube-container">	
        <div className = "cube">		
            {
                resultData.slides.map((partyData:any)=>(
                    <div style={{backgroundColor:resultData.color}} className="s-blk" key={partyData.title}>
                        <h3>{resultData.party}</h3>
                        <h1>{partyData.value}</h1>
                        <h5>{partyData.title}</h5>
                    </div>
                ))
            }
        </div>
        </div>
        </>
     : <div className="single-blk" style={{backgroundColor:resultData.color}}>
        <h3>{resultData.party}</h3>
        <h1>{resultData.slides[0].value}</h1>
        <h3>{resultData.slides[0].title}</h3>
        </div>}
    <style jsx>{
        ` 
        .single-blk{
            width: 280px;
            height: 260px;
            display:flex;
            justify-content:center;
            align-items:center;
            flex-direction:column;
            color:#fff;
        }
        .s-blk{
            width: 240px;
            height: 240px;
            display:flex;
            justify-content:center;
            align-items:center;
            flex-direction:column;
            color:#fff;
        }
        #cube-container {
            width: 240px;
            height: 240px;
            margin: 0px 20px;
            perspective: 800px;			
        }
        
        #cube-container:before {
            content: '';
          position: absolute; 
            top: 90px;
            left: 0;
            width: 100%; 
            height: 100%;	
         
            animation: rotateShadow 16s infinite;	
        }
        
        .cube {	
            height: 100%;
            width: 100%;
            position: relative;
            transform-style: preserve-3d;			
            transition: all 0.8s ease-in-out;		
            animation: rotate 16s infinite;	
        }
        
        .cube div {
            position: absolute;
            width: 240px;
            height: 240px;
          background: white;		
             
        }
        
        .cube div:nth-child(1) {
            transform: rotateY(0deg) translateZ(120px);
        }
        .cube div:nth-child(2) {
            transform: rotateY(90deg) translateZ(120px);
        }
        .cube div:nth-child(3) {
            transform: rotateY(-90deg) translateZ(120px);
        }
        .cube div:nth-child(4) {
            transform: rotateY(180deg) translateZ(120px);
        }
        
        @keyframes rotate {
            0% { transform: rotateY(0deg); }		
            25% { transform: rotateY(90deg); }		
            50% { transform: rotateY(180deg);}	
            75% {  transform: rotateY(270deg); }	
            100% { transform: rotateY(360deg); }
        }`
    }</style>
    </>
  )
}

export default Rotate