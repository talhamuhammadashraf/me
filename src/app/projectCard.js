import React from 'react';
// 
export default ({uri,title})=>(
    <div id='projCard'>
        <div>
            <img src={uri} className="projImg"/>
        <div id ='projTitle'>
        {title}
        </div>
        </div>
    </div>
)