import BossHeader from '../bossHeader';

const Phantom = () => {
  let teamComp = {
    healer: "Adjudicator",
    debuffer: "Berserker",
    dps1: "Blade Master",
    dps2: "Executionner",
    dps3: "Annihilator",
  };
  return (
    <div>
      <BossHeader
        name="Phantom"
        solo={false}
        dmg="N/A"
        comp={teamComp}
        img={"https://i.imgur.com/WaIb1sz.png"}
      />
      <div className="ccBossConcent">
        <h3>{localStorage.getItem('language') === 'EN' ? "Boss mechanics :" : 'Méchanique du boss:'}</h3>
        <ul className="ccBossMecha">
        {localStorage.getItem("language") === "EN" ? <li></li> : <li></li>}
        </ul>
      </div>
    </div>
  )
}

export default Phantom;