export const resolvers = {
  Query: {
    getSearchItems: async (_, args) => {
      try {
        // eslint-disable-next-line no-undef
        const res = await fetch(
          `https://api.mercadolibre.com/sites/MLA/search?q=${args.search}`
        );

        const searchItems = await res.json();

        const filterCategory = searchItems.filters.find(
          (filter) => filter.id === 'category'
        );
        const categories = filterCategory.values[0].path_from_root.map(
          (category) => category.name
        );

        const items = searchItems.results.map((item) => {
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
    getDescriptionItem: async (_, args) => {
      try {
        // eslint-disable-next-line no-undef
        const resItem = await fetch(
          `https://api.mercadolibre.com/items/${args.id}`
        );
        // eslint-disable-next-line no-undef
        const resDescription = await fetch(
          `https://api.mercadolibre.com/items/${args.id}/description`
        );

        const item = await resItem.json();

        const description = await resDescription.json();

        return {
          author: {
            name: 'Raphael',
            lastname: 'Vazquez',
          },
          item: {
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
          },
          picture: item.secure_thumbnail,
          condition: item.condition,
          free_shipping: item.shipping.free_shipping,
          sold_quantity: item.sold_quantity,
          description: description.plain_text,
        };
      } catch (error) {
        return error;
      }
    },
  },
};
