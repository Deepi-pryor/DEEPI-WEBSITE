window.addEventListener("DOMContentLoaded", () => {
    const t = new Timeline(".timeline");

    document.getElementById("sortAZ").addEventListener("click", () => {
        t.sortArticles("titleAZ");
    });

    document.getElementById("sortZA").addEventListener("click", () => {
        t.sortArticles("titleZA");
    });

    document.getElementById("sortNewest").addEventListener("click", () => {
        t.sortArticles("dateNewest");
    });

    document.getElementById("sortOldest").addEventListener("click", () => {
        t.sortArticles("dateOldest");
    });
});
  
  class Timeline {
    articles = [
        { title: "Iron Man", date: "2008-05-02", publisher: "Marvel Studios" },
        { title: "The Incredible Hulk", date: "2008-06-13", publisher: "Marvel Studios" },
        { title: "Iron Man 2", date: "2010-05-07", publisher: "Marvel Studios" },
        { title: "Thor", date: "2011-05-06", publisher: "Marvel Studios" },
        { title: "Captain America: The First Avenger", date: "2011-07-22", publisher: "Marvel Studios" },
        { title: "The Avengers", date: "2012-05-04", publisher: "Marvel Studios" },
        { title: "Iron Man 3", date: "2013-05-03", publisher: "Marvel Studios" },
        { title: "Thor: The Dark World", date: "2013-11-08", publisher: "Marvel Studios" },
        { title: "Captain America: The Winter Soldier", date: "2014-04-04", publisher: "Marvel Studios" },
        { title: "Guardians of the Galaxy", date: "2014-08-01", publisher: "Marvel Studios" },
        { title: "Avengers: Age of Ultron", date: "2015-05-01", publisher: "Marvel Studios" },
        { title: "Ant-Man", date: "2015-07-17", publisher: "Marvel Studios" },
        { title: "Captain America: Civil War", date: "2016-05-06", publisher: "Marvel Studios" },
        { title: "Doctor Strange", date: "2016-11-04", publisher: "Marvel Studios" },
        { title: "Guardians of the Galaxy Vol. 2", date: "2017-05-05", publisher: "Marvel Studios" },
        { title: "Spider-Man: Homecoming", date: "2017-07-07", publisher: "Marvel Studios" },
        { title: "Thor: Ragnarok", date: "2017-11-03", publisher: "Marvel Studios" },
        { title: "Black Panther", date: "2018-02-16", publisher: "Marvel Studios" },
        { title: "Avengers: Infinity War", date: "2018-04-27", publisher: "Marvel Studios" },
        { title: "Ant-Man and the Wasp", date: "2018-07-06", publisher: "Marvel Studios" },
        { title: "Captain Marvel", date: "2019-03-08", publisher: "Marvel Studios" },
        { title: "Avengers: Endgame", date: "2019-04-26", publisher: "Marvel Studios" },
        { title: "Spider-Man: Far From Home", date: "2019-07-02", publisher: "Marvel Studios" },
        { title: "Black Widow", date: "2021-07-09", publisher: "Marvel Studios" },
        { title: "Shang-Chi and the Legend of the Ten Rings", date: "2021-09-03", publisher: "Marvel Studios" },
        { title: "Eternals", date: "2021-11-05", publisher: "Marvel Studios" },
        { title: "Spider-Man: No Way Home", date: "2021-12-17", publisher: "Marvel Studios" },
        { title: "Doctor Strange in the Multiverse of Madness", date: "2022-05-06", publisher: "Marvel Studios" },
        { title: "Thor: Love and Thunder", date: "2022-07-08", publisher: "Marvel Studios" },
        { title: "Black Panther: Wakanda Forever", date: "2022-11-11", publisher: "Marvel Studios" },
        { title: "Ant-Man and the Wasp: Quantumania", date: "2023-02-17", publisher: "Marvel Studios" },
        { title: "Guardians of the Galaxy Vol. 3", date: "2023-05-05", publisher: "Marvel Studios" }
      // Add more movie data here...
    ];

    sortArticles(sortType) {
        switch (sortType) {
            case "titleAZ":
                this.articles.sort((a, b) => a.title.localeCompare(b.title));
                break;
            case "titleZA":
                this.articles.sort((a, b) => b.title.localeCompare(a.title));
                break;
            case "dateNewest":
                this.articles.sort((a, b) => new Date(b.date) - new Date(a.date));
                break;
            case "dateOldest":
                this.articles.sort((a, b) => new Date(a.date) - new Date(b.date));
                break;
            default:
                break;
        }
        this.clearTimeline();
        this.build();
    }

    clearTimeline() {
        const itemContainer = this.el.querySelector("[data-items]");
        if (itemContainer) {
            itemContainer.innerHTML = "";
        }
    }
  
    constructor(el) {
      this.el = document.querySelector(el);
  
      this.init();
    }
  
    init() {
      this.removeLoading();
      this.build();
      this.observeArticles();
    }
  
    build() {
      const itemContainer = this.el.querySelector("[data-items]");
      if (!itemContainer) return;
  
      const localeCode = "en-US";
  
      this.articles.forEach(article => {
        const time = document.createElement("time");
        time.className = "timeline__item-time";
  
        const articleDateLocal = new Date(article.date).toLocaleDateString(localeCode, {
          year: "numeric",
          month: "long",
          day: "numeric"
        });
        time.innerText = articleDateLocal;
  
        const link = document.createElement("a");
        link.className = "timeline__item-link";
        link.href = "#";
        link.innerText = article.title;
  
        const published = document.createElement("small");
        published.className = "timeline__item-pub";
        published.innerText = article.publisher;
  
        const item = document.createElement("li");
        item.className = "timeline__item";
        item.appendChild(time);
        item.appendChild(document.createElement("br"));
        item.appendChild(link);
        item.appendChild(document.createElement("br"));
        item.appendChild(published);
  
        itemContainer.appendChild(item);
      });
    }
  
    observeArticles() {
      this.observer = new IntersectionObserver(
        entries => {
          entries.forEach(entry => {
            const { target } = entry;
            const itemIn = "timeline__item--in";
  
            if (entry.isIntersecting) target.classList.add(itemIn);
            else target.classList.remove(itemIn);
          });
        },
        {
          root: null,
          rootMargin: "0px",
          threshold: 1
        }
      );
      // observe the items
      const items = document.querySelectorAll(".timeline__item");
      Array.from(items).forEach(item => {
        this.observer.observe(item);
      });
    }
  
    removeLoading() {
      const loading = this.el.querySelector("[data-loading]");
      if (!loading) return;
  
      this.el.removeChild(loading);
    }
  }
  