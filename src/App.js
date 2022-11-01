import React, { useState } from "react";
import { data } from "./data";
import CategoryButtons from "./components/CategoryButtons";
import Gallery from "./components/Gallery";

function App() {
  const [galleryItems, setGalleryItems] = useState(data);
  const [query, setQuery] = useState("");

  const handleQueryChange = (e) => {
    const { value } = e.target;
    setQuery(value);
  };

  const categories = ["all", ...new Set(data.map((item) => item.category))];

  const filterItems = (category) => {
    if (category === "all") {
      setGalleryItems(data);
      return;
    }
    const filteredItems = data.filter((item) => item.category === category);
    setGalleryItems(filteredItems);
  };

  return (
    <main>
      <CategoryButtons categories={categories} filterItems={filterItems} />
      <section className="section-center">
        <Gallery
          galleryItems={galleryItems}
          query={query}
          handleQueryChange={handleQueryChange}
        />
      </section>
    </main>
  );
}

export default App;
