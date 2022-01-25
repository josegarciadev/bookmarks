import { shallow } from 'enzyme';

import { Bookmarks } from '../Bookmarks';

describe('Bookmarks', () => {
    it('should match snapshot', () => {
        const rendered = shallow(<Bookmarks />);
        expect(rendered).toMatchSnapshot();
    });
});