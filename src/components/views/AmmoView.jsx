const AmmoView = ({ res }) => {
  return (
    <section className="data-info">
      <img className="data-img" src={res.image} alt="img" />
      <div className="data-text">
      <p> Name: {res.name} </p>
      <p> Description: {res.description} </p>
      <p> Passive: {res.passive} </p>
      <p> Type: {res.type} </p>
      </div>
    </section>
  );
};
export default AmmoView;
