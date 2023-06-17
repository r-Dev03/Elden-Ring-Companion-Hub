const SpiritView = ({ res }) => {
  return (
    <section className="data-info">
      <img className="data-img" src={res.image} alt="img" />
      <div className="data-text">
      <p> Name: {res.name} </p>
      <p> FP Cost: {res.fpCost} </p>
      <p> HP Cost: {res.hpCost} </p>
      <p> Effect: {res.effect} </p>
      <p> Description: {res.description} </p>
      </div>
    </section>
  );
};
export default SpiritView;
