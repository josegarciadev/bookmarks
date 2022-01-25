import { shallow } from 'enzyme';

import { BookmarkList } from '../index';

describe('BookmarkList', () => {
    it('should match snapshot', () => {
        const rendered = shallow(<BookmarkList />);
        expect(rendered).toMatchSnapshot();
    });
});