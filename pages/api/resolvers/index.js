export const resolvers = {
  Query: {
    getSearchItems: async (_, args) => {
      try {
        // eslint-disable-next-line no-undef
        const searchItems = await fetch(
          `https://api.mercadolibre.com/sites/MLA/search?q=${args.query}`
        );

        const filterCategory = searchItems.data.available_filters.find(
          (filter) => filter.id === 'category'
        );

        const categories = filterCategory.values.map(
          (category) => category.name
        );

        const items = searchItems.data.results.map((item) => {
          return {
            id: item.id,
            title: item.title,
            price: {
              currency: item.currency_id,
              amount: Number.isInteger(item.price)
                ? item.price
                : +item.price.toString().split('.')[0],
              decimals: Number.isInteger(item.price)
                ? null
                : +item.price.toString().split('.')[1],
            },
            picture: item.thumbnail,
            condition: item.condition,
            free_shipping: item.shipping.free_shipping,
          };
        });

        return {
          author: {
            name: 'Raphael',
            lastname: 'Vazquez',
          },
          categories: [...categories],
          items: [...items],
        };
      } catch (error) {
        return error;
      }
    },
    // getUser: async (_, args) => {
    //   try {
    //     const user = await axios.get(
    //       `https://api.github.com/users/${args.name}`
    //     );
    //     return {
    //       id: user.data.id,
    //       login: user.data.login,
    //       avatar_url: user.data.avatar_url,
    //     };
    //   } catch (error) {
    //     throw error;
    //   }
    // },
  },
};
