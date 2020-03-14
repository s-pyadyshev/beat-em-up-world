import React from 'react';
import "./style.scss";

const AboutPage = () => {
  return (
    <div className="about">
      <h2>What is the purpose of this site?</h2>
      <p>This site is a disciple of <a href="http://www.punchpedia.com" target="_blank" rel="noopener noreferrer">PunchPedia</a>.
      Since my aim is to practice Frontend stuff my Backend skills to update PunchPedia are not enough. At least it keeps me motivated to go on.
      The most crucial feature PunchPedia lacks is a complete filter by game parameters (you can filter by platform, players, difficulty and length) 
      and it was the main reason why I wanted to create this site - to add this feature. Lack of mobile view isn't crucial here.
      
      Here you can do the same thing like on PunchPedia - wandering the pages, read. But now with filter feature by 40+(!) parameters.</p>

      <h2>Why should we care about beat'em ups?</h2>
      <p>It is one of video game genres that fits the nature of every living being - competition, fight for resources, a place under the Sun.
        The fight/confrontation is a part of our life, we are programmed to punch and kick and get satisfaction from it.
      </p>

      <h2>How can I help?</h2>
      <p>You may help fill missing games to PunchPedia. 
        If you wish contribute here then go to <a href="https://github.com/s-pyadyshev/beat-em-ups-api" target="_blank" rel="noopener noreferrer">beat-em-ups-api</a>
        and add missing games into <strong>db.json</strong> and new parameters into <strong>beatemups-filter.json</strong> as Pull Request.
        </p>

      <h2>Links</h2>
      <ul>
        <li>
          <a href="http://www.punchpedia.com" target="_blank" rel="noopener noreferrer">PunchPedia</a>
        </li>
        <li>
          <a href="https://en.wikipedia.org/wiki/Beat_'em_up" target="_blank" rel="noopener noreferrer">Beat_'em_up on Wikipedia</a>
        </li>
      </ul>
    </div>
  );
}

export default AboutPage;