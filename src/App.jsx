import { useState, useEffect } from "react";
import { Audio } from "react-loader-spinner";

import "./styles/App.css";

import { Navbar } from "../src/components/Navbar/Navbar";
import { Article } from "./components/Article/Article";

import axios from "axios";

function App() {
  const [news, setNews] = useState([]);

  useEffect(() => {
    async function loadNews() {
      const response = await axios.get(
        "https://api.spaceflightnewsapi.net/v4/articles/"
      );
      const newsData = response.data.results;

      console.log(newsData);
      setNews(newsData);
    }

    loadNews();
  }, []);

  return (
    <>
      <Navbar />

      <section id="articles">
        {news.length === 0 ? (
          <div
            style={{
              height: "400px",
              width: "100%",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Audio
              height="80"
              width="80"
              radius="9"
              color="white"
              ariaLabel="loading"
              wrapperStyle
              wrapperClass
            />
          </div>
        ) : (
          news.map((article) => (
            <Article
              key={article.id}
              title={article.title}
              provider={article.newsSite}
              description={article.summary}
              thumbnail={article.image_url}
            />
          ))
        )}
      </section>
    </>
  );
}

export default App;
