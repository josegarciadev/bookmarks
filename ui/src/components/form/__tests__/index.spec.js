import { shallow } from 'enzyme';

import { BookmarkForm } from '../index';

describe('BookmarkForm', () => {
    it('should match snapshot', () => {
        const rendered = shallow(<BookmarkForm />);
        expect(rendered).toMatchSnapshot();
    });
});