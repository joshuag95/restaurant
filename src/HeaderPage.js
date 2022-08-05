import React from 'react';


function HeaderPage({titleToggle, rickRoll}) {
    return (
        <div>
            <h1 style={{cursor: 'pointer'}} onClick={() => rickRoll('https://www.youtube.com/watch?v=dQw4w9WgXcQ')} className={titleToggle}>Picky🍴Eater</h1>
        </div>
    )
}


export default HeaderPage;