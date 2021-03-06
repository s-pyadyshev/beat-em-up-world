<a href="https://beat-em-up-world.vercel.app">https://beat-em-up-world.vercel.app</a>
<br>
Inspired by <a href="http://www.punchpedia.com">PunchPedia</a>. All copyrights (PunchPedia game reviews, descriptions end everything what was taken from it) are belong to <a href="http://www.dronami.com/">Dronami Games</a>. Check out his site NOW!

Stack:<br>
React, Redux, react-router, create-react-app<br>
react-popper-tooltip, react-grid-system, swiper, Disqus comments<br>
Scss, stylelint, prettier<br>

"API" (JSON)
<a href="https://github.com/s-pyadyshev/beat-em-ups-api">https://github.com/s-pyadyshev/beat-em-ups-api</a>
<br>

Tasks<br>

- Add CI
- Replace icons to colored
- Refactoring: best practices
- Add redux-persist?
- Add reverse list view?, list with screenshots in slider + pagination?
- Add chart
- Add SSR?
- Add dark/light theme (change on system settings)
- Add possibility to select multiple choice in one filter?
- Make gangsize param consistent?
- Add "random game" block
- Add short questionnaire
- Fill otherPlatforms and series data in JSON (fix this params to be able to set different link for a game, e.g. Battletoads on GB is actually called Battletoads in Ragnarok's World)
- Add more games to JSON:

  - Missing overall reviews: Silent Dragon, TMNT (GEN), Vendetta, Spider-man and Venom (SNES), The Gladiator
  - Make backend
    <br>
    CHANGE LOG:<br>

- 0.5

  - Added debounce to Search
  - Added Reset button
  - Added TodayGame block
  - Added Stats (total, missing, found), progress bar

- 0.5

  - Added Search, Alphabet sorter
  - Added mixed genre parameter and state
  - Refactoring

- 0.4

  - Added Disqus comments
  - Fixed TS react/prop-types warnings
  - Added summary info (total amount of games, missing games etc.)
  - Added responsive styles (toggle filters button on mobile)
  - Finished About page info with more examples
  - Added country parameter (blank)
  - Added Team Attack to variety
  - Added svg-sprite task to generate svg-sprite
  - Added basic and advanced filter toggler

- 0.3

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

- 0.2

  - Functional components, Redux, react-router, hooks
  - Games List, Filter, Select, Game Card
  - Fixed filter value names consistency and typos
  - Fixed some filters to filter by array.includes(value)

- 0.1.

  - Class components, local state
  - Games List, Game Card (all data and cover), Random Card (Refresh), Error Boundary
  - Context Api to select Game Card from List by index
