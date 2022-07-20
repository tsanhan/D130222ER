const Card = ({ card }) => {
  const width = {
    width: "18rem",
  };
  const { img, description, phone, address, number } = card;
  return (
    <div className="card" style={width}>
      <img src={img.url} className="card-img-top" alt={img.alt} />
      <div className="card-body">
        <h5 className="card-title">{img.title}</h5>
        <h6 className="card-subtitle mb-2 text-muted">
          {img.description}
        </h6>
        <div className="card-text">
          <div>
            {" "}
            <span className="card-title">Tel:</span> {phone}{" "}
          </div>
          <div>
            {" "}
            <span className="card-title">Address:</span> {address}{" "}
          </div>
          <div>
            {" "}
            <span className="card-title">Card Number:</span> {card.number}{" "}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
