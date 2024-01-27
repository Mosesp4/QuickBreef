import React from "react";
import { logo } from "../assets";

const Hero = () => {
  return (
    <header
      className="w-full flex justify-center
    items-center flex-col"
    >
      <nav
        className="flex justify-between items-center
       w-full mb-10 pt-3"
      >
        <img src={logo} alt="sumz_logo" className="w-28 object-contain" />

        <button
          type="button"
          onClick={() => window.open("https://github.com/Mosesp4")}
          className="black_btn"
        >
          GitHub
        </button>
      </nav>
      <h1 className="head_text">
        Summarize Article with <br className="max-md:hidden" />
        <span className="orange_gradient">Quickbreef</span>
      </h1>

      <h2 className="desc">
        <span className="text-lg text-orange-500 font-bold">Introducing Quickbrief:</span> <br/> Your Personal Article Concierge! Powered by the
        cutting-edge OpenAI GPT-4 technology, Quickbrief is not just an open-source app;
        it's a revolution in reading efficiency. Whether it's the
        latest news, a scientific paper, or a lengthy blog post, Quickbrief
        distills the essence, giving you all the vital information without the
        fluff. Say goodbye to endless scrolling and
        hello to knowledge at your fingertips. Quickbrief – Where simplicity
        meets brilliance, and staying informed is just a tap away!
      </h2>
    </header>
  );
};

export default Hero;
