import BossHeader from '../bossHeader';

const Leo = () => {
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
        name="Leo"
        solo={false}
        dmg="N/A"
        comp={teamComp}
        img={"https://via.placeholder.com/200x250"}
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

export default Leo;