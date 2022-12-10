import CcBossHeader from "./CcBossHeader";
import bossImg from "../img/cc/ariesBoss.png";
import "./ccBoss.css";
import ariesInfo1 from "../img/cc/ariesInfo1.png";
import ariesInfo2 from "../img/cc/ariesInfo2.png";
import ariesInfo3 from "../img/cc/ariesInfo3.png";
import ariesInfo4 from "../img/cc/ariesInfo4.png";
import ariesInfo5 from "../img/cc/ariesInfo5.png";
import ariesInfo6 from "../img/cc/ariesInfo6.png";

const Aries = () => {
  let teamComp = {
    healer: "Adjudicator / Paladin",
    debuffer: "Berserker",
    dps1: "Blade Master",
    dps2: "Executionner",
    dps3: "Blood Knight / Trainer",
  };
  return (
    <div className="ccBossContainer">
      <CcBossHeader
        name="Aries"
        solo={false}
        dmg="Fire"
        comp={teamComp}
        img={bossImg}
      />
      <div className="ccBossConcent">
      <h3>{localStorage.getItem('language') === 'EN' ? "Boss mechanics :" : 'Méchanique du boss:'}</h3>
        <ul className="ccBossMecha">
          <li>
            1. {localStorage.getItem('language') === 'EN' ? "A party member will have to do the 'NPC'. This player will have to take care of the sheeps Aries will summon, if he doesn't take care of it within 20 secondes, party gets wiped. Whenever Aries summons a sheep, there will be a zone announcement." :  "Un membre du groupe devra faire le 'NPC'. Ce joueur devra s'occuper d'un mouton lorsque Aries l'invoquera, s'il ne s'en occupe pas en moins de 20 secondes, tout le monde mourra. Il y aura un message de zone quand elle invoquera le mouton."}
          </li>
          <li>{localStorage.getItem('language') === 'EN' ? "There are 4 types of different sheeps" : "Il y a 4 types de moutons"} : </li>
          <li>
            {localStorage.getItem('language') === 'EN' ? 'The Red Hot Sheep : Take the buff from <Ice Guardian Sheperd> Frosty and hit the sheep.' : `Le "Red Hot Sheep" : Récupérez le buff donné par <Ice Guardian Shepherd> Frosty, et attaquez le mouton.`}{" "}
            <br /> <img src={ariesInfo1} alt="Sheep" />
          </li>
          <li>
            {localStorage.getItem('language') === 'EN' ? 'The "Cool Sheep" : Take the buff from <Flame Guardian Sheperd> Rory and hit the sheep.' : `Le "Cool Sheep" : Récupérez le buff donné par <Flame Guardian Shepherd> Rory, et attaquez le mouton.`}{" "}
            <br /> <img src={ariesInfo2} alt="Sheep" />
          </li>
          <li>
            {localStorage.getItem('language') === 'EN' ? 'The "Windy Sheep" : Take the buff from <Loleny Sheperd> Dan and hit the sheep.' : `Le "Windy Sheep" : Récupérez le buff donné par <Lonely Shepherd> Dan, et attaquez le mouton.`}{" "}
            <br /> <img src={ariesInfo3} alt="Sheep" />
          </li>
          <li>
            {localStorage.getItem('language') === 'EN' ? 'The "Shocking Sheep" : Take the buff from <Eatch Guardian Sheperd> Dusty and hit the sheep.' : `Le "Shocking Sheep" : Récupérez le buff donné par <Earth Guardian Shepherd> Dusty, et attaquez le mouton.`}{" "}
            <br /> <img src={ariesInfo4} alt="Sheep" />
          </li>
          <li>
            {localStorage.getItem('language') === 'EN' ? 'Around 75% HP, Aries will start using her reflect skill : "Fire Shield".' : 'Vers 75% HP, Aries commencera à utiliser une compétence de renvoi : "Fire Shield".'}
          </li>
          <li>
            <img src={ariesInfo6} alt="" />
            <br /> <img src={ariesInfo5} alt="" />
          </li>
          <li><h3>{localStorage.getItem('language') === 'EN' ? "Notes :" : "Notez que :"}</h3></li>
          <li>Aries ne prendra pas de dégâts pendant que le mouton "spécial" est en vie. <br/> Aries fait de GROS dégâts en FIRE, il est recommandé d'avoir au MINIMUM 75 de résistance au feu.</li>
        </ul>
      </div>
    </div>
  );
};

export default Aries;
