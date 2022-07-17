const Card = () => {
  const card = {
    img: {
      title: "first card",
      url: "https://cdn.pixabay.com/photo/2022/01/25/16/01/sky-6966721_960_720.jpg",
      alt: "sky pic",
    },
    description: "this is the first card",
    phone: "050-1234567",
    address: "la la land",
    number: "1000000",
  };

  const width = {
    width: "18rem",
  }
  return (
    <div className="card" style={width}>
      <img src={card.img.url} className="card-img-top" alt={card.img.alt} />
      <div className="card-body">
        <h5 className="card-title">{card.img.title}</h5>
        <h6 className="card-subtitle mb-2 text-muted">{card.img.description}</h6>
        <div className="card-text">
          <div> <span className="card-title">Tel:</span> {card.phone} </div>
          <div> <span className="card-title">Address:</span> {card.address} </div>
          <div> <span className="card-title">Card Number:</span> {card.number} </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
