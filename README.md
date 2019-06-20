This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### Linting

To set up eslint with airbnb's style guide, follow the given steps:

1. Run the following commands
```bash
# To integrate eslint:
npm install --save-dev eslint eslint-plugin-react eslint-config-airbnb eslint-plugin-import eslint-plugin-jsx-a11y
```
2. In your root folder, create the following files:<br />

.eslintignore
```
/node_modules/
/build/
```
.eslintrc.js

Copy the contents from this repo to your file