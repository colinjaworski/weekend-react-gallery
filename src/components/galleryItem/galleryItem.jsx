import { useState } from 'react';



function GalleryItem({ burrito, changeLikes, deletePhoto }) {
    // console.log('this is potato')

    const [image, setImage] = useState(true);


    const photoFlip = () => {
        console.log('you fliped the photo', burrito.id);
        setImage(!image);
    };
    const handleLikeClick = () => {
        console.log('you clicked the like button');
        changeLikes(burrito.id);
    };
    const handleDeleteClick = () => {
        console.log('you clicked the delete button');
        deletePhoto(burrito.id);
    };

    return (
        <>
            <div className="photoDump" key={burrito.id}>
                <div className="justPhoto">
                    {image ? <div onClick={photoFlip}><img src={burrito.path} width="150px" height="150px" /></div> : <div className="burritoText" onClick={photoFlip}>{burrito.description} </div>}
                </div>
                <div>
                    <button className="button" onClick={handleLikeClick}>Like</button>
                    <button className="deleteButton" onClick={handleDeleteClick}>Delete</button>

                    <div>{burrito.likes} people like this </div>
                </div>
            </div>
        </>

    )
}
export default GalleryItem;

