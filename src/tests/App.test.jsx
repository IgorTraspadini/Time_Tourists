import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from '../App';
import PersonalizedMessage from '../components/PersonalizedMessage';
import FactsandFigures from '../components/FactsAndFigures';
import ChatComponent from '../components/Chatgpt_API';

// Test 1: Write a test that checks to see if our `App` component renders without throwing an error.
/* it('App Component Renders Without Error', () => {
  render(<App />);
});

it('App Component Signin Renders two Input fields, a Button, ...', () => {
  render(<App />);
  const button = screen.getByRole('button', { name: 'Enter' });
  const inputName = screen.getByRole('textbox', { name: 'Enter your name' });
  const inputEmail = screen.getByRole('textbox', { name: 'Enter your email' });
  const errorHeading = screen.getByRole('heading', { level: 1 });

  expect(errorHeading.textContent).toBe('Welcome to Time Tourists');
  expect(button).toBeDefined();
  expect(inputName).toBeDefined();
  expect(inputEmail).toBeDefined();

});


it('Clicking button on Signin page with fields empty, keep on the page', async () => {
  render(<App />);

  await userEvent.click(
    screen.getByRole('button', { name: 'Enter' })
  );

  const errorHeading = screen.getByRole('heading', { level: 1 });
  expect(errorHeading.textContent).toBe('Welcome to Time Tourists');
});

it('Clicking button on Signin page with fields not empty, move on to selection page', async () => {
  render(<App />);

  await userEvent.type(
    screen.getByRole('textbox', { name: 'Enter your name' }),
    "John"
  );

  await userEvent.type(
    screen.getByRole('textbox', { name: 'Enter your email' }),
    "John@gmail.com"
  );

  await userEvent.click(
    screen.getByRole('button', { name: 'Enter' })
  );

  const message = screen.getByText('Hi, John');

  expect(message).toBeDefined();

});


it('Clicking button on Selection page with fields empty, keep on page', async () => {
  render(<App />);

  await userEvent.click(
    screen.getByRole('button', { name: 'Search' })
  );

  const inputField = screen.getByRole('textbox', { name: 'Where would you like to go?' });

  expect(inputField).toBeDefined();

});


it('Clicking button on Selection page with fields not empty, move on to other page', async () => {
  render(<App />);

  await userEvent.type(
    screen.getByLabelText('Where would you like to go?'),
    "India"
  );

  await userEvent.type(
    screen.getByLabelText('What are you interested in?'),
    "History"
  );

  await userEvent.click(
    screen.getByRole('button', { name: 'Spring' })
  );

  await userEvent.click(
    screen.getByRole('button', { name: 'Search' })
  );

  const message = screen.getByText("Here's an intinerary of things you should see, based on");
  expect(message).toBeDefined();
  
}); */

it('Test PersonalizedMessage component', () => {
  render(<PersonalizedMessage
    place="China"
    season="Spring"
    interest="Music"
    name="John"
  />);

  const message = screen.getByText("Hi John, you're going to China in Spring!");

  expect(message).toBeDefined();

});


/* it('Test FactsandFigures component', () => {
  render(<FactsandFigures
    place="China"
    season="Spring"
    interest="Music"
  />);

  const message = screen.getByText("Your top picks");

  expect(message).toBeDefined();

});

it('Test ChatComponent component', async () => {
  render(<ChatComponent
    where="China"
    when="Spring"
    interest="Music"
  />);

}); */



