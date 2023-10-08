import { render, screen, fireEvent, getByTestId } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { Minicart } from '.';
import { UseMinicart } from '../../hooks/MinicartContext';

interface ImgProps {
  src: string;
  alt: string;
}
// eslint-disable-next-line react/display-name
jest.mock('next/image', () => ({ src, alt }: ImgProps) => (
  <img src={src} alt={alt} />
));

jest.mock('next/navigation', () => {
  return {
    useRouter() {
      return {
        push: '/search/teste'
      };
    }
  };
});

jest.mock('../../hooks/MinicartContext');
const UseMinicartMocked = jest.mocked(UseMinicart);

const products = [
  {
    id: '1',
    title: 'Produto 1',
    thumbnail: 'https://thumbnail-fake.pnj',
    price: 10.99,
    originalPrice: 15.99,
    reputation: 4.5,
    quantity: 1
  },
  {
    id: '2',
    title: 'Produto 2',
    thumbnail: 'https://thumbnail-fake.pnj',
    price: 20.99,
    originalPrice: 25.99,
    reputation: 4.8,
    quantity: 2
  }
];

describe('Minicart component', () => {
  const oncloseModal = jest.fn();

  it('Rendering header correctly', () => {
    UseMinicartMocked.mockReturnValue({
      products: [],
      deleteProduct: jest.fn(),
      addProduct: jest.fn(),
      updateQuantity: jest.fn()
    });
    render(<Minicart oncloseModal={oncloseModal} />);

    expect(screen.getByText('Carrinho de compras')).toBeInTheDocument();
    expect(screen.getByTestId('close-minicart-outside')).toBeInTheDocument();
  });

  it('Button on the internal header that close the minicart', () => {
    render(<Minicart oncloseModal={oncloseModal} />);

    const buttonCLoseMinicartInside = screen.getByTestId(
      'close-minicart-inside'
    );

    fireEvent.click(buttonCLoseMinicartInside);

    expect(oncloseModal).toHaveBeenCalled();
  });

  it('Button on the externo header that close the minicart', () => {
    render(<Minicart oncloseModal={oncloseModal} />);

    const buttonCLoseMinicartOutside = screen.getByTestId(
      'close-minicart-outside'
    );

    fireEvent.click(buttonCLoseMinicartOutside);

    expect(oncloseModal).toHaveBeenCalled();
  });

  it('Rendering when minicart is empty', () => {
    render(<Minicart oncloseModal={oncloseModal} />);

    expect(
      screen.getByText('Seu carrinho de compras está vázio!')
    ).toBeInTheDocument();

    expect(screen.queryByText('Finalizar Compra')).not.toBeInTheDocument();
  });

  it('Rendering when minicart is not empty', () => {
    UseMinicartMocked.mockReturnValueOnce({
      products: products,
      deleteProduct: jest.fn()
    } as any);

    render(<Minicart oncloseModal={oncloseModal} />);

    expect(
      screen.queryByText('Seu carrinho de compras está vázio!')
    ).not.toBeInTheDocument();

    expect(screen.getByText('Finalizar Compra')).toBeInTheDocument();
  });

  it('Delete product using the delete button', () => {
    const deleteProduct = jest.fn();

    UseMinicartMocked.mockReturnValueOnce({
      products: products,
      deleteProduct: deleteProduct
    } as any);

    render(<Minicart oncloseModal={oncloseModal} />);

    const ButtonDeleteProduct = screen.getByTestId('delete-product-button-0');

    fireEvent.click(ButtonDeleteProduct);

    expect(deleteProduct).toHaveBeenCalled();
  });
});
