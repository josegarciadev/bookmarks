import { shallow } from 'enzyme';

import { Card } from '../index';

describe('Card', () => {
    it('should match snapshot', () => {
        const rendered = shallow(<Card />);
        expect(rendered).toMatchSnapshot();
    });
});