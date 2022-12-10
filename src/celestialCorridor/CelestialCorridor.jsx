import "./celestialCorridor.css";
import ccPic from "../img/cc/celestialCorridor.png";
import { Link } from "react-router-dom";

const CelestialCorridor = () => {
  return (
    <div className="ccDivContainer">
      <div className="ccDiv">
        <img src={ccPic} alt="ccPic1" className="ccPic" />
        {localStorage.getItem("language") === "EN" ? (
          <p>
            Players can enter Celestial Corridor once they get to Lvl 117,
            however it is highly recommended that you reach at LEAST lvl 120,
            and get some decent gears before attempting it. The entrance the
            Celestial Corridor is in Aven X: 430, Y: 369. <br /> Celestial
            Corridor contains 6 dungeons, each dungeons having it's own boss,
            and mechanic. They are meant to be challenged by a party of five
            geared players. <br /> You have 3 hours to kill the boss before
            getting kicked out of the dungeon, and in order to get an S+ and get
            your rewards, you need to kill the boss in less than 20 minutes.
          </p>
        ) : (
          <p>
            Celestial Corridor est disponible à partir du niveau 117. Cependant
            il est recommandé d'être au MINIMUM niveau 120, avec de bons
            équipements avant d'y entrer. L'entrée de la zone se trouve à Aven
            X:430, Y;369. <br /> Celestial Corridor contient 6 donjons. Chacun
            d'entre eux à un boss et une méchanique différente. Ces donjons sont
            prévus pour des groupes de 5 joueurs. <br /> Comme pour Gate of
            Pandemonium, vous avez 3h maximum pour vaincre le boss, après quoi
            vous serez expulsé du donjon. Notez cependant que pour avoir des
            récompenses, il faut tuer le boss en moins de 20 minutes.
          </p>
        )}
      </div>
      <div className="ccContent">
        <div className="ccSchedule">
          <p className="ccScheduleTitle"> {localStorage.getItem("language") === "EN" ? "Boss Schedule" : "Planning des boss"}</p>
          <table>
            <tr>
              <td>
                {localStorage.getItem("language") === "EN" ? "Monday" : "Lundi"}
              </td>
              <td>Aries</td>
              <td>Leo</td>
              <td>Sagittarius</td>
            </tr>
            <tr>
              <td>
                {localStorage.getItem("language") === "EN"
                  ? "Tuesday"
                  : "Mardi"}
              </td>
              <td>Aries</td>
              <td>Gemini</td>
              <td>Aquarius</td>
            </tr>
            <tr>
              <td>
                {localStorage.getItem("language") === "EN"
                  ? "Wednesday"
                  : "Mercredi"}
              </td>
              <td>Gemini</td>
              <td>Leo</td>
              <td>Libra</td>
            </tr>
            <tr>
              <td>
                {localStorage.getItem("language") === "EN"
                  ? "Thursday"
                  : "Jeudi"}
              </td>
              <td>Fermé</td>
              <td>Fermé</td>
              <td>Fermé</td>
            </tr>
            <tr>
              <td>
                {localStorage.getItem("language") === "EN"
                  ? "Friday"
                  : "Vendredi"}
              </td>
              <td>Aries</td>
              <td>Libra</td>
              <td>Sagittarius</td>
            </tr>
            <tr>
              <td>
                {localStorage.getItem("language") === "EN"
                  ? "Saturday"
                  : "Samedi"}
              </td>
              <td>Gemini</td>
              <td>Sagittarius</td>
              <td>Aquarius</td>
            </tr>
            <tr>
              <td>
                {localStorage.getItem("language") === "EN"
                  ? "Sunday"
                  : "Dimanche"}
              </td>
              <td>Leo</td>
              <td>Libra</td>
              <td>Aquarius</td>
            </tr>
          </table>
        </div>
        <div>
          <p className="ccBossImgsTitle">
            {localStorage.getItem("language") === "EN"
              ? "Click for more infos"
              : "Cliquez pour voir le détail."}
          </p>
          <div className="ccBossImgs">
            <Link to="libra">
              <div className="libra">
                <p>Libra</p>
              </div>
            </Link>
            <Link to="sagittarius">
              <div className="sagi">
                <p>Sagittarius</p>
              </div>
            </Link>
            <Link to="gemini">
              <div className="gemini">
                <p>Gemini</p>
              </div>
            </Link>
            <Link to="leo">
              <div className="leo">
                <p>Leo</p>
              </div>
            </Link>
            <Link to="aquarius">
              <div className="aqua">
                <p>Aquarius</p>
              </div>
            </Link>
            <Link to="aries">
              <div className="aries">
                <p>Aries</p>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CelestialCorridor;
