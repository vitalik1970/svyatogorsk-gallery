import React, { useEffect, useState } from 'react';
import { supabase } from '../supabaseClient';

const Gallery = () => {
  const [photos, setPhotos] = useState([]);

  useEffect(() => {
    fetchPhotos();
  }, []);

  const fetchPhotos = async () => {
    const { data, error } = await supabase.from('photos').select('*').order('created_at', { ascending: false });
    if (error) {
      console.error('Ошибка загрузки фото:', error);
    } else {
      setPhotos(data);
    }
  };

  return (
    <div className="gallery">
      <h1>Фотогалерея Святогорска</h1>
      <div className="photo-grid">
        {photos.map(photo => (
          <div key={photo.id} className="photo-card">
            <img src={photo.url} alt={photo.title} />
            <h3>{photo.title}</h3>
            {photo.description && <p>{photo.description}</p>}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gallery;
