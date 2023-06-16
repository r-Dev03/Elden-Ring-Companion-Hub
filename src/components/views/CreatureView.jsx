const CreatureView = ({ res }) => {
  return (
    <section className="data-info">
      <img className="data-img" src={res.image} alt="img" />
      <p> Name: {res.name} </p>
      <p> Location: {res.Location} </p>
      <p> Description: {res.description} </p>
      <ul>
        {' '}
        Drops:{' '}
        {res.drops.map((item, index) => {
          return <li key={index}> {item} </li>;
        })}
      </ul>
    </section>
  );
};
export default CreatureView;
