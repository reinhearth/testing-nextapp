const details = (props) => {
  if (!props.details) {
    return (
      <div className="not-found">
        <h2>Producto no encontrado, intente una nueva busqueda!</h2>
      </div>
    );
  }

  return (
    <>
      <div className="container">
        <div className="row">
          <div className="d-flex product-details mc-2__b">
            <div className="product-details__left col-8">
              <div className="mc-2 mc-2__x d-flex justify-content-center">
                <img
                  src={props.details.getDescriptionItem.picture}
                  alt="image_product"
                  className="product"
                />
              </div>
              <div className="mc-2 mc-2__x">
                <p className="description-text">Descripción del producto</p>
                <p className="mc-2 product-description-text">
                  {props.details.getDescriptionItem.description}
                </p>
              </div>
            </div>

            <div className="mc-2 product-details__right col-4">
              <p className="mc-1__b condition-text">
                {props.details.getDescriptionItem.condition} -{' '}
                {props.details.getDescriptionItem.sold_quantity} sold
              </p>
              <p className="mb-0 product-title">
                {props.details.getDescriptionItem.item.title}
              </p>
              <p className="mc-2 price-title">
                {props.details.getDescriptionItem.item.price.decimals
                  ? `$ ${props.details.getDescriptionItem.item.price.amount}.${props.details.getDescriptionItem.item.price.decimals}`
                  : `$ ${props.details.getDescriptionItem.item.price.amount}`}
              </p>
              <button className="btn action-btn">Comprar</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

details.getInitialProps = async (ctx) => {
  // eslint-disable-next-line no-undef
  const res = await fetch('http://localhost:3000/api/graphql', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      query: `query($id: String!){
        getDescriptionItem(id:$id){
          author {
            name
            lastname
          }
          item{
            id
            title
            price{
              currency
              amount
              decimals
            }
          }
          picture
          condition
          free_shipping
          sold_quantity
          description
        }
      }`,
      variables: {
        id: ctx.query.id,
      },
    }),
  });
  const json = await res.json();
  return { details: json.data };
};

export default details;
