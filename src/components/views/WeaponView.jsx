const WeaponView = ({ res }) => {
  return (
    <section className="data-info">
      <img className="data-img" src={res.image} alt="img" />
      <p> Name: {res.name} </p>
      <p> Category: {res.category} </p>
      <p> Weight: {res.weight} </p>
      <p> Effects: {res.effects} </p>
      <p> Description: {res.description} </p>
      <ul>
        {' '}
        Attack:
        {res.attack.map((el, index) => {
          return (
            <li key={index}>
              {' '}
              {el.amount} {el.name}
            </li>
          );
        })}
      </ul>
      <ul>
        {' '}
        Defence:
        {res.defence.map((el, index) => {
          return (
            <li key={index}>
              {' '}
              {el.amount} {el.name}
            </li>
          );
        })}
      </ul>
      <ul>
        {' '}
        Scales With:
        {res.scalesWith.map((el, index) => {
          return (
            <li key={index}>
              {' '}
              {el.name} {el.scaling}
            </li>
          );
        })}
      </ul>
    </section>
  );
};
export default WeaponView;
