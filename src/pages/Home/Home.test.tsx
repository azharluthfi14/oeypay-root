import { render } from '@testing-library/react';
import { describe, expect, it } from 'vitest';

import { HomePage } from '.';

describe('Home page', async () => {
  it('Should render title homepage correctly', async () => {
    const wrapper = render(<HomePage />);

    const title = wrapper.getByTestId('title-homepage');
    expect(title?.textContent).toBe('This is HomePage Mas');
  });
});
