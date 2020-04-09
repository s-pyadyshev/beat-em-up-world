<a href="https://beat-em-up-world.herokuapp.com">https://beat-em-up-world.herokuapp.com</a>
<br>
Inspired by <a href="http://www.punchpedia.com">PunchPedia</a>. All copyrights (Punchpedia game reviews, descriptions end everything what was taken from it) are belong to <a href="http://www.dronami.com/">Dronami Games</a>. Check out his site NOW!

Stack: React, Redux, creat-react-app, Scss.
<br>
API (JSON)
<a href="https://github.com/s-pyadyshev/beat-em-ups-api">https://github.com/s-pyadyshev/beat-em-ups-api</a>
<br>

Tasks<br>
Major (MVP release):<br>
- Add svg-sprite-loader to add icons (at least for the most important filters)
- Finish About page info
- Finalize MVP design on desktop and tablet
- Add responsive styles (toggle filters and list on mobiles or make it swipeable)
- Add release year filter
- Make gangsize param consistent?
- Fill otherPlatforms and series data in JSON
- Add summary info (total amount of games, missing games etc.)

Minor:<br>
- Refactoring
- Add linters
- Add Typescript
- Add Travis CI / Github Actions?
- Add SSR?
- Change playtime select to range?
- Add new game params (filters), e.g. Breakable objects etc.
- Update design
- Add dark/light theme (change on system settings)
- Add possibility to select multiple choice in one filter
- Add more games to JSON:
  - Battletoads (Amiga)?
  - Cowboy Bebop: Tsuioku no Serenade?
  - Crimson Tears?
  - Death by Degrees (PS2)?
  - Die Hard Arcade
  - Dynamite Cop
  - Final Fight: Streetwise?
  - God Hand?
  - Golden Axe (PS2)
  - Kenka Bancho: Badass Rumble (PSP)?
  - Kurohyō: Ryū ga Gotoku Shinshō (PSP)?
  - Lugaru?
  - Mad Max
  - Middle Earth series?
  - Mighty Morphin Power Rangers (SNES)?
  - Overgrowth
  - Sleeping Dogs?
  - STAY COOL, KOBAYASHI-SAN!: A RIVER CITY RANSOM STORY
  - Tekken 3-4 (Tekken Force mode) and any other games with similar modes
  - The Bouncer
  - Zombie Revenge?
  - The best SORR mods, OpenBOR/MUGEN games?



CHANGE LOG:<br>
0.3
- Added Links page, tooltip for filter details, Screenshots and Videos Slider (Swiper), otherPlatforms links, new header
- Added some missing games
- Added beat'em up bingo
- Added Gore parameter to several games
- Changed variety and weapons values from string to array
- Added links (wikipedia, wikia etc.) and reviews array (do not include into filter)

0.2
- Functional components, Redux, react-router, hooks
- Games List, Filter, Select, Game Card
- Fixed filter value names consistency and typos
- Fixed some filters to filter by array.includes(value)

0.1.
- Class components, local state
- Games List, Game Card (all data and cover), Random Card (Refresh), Error Boundary
- Context Api to select Game Card from List by index