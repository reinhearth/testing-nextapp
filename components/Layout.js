// eslint-disable-next-line no-unused-vars
import Search from './Search';

const Layout = ({ children }) => {
  return (
    <>
      <Search />
      {children}
    </>
  );
};

export default Layout;
