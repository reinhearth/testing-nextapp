/* eslint-disable no-unused-vars */
import Item from '../../components/Item';
import Categories from '../../components/Categories';
import { useRouter } from 'next/router';

const index = (props) => {
  const router = useRouter();
  const findDetailItem = (itemId) => {
    const fullPath = `/items/${itemId}`;
    router.push(fullPath);
  };

  if (!props.searchInfo || !props.searchInfo.getSearchItems) {
    return (
      <div className="not-found">
        <h2>Producto no encontrado, intente una nueva busqueda!</h2>
      </div>
    );
  }

  return (
    <>
      <Categories categories={props.searchInfo.getSearchItems.categories} />
      {props.searchInfo.getSearchItems.items.map((item) => (
        <Item key={item.id} item={item} onDetails={findDetailItem} />
      ))}
    </>
  );
};

index.getInitialProps = async (ctx) => {
  // eslint-disable-next-line no-undef
  const res = await fetch(process.env.API_URL + 'api/graphql', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      query: `query($search: String!){
      getSearchItems(search:$search){
        author {
          name
          lastname
        }
        categories
        items{
          id
          title
          price{
            currency
            amount
            decimals
          }
          picture
          condition
          free_shipping
          from
        }
      }
    }`,
      variables: {
        search: ctx.query.search,
      },
    }),
  });
  const json = await res.json();
  return { searchInfo: json.data };
};

export default index;
