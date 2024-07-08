import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import React from 'react';
import MInput from './MInput';

describe('MInput', () => {
  test('renders with label, caption and description', () => {
    render(
      <MInput
        label="Email"
        caption="Enter your email address"
        description="Email should be valid"
      />
    );

    const labelElement = screen.getByLabelText(/email/i);
    const captionElement = screen.getByText(/enter your email address/i);
    const descriptionElement = screen.getByText(/Email should be valid/i);

    expect(labelElement).toBeInTheDocument();
    expect(captionElement).toBeInTheDocument();
    expect(descriptionElement).toBeInTheDocument();
  });

  test('removes error message when required field is filled', () => {
    render(<MInput label="Email" required defaultValue="test@example.com" />);

    const errorElement = screen.queryByText(/this field is required/i);

    expect(errorElement).toBeNull();
  });

  test('renders text input type by default', () => {
    render(<MInput label="Name" />);

    const inputElement = screen.getByRole('textbox');

    expect(inputElement).toBeInTheDocument();
  });

  test('renders email input type when specified', () => {
    render(<MInput label="Email" type="email" />);

    const inputElement = screen.getByRole<HTMLInputElement>('textbox');

    expect(inputElement.type).toBe('email');
  });

  test('renders password input type and hides characters', () => {
    render(<MInput label="Password" type="password" defaultValue="secret" />);

    const inputElement = screen.getByLabelText<HTMLInputElement>('Password');

    expect(inputElement.type).toBe('password');
    expect(inputElement.value).toBe('secret'); // Shows up as dots visually
  });

  test('triggers onChange event on value change', async () => {
    const handleChange = jest.fn();
    render(<MInput label="Name" onChange={handleChange} />);

    const inputElement = screen.getByRole('textbox');

    await fireEvent.change(inputElement, { target: { value: 'John Doe' } });

    expect(handleChange).toHaveBeenCalled();
  });
});
