import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import { ProductItem } from '.';

interface ImgProps {
  src: string;
  alt: string;
}

// eslint-disable-next-line react/display-name
jest.mock('next/image', () => ({ src, alt }: ImgProps) => (
  <img src={src} alt={alt} />
));

describe('CardProduct Component', () => {
  const productData = {
    id: 'id-fake',
    thumbnail: 'https://thumbnail-fake.pnj',
    title: 'title-fake',
    price: 150,
    originalPrice: 200,
    reputation: 90
  };

  it('rendes Link product correctly', () => {
    render(<ProductItem productData={productData} />);
    expect(screen.getByRole('link', { current: false })).toHaveAttribute(
      'href',
      `/product/${productData.id}-${productData.reputation}`
    );
  });

  it('rendes Img product correctly', () => {
    render(<ProductItem productData={productData} />);
    expect(screen.getByAltText(productData.title)).toHaveAttribute(
      'src',
      productData.thumbnail
    );
  });

  it('rendes Buy Button correctly', () => {
    render(<ProductItem productData={productData} />);

    expect(screen.getAllByRole('button', { current: false })[1]).toHaveClass(
      'transition-opacity duration-300'
    );

    expect(
      screen.getAllByRole('button', { current: false })[1]
    ).toBeInTheDocument();
  });

  it('rendes name product correctly', () => {
    render(<ProductItem productData={productData} />);
    expect(screen.getByText(productData.title)).toBeInTheDocument();
  });

  it('rendes price product correctly', () => {
    render(<ProductItem productData={productData} />);
    expect(screen.getByText('R$ 150,00')).toBeInTheDocument();
  });
});
