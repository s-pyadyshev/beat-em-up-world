import React from 'react';
import "./style.scss";

const AboutPage = () => {
  return (
    <div className="about">
      <h2>What is the purpose of this site?</h2>
      <p>This site is a disciple of <a href="http://www.punchpedia.com" target="_blank" rel="noopener noreferrer">PunchPedia</a>. 
      My aim is to practice Frontend stuffand my Backend skills to update PunchPedia are not enough. At least it keeps me motivated to go on.
      The most crucial feature PunchPedia lacks is a complete filter by game parameters (you can filter by platform, players, difficulty and length) 
      and it was the main reason why I wanted to create this site - to add this feature. Lack of mobile view isn't crucial here.
      Everything now has it's own wikia (fandom) page but there is now such place for beat'em ups. Even one small game has it's own wikia (e.g. Ballon Fight, 182 pages!). And every beat'em up may have it as well. 
      So there is no reason to make it wikia-like. 100% completed pages (fighters, enemies, stages, media) are super cool but I think this detailed content better suits for wikias.
      </p>
      
      <p>Punchpedia is truly the #1 place on the internet for all information related to brawlers, so the aim of this site (the name sucks, you may offer another one) is to be the aggregator.
      - To be the #1 place to wandering on beat'em ups.<br/>
      - Let people contribute easier<br/>
      - Get people more interested by adding some features, e.g. comments, user rating, user reviews<br/>
      </p>

      <h2>What is a true beat'em up?</h2>
      <p>It's another endless holywar question - beat'em up VS hack'n'slash.
        <q>You don't beat people up with swords, you hack and slash people up with swords (Black_Knight_00)</q><br/>
        Seems reasonable with few exceptions.<br/>
        <q>there is no real answer, it always depends on how the person you're asking "feels" (SUPERAWESOMEULTRAMAN)</q><br/>
        Seems reasonable but feeling is not scientific argument.
      </p>

      Minimum requirements for a video game to be considered the beat'em up:<br/>
      - Hand-to-hand focus<br/>
      - Multiple opponents (at least more than 1)<br/>
      - Variety matters (grabs!). More moves means more realistic combat. No grabs = mindless button masher. Actually variety can be applied to any genre.<br/> 
      
      <br/>
      <strong>Is Golden Axe a beat'em up?</strong>
      <p>Yes, it has punches (kind of - by grip of the sword), kicks, throws, dashing attacks are not always made with weapon, so it feels like more non-weapon combat.</p>

      <strong>Is Comix Zone a beat'em up?</strong>
      <p>Yes, (it's combat has enough variety - throws, block, weapons, but multiple enemies is a rare thing here), but it is an Action Platformer as well, so it isn't typical representative of the genre, just a mixed type.</p>

      <h2>Why should we care about beat'em ups?</h2>
      <p>It is one of video game genres that fits the nature of every living being - competition, fight for resources, a place under the Sun.
        The fight/confrontation is a part of our life, we are programmed to punch and kick and get satisfaction from it.
      </p>

      <h2>How can I help?</h2>
      <p>You may help fill missing games to PunchPedia. 
        If you wish contribute here then go to <a href="https://github.com/s-pyadyshev/beat-em-ups-api" target="_blank" rel="noopener noreferrer">beat-em-ups-api</a>&nbsp;and add missing games into <strong>db.json</strong> and new parameters into <strong>beatemups-filter.json</strong> as Pull Request.
        </p>

      <h2>Links</h2>
      <ul>
        <li>
          <a href="http://www.punchpedia.com" target="_blank" rel="noopener noreferrer">PunchPedia</a>
        </li>
        <li>
          <a href="https://en.wikipedia.org/wiki/Beat_'em_up" target="_blank" rel="noopener noreferrer">Beat_'em_up on Wikipedia</a>
        </li>
        <li>
          <a href="https://www.spriters-resource.com/genre/beat_em_up/" target="_blank" rel="noopener noreferrer">Beat_'em_up on The Spriters Resource</a>
        </li>
        <li>
          <a href="https://store.steampowered.com/tags/en/Beat%20%27em%20up/" target="_blank" rel="noopener noreferrer">Beat_'em_ups on Steam</a>
        </li>
        <li>
          <a href="https://tvtropes.org/pmwiki/pmwiki.php/Main/BeatEmUp/" target="_blank" rel="noopener noreferrer">Beat_'em_ups on TV Tropes</a>
        </li>
      </ul>
    </div>
  );
}

export default AboutPage;