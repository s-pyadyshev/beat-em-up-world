<a href="https://beat-em-up-world.herokuapp.com">https://beat-em-up-world.herokuapp.com</a>
<br>
Inspired by <a href="http://www.punchpedia.com">PunchPedia</a>. All copyrights (Punchpedia game reviews, descriptions end everything what was taken from it) are belong to <a href="http://www.dronami.com/">Dronami Games</a>. Check out his site NOW!

Stack: React, Redux, creat-react-app, Scss.
<br>
API (JSON)
<a href="https://github.com/s-pyadyshev/beat-em-ups-api">https://github.com/s-pyadyshev/beat-em-ups-api</a>
<br>

ToDo:
- Add more games to DB/API:
  - Battletoads (Amiga)?
  - Comar Barbarian?
  - Cowboy Bebop: Tsuioku no Serenade?
  - Crimson Tears?
  - Death by Degrees (PS2)?
  - Die Hard Arcade?
  - Dynamite Cop
  - Final Fight: Streetwise?
  - God Hand?
  - Golden Axe (PS2)?
  - Kenka Bancho: Badass Rumble (PSP)?
  - Kurohyō: Ryū ga Gotoku Shinshō (PSP)?
  - Lugaru?
  - Mad Max
  - Middle Earth series?
  - Overgrowth?
  - Sleeping Dogs?
  - STAY COOL, KOBAYASHI-SAN!: A RIVER CITY RANSOM STORY
  - SORR mods?
  - Tekken 3-4 (Tekken Force mode)
  - The Bouncer
  - Zombie Revenge?

- Refactoring
- Add linters
- Add svg-sprite-loader
- Fix release date (datepicker?), otherPlatforms, series, playtime (range?)
- Make gangsize param consistent?
- Change weapons info to weapons names instead of amount
- Change variety values from string to array of values like weapons, variety
- Add new game params (filters), e.g. Gore, Breakable objects
- Add links (wikipedia, wikia etc.) and reviews array (do not include into filter)
- Add possibility to select multiple choice in one filter
- Fix filter to filter by array.includes(value)
- Make nice design, add icons for filters
- Add Travis CI?
- Add SSR?
- Add Typescript
- Add beat'em up bingo? (http://retrovania-vgjunk.blogspot.com/2012/01/beat-em-up-bingo.html)
- Add links to other relateds sites (https://en.wikipedia.org/wiki/List_of_beat_'em_ups, https://kuniokun.fandom.com/wiki/Kunio-Kun_Wiki)
- Add About info
- Add summary info (games/platforms/focus total etc.)

Change log:

0.3
- Added tooltip for filter details, Screenshots and Videos Slider (Swiper), otherPlatforms links
- Added missing games

0.2
- Functional components, Redux, react-router, hooks
- Games List, Filter, Select, Game Card
- Fixed filter value names consistency and typos

0.1.
- Class components, local state
- Games List, Game Card (all data and cover), Random Card (Refresh), Error Boundary
- Context Api to select Game Card from List by index