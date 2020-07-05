import React from 'react';
import { render } from '@testing-library/react';
import Zoom from './Zoom';

test('zoom component', () => {
  const { container } = render(<Zoom />);
    expect(container.firstChild).toHaveClass('zoom-container')
});
