// eslint-disable-next-line no-unused-vars
import Categories from '../../components/Categories';
import '@testing-library/jest-dom';
import { render } from '@testing-library/react';

describe('Categories Component', () => {
  let expectedProps;
  beforeEach(() => {
    expectedProps = {
      categories: ['Electronicos', 'Celulares'],
    };
  });

  test('Should Render categories path', async () => {
    const { container  } = render(<Categories {...expectedProps} />);
    const categories = container.querySelector('p')
    expect(categories.textContent).toEqual('Electronicos > Celulares');
  });
});
