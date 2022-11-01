import React from "react";

function Gallery({ galleryItems, query }) {
  return (
    <div className="gallery-items">
      {galleryItems.map((item) => {
        return (
          <article key={item.id} className="gallery-item">
            <div className="img-container">
              <img src={item.img} alt={item.name} className="gallery-img" />
            </div>
            {/* <h3>{item.name}</h3> */}
          </article>
        );
      })}
    </div>
  );
}

export default Gallery;
