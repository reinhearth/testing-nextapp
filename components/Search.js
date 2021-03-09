import { useRef } from 'react';
import { useRouter } from 'next/router';
const Search = () => {
  const searchTextRef = useRef();

  const router = useRouter();

  const searchItems = () => {
    const searchTextValue = searchTextRef.current.value;
    router.push({
      pathname: '/items',
      query: { search: searchTextValue },
    });
  };
  const goHome = () => {
    searchTextRef.current.value = '';
    router.push('/');
  };
  return (
    <div className="header d-flex justify-content-center align-items-center">
      <div className="container">
        <div className="d-flex justify-content-between">
          <img
            src="/Logo_ML.png"
            className="logo"
            alt="logo"
            onClick={goHome}
          />

          <div className="col-11">
            <div className="row">
              <div className="col-12 p-0 bar">
                <input
                  id="search"
                  type="text"
                  placeholder="Nunca dejes de buscar"
                  className="input-text input-text-bar"
                  ref={searchTextRef}
                />
                <button
                  className="btn button"
                  type="submit"
                  onClick={searchItems}
                >
                  <img src="/ic_Search.png" alt="search" className="search" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Search;
