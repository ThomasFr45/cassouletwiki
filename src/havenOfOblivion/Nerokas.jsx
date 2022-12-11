import BossHeader from '../bossHeader';

const Nerokas = () => {
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
        name="Nerokas"
        solo={false}
        dmg="N/A"
        comp={teamComp}
        img={"https://i.imgur.com/i3amF5Z.png"}
      />
    </div>
  )
}

export default Nerokas;