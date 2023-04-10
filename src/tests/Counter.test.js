import { render, screen, fireEvent } from '@testing-library/react';
import Counter from '../components/Counter';

beforeEach(() => {
  render(<Counter />);
})

test('renders counter message', () => {
  const welcomeMessage = screen.getByText(/Counter/i);
  expect(welcomeMessage).toBeInTheDocument();
});

test('should render initial count with value of 0', () => {
  const count = screen.getByTestId('count');
  expect(count).toHaveTextContent("0");

});

test('clicking + increments the count', () => {
  const incButton = screen.getByText("+");
  fireEvent.click(incButton);
  const count = screen.getByTestId('count');
  expect(count).toHaveTextContent("1");
});

test('clicking - decrements the count', () => {
  const decButton = screen.getByText("-");
  fireEvent.click(decButton);
  const count = screen.getByTestId('count');
  expect(count).toHaveTextContent("-1");
});
