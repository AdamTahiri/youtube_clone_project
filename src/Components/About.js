import React from "react";
import "./About.css";

export default function About() {
  return (
    <div>
      <h1>Team 1</h1>
      <div className="profiles">
        <img src="https://avatars.githubusercontent.com/u/75190352?v=4" />
        <div className="profile_description">
          <h2>Adam Tahiri</h2>
          <p>
            My goal is to advance in a career where I can combine my two
            passions for gaming and fitness. I'm excited to join a team that
            celebrates creativity and intellectual curiosity. Always a team
            player, I find great satisfaction in working collaboratively as well
            as taking the lead to see a project through from start to finish.
          </p>
        </div>
        <img src="https://avatars.githubusercontent.com/u/47954095?v=4" />
        <div className="profile_description">
          <h2>Damien Yule</h2>
          <p>
            {" "}
            My main interests are in machine learning, artificial intelligence,
            and data science. <br />
            As the inevitable future of cosmic exploration approaches, I want to
            be on the frontlines of creating those AI machines that will
            facilitate that exploration.
          </p>
        </div>
        <img src="https://avatars.githubusercontent.com/u/75175536?v=4" />
        <div className="profile_description">
          <h2>Obaid Rustemi</h2>
          <p>
            I am a passionate and extroverted Software Developer with dreams to
            start my own AR company. I am an absolute geek about the future of
            tech, specifically: Augmented Reality, AI, blockchain, and automated
            technologies like self-driving cars.
          </p>
        </div>
      </div>
    </div>
  );
}
