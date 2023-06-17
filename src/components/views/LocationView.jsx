const LocationView = ({ res }) => {
  return (
    <section className="data-info">
      <img className="data-img" src={res.image} alt="img" />
      <div className="data-text">
      <p> Name: {res.name} </p>
      <p> Description: {res.description} </p>
      </div>
    </section>
  );
};
export default LocationView;
