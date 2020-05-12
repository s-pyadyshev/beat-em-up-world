<a href="https://beat-em-up-world.now.sh">https://beat-em-up-world.now.sh</a>
<br>
Inspired by <a href="http://www.punchpedia.com">PunchPedia</a>. All copyrights (Punchpedia game reviews, descriptions end everything what was taken from it) are belong to <a href="http://www.dronami.com/">Dronami Games</a>. Check out his site NOW!

Stack: React, Redux, creat-react-app, react-router, stylelint, prettier, swiper, react-popper-tooltip, Disqus, Scss.
<br>
API (JSON)
<a href="https://github.com/s-pyadyshev/beat-em-ups-api">https://github.com/s-pyadyshev/beat-em-ups-api</a>
<br>

Tasks<br>
Major (MVP release):<br>

- Add svg-sprite-loader to add icons (at least for the most important filters)
- Add country parameter
- Add "game of the day" and "random game" blocks
- Add short questionnaire
- Pagination or infinite scroll requires real backend to be implemented correctly
- Make basic and advanced filter view list
- Finalize MVP design on desktop and tablet
- Add icon for mixed-genre (not true beat'em up) games like Battletoads, Comix Zone, Mad Max, Sleeping Dogs etc.
- Make gangsize param consistent?
- Fill otherPlatforms and series data in JSON (fix this params to be able to set different link for a game, e.g. Battletoads on GB is actually called Battletoads in Ragnarok's World)
- Refactoring

Minor:<br>

- Add Travis CI / Github Actions?
- Add SSR?
- Change playtime select to range?
- Add new game params (filters), e.g. Breakable objects etc.
- Update design
- Add dark/light theme (change on system settings)
- Search / autocomplete?
- Add possibility to select multiple choice in one filter
- Add more games to JSON:
  - Battletoads (Amiga)?
  - Cross Blades!
  - Double Dragon (Atari ST)
  - Golden Axe (Atari ST)
  - Golden Axe (PS2)
  - Kenka Bancho: Badass Rumble (PSP)?
  - Kurohyō: Ryū ga Gotoku Shinshō (PSP)?
  - Middle Earth series?
  - Mighty Morphin Power Rangers (SNES)?
  - Mighty Morphin Power Rangers - The Movie (SNES)?
  - Ninja: Shadow of Darkness (PS) - probably no
  - Saint Seiya: Sanctuary Battle (PS3)?
  - Tekken 3-4 (Tekken Force mode) and any other games with similar modes
  - Two Crude Dudes? (Arcade, Genesis)
  - Zombie Revenge?
  - The best SORR mods, OpenBOR/MUGEN games?
  - Missing overall reviews: Silent Dragon, TMNT (GEN), Vendetta, Spider-man and Venom (SNES), The Gladiator
  - Missing covers: The Gladiator

CHANGE LOG (monthly summary):<br>

0.4

- Added Disqus comments
- Fixed TS react/prop-types warnings
- Added summary info (total amount of games, missing games etc.)
- Added responsive styles (toggle filters button on mobile)
- Finished About page info with more examples

  0.3

- Added Links page, tooltip for filter details, Screenshots and Videos Slider (Swiper), otherPlatforms links, new header
- Added some missing games
- Added beat'em up bingo
- Added Gore parameter to several games
- Changed variety and weapons values from string to array
- Added links (wikipedia, wikia etc.) and reviews array (do not include into filter)
- Added release year filter
- Added linters
- Added TypeScript
- Added mobile toggle for filters

  0.2

- Functional components, Redux, react-router, hooks
- Games List, Filter, Select, Game Card
- Fixed filter value names consistency and typos
- Fixed some filters to filter by array.includes(value)

  0.1.

- Class components, local state
- Games List, Game Card (all data and cover), Random Card (Refresh), Error Boundary
- Context Api to select Game Card from List by index
