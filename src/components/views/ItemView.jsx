const ItemView = ({ res }) => {
  return (
    <section className="data-info">
      <img className="data-img" src={res.image} alt="img" />
      <div className="data-text">
      <p> Name: {res.name} </p>
      <p> Type: {res.type} </p>
      <p> Effect: {res.effect} </p>
      <p> Description: {res.description} </p>
      </div>
    </section>
  );
};
export default ItemView;
