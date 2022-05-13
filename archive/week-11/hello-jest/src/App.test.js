import { render, screen } from '@testing-library/react';
import App from './App';

describe('Just a group of tests', () => {
  test('renders learn react link', () => {
    render(<App />);
    const linkElement = screen.getByText(/learn react/i);
    expect(linkElement).toBeInTheDocument();
  });

  test('Always true - is 2+2 = 4', () => {
    render(<App />);
    expect(2 + 2).toBe(4);
  });

  test('Always false sum test', () => {
    render(<App />);
    expect(2 + 2).toBe(3);
  });
});
