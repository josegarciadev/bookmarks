# BOOKMARKS

## Available Scripts

Inside both directories, you can run (on UI you could use `Yarn` too):

### `npm run start`

**On UI:** Runs the app in the development mode. Open [http://localhost:3001](http://localhost:3001) to view it in the browser. The page will reload if you make edits.

**On Server:** Starts the app on port 3000 by default.

### `npm run test`

**On UI:** Launches the test runner in the interactive watch mode. Powered by [Jest](https://jestjs.io/) and [Enzyme](https://enzymejs.github.io/enzyme/).

**On Server:** Runs the tests (under the `tests` folder), it uses [Jest](https://jestjs.io/) and [SuperTest](https://www.npmjs.com/package/supertest).

### `npm run test:coverage`

Same as `npm run test` but it always run all the available tests and evaluates the test coverage. A convenient HTML report is generated under the `coverage` folder.

For this project we have a mandatory 100% code coverage, otherwise this will fail.