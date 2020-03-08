<a href="https://beat-em-up-world.herokuapp.com">https://beat-em-up-world.herokuapp.com</a>
<br>
Inspired by <a href="http://www.punchpedia.com">PunchPedia</a>.

Stack: React, Redux, creat-react-app, Scss.
<br>
API (JSON)
<a href="https://github.com/s-pyadyshev/beat-em-ups-api">https://github.com/s-pyadyshev/beat-em-ups-api</a>
<br>

ToDo:
- Add more games to DB/API:
  - 99Vidas
  - Batman Arkham series
  - Captain America: Super Soldier
  - Charlie Murder
  - Crisis Beat
  - Crows - The Battle Action
  - Fight'N Rage
  - Fighting Force
  - Jackie Chan Stuntmaster
  - Lugaru?
  - Mad Max
  - Middle Earth series?
  - Mother Russia Bleeds
  - Nekketsu Oyako
  - Oni
  - Overgrowth?
  - Rage
  - River City Ransom Underground
  - The friends of Ringo Ishikawa
  - Urban Reign
  - Yakuza series

- Refactoring
- Add Routing for Game card block
- Fix release date (datepicker?), otherPlatforms, series, playtime (range?)
- Make gangsize param consistent
- Change weapons info to weapons names instead of amount
- Add new game params (filters), e.g. Gore
- Add links (wikipedia etc.) and reviews array (do not include into filter)
- Add possibility to select multiple choice in one filter
- Fix filter to filter by array.includes(value)
- Make nice design
- Place screenshots and covers to repo?
- Add ratings?
- Add Travis CI

Change log:

0.2
- Functional components, Redux, hooks
- Games List, Filter, Select
- Fixed filter value names consistency and typos

0.1.
- Class components, local state
- Games List, Game Card (all data and cover), Random Card (Refresh), Error Boundary
- Context Api to select Game Card from List by index