
import GalleryItem from '../GalleryItem/GalleryItem';

function GalleryList({ list }) {
    console.log('this is list in GalleryList.jsx', list);

    return (
        <>
            {list.map(taco =>
            (<div key={taco.id}>
                <img src={taco.path} width="150" height="150" />
                {taco.description}
            </div>)

            )}

        </>
    )
}

export default GalleryList;