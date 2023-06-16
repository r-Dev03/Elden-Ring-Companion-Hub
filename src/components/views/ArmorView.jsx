const ArmorsView = ({ res }) => {
  return (
    <section className="data-info">
      <img className="data-img" src={res.image} alt="img" />
      <p> Name: {res.name} </p>
      <p> Description: {res.description} </p>
      <p> Category: {res.category} </p>
      <p> Weight: {res.weight} </p>
    </section>
  );
};
export default ArmorsView;
