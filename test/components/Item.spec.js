// eslint-disable-next-line no-unused-vars
import Item from '../../components/Item';
import '@testing-library/jest-dom';
import { render } from '@testing-library/react';

describe('Item Component', () => {
  let expectedProps;
  let expectedProps2;
  beforeEach(() => {
    expectedProps = {
      item: {
        id: 'MLA902519065',
        title: 'Samsung Galaxy A51 128 Gb  Prism Crush White 4 Gb Ram',
        condition: 'new',
        free_shipping: true,
        from: 'Buenos Aires',
        picture:
          'http://http2.mlstatic.com/D_780046-MLA44443560272_122020-I.jpg',
        price: {
          amount: 400,
          currency: 'ARS',
          decimals: null,
        },
      },
    };

    expectedProps2 = {
      item: {
        id: 'MLA902519065',
        title: 'Samsung Galaxy A51 128 Gb  Prism Crush White 4 Gb Ram',
        condition: 'new',
        free_shipping: false,
        from: 'Buenos Aires',
        picture:
          'http://http2.mlstatic.com/D_780046-MLA44443560272_122020-I.jpg',
        price: {
          amount: 400,
          currency: 'ARS',
          decimals: 99,
        },
      },
    };
  });

  test('Should Render a Item', async () => {
    const { container } = render(<Item {...expectedProps} />);
    const title = container.getElementsByClassName('product-text')[0];
    const picture = container.getElementsByClassName('image')[0];
    const shipping = container.getElementsByClassName('icon')[0];
    const from = container.getElementsByClassName('place-text')[0];
    const amount = container.getElementsByClassName('price-text')[0];

    expect(title.textContent).toEqual(
      `${expectedProps.item.title} ${expectedProps.item.condition}`
    );
    expect(from.textContent).toEqual(expectedProps.item.from);
    expect(shipping).toBeVisible();
    expect(picture).toBeVisible();
    expect(amount.textContent).toEqual(`$ ${expectedProps.item.price.amount}`);
  });

  test('Should Render a Item with decimals', async () => {
    const { container } = render(<Item {...expectedProps2} />);
    const title = container.getElementsByClassName('product-text')[0];
    const picture = container.getElementsByClassName('image')[0];
    const shipping = container.getElementsByClassName('icon')[0];
    const from = container.getElementsByClassName('place-text')[0];
    const amount = container.getElementsByClassName('price-text')[0];

    expect(title.textContent).toEqual(
      `${expectedProps2.item.title} ${expectedProps2.item.condition}`
    );
    expect(from.textContent).toEqual(expectedProps2.item.from);
    expect(shipping).toBeUndefined();
    expect(picture).toBeVisible();
    expect(amount.textContent).toEqual(`$ ${expectedProps2.item.price.amount}.${expectedProps2.item.price.decimals}`);
  });
});
