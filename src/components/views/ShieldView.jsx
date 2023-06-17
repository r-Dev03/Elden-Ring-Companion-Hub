const ShieldView = ({ res }) => {
  return (
    <section className="data-info">
      <img className="data-img" src={res.image} alt="No image available" />
      <div className="data-text">
      <p> Name: {res.name} </p>
      <p> Description: {res.description} </p>
      <p> Category: {res.category} </p>
      <p> Weight: {res.weight} </p>
      <p> Weight: {res.weight} </p>
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
      </div>
    </section>
  );
};
export default ShieldView;
