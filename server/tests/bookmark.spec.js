const request = require('supertest');
const app = require('../app');

describe('Bookmark API', () => {
    it('should return the bookmarks', async () => {
        const res = await request(app).get('/bookmarks');
        expect(res.statusCode).toBe(200);
        expect(res.body).toMatchSnapshot();
    });

    it('should add a new bookmark', async () => {
        const res = await request(app)
            .post('/bookmarks')
            .set('Content-Type', 'application/json')
            .send(
                '{ "title": "Google", "link": "https://www.google.com" }',
            );;
        expect(res.statusCode).toBe(200);
        expect(res.body).toMatchSnapshot();
    });
});
