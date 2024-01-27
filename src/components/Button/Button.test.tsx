import { render } from '@testing-library/react';
import Button from '.';


describe('Unit Testing Button Component', () => {
  test('Expect button render correctly', () => {
    const document = render(<Button />);
    expect(document).toMatchSnapshot();
  });

});