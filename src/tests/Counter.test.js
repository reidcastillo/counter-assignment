// Import necessary React Testing Library helpers
import { render, screen, fireEvent } from '@testing-library/react';
// Import the Counter component
import Counter from '../components/Counter';

// Set up the test environment
beforeEach(() => {
  // Render the Counter component before each test
  render(<Counter />);
});

// Test for rendering the counter message
test('renders counter message', () => {
  // Check if the Counter header is rendered
  const counterMessage = screen.getByText(/counter/i);
  expect(counterMessage).toBeInTheDocument();
});

// Test for initial count value
test('should render initial count with value of 0', () => {
  // Check if the count starts at 0
  const countElement = screen.getByTestId('count');
  expect(countElement).toHaveTextContent('0');
});

// Test for increment functionality
test('clicking + increments the count', () => {
  // Find the + button and the count display
  const incrementButton = screen.getByText('+');
  const countElement = screen.getByTestId('count');

  // Simulate a click on the + button
  fireEvent.click(incrementButton);

  // Verify that the count increments
  expect(countElement).toHaveTextContent('1');
});

// Test for decrement functionality
test('clicking - decrements the count', () => {
  // Find the - button and the count display
  const decrementButton = screen.getByText('-');
  const countElement = screen.getByTestId('count');

  // Simulate a click on the - button
  fireEvent.click(decrementButton);

  // Verify that the count decrements
  expect(countElement).toHaveTextContent('-1');
});
