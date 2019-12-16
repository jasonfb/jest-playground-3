
import React from 'react';
import { render, wait } from '@testing-library/react';
import App from './App';


test('renders learn react link', async () => {

  const { getByText, getByTestId } = render(<App />);

  const linkElement = getByTestId("app")

  await wait(() => expect(getByText(/A Test of refs/i, linkElement)).toBeInTheDocument());

});
