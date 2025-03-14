import React, { useContext } from 'react'
import './Main.css';
import { assets } from '../../assets/assets';
import { Context } from '../../context/Context';
const Main = () => {
    const{onSent,recentPrompt,showResult,loading,resultData,setInput,input}=useContext(Context);
  return (
    <div className='main'>
        <div className='nav'>
            <p>Protein-Bind</p>
        </div>
        <div className="main-container">
            {!showResult?<>
                <div className="greet">
                <p><span>Hello,Pharmacologists</span></p>
                <p>How can I help you?</p>
            </div>
            <div className="cards">
                <div className="card">
                    <p>How does cheminformatics predict properties of drug molecules?</p>
                    <img src={assets.compass_icon} alt="" />
                </div>
                <div className="card">
                    <p>What role do molecular descriptors play in drug discovery?</p>
                    <img src={assets.bulb_icon} alt="" />
                </div>
                <div className="card">
                    <p>How does virtual screening aid in selecting molecules?</p>
                    <img src={assets.message_icon} alt="" />
                </div>
                <div className="card">
                    <p>What molecular modifications enhance drug bioavailability and safety?</p>
                    
                    <img src={assets.code_icon} alt="" />
                </div>
            </div>
            </>:
            <div className='result'>
                <div className="result-title">
                    <div></div>
                    <p>{recentPrompt}</p>
                </div>
                <div className="result-data">
                    <img src={assets.gemini_icon}></img>
                    {loading?<div className='loader'>
                        <hr />
                        <hr />
                        <hr />
                    </div>:<p dangerouslySetInnerHTML={{__html:resultData}}></p>}
                    
                </div>
            </div>
            }
            
            <div className="main-bottom">
                <div className="search-box">
                    <input onChange={(e)=>setInput(e.target.value)}  value={input} type="text" placeholder='Enter Your prompt' />
                    <div>
                        {/* <img src={assets.gallery_icon} alt="" />
                        <img src={assets.mic_icon} alt="" /> */}
                        {input?<img onClick={()=>onSent()} src={assets.send_icon} alt="" />:null}
                    </div>
                </div>
                <p className='bottom-info'>This Bot will help you in finding the Answers for your Questions in ChemiInformatics</p>
            </div>
        </div>
    </div>
  )
}

export default Main