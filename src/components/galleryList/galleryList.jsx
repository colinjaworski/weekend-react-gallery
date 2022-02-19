
import GalleryItem from '../GalleryItem/GalleryItem';

function GalleryList({ list, changeLikes }) {
    console.log('this is list in GalleryList.jsx', list);

   

    return (
        <>
        <div>
            {list.map(taco =>
                <GalleryItem  
                key={taco.id} 
                burrito={taco}
                changeLikes={changeLikes}
                /> 
            )}
            </div>
        </>
    )
}

export default GalleryList;