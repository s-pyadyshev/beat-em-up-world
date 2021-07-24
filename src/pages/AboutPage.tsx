import React from "react";
import "./article.scss";
import { Helmet } from "react-helmet";

const AboutPage = () => (
  <article className="about">
    <Helmet>
      <meta charSet="utf-8" />
      <title>About</title>
      <link rel="icon" type="image/png" href="favicon2.png" sizes="16x16" />
    </Helmet>
    <h2>What is the purpose of this site?</h2>
    <p>
      This site is a disciple of&nbsp;
      <a
        href="http://www.punchpedia.com"
        target="_blank"
        rel="noopener noreferrer"
      >
        PunchPedia
      </a>
      &nbsp;and it is approved by its creator.
      <br />
      Everything now has it&apos;s own wikia (fandom) page but there is now such
      place for beat&apos;em ups. Even one small game has it&apos;s own wikia.
      And every beat&apos;em up may have it as well. So there is no reason to
      make it wikia-like (at least because no one would care). 100% completed
      pages (fighters, enemies, stages, media) are super cool but this detailed
      content better suits for wikias.
    </p>
    My aim is to practice Frontend stuff currently and it keeps me motivated to
    go on. It&apos;s much more interesting than another ToDo List, isn&apos;t
    it? Unfortunately I&apos;m not fully interested in Backend currently so
    I&apos;m not able to implement some features in PunchPedia I really want to
    be. And I hope that this project will help to revive interest in Beat'em Up
    genre and make the game database 100% completed.
    <br />
    <br />
    So here it is, Frontend-powered Beat&apos;em Up World:
    <br />
    <br />
    <strong>Pros</strong>
    : Filter by all parameters (most of them are not so useful but still that's
    cool), no need for hosting, easy to contribute via Pull Requests, Beat'em
    Ups &quot;API&quot;.
    <br />
    <strong>Cons</strong>
    : backend as JSON, no cool domain name.
    <br />
    <p>
      Another major reason - THERE IS NO complete list anywhere for this genre
      and I like to make something useful which that wasn't made yet. Punchpedia
      is truly the #1 place on the internet for all information related to
      brawlers, so the aim of this site (the name sucks, you may offer another
      one) is to make the beat'em ups list completed.
    </p>
    <h2>
      What is a true beat&apos;em up / brawler? Therefore which games should be
      added here and which are not?
    </h2>
    <p>
      It&apos;s another endless holywar question - beat&apos;em up VS
      hack&apos;n&apos;slash.
      <br />
      Simple way:
      <br />
      Is this game a beat&apos;em up? Which perspective view does the game have?
      2D - is this game similar to Comix Zone? - Yes
      <br />
      2D (4-way movement) - is this game similar to Streets of Rage? - Yes
      <br />
      3D - Does the game look like Fighting Force? - Yes
    </p>
    Complex way:
    <br />
    <p>
      Minimum requirements for a video game to be considered a beat&apos;em up:
    </p>
    - <strong>BEAT UP</strong> - Hand-to-hand and close combat FOCUS (with some
    exceptions for weapon based (Hack'n'slash) games)
    <br />- <strong>THEM</strong> - Multiple opponents (at least more than 1),
    that come in unavoidable waves mostly.
    <br />- <strong>Combo Attack</strong> - because one punch is not enough for
    a brawl.
    <br />- <strong>4-way movement or 3D (with some exceptions for 2D)</strong>
    <br />
    - Variety matters (we need more grabs!). Actually variety can be applied to
    any genre. Just compare Nekketsu Kouha Kunio-kun (1986) and Toxic Crusaders
    (1992). The latter is just one punch (one broom hit) action.
    <br />
    <br />
    Let&apos;t take a look closer at examples:
    <br />
    <br />
    <strong>Is Golden Axe a beat&apos;em up? They use swords!</strong>
    <p>
      Yes, it has punches (kind of - by grip of the sword), kicks, throws,
      dashing attacks are not always made with weapon, so it looks and feels
      more like non-weapon combat.
    </p>
    <strong>Is Comix Zone a beat&apos;em up?</strong>
    <p>
      Yes but 50/50 - Action-Puzzle-Platformer-Beat&apos;em Up (it&apos;s combat
      has enough variety - throws, block, weapons, but multiple enemies is a
      rare thing here). Thus Battletoads should be considered as more platformer
      than beat&apos;em up (It is focused on Action Platforming and contains
      only one stage and several sections to beat enemies).
    </p>
    <br />
    <h2>How can I help?</h2>
    <p>
      You may help fill information about missing games to PunchPedia. Just GO!
      to&nbsp;
      <a
        href="https://github.com/s-pyadyshev/beat-em-ups-api"
        target="_blank"
        rel="noopener noreferrer"
      >
        beat-em-upi
      </a>
      &nbsp;and add missing games into
      <strong> db.json</strong> and new parameters into
      <strong> filter.json</strong> as Pull Request.
    </p>
    <h2>
      Thanks a lot to the following guys for recommendation of games and
      feedback:
    </h2>
    <p>
      <a href="http://dronami.com" target="_blank" rel="noopener noreferrer">
        http://dronami.com
      </a>
    </p>
    <ul>
      <li>Dronami, creator of PunchPedia</li>
    </ul>
    <p>
      <a
        href="http://www.emu-land.net"
        target="_blank"
        rel="noopener noreferrer"
      >
        http://www.emu-land.net
      </a>
    </p>
    <ul>
      <li>Adol</li>
      <li>Altron320</li>
      <li>Gelior</li>
      <li>Lee Pai-Long</li>
      <li>perfect_genius</li>
      <li>Smoke_John</li>
      <li>Street Fighter</li>
      <li>varezhkin</li>
    </ul>
    <p>
      <a
        href="https://www.old-games.ru"
        target="_blank"
        rel="noopener noreferrer"
      >
        https://www.old-games.ru
      </a>
    </p>
    <ul>
      <li>A National Acrobat</li>
    </ul>
  </article>
);

export default AboutPage;
