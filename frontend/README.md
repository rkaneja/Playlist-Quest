# Playlsit Quest Frontend
This is the frontend source code for the react application powering Playlist-Quest.
```
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Game Time</title>
    <link rel="stylesheet" href="styles/main.css">
    <link rel="stylesheet" href="styles/song-card.css">
    <link rel="stylesheet" href="bootstrap/css/bootstrap.min.css">
    <link rel="stylesheet" href="styles/font-awesome/css/font-awesome.min.css">
</head>`
```

# Getting Starte`
## Project Dependencies
| Dependency | Version | Date Updated |
| -------- | -------- | -------- |
| React | 18.2.0 | March 28, 2023 |
| NodeJS | | |


## Available Scripts
### `npm start`markdown.preview.fontFamily
Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`
Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`
Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`
**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

# File Structure
```
src/
├── components/
├── pages/
├── assets/
├── styles/
├── utils/
└── services/
```

## src/

This folder contains all of the source code for the project.

## src/components/

This folder contains all of the React components used in the project. These components are reusable UI elements that can be used across different pages and sections of the app.

## src/pages/

This folder contains all of the top-level pages/routes for the app. Each page corresponds to a specific URL path and is composed of various React components.

## src/assets/

This folder contains all of the images, fonts, and other non-code assets used in the project. These assets are typically referenced in the CSS or HTML code of the app.

## src/styles/

This folder contains all of the CSS and other styling code used in the project. This includes styles for individual components, as well as global styles that apply to the entire app.

## src/utils/

This folder contains any utility functions or helper code used throughout the project. These functions are typically used to perform common tasks such as data formatting, string manipulation, or API interactions.

## src/services/
This folder contains all of the code responsible for interacting with external services, such as APIs. This includes functions for making HTTP requests, handling responses, and parsing data.
