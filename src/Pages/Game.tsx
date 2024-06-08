// ModalPage1.tsx

import React, { useState, useEffect } from 'react';

const Game: React.FC = () => {
  const [activeDiv, setActiveDiv] = useState<number | null>(null);

  const openDiv = (divNumber: number) => {
    setActiveDiv(divNumber);
  };



  useEffect(() => {
    openDiv(1); // Open Div 1 when component mounts
  }, []); // Empty dependency array ensures the effect runs only once


  return (
    <div className="modal-content">
      
      <div className="navbargame-container">
      <button onClick={() => openDiv(1)}>
        SERVER RULES {activeDiv === 1 && "⬇"}
      </button>
      <button  onClick={() => openDiv(2)}>
        SERVER INFO {activeDiv === 2 && "⬇"}
      </button>
      <button  onClick={() => openDiv(3)}>
        GAME GUIDE {activeDiv === 3 && "⬇"}
      </button>
    </div>
      {activeDiv === 1 && (
        <div className="modal-div1">
          
          <h2>Weapons Of War Awakening</h2>
          <h3>Terms and Conditions</h3>
          <p>

1. Do not use glitches or bugs to gain an unfair advantage over other players, 
or to put other players at a disadvantage. All bugs found in the game should be
 reported immediately to the staff.
â€‹<br></br>
2. Please show respect to GMs and the game; any disrespectful language may 
result in severe consequences. Ignorance of this rule does not excuse anyone.
â€‹<br></br>
3. Any players found pretending to be a Game Master or Administrator of Weapons
 Of War Awakening will face disciplinary action including potential suspension 
 or termination of their account.
â€‹<br></br>
4. No refunds are allowed for payments and purchases. You do not need to spend 
money to play and enjoy the game. spending in the game is only optional and 
voluntary if you want to fully support the game or to improve your gaming 
experience.
â€‹<br></br>
5. Any form of sexual harassment in the game, including but not limited to 
comments, gestures, and physical contact, will not be tolerated and will be 
subject to appropriate punishment, including but not limited to suspension or 
banishment from the game.
<br></br>
Rules on Player-to-Player Scams
<br></br>
It is important to remember that player to player transactions are solely the 
responsibility of the involved players. Your account and/or items are your 
responsibility. To avoid the risk of being scammed, we highly recommend 
conducting transactions through our Discord, where all players can see the 
exchange between you and another player. 
<br></br>
Alternatively, we suggest getting a trusted middleman to facilitate the 
transaction to further lessen the possibility of scams. Please note that if 
you do fall victim to a scam, we can only take action against the scammer if 
sufficient evidence is presented, and we cannot guarantee the return of lost 
items or money, especially if they have already been sold or traded to another 
player. Stay safe and vigilant in all your dealings within the game. 
<br></br>
The punishment for a scammer in the game can vary depending on the severity of 
the offense and whether the scammer has a history of scamming. In general, 
first-time offenders may receive a warning or temporary suspension of their 
account, while repeat offenders or those who commit more serious offenses may 
receive a permanent ban from the game or even an IP Ban.</p>
        </div>
      )}

      {activeDiv === 2 && (
        <div className="modal-div2">
        <h2>Weapons Of War Awakening</h2>
          <h3>Server Info</h3>
        <p>
A 3D Fantasy Quest and Grind Based MMORPG with 5 balanced classes Assassin, 
Tamer, Wizard, Monk and Fairy. New Updates, Events and Features bringing back 
the original Classic Low Rate WOW PH Gameplay.
<br />
Current Max Level: 70<br />
Current Max Pet Level: 25<br />
Current Max Item Quality: Dark Golden/Purple<br />
Strongest Armor: PRC Set<br />
Strongest Weapon: Level 70 Weapon<br />
Exp and Drop Rate: Hard Classic<br />
<br />
Communities</p>
      </div>
      )}

      {activeDiv === 3 && (
                <div className="modal-div3">        
                <h2>Weapons Of War Awakening</h2>
                <h3>Game Guide</h3>
                <p>
Help other players in quests and caves and become their master with the game's apprenticeship 
feature! Receive various rewards each time your apprentice reach a level milestone. You will 
also gain reputation points which you can use to purchase purple grade equipment.
<br />
You can recruit an apprentice after you reached level 30.
<br />
Level Achievement Reward
<br />
Receive free items that can help aid you in battle as you reach level milestones in the game!
 The WoW Egg can be obtained from the NPC in Green scarp. The egg contains rewards such 
 as Lavender Tiger (7D), Upgrade Gems, Health Potions and more.
<br />
Leveling Guide
<br />
Weapons Of War Awakening is a mix of quest, dungeon and grinding game. We highly recommend 
you to do quests in the earlier stage of the game to level up faster while also getting
 stronger gears from quest rewards. You will also have to enter caves with your friends 
 to finish scenario quests that will give you massive exp rewards and reputation points.
<br />
Weapon Enhancing System
<br />
Increase your weapon's damage and unlock more abilities by enhancing your weapon's level.
<br />
World Boss and Veteran Raid
<br />
Obtain rare items to strengthen your character by raiding the veteran or world boss. 
There will be a timer available for players to see if they are currently alive or dead.
<br />
Blood Palace War
<br />
Conquer the blood palace with your friends and become the strongest guild in the game
 by winning the Blood Palace War which will happen once a week.</p>
              </div>
      )}
    </div>
  );
}

export default Game;
