import { useEffect, useState } from 'react';
import axios from 'axios';
import React from 'react';
import './App.css';
import GalleryList from '../GalleryList/GalleryList';

function App() {

  const [galleryList, setGalleryList] = useState([]);

  const getPhotos = () => {
    // console.log('getting photos');
    axios({
      method: 'GET',
      url: '/gallery'
    })
      .then((response) => {
        // console.log('Entire response:', response);
        // console.log('Just data:', response.data);
        // Set data into component state
        setGalleryList(response.data);
        // don't call galleryList inside the same function that it's being initiallized or you'll get an empty array!!!
      })
      .catch(function (error) {
        console.log('Error on get:', error);
      });
  }

  const changeLikes = (id) => {
    axios({
      method: 'PUT',
      url: `/gallery/like/${id}`
    })
      .then((response) => {
        getPhotos();
      })
      .catch(function (error) {
        console.log('Error on put:', error);
      });
  }

  const deletePhoto = (id) => {
    axios({
      method: 'DELETE',
      url: `/gallery/delete/${id}`
    })
      .then((response) => {
        getPhotos();
      })
      .catch(function (error) {
        console.log('Error deleting item:', error);
      });
  }
  // console.log('gallerylist', galleryList);

  useEffect(() => {
    // console.log('first load using useEffect');
    getPhotos();
  }, [])

  return (
    <div className="App">
      <header className="App-header">
        <h1 className="App-title">Vacation Photos</h1>
      </header>
      <p className="theGallery">Mexico</p>
      <div>
        <GalleryList
          list={galleryList}
          changeLikes={changeLikes}
          deletePhoto={deletePhoto}
        />
      </div>
    </div>

  );
}

export default App;
