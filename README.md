# typescript-template

A template for a TypeScript app. To make it easier to start a new app without having to go through all the configuration.

[Click here to support my work](https://www.codecapers.com.au/about#support-my-work)

## Features

- Example module.
- Example command line app (installable via npm install -g)
- Testing using Jest.
- Debugging setup for VS Code.

## Usage

When you want to start a new TypeScript app:

- Copy this repo
- In `package.json`, change `typescript-template-cli` to `you-cmd-name` the name of the your cli program (once installed on a user's computer). 
- Across the whole repo, search and replace `typescript-template` to `your-module-name`.
- Install your own custom dependencies
- Add your custom code.
- Comit it all to your own repo.
- If necessary, publish to npm using `npm publish`.

You now have a reusable code module and/or command line app that you can 'npm install' and share with your team mates.

## Get the code

Clone or download and unpack the repo.

Install local dependencies

```bash
cd your-module-name
npm install
```

## Installation

Once you publish you can install via npm and use it from TypeScript or JavaScript or from the command line.

### From code

Import and use it (in a TypeScript file):

```typescript
import { ExampleClass } from 'your-module-name';

var example = new ExampleClass();
console.log(example.returnsTrue());
```

Import and use it (from JavaScript):

```javascript
var yourModule = require('your-module-name');
var ExampleClass = yourModule.ExampleClass;

var example = new ExampleClass();
console.log(example.returnsTrue());
```

### From command line

You can also run your published module as a command line app.

For example, install it globally:

```bash
npm install -g your-module-name
```

Then run it:

```bash
your-module-name-cli [args]
```

## Compiling the TypeScript code

Open folder in Visual Studio Code and hit Ctrl+Shift+B

Or

```bash
cd your-module-name
npm run compile
```

## Debugging

- Open in Visual Studio Code.
- Select 'Main' debug configuration.
- Select the 'Test All' or 'Test Current' debug configuration to debug all tests or the current test file.
- Set your breakpoints.
- Hit F5 to run.

## Build and run

Compile the application:

```bash
npm run build
```

The run the compiled JavaScript:

```bash
npm start
```

## Running without building

Run the command line app directly:

```bash
npm start:dev
```

Run tests directly:

```bash
npm test
```

Or:

```bash
npm run test:watch
```

See package.json for more scripts!
