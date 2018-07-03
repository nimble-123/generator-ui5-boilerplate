![OpenUI5 logo](http://openui5.org/images/OpenUI5_new_big_side.png)

# <%= projectName %> [![NPM version][npm-image]][npm-url] [![Build Status][travis-image]][travis-url] [![Dependency Status][daviddm-image]][daviddm-url]

> <%= projectDescription %>

## Prerequisites
- The **UI5 CLI** of the [UI5 Build and Development Tooling](https://github.com/SAP/ui5-tooling#installing-the-ui5-cli).
    - For installation instructions please see: [Installing the UI5 CLI](https://github.com/SAP/ui5-tooling#installing-the-ui5-cli).

## Getting started
1. Clone the repository and navigate into it
    ```sh
    git clone <%= gitRepository %>.git
    cd <%= projectPath %>.git
    ```
1. Install all dependencies
    ```sh
    npm install
    ```

1. Start a local server and run the application (http://localhost:8080/index.html)
    ```sh
    ui5 serve -o /index.html
    ```

## Testing
* Run ESLint code validation
    ```sh
    npm run lint
    ```
* Start a local server and execute the tests automatically after every change
    ```sh
    npm run watch
    ```
* Run ESLint, start a local server and run the tests in CI mode
    ```sh
    npm test
    ```
## Building
### Option 1: Standard preload build
1. Execute the build
    ```sh
    ui5 build -a
    ```
1. Run the result
    1. Install an HTTP server like [zeit/serve](https://www.npmjs.com/package/serve) (**Note:** You can use any HTTP server)
        ```sh
        # Install zeit/serve
        npm install --global serve
        ```
    1. Start an HTTP server for the newly created `/dist` directory
        ```sh
        serve ./dist
        ```
    1. Open the app at http://localhost:5000/index.html

### Option 2: Self-contained build
1. (Optional) Remove previous build results
   ```sh
   rm -rf ./dist
   ```
1. Execute the `self-contained` build to create a bundle with all of your applications runtime dependencies
    ```sh
    ui5 build self-contained -a
    ```
1. Run the result
    1. Install an HTTP server like [zeit/serve](https://www.npmjs.com/package/serve) (if not already done)
        ```sh
        # Install zeit/serve
        npm install --global serve
        ```
    1. Start an HTTP server for the newly created `/dist` directory
        ```sh
        serve ./dist
        ```
    1. Open the app at http://localhost:5000/index-self-contained.html (Note the different path)


## License

LICENSE © [<%= projectAuthor %>](mailto:<%= projectAuthorEmail %>)


[npm-image]: https://badge.fury.io/js/generator-ui5-boilerplate.svg
[npm-url]: https://npmjs.org/package/generator-ui5-boilerplate
[travis-image]: https://travis-ci.org/nlsltz/generator-ui5-boilerplate.svg?branch=master
[travis-url]: https://travis-ci.org/nlsltz/generator-ui5-boilerplate
[daviddm-image]: https://david-dm.org/nlsltz/generator-ui5-boilerplate.svg?theme=shields.io
[daviddm-url]: https://david-dm.org/nlsltz/generator-ui5-boilerplate
