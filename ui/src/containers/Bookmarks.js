import { BookmarkForm } from '../components/form';
import { BookmarkList } from '../components/list';

// Note: API calls should be done here, 'axios' is already added as dependency

export const Bookmarks = () => (
    <>
        <BookmarkForm />
        <BookmarkList />
    </>
);