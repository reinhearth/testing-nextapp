const index = () => {
  return (
    <div className="not-found">
      Prueba tecnica para Mercado Libre, Aplicacion construida en NextJS, Inicie
      una busqueda!
      {process.env.VERCEL_URL}
    </div>
  );
};

export default index;
