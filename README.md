## instructions to run

1. Go to backend and frontend directory and respectively run `npm install` to install dependencies
2. Run `npm start` in backend and frontend directory to start respective applications
3. Run `npm test` in backend directory to run backend tests

Notes:

- New endpoint is at route`/encode` and it takes input that needs to be encoded as query param `value`

* I've added tests for both `/encode` and `/login` routes
* There is also a tst for pure `encode` function although its redundant since encode handler test already covers its usage
