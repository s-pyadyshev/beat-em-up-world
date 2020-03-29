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
  - Battletoads (Amiga)
  - Batman Arkham series?
  - Batman: Rise of Sin Tzu
  - Beat Down: Fists of Vengeance
  - Big Fight: Big Trouble in the Atlantic Ocean
  - Captain America: Super Soldier
  - Charlie Murder
  - Comar Barbarian?
  - Cowboy Bebop: Tsuioku no Serenade?
  - Crisis Beat
  - Crows - The Battle Action
  - Dad 'n me (https://www.newgrounds.com/portal/view/254456)
  - Dark Judgement?
  - Double Dragon IV
  - Fight'N Rage
  - Fighting Force
  - Jackie Chan Stuntmaster
  - Jet Li: Rise to Honor?
  - Judge Dredd Arcade Game
  - Lugaru?
  - Mad Max
  - Middle Earth series?
  - Mother Russia Bleeds
  - Nekketsu Kōha Kunio-kun Special
  - Nekketsu Oyako
  - Oni
  - Overgrowth?
  - Rage
  - River City: Tokyo Rumble
  - River City Girls
  - River City Ransom Underground
  - Sleeping Dogs?
  - SpikeOut
  - STAY COOL, KOBAYASHI-SAN!: A RIVER CITY RANSOM STORY
  - Streets of Rage 4
  - SORR mods?
  - Tekken 3 (Tekken Force mode)
  - The Bouncer
  - The friends of Ringo Ishikawa
  - The Shadow (SNES Prototype)
  - The TakeOver
  - Urban Reign
  - Watchmen: The End is Nigh
  - Watchmen: The End is Nigh Part 2
  - Yakuza series?
  - Zombie Revenge?

- Add linters
- Add svg-sprite-loader
- Refactoring
- Fix release date (datepicker?), otherPlatforms, series, playtime (range?)
- Make gangsize param consistent
- Change weapons info to weapons names instead of amount
- Change variety values from string to array of values like weapons
- Add new game params (filters), e.g. Gore
- Add links (wikipedia etc.) and reviews array (do not include into filter)
- Add possibility to select multiple choice in one filter
- Fix filter to filter by array.includes(value)
- Make nice design
- Place screenshots and covers to repo?
- Add ratings?
- Add Travis CI?
- Add SSR?
- Add Typescript
- Add beat'em up bingo? (http://retrovania-vgjunk.blogspot.com/2012/01/beat-em-up-bingo.html)
- Add links to other relateds sites (https://en.wikipedia.org/wiki/List_of_beat_'em_ups, https://kuniokun.fandom.com/wiki/Kunio-Kun_Wiki)
- Add About info
- Add summary info (games/platforms/focus total etc.)

Change log:

0.3
- Added tooltip, Screenshots Slider (Swiper), otherPlatforms links

0.2
- Functional components, Redux, react-router, hooks
- Games List, Filter, Select, Game Card
- Fixed filter value names consistency and typos

0.1.
- Class components, local state
- Games List, Game Card (all data and cover), Random Card (Refresh), Error Boundary
- Context Api to select Game Card from List by index