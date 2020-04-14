import React from 'react';
import './style.scss';

const Bingo = (props) => {
  const {
    beatemupBingo,
  } = props;

  const toggleActiveClass = (parameter) => {
    if (beatemupBingo && parameter === true) {
      return 'bingo__name is-active';
    }
    return 'bingo__name';
  };

  return (
    <div className="bingo">
      <div
        className={toggleActiveClass(beatemupBingo && beatemupBingo.go)}
        title="The word 'GO!' flashes on the screen, just in case you are paralysed with remorse over killing a street punk."
      >
        GO!
      </div>
      <div
        className={toggleActiveClass(beatemupBingo && beatemupBingo.sunsetEnding)}
        title="An awful lot of beat-em-ups seem to end just as the day is done."
      >
        Sunset ending
      </div>
      <div
        className={toggleActiveClass(beatemupBingo && beatemupBingo.healthMeat)}
        title="Meat is good for you, meat you found on the floor is even better."
      >
        Health meat
      </div>
      <div
        className={toggleActiveClass(beatemupBingo && beatemupBingo.sleevelessJacket)}
        title="Has someone removed the sleeves from their jacket? They are a bad guy, you should punch them."
      >
        Sleeveless jacket
      </div>
      <div
        className={toggleActiveClass(beatemupBingo && beatemupBingo.bossWithGun)}
        title="Bosses are dishonourable pricks, and will sometimes shoot at you..."
      >
        Boss with gun
      </div>
      <div
        className={toggleActiveClass(beatemupBingo && beatemupBingo.fireBombs)}
        title="...or they'll get their goons to throw Molotov cocktails."
      >
        Fire bombs
      </div>
      <div
        className={toggleActiveClass(beatemupBingo && beatemupBingo.twowordTitle)}
        title="Like Final Fight or Violent Storm or Cooking Mama."
      >
        2-word title
      </div>
      <div
        className={toggleActiveClass(beatemupBingo && beatemupBingo.throwingKnife)}
        title="Dont stab, throw, because that's much more effective."
      >
        Throwing knife
      </div>
      <div
        className={toggleActiveClass(beatemupBingo && beatemupBingo.subwayStage)}
        title="Because street punks are too poor to own cars, or sleeves for their jackets."
      >
        Subway stage
      </div>
      <div
        className={toggleActiveClass(beatemupBingo && beatemupBingo.exproWrestler)}
        title="It's a short career, but it equips you with all the tools necessary to fight ruthless crime syndicates."
      >
        Ex-pro wrestler
      </div>
      <div
        className={toggleActiveClass(beatemupBingo && beatemupBingo.steelPipe)}
        title="Used for busting heads, justice and plumbing."
      >
        Steel pipe
      </div>
      <div
        className={toggleActiveClass(beatemupBingo && beatemupBingo.kindnappedFemale)}
        title="Well, something has to get our heroes moving. It's usually a girlfriend, sometimes a daughter, almost always blonde."
      >
        Kindnapped female
      </div>
      <div
        className={toggleActiveClass(beatemupBingo && beatemupBingo.specialDrainsHealth)}
        title="Press attack and jump. Spin around and bash enemies. You look so awesome that it costs you some health."
      >
        Special drains health
      </div>
      <div
        className={toggleActiveClass(beatemupBingo && beatemupBingo.oilDrums)}
        title="The only thing more common than generic thugs."
      >
        Oil drums
      </div>
      <div
        className={toggleActiveClass(beatemupBingo && beatemupBingo.clowns)}
        title="Surprisingly common, commonly nightmarish."
      >
        Clowns
      </div>
      <div
        className={toggleActiveClass(beatemupBingo && beatemupBingo.yellowRedHealthBar)}
        title="Yellow is apparently the colour of strength and vigour. Red, not so much."
      >
        Yellow/Red health bar
      </div>
      <div
        className={toggleActiveClass(beatemupBingo && beatemupBingo.dominatrix)}
        title="A woman in leather, with a whip. Don't people usually go to her to get beaten up on purpose? She seems to be making extra work for herself."
      >
        Dominatrix
      </div>
      <div
        className={toggleActiveClass(beatemupBingo && beatemupBingo.powerSpeedBalance)}
        title="You've got three characters. One of them is as average as a beige carpet. One is faster, but weaker. The other is strong, but slower. The holy trinity."
      >
        Power speed balance
      </div>
      <div
        className={toggleActiveClass(beatemupBingo && beatemupBingo.elevatorScene)}
        title="Trapped inside a moving elevator as enemies jump in."
      >
        Elevator scene
      </div>
      <div
        className={toggleActiveClass(beatemupBingo && beatemupBingo.mansionStage)}
        title="Because what's the point of becoming the head of a vast criminal empire if you can't have a nice house?"
      >
        Mansion stage
      </div>
      <div
        className={toggleActiveClass(beatemupBingo && beatemupBingo.mohawks)}
        title="Hairdo of choice for gutter rats everywhere."
      >
        Mohawks
      </div>
      <div
        className={toggleActiveClass(beatemupBingo && beatemupBingo.buildingSite)}
        title="Well, you wouldn't want to be fighting in a newly-completed building, would you? You might get blood on the skirting boards."
      >
        Building site
      </div>
      <div
        className={toggleActiveClass(beatemupBingo && beatemupBingo.fatCharginMen)}
        title="A larger gentleman who, despite his portly stature, attacks by running into you like a hyperactive Labrador."
      >
        Fat chargin men
      </div>
      <div
        className={toggleActiveClass(beatemupBingo && beatemupBingo.sharpSuits)}
        title="Has someone dressed up for the occasion? Maybe in a tuxedo?"
      >
        Sharp suits
      </div>
      <div
        className={toggleActiveClass(beatemupBingo && beatemupBingo.graffiti)}
        title="Writing on the walls in the background is how villains pass the time spent waiting for the heroes to arrive."
      >
        Graffiti
      </div>
    </div>
  );
};

export default Bingo;
