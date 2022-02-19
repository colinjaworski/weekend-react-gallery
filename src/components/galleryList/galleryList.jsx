import galleryItem from '../galleryItem';

function galleryItem() {

return (
    <>
        <ul>
            {list.map(creature =>
                (<li key={creature.id}>{creature.name} is from {creature.origin}</li>)
            )}
        </ul>
    </>

)
            }