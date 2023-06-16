const AshView = ({ res }) => {
  return (
    <section className="data-info">
      <img className="data-img" src={res.image} alt="img" />
      <p> {res.name} </p>
      <p> Affinity: {res.affinity} </p>
      <p> Skill: {res.skill} </p>
      <p> Description: {res.description} </p>
    </section>
  );
};
export default AshView;
