import { useState } from 'react';


function GalleryItem({ burrito }) {
    // console.log('this is potato')

    const [highlight, setHighlight] = useState(true);

    const handleLikeClick = () => {
        console.log('Fuck Yeah!', burrito.id);
        setHighlight(!highlight);
    };


    return (
        <>
            <div key={burrito.id} />
            {highlight ? <div onClick={handleLikeClick}><img src={burrito.path} width="150" height="150" /></div> : <div onClick={handleLikeClick}>{burrito.description}</div>}
            
            <button>Likes</button>
            <div>{burrito.likes}</div>
        </>

    )
}
export default GalleryItem;

