import { useState } from 'react';
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

export const GitChangeApp = () => {
    
    const [categories, setCategories] = useState([ 'One Punch','Dragon ball']); 
    
    const onAddCategory = ( newCategory ) =>{

        if(categories.includes(newCategory)) return;
        
        setCategories([ newCategory,...categories ]);
        // setCategories(['valorant',...categories]);
    }

    return (
        <>
            
            <h1>GitChangeApp</h1>
            
            <AddCategory 
                onNewCategory = {event => onAddCategory(event)}
            />

            
            {
            categories.map( (category) => (
                <GifGrid 
                    key={ category } 
                    category={ category }
                    />
                ))
            }
            
        </>
    )
}