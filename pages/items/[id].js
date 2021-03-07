/* eslint-disable no-unused-vars */
import Categories from '../../components/Categories';

const details = () => {
  return (
    <>
      <Categories />
      <div className="container">
        <div className="row">
          <div className="d-flex product-details mc-2__b">
            <div className="product-details__left">
              <div className="mc-2 mc-2__x d-flex justify-content-center">
                <img src="/caja.jpg" alt="Dios Pistachi" className="product" />
              </div>
              <div className="mc-2 mc-2__x">
                <p className="description-text">Descripción del producto</p>
                <p className="mc-2 product-description-text">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Aliquam voluptates omnis quos praesentium soluta voluptatem
                  expedita dignissimos dolores rem, vitae perferendis reiciendis
                  fugiat porro minus qui et earum possimus dolorem!
                </p>
              </div>
            </div>

            <div className="mc-2 product-details__right">
              <p className="mc-1__b condition-text">Nuevo - 24 vendidos</p>
              <p className="mb-0 product-title">
                Figura rasca-huele del Dios Pistachi
              </p>
              <p className="mc-2 price-title">$999,999.99</p>
              <button className="btn action-btn">Comprar</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default details;
