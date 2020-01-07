import React from 'react';
//
export default ({ uri, title ,ios,android,type}) => {
    const handleClick = ()=>{
        if(type){
            if(type == "ud"){
                alert('This is App is under Development')
            }
            else if(type =='d'){
                alert("This App's build was delivered directly to client not uploaded on store")
            }

        }
        else if(!android){
            alert("This App is only on App Store")
        }
        else if(!ios){
            alert("This App is only on Play Store")
        }

        
    }
    return(
  <div id='projCard'>

    {/* <div id='top'>
      <a href={android} target="blank" onClick={handleClick}>
      <img
        src='https://www.androidpolice.com/wp-content/uploads/2017/05/nexus2cee_ic_launcher_play_store_new-1.png'
        className='store'
      /></a> */}
      <img src={uri} className='projImg' />
      
          {/* <a href={ios} target="blank" onClick={handleClick}>
      <img
        src='http://assets.stickpng.com/thumbs/580b57fcd9996e24bc43c516.png'
        className='store'
      /></a>
    </div> */}
    <div id='projTitle'>{title}</div>
    <div id='top'>
      <a href={android} target="blank" onClick={handleClick}>
      <img
        src='https://www.androidpolice.com/wp-content/uploads/2017/05/nexus2cee_ic_launcher_play_store_new-1.png'
        className='store'
      /></a> 
       <a href={ios} target="blank" onClick={handleClick}>
      <img
        src='http://assets.stickpng.com/thumbs/580b57fcd9996e24bc43c516.png'
        className='store'
      /></a>
    </div> 
  </div>
)};
