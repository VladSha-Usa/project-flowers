# Getting Started
## Prerequisites
* Both node.js and npm should be installed globbally. You can find the instructions https://nodejs.org/en/download/
* yarn should be installed globbally. You can find the instructions https://yarnpkg.com/
## Installation
* run `yarn install` on the root of the project
* open node_modules/react-mapbox-gl/lib-esm/map.js:38 and comment the line: `// require('mapbox-gl/dist/mapbox-gl.css'); `
    ```javascript
    if (injectCSS) {
        // require('mapbox-gl/dist/mapbox-gl.css');
    }
    ```
## Development
* run `yarn run dev` on the root of the project and this will start dev server.
* open http://localhost:3000 in any available browser (Opera, Chrome, Firefox, Safari).
* Make change and save file. All changes will be reflected in browser immediately.
## Issue process (GitLab flow)
* Create merge request (See green on the issue's page, i.e. https://gitlab.com/killev/flowers-way/issues/{number of usse} ).
* It will create branch with unique name. Don't change it.
* Branch with that name should appear in git after fetch.
    * `git fetch && git brach -a`
    * You should see that branch in console.
* Switch to that brach:
    * `git checkout {branch name}`
* Perform changes and commit
    * `git add .`  adds changed files to indexed.
    * `git commit -m "{Write wnat you've done here}"` commit indexed files.
### Or you may use any convinient git client available for your OS.

* Follow and fix comments you get during the code review.