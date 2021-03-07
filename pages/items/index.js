/* eslint-disable no-unused-vars */
import Item from '../../components/Item';
import Categories from '../../components/Categories';
import { useRouter } from 'next/router';

const index = (props) => {
  const { items } = props;

  const router = useRouter();
  return (
    <>
      <Categories />
      {/* {items.map((item) => (
        <Item item={item} />
      ))} */}
    </>
  );
};

export default index;
