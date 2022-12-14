import BossHeader from '../bossHeader';

const Phoenix = () => {
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
        name="Phoenix"
        solo={false}
        dmg="N/A"
        comp={teamComp}
        img={"https://i.imgur.com/riYmGeM.png"}
      />
      <div className="ccBossConcent">
        <h3>{localStorage.getItem('language') === 'EN' ? "Boss mechanics :" : 'Méchanique du boss:'}</h3>
        <ul className="ccBossMecha">
        </ul>
      </div>
    </div>
  )
}

export default Phoenix;