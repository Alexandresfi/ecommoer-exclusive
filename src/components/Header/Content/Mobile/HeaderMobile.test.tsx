import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { MobileHeader } from '.';

interface ImgProps {
  src: string;
  alt: string;
}

jest.mock('next/navigation', () => {
  return {
    useRouter() {
      return {
        push: '/search/teste'
      };
    }
  };
});

// eslint-disable-next-line react/display-name
jest.mock('next/image', () => ({ src, alt }: ImgProps) => (
  <img src={src} alt={alt} />
));

describe('Header mobile', () => {
  it('Rendering Logo correctly', () => {
    render(<MobileHeader />);
    expect(screen.getByAltText('logo Exclusive')).toBeInTheDocument();
  });

  it('Rendering button Menu correctly', () => {
    render(<MobileHeader />);
    expect(screen.getByText('Menu')).toBeInTheDocument();
  });

  it('Rendering button Minicart correctly', () => {
    render(<MobileHeader />);
    expect(screen.getByTitle('open minicart')).toBeInTheDocument();
  });
});
