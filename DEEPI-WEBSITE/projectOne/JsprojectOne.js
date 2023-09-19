// Data with movie summaries
const moviesData = [
    { name: "Captain America: The First Avenger", releaseDate: "2011", summary: "Steve Rogers, a frail soldier, becomes Captain America and battles the Red Skull during World War II." },
    { name: "Captain Marvel", releaseDate: "2019", summary: "Carol Danvers, aka Captain Marvel, discovers her past and joins the fight against the Skrull invasion." },
    { name: "Iron Man", releaseDate: "2008", summary: "Tony Stark, a genius inventor, builds a suit of armor to become the superhero Iron Man and must confront his own technology's destructive potential." },
    { name: "Iron Man 2", releaseDate: "2010", summary: "Tony Stark faces new threats as Iron Man, including a rival inventor and a Russian physicist with deadly technology." },
    { name: "The Incredible Hulk", releaseDate: "2008", summary: "Scientist Bruce Banner transforms into the Hulk when exposed to gamma radiation and must evade the military while seeking a cure." },
    { name: "Thor", releaseDate: "2011", summary: "The mighty Thor, the Norse God of Thunder, is banished to Earth and must prove himself worthy to wield his power again." },
    { name: "The Avengers", releaseDate: "2012", summary: "Earth's mightiest heroes, including Iron Man, Thor, and Captain America, join forces to stop Loki and an alien invasion." },
    { name: "Thor: The Dark World", releaseDate: "2013", summary: "Thor must team up with his mischievous brother Loki to stop the dark elf Malekith from plunging the universe into darkness." },
    { name: "Iron Man 3", releaseDate: "2013", summary: "Tony Stark faces a formidable terrorist known as the Mandarin, who threatens his loved ones and his technology." },
    { name: "Captain America: The Winter Soldier", releaseDate: "2014", summary: "Captain America uncovers a conspiracy within S.H.I.E.L.D. and faces a powerful new enemy, the Winter Soldier." },
    { name: "Guardians of the Galaxy", releaseDate: "2014", summary: "A group of misfits, including Star-Lord and Rocket Raccoon, team up to stop the villainous Ronan from using a powerful artifact." },
    { name: "Guardians of the Galaxy Vol. 2", releaseDate: "2017", summary: "The Guardians reunite and uncover the mystery of Peter Quill's parentage while facing cosmic threats." },
    { name: "Avengers: Age of Ultron", releaseDate: "2015", summary: "The Avengers battle Ultron, a sentient AI, who seeks to wipe out humanity and bring about his vision of peace." },
    { name: "Ant-Man", releaseDate: "2015", summary: "Scott Lang, a master thief, becomes the shrinking hero Ant-Man and helps his mentor, Hank Pym, prevent a heist." },
    { name: "Captain America: Civil War", releaseDate: "2016", summary: "The Avengers split into two factions, led by Captain America and Iron Man, over government oversight and a new threat." },
    { name: "Doctor Strange", releaseDate: "2016", summary: "Dr. Stephen Strange gains mystical powers and becomes the Sorcerer Supreme, defending the world against dark forces." },
    { name: "Thor: Ragnarok", releaseDate: "2017", summary: "Thor must escape captivity on a distant planet and stop the powerful Hela from destroying Asgard." },
    { name: "Black Panther", releaseDate: "2017", summary: "T'Challa, the Black Panther, returns to Wakanda and faces challenges to his throne and the nation's secrets." },
    { name: "Avengers: Infinity War", releaseDate: "2018", summary: "The Avengers and allies battle Thanos, who seeks to collect all the Infinity Stones and reshape the universe." },
    { name: "Ant-Man and the Wasp", releaseDate: "2018", summary: "Ant-Man teams up with the Wasp to rescue Janet van Dyne from the Quantum Realm and thwart a new threat." },
    { name: "Captain Marvel", releaseDate: "2019", summary: "Carol Danvers, aka Captain Marvel, discovers her past and joins the fight against the Skrull invasion." },
    { name: "Avengers: Endgame", releaseDate: "2019", summary: "The Avengers embark on a time-travel mission to undo Thanos's actions and save the universe." },
    { name: "Spider-Man: Far From Home", releaseDate: "2019", summary: "Peter Parker grapples with the loss of Tony Stark while facing a new villain, Mysterio, during a European trip." },
    { name: "Black Widow", releaseDate: "2021", summary: "Natasha Romanoff confronts her past as a spy and faces the ruthless Taskmaster." },
    { name: "Shang-Chi and the Legend of the Ten Rings", releaseDate: "2021", summary: "Shang-Chi, a skilled martial artist, battles the mysterious Ten Rings organization and confronts his past." },
    { name: "Eternals", releaseDate: "2021", summary: "The Eternals, immortal beings, reunite to protect humanity from the Deviants and face their purpose." },
    { name: "Spider-Man: No Way Home", releaseDate: "2021", summary: "Spider-Man teams up with other versions of himself from different dimensions to combat multiverse threats." },
    { name: "Doctor Strange in the Multiverse of Madness", releaseDate: "2022", summary: "Doctor Strange confronts the chaos of the multiverse and faces a powerful adversary, the Scarlet Witch." },
    { name: "Thor: Love and Thunder", releaseDate: "2022", summary: "Thor and Jane Foster wield Mjolnir against new threats, including the powerful Gorr the God Butcher." },
    { name: "Black Panther: Wakanda Forever", releaseDate: "2022", summary: "Wakanda faces challenges to its leadership and the legacy of T'Challa after his passing." },
    { name: "Ant-Man and the Wasp: Quantumania", releaseDate: "2023", summary: "Ant-Man, the Wasp, and their allies confront the quantum realm and a formidable new adversary, Kang the Conqueror." },
    { name: "Guardians of the Galaxy Vol. 3", releaseDate: "2023", summary: "The Guardians reunite for another cosmic adventure as they face personal and galactic threats." }
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
        summary.textContent = movie.summary;

        listItem.appendChild(title);
        listItem.appendChild(summary);

        timeline.appendChild(listItem);
    });
}

