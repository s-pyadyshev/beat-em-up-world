import React from 'react';
import './style.scss';

const AboutPage = () => (
  <article className="about">
    <h2>What is the purpose of this site?</h2>
    <p>
      This site is a disciple of
      <a href="http://www.punchpedia.com" target="_blank" rel="noopener noreferrer">PunchPedia</a>
      {' '}
      and it is approved by its creator.
      The most crucial feature PunchPedia lacks is a complete filter by game parameters
      (you can filter by platform, players, difficulty, length, name)
      and it was the main reason why I wanted to create this site - to add this feature.
      Lack of mobile view isn&apos;t crucial here.
      <br />
      Everything now has it&apos;s own wikia (fandom) page but there is now such place for beat&apos;em ups.
      Even one small game has it&apos;s own wikia (e.g. Ballon Fight, 182 pages!).
      And every beat&apos;em up may have it as well.
      So there is no reason to make it wikia-like. 100% completed pages
      (fighters, enemies, stages, media) are super cool but this detailed content better suits for wikias.
    </p>

    My aim is to practice Frontend stuff currently and it keeps me motivated to go on.
    It&apos;s much more interesting than another ToDo List, isn&apos;t it?
    Unfortunately I&apos;m not fully interested in Backend currently so I&apos;m not able
    to implement some features I really want to be.
    <br />
    So here it is, Frontend-powered Beat&apos;em Up World:
    <br />
    <strong>Pros</strong>
    : no need for hosting, easy to contribute via Pull Requests, &quot;API&quot;.
    <br />
    <strong>Cons</strong>
    : backend as JSON, no cool domain name.
    <br />

    <p>
      Punchpedia is truly the #1 place on the internet for all information related to brawlers,
      so the aim of this site (the name sucks, you may offer another one) is to be like the aggregator.
      <br />
      - Gather complete info about ALL beat&apos;em ups.
      <br />
      - Let people contribute easier
      <br />
      - Get people more interested in the genre
      <br />
    </p>

    <h2>What is a true beat&apos;em up / brawler? Therefore which games should be added here and which are not?</h2>
    <p>
      It&apos;s another endless holywar question - beat&apos;em up VS hack&apos;n&apos;slash.
      <br />
      Simple way:
      <br />
      Is this game a beat&apos;em up?
      Which perspective view does the game have?
      2D - is this game similar to Comix Zone? - Yes
      2D (4-way movement) - is this game similar to Streets of Rage? - Yes
      3D - Does the game look like Fighting Force? - Yes
    </p>

    Complex way:
    <br />
    <p>
      <q>You don&apos;t beat people up with swords, you hack and slash people up with swords (Black_Knight_00)</q>
      <br />
      Seems reasonable with few exceptions.
      <br />
      <q>there is no real answer, it always depends on how the person you&apos;re asking &quot;feels&quot; (SUPERAWESOMEULTRAMAN)</q>
      <br />
      Seems reasonable but feeling is not scientific argument.
    </p>

    Minimum requirements for a video game to be considered a beat&apos;em up:
    <br />
    -
    {' '}
    <strong>BEAT UP</strong>
    {' '}
    - Hand-to-hand and close combat FOCUS (with some exceptions)
    <br />
    -
    {' '}
    <strong>THEM</strong>
    {' '}
    - Multiple opponents (at least more than 1)
    <br />
    -
    {' '}
    <strong>4-way movement or 3D (with some exceptions for 2D)</strong>
    - Variety matters (grabs!). More moves means more realistic combat. No grabs = mindless button masher. Actually variety can be applied to any genre.
    Just compare Nekketsu Kouha Kunio-kun (1986) and Toxic Crusaders (1992). The latter is just one punch (one broom hit) action which hardly can&apos;t be called a beat&apos;em up.
    <br />

    Let&apos;t take a look closer at examples:
    <br />
    <br />
    <strong>Is Golden Axe a beat&apos;em up? They use swords!</strong>
    <p>Yes, it has punches (kind of - by grip of the sword), kicks, throws, dashing attacks are not always made with weapon, so it looks more like non-weapon combat.</p>

    <strong>Is Comix Zone a beat&apos;em up?</strong>
    <p>Yes but 50/50 - Action-Puzzle-Platformer-Beat&apos;em Up (it&apos;s combat has enough variety - throws, block, weapons, but multiple enemies is a rare thing here).</p>
    <p>But at the same time Battletoads should be considered as more platformer than beat&apos;em up.</p>

    <strong>Is Battletoads a beat&apos;em up?</strong>
    <p>Not really. It is focused on Action Platforming and contains only one stage and several sections to beat enemies.</p>
    <br />

    <strong>So which games are beat&apos;em up posers?</strong>
    <p>
      Any with very simplistic and brain-dead combat: Toxic Crusaders, P.O.W. Prisoners of War etc. Even TMNT 2 (NES) looks lame because of super simple combat, only enemy variety saves it. Even a little throw move added in TMNT 3 makes it a bit closer to beat&apos;em ups.
      The Adventures of Bayou Billy has simple but intense combat, you can&apos;t throw enemies but bosses can grab or throw you. The same story with Batman Returns (NES) etc.
    </p>

    <h2>Why should we care about beat&apos;em ups?</h2>
    <p>
      It is one of video game genres that fits the nature of every living being - competition, fight for resources, a place under the Sun.
      The fight/confrontation is a part of our life, we are programmed to punch and kick and get satisfaction from it.
    </p>

    <h2>How can I help?</h2>
    <p>
      You may help fill information about missing games to PunchPedia.
      Just GO! to
      <a href="https://github.com/s-pyadyshev/beat-em-ups-api" target="_blank" rel="noopener noreferrer">beat-em-ups-api</a>
&nbsp;and add missing games into
      <strong>db.json</strong>
      {' '}
      and new parameters into
      <strong>filter.json</strong>
      {' '}
      as Pull Request.
    </p>
  </article>
);

export default AboutPage;
