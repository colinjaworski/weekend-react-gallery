
import GalleryItem from '../GalleryItem/GalleryItem';

function GalleryList({ list }) {
    console.log('this is list in GalleryList.jsx', list);

    // const handleClick = () => {
    //     console.log('sup fucker!');

    // };

    return (
        <>
            {list.map(taco =>
                <GalleryItem  
                key={taco.id} 
                burrito={taco}
                /> 
            )}

        </>
    )
}

export default GalleryList;