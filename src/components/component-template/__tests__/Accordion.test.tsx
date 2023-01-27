import { describe, test } from 'vitest';
import { render, screen } from '@testing-library/react';
import {} from '@testing-library/jest-dom';
import TemplateComponent from '../Template';

describe('Accordion test', () => {
  beforeEach(() => {
    render(
      <TemplateComponent title="Testing">
        <h4 data-testid="children">Content</h4>
      </TemplateComponent>
    );
  });

  test('Should show title all the time', () => {
    expect(screen.getByText(/Testing/i)).toBeDefined();
  });

  test('Should not show content at the start', () => {
    expect(screen.queryByTestId('children')).not.toBeInTheDocument();
  });
});
