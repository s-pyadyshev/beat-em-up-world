import React from 'react';
import "./style.scss";

const AboutPage = () => {
  return (
    <div className="about">
      <h2>What is the purpose of this site?</h2>
      <p>This site is a disciple of <a href="http://www.punchpedia.com" target="_blank" rel="noopener noreferrer">PunchPedia</a>.
      My aim is to practice Frontend stuff currently and it keeps me motivated to go on. It's much more interesting than another ToDo List, isn't it?
      Unfortunately I'm not fully interested in Backend so I'm not able to implement some features I really want to be.<br/>
      So here it is, Frontend-powered Beat'em Up World:<br/>
      Pros: no need for hosting, easy to contribute via Pull Requests.<br/>
      Cons: backend as JSON, no cool domain name.<br/>

      The most crucial feature PunchPedia lacks is a complete filter by game parameters (you can filter by platform, players, difficulty, length, name) 
      and it was the main reason why I wanted to create this site - to add this feature. 
      Lack of mobile view isn't crucial here.<br/>
      Everything now has it's own wikia (fandom) page but there is now such place for beat'em ups. 
      Even one small game has it's own wikia (e.g. Ballon Fight, 182 pages!). And every beat'em up may have it as well. 
      So there is no reason to make it wikia-like. 100% completed pages (fighters, enemies, stages, media) are super cool but this detailed content better suits for wikias.
      </p>
      
      <p>Punchpedia is truly the #1 place on the internet for all information related to brawlers, so the aim of this site (the name sucks, you may offer another one) is to be like the aggregator.
      - To be the #1 place to wandering on beat'em ups.<br/>
      - Let people contribute easier<br/>
      - Get people more interested in the genre<br/>
      </p>

      <h2>What is a true beat'em up / brawler?</h2>
      <p>It's another endless holywar question - beat'em up VS hack'n'slash.
        <q>You don't beat people up with swords, you hack and slash people up with swords (Black_Knight_00)</q><br/>
        Seems reasonable with few exceptions.<br/>
        <q>there is no real answer, it always depends on how the person you're asking "feels" (SUPERAWESOMEULTRAMAN)</q><br/>
        Seems reasonable but feeling is not scientific argument.
      </p>

      Minimum requirements for a video game to be considered a beat'em up:<br/>
      - <strong>BEAT UP</strong> - Hand-to-hand focus<br/>
      - <strong>THEM</strong> - Multiple opponents (at least more than 1)<br/>
      - Variety matters (grabs!). More moves means more realistic combat. No grabs = mindless button masher. Actually variety can be applied to any genre.<br/> 

      <br/>
      <strong>Is Golden Axe a beat'em up? They use swords!</strong>
      <p>Yes, it has punches (kind of - by grip of the sword), kicks, throws, dashing attacks are not always made with weapon, so it looks more like non-weapon combat.</p>

      <strong>Is Comix Zone a beat'em up?</strong>
      <p>Yes but 50/50 - Action-Puzzle-Platformer-Beat'em Up (it's combat has enough variety - throws, block, weapons, but multiple enemies is a rare thing here).</p>

      <h2>Why should we care about beat'em ups?</h2>
      <p>It is one of video game genres that fits the nature of every living being - competition, fight for resources, a place under the Sun.
        The fight/confrontation is a part of our life, we are programmed to punch and kick and get satisfaction from it.
      </p>

      <h2>How can I help?</h2>
      <p>You may help fill information about missing games to PunchPedia. 
        Just GO! to <a href="https://github.com/s-pyadyshev/beat-em-ups-api" target="_blank" rel="noopener noreferrer">beat-em-ups-api</a>&nbsp;and add missing games into <strong>db.json</strong> and new parameters into <strong>beatemups-filter.json</strong> as Pull Request.
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
        <li>
          <a href="https://crappygames.miraheze.org/wiki/Category:Beat%27em_Up_Games" target="_blank" rel="noopener noreferrer">Beat_'em_ups on Crappy Games Wiki</a>
        </li>
        <li>
          <a href="https://awesomegames.miraheze.org/wiki/Category:Beat%27em_up_Games" target="_blank" rel="noopener noreferrer">Beat_'em_ups on Awesome Games Wiki</a>
        </li>
        <li>
          <a href="https://stayskeptic.wordpress.com/2017/04/22/what-makes-a-beat-em-up" target="_blank" rel="noopener noreferrer">https://stayskeptic.wordpress.com/2017/04/22/what-makes-a-beat-em-up</a>
        </li>
      </ul>
    </div>
  );
}

export default AboutPage;