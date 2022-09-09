# Bug Test V1.1

This is a bug test where we evaluate your ability to resolve bugs based on console log messages you get. We also want you to demonstrate in the code (with comments) what was the bug, how you resolved it and as you inspect the code if there are ways the code could be improved.

## In summary in this test, do the following:

- Review each bug and fix them
- Comment what was the bug and how you resolved it
- Inspect the code to find improvements in style, best practices and logic
- Make the improvements with comments as to why you'd make those improvements

## Good luck!

1. The folder `srce` should be renamed to `src`. When run `npm run start`, the react script finds the `index.js` file in `src` folder.
2. The compiler detects incorrect syntax in Footer.js. Look up on Footer.js and find typo 'extend'
3. The compiler detects incorrect import 'Navbar.js' in App.js.
4. The compiler detects 'Invalid left-hand side in assignment expression' in NavBar.js
5. The compiler detects 'Can't resolve 'react-bootstrap' in containers => missing react-bootstrap dependency. Run `npm i react-bootstrap`
6. 'Glyphicon' is not exported from 'react-bootstrap'. React-boopstrap doesn't include Glyphicon anymore. Need to manually import in the `index.html` file
7. 'LoginForm' is not defined => need to import LoginForm in App.js
8. Can't resolve "bootstrap/dist/css/bootstrap-theme.css" => downgrade to bootstrap v3 since v4 no longer supports bootstrap-theme
