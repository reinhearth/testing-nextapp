function Categories(props) {
  return (
    <div className="container">
      <div className="row">
        <p className="mc-1 route-text">{props.categories.join(' > ')}</p>
      </div>
    </div>
  );
}

export default Categories;
