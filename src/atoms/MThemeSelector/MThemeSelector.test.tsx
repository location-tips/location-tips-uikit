import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import MThemeSelector from './MThemeSelector';
import React from 'react';

describe('MThemeSelector', () => {
  test('render opened dropdown', async () => {
    render(
      <MThemeSelector open={true} dropdownContent="Text" stretch align={'left'}>
        <button>Сhoose a theme</button>
      </MThemeSelector>
    );

    expect(screen.getByText('Text')).toBeInTheDocument();
    expect(screen.getByText('Text')).toBeVisible();
  });
  test('render closed dropdown', async () => {
    render(
      <MThemeSelector
        open={false}
        dropdownContent="Text"
        stretch
        align={'left'}
      >
        <button>Сhoose a theme</button>
      </MThemeSelector>
    );

    expect(screen.getByText('Text')).toBeInTheDocument();
  });
});
