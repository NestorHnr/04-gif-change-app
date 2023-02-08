import { useState } from 'react';

export const GitChangeApp = () => {
    
    const [categories, setCategories] = useState([ 'One Punch','Dragon ball']); 
    
    const onAddCategory = () =>{

        setCategories(['valorant',...categories]);
    }

    return (
        <>
            {/* titulo */}
            <h1>GitChangeApp</h1>
            
            {/* input */}

            {/* Listado de Gif */}
            <button onClick={onAddCategory}>agregar</button>
            <ol>
                {categories.map( category => {
                    return <li key = { category }>{ category }</li>
                })}
            </ol>
                {/* Gif item */}
        </>
    )
}