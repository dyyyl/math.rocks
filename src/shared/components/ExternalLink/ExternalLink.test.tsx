import { render, fireEvent } from '@testing-library/react';

import ExternalLink from '.';

test('should not navigate away from current location when link is clicked', () => {
  const { getByText } = render(
    <ExternalLink href="https://test.com">Click Me</ExternalLink>,
  );

  const link = getByText('Click Me');

  const currentLocation = window.location.href;

  fireEvent.click(link);

  expect(window.location.href).toBe(currentLocation);
});