// Function to sort movies by release date
function sortMoviesByReleaseDate() {
    const timeline = document.querySelector('.timeline');
    const movies = Array.from(timeline.querySelectorAll('.movie'));

    movies.sort((a, b) => {
        const dateA = a.getAttribute('data-date');
        const dateB = b.getAttribute('data-date');
        return dateA.localeCompare(dateB);
    });

    // Clear the timeline and append sorted movies
    timeline.innerHTML = '';
    movies.forEach(movie => {
        timeline.appendChild(movie);
    });
}

// Function to sort movies alphabetically by title (A-Z)
function sortMoviesByTitleAZ() {
    const timeline = document.querySelector('.timeline');
    const movies = Array.from(timeline.querySelectorAll('.movie'));

    movies.sort((a, b) => {
        const titleA = a.querySelector('h3').textContent;
        const titleB = b.querySelector('h3').textContent;
        return titleA.localeCompare(titleB);
    });

    // Clear the timeline and append sorted movies
    timeline.innerHTML = '';
    movies.forEach(movie => {
        timeline.appendChild(movie);
    });
}

// Function to sort movies alphabetically by title (Z-A)
function sortMoviesByTitleZA() {
    const timeline = document.querySelector('.timeline');
    const movies = Array.from(timeline.querySelectorAll('.movie'));

    movies.sort((a, b) => {
        const titleA = a.querySelector('h3').textContent;
        const titleB = b.querySelector('h3').textContent;
        return titleB.localeCompare(titleA);
    });

    // Clear the timeline and append sorted movies
    timeline.innerHTML = '';
    movies.forEach(movie => {
        timeline.appendChild(movie);
    });
}

// Add event listeners to the sorting buttons
const sortReleaseDateButton = document.getElementById('sort-release-date');
const sortTitleAZButton = document.getElementById('sort-title-az');
const sortTitleZAButton = document.getElementById('sort-title-za');

sortReleaseDateButton.addEventListener('click', sortMoviesByReleaseDate);
sortTitleAZButton.addEventListener('click', sortMoviesByTitleAZ);
sortTitleZAButton.addEventListener('click', sortMoviesByTitleZA);

// Call the function to generate timeline items
generateTimelineItems(moviesData);
