import React from "react";

import "./styles/App.css";

import { Navbar } from "../src/components/Navbar/Navbar";
import { Article } from "./components/Article/Article";

import articleImg from "../src/assets/images/Rectangle 30.png";
import articleImg2 from "../src/assets/images/Rectangle 32.png";
import articleImg3 from "../src/assets/images/Rectangle 34.png";
import { Counter } from "./components/Counter/Counter";

class App extends React.Component {
  render() {
    return (
      <>
        <Navbar />
        <Counter />
        <section id="articles">
          <Article
            thumbnail={articleImg}
            title="Designing Dashboards"
            provider="NASA"
            description="Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet."
          />
          <Article
            thumbnail={articleImg2}
            title="Vibrant Portraits of 2020"
            provider="SpaceNews"
            description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo neque in eveniet, iste quod quasi dolorum voluptate velit. Libero commodi quisquam ullam doloremque, asperiores sint consectetur ipsam voluptates cum facere."
          />
          <Article
            thumbnail={articleImg3}
            title="36 Days of Malayalam type"
            provider="Spaceflight Now"
            description="Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet."
          />
          <Article
            thumbnail={articleImg}
            title="Designing Dashboards"
            provider="NASA"
            description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo neque in eveniet, iste quod quasi dolorum voluptate velit. Libero commodi quisquam ullam doloremque, asperiores sint consectetur ipsam voluptates cum facere."
          />
        </section>
      </>
    );
  }
}

export default App;
