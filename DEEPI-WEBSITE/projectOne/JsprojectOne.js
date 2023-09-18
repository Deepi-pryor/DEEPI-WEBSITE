// Data
const moviesData = [
    { name: "Iron Man", releaseDate: "2008" },
    { name: "The Incredible Hulk", releaseDate: "2008" },
    // ... (other movie data)
    { name: "Guardians of the Galaxy Vol. 3", releaseDate: "2023" }
  ];
  
  // Function to generate timeline items
  function generateTimelineItems(data) {
    const timeline = document.querySelector('.timeline');
  
    data.forEach(movie => {
      const listItem = document.createElement('li');
      listItem.className = 'movie';
      listItem.setAttribute('data-date', movie.releaseDate);
  
      const title = document.createElement('h3');
      title.textContent = movie.name;
  
      const summary = document.createElement('p');
      summary.textContent = `Summary of ${movie.name}.`; // You can add the actual movie summary here.
  
      listItem.appendChild(title);
      listItem.appendChild(summary);
  
      timeline.appendChild(listItem);
    });
  }
  
  // Call the function to generate timeline items
  generateTimelineItems(moviesData);