const detail = async (request, response) => {
    const id = request.query.id;
    // eslint-disable-next-line no-undef
    const res = await fetch(
      `https://api.mercadolibre.com/items/${id}`
    );
    const data = await res.json()
    response.statusCode = 200;
    response.setHeader('Content-type', 'application/json');
    response.end(JSON.stringify({ data: data }));
  };
  
  export default detail;
  