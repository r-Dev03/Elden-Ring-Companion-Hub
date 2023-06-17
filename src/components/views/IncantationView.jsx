const IncantationView = ({ res }) => {
  return (
    <section className="data-info">
      <img className="data-img" src={res.image} alt="img" />
      <div className="data-text">
      <p> Name: {res.name} </p>
      <p> Type: {res.type} </p>
      <p> Slots: {res.slots} </p>
      <p> Effects: {res.effects} </p>
      <p> Description: {res.description} </p>
      <ul>
        {' '}
        Requires:
        {res.requires.map((el, index) => {
          return (
            <li key={index}>
              {' '}
              {el.amount} {el.name}
            </li>
          );
        })}
      </ul>
      </div>
    </section>
  );
};
export default IncantationView;
