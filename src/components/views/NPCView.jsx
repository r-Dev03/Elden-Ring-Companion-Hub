const NPCView = ({ res }) => {
  return (
    <section className="data-info">
      <img className="data-img" src={res.image} alt="img" />
      <div className="data-text">
      <p> Name: {res.name} </p>
      <p> Location: {res.location} </p>
      <p> Role: {res.role} </p>
      <p> Quote: &quot;{res.quote}&quot; </p>
      </div>
    </section>
  );
};
export default NPCView;
