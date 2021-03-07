// import Link from 'next/link';
function Search() {
  return (
    <div className="header d-flex justify-content-center align-items-center">
      <div className="container">
        <div className="d-flex justify-content-between">
          <img src="/Logo_ML.png" className="logo" alt="logo" />
          <div className="col-11">
            <div className="row">
              <div className="col-12 p-0 bar">
                <input
                  type="text"
                  placeholder="Nunca dejes de buscar"
                  className="input-text input-text-bar"
                />
                <button className="btn button">
                  <img src="/ic_Search.png" alt="search" className="search" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Search;
