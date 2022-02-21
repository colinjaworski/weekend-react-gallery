
import GalleryItem from '../GalleryItem/GalleryItem';

function GalleryList({ list, changeLikes, deletePhoto }) {
    // console.log('this is list in GalleryList.jsx', list);

    return (
        <>
            <div>
                {list.map(taco =>
                    <GalleryItem
                        key={taco.id}
                        burrito={taco}
                        changeLikes={changeLikes}
                        deletePhoto={deletePhoto}
                    />
                )}
            </div>
        </>
    )
}

export default GalleryList;