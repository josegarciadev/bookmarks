import { shallow } from 'enzyme';

import { BookmarkList } from '../index';

describe('BookmarkList', () => {
    let props={
       data:[
        {id:'48e6c5e7-e0c6-4614-8ac1-8193920de8eb',title:'google',link:'http://google.com'},
        {id:'92ac82a5-74ba-4a99-9ede-d9d2a434568f',title:'Bookmarks',link:'http://Bookmarks.com'},
        {id:'f1f20ffd-edf8-4f11-99ab-359158723eb1',title:'curso react native',link:'http://reactNative.com'},
        {id:'bbda2eb6-6917-47f0-a512-5903cc568c44',title:'curso flutter',link:'http://flutterCurso.com'},
       ]
    }
    it('should match snapshot', () => {
        const rendered = shallow(<BookmarkList {...props}/>);
        expect(rendered).toMatchSnapshot();
    });
});