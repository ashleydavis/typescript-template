# typescript-template

A template for a TypeScript app. To make it easier to start a new app without having to go through all the configuration.

## Features

- Example module.
- Example command line app (installable via npm install -g)
- Mocha tests.
- Debug configuration for command line app and Mocha tests.

## Installation

### As a module

Install it

    npm install --save <git-repo>

Import and use it (in a TypeScript file):

    import { ExampleClass } from 'typescript-template';
    
    var example = new ExampleClass();

Import and use it (from JavaScript):

    var typescriptTemplate = require('typescript-template');
    var ExampleClass = typescriptTemplate.ExampleClass;

    var example = new ExampleClass();

### As a command line app

Install it

    npm install -g <git-repo>

Run it

    typescript-template [args]

## Building the code

    Open folder in Visual Studio Code and hit Ctrl+Shift+B

Or

    tsc [-w]

Which requires:

    npm install -g typescript


## Debugging

### Debugging the command line app

- Open in Visual Studio Code.
- Select 'Main' debug configuration.
- Set your breakpoints.
- Hit F5 to run.

### Debugging the tests

- Open in Visual Studio Code.
- Select 'Mocha' debug configuration.
- Open the test source file to execute.
- Set your breakpoints.
- Hit F5 to run.

## Running without Building

Install some global modules:

    npm install -g ts-node
    npm install -g mocha
    npm install -g ts-mocha

Run the command line app directly:

    ts-node cli.ts

Run tests directly:

    ts-mocha test/**/*.ts [--watch]

Or:

    npm run test

Or:

    npm run test:watch

## Running the code after building

Run the command line app:

    cd build
    node cli.js

Run the tests:

    cd build
    mocha