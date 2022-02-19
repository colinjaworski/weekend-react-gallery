import { useEffect, useState } from 'react';
import axios from 'axios';
import React from 'react';
import './App.css';
import GalleryList from '../GalleryList/GalleryList';
import GalleryItem from '../GalleryItem/GalleryItem';


function App() {

  const [galleryList, setGalleryList] = useState([]);



  const getPhotos = () => {
    console.log('getting creature photos');
    axios({
      method: 'GET',
      url: '/gallery'
    })
      .then( (response) => {
        // console.log('Entire response:', response);
        // The actual array comes from the data attribute on the response
        console.log('Just the data:', response.data);
  
        // Set data into component state
        setGalleryList(response.data);
      
      })
      .catch(function (error) {
        console.log('Error on get:', error);
      });
  }
  console.log('galleryList is :', galleryList);

  useEffect(() => {
  console.log('first load using useEffect');
    getPhotos();
  }, [])

  return (
    <div className="App">
      <header className="App-header">
        <h1 className="App-title">Gallery of My Life</h1>
      </header>
      <p>Gallery goes here</p>
      <GalleryList />
    </div>
  );
}

export default App;
