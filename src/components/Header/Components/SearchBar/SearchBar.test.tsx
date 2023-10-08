import { fireEvent, render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { SearchInput } from '.';
import { useRouter } from 'next/navigation';

jest.mock('next/navigation');
const useRouterMocked = jest.mocked<() => any>(useRouter);

describe('Search Component', () => {
  it('Rendes input and button correctly', () => {
    render(<SearchInput />);
    expect(
      screen.getByPlaceholderText('O que você procura?')
    ).toBeInTheDocument();

    expect(screen.getByTestId('button-search')).toBeInTheDocument();
  });

  it('click on button with input empty', () => {
    const mockPush = jest.fn();
    useRouterMocked.mockReturnValueOnce({
      push: mockPush
    });

    render(<SearchInput />);

    const ButtonSearch = screen.getByTestId('button-search');

    fireEvent.click(ButtonSearch);

    expect(mockPush).not.toHaveBeenCalled();
  });

  it('click on button with input not empty', () => {
    const mockPush = jest.fn();
    useRouterMocked.mockReturnValue({
      push: mockPush
    });

    render(<SearchInput />);

    const ButtonSearch = screen.getByTestId('button-search');
    const InputSearch = screen.getByPlaceholderText('O que você procura?');

    fireEvent.change(InputSearch, { target: { value: 'teste' } });
    fireEvent.click(ButtonSearch);

    expect(mockPush).toHaveBeenCalledWith('/search/teste');
  });

  it('keypress enter when the input empty', () => {
    const mockPush = jest.fn();
    useRouterMocked.mockReturnValueOnce({
      push: mockPush
    });

    render(<SearchInput />);

    const InputSearch = screen.getByPlaceholderText('O que você procura?');

    fireEvent.keyPress(InputSearch, {
      key: 'Enter',
      code: 'Enter',
      charCode: 13
    });

    expect(mockPush).not.toHaveBeenCalled();
  });
});
