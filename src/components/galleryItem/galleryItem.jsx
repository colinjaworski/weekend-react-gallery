import { useState } from 'react';



function GalleryItem({ burrito, changeLikes }) {
    // console.log('this is potato')

    const [highlight, setHighlight] = useState(true);
    

    const photoFlip = () => {
        console.log('you fliped the photo', burrito.id);
        setHighlight(!highlight);
    };
    const handleLikeClick = () => {
        console.log('you clicked the like button' );
        changeLikes(burrito.id);
    };

    return (
        <>
            <div className="photoDump" key={burrito.id}>
                <div className="justPhoto">
                    {highlight ? <div onClick={photoFlip}><img src={burrito.path} width="150" height="150" /></div> : <div onClick={photoFlip}>{burrito.description} </div>}
                </div>
                <div>
                    <button onClick={handleLikeClick}>Likes</button>
                    <div>{burrito.likes} people like this </div>
                </div>
            </div>
        </>

    )
}
export default GalleryItem;

