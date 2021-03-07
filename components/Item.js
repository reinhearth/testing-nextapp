function Item() {
  return (
    <div className="container">
      <div className="row">
        <div className="d-flex item">
          <div className="mc-all">
            <img src="/caja.jpg" alt="Dios Pistachi" className="image" />
          </div>
          <div className="mc-1 d-flex item__text">
            <div className="item__text--product mc-1">
              <div className="d-flex align-items-center mc-2__b">
                <p className="price-text mb-0">
                  $999,999.99 (Toda tu quincena ALV!)
                </p>

                <img src="/ic_shipping.png" alt="ic" className="icon" />
              </div>
              <p className="product-text">
                Figura rasca-huele del Dios Pistachi
              </p>
            </div>
            <div className="item__text--place mc-1">
              <p className="place-text">Directo desde Konoha</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Item;
