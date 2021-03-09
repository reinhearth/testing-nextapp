const Item = (props) => {
  const goToDetails = (event) => {
    event.preventDefault();
    props.onDetails(props.item.id);
  };

  return (
    <div className="container">
      <div className="row">
        <div className="d-flex item" onClick={goToDetails}>
          <div className="mc-all">
            <img
              src={props.item.picture}
              alt={props.item.title}
              className="image"
            />
          </div>
          <div className="mc-1 d-flex item__text">
            <div className="item__text--product mc-1">
              <div className="d-flex align-items-center mc-2__b">
                <p className="price-text mb-0">
                  {props.item.price.decimals
                    ? `$ ${props.item.price.amount}.${props.item.price.decimals}`
                    : `$ ${props.item.price.amount}`}
                </p>
                {props.item.free_shipping ? (
                  <img
                    src="/ic_shipping.png"
                    alt="image_free_shipping"
                    className="icon"
                  />
                ) : (
                  <></>
                )}
              </div>
              <p className="product-text">
                {props.item.title} {props.item.condition}
              </p>
            </div>
            <div className="item__text--place mc-1">
              <p className="place-text">{props.item.from}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Item;
