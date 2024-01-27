import { render, screen } from '@testing-library/react';
import Text from '.';
import '@testing-library/jest-dom/extend-expect';

describe('Unit Testing Text Component', () => {
  
  // PERTEMUAN - 1 WEEK-13 ----------------------
  // test('Expect text render correctly', () => {
  //   const document = render(<Text />);
  //   expect(document).toBeDefined();
  // })

  // test('Expect text have correct classname', () => {
  //   render(<Text />)
  //   const element = screen.getByText('testing element')
  //   expect(element).toHaveClass('class-testing');
  // })

  // test('Expect text have correct id', () => {
  //   render(<Text />)
  //   const element = screen.getByText('testing element')
  //   expect(element).toHaveAttribute('id', 'testing');
  // })
  //----------------------------------------------

  test('Expect text render correctly', () => {
    const document = render(<Text>{'test unit testing'}</Text>);
    expect(document).toMatchSnapshot();
  })

  test('Expect text have correct classname', () => {
    render(<Text className='class-testing'>{'test unit testing'}</Text>)
    const element = screen.getByText('test unit testing')
    expect(element).toHaveClass('class-testing');
  })

  test('Expect text have correct id', () => {
    render(<Text id='testing' >{'test unit testing'}</Text>)
    const element = screen.getByText('test unit testing')
    expect(element).toHaveAttribute('id', 'testing');
  })

});