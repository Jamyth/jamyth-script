# jamyth-script

A CLI tool for one-key setup [TypeScript](https://www.typescriptlang.org/), [React](https://reactjs.org/tutorial/tutorial.html), [Webpack](https://webpack.js.org/).

Feature Includes:

- Create a complete customizable [React](https://reactjs.org/tutorial/tutorial.html) Project with just a key.
- Support TypeScript, Scss.
- Save time configuring webpack settings.
- Easy to change `webpack.config.js` when needed.
- Currently freezed to webpack 4
- Path Alias support
- Easy Command to generate component and module

# Installation and Usage

The easiest way to use jamyth-script

```
yarn global add jamyth-script
```

After that, type the following to the console.

```
jamyth-script new my_awesome_project
```

Then the cli will automatically generate all the files needed.

File Structure will look like this

```
* my_awesome_project
|
+-- node_modules
+-- src
|   +-- asset
|   +-- component
|   +-- module
|   |   +-- main
|   |       +-- component
|   |       |   +-- Main.tsx
|   |       |   +-- index.scss
|   |       +-- index.ts
|   +-- util
|   +-- index.tsx
|
+-- static
|   +-- index.html
|
+-- package.json
+-- tsconfig.json
+-- webpack.config.js
+-- yarn.lock
```

## Generating Module / Component

In src folder, there will be two folder called component and module.
To keep the structure organized. we do not suggest directly added folder and file.

Instead, we suggest you to do the following

```
// First cd to your project directory, or the follow commands cannot
// execute properly.

jamyth-script g module home --state|-s --asset|-a

// --asset -> will generate an asset folder in the module
// --state -> will generate a type.ts for the interface and more

================================================

jamyth-script g component logo --asset|-a

// --asset -> will generate an asset folder in the component
```

when the installation complete, simply cd the project folder and

```
yarn start
```

#Commands
| Command | Description| Param Required |
|--- |--- |--- |
| new <project_name> | Generate a React Project | Yes |
| g <module\|component> < name > | Create module or component | Yes |

#Todos

- npm support
- react-router
- redux
- ~~path alias~~ -> v1.2.23
- non-typescript
- and more ...

#Licenses
MIT licensed. Copyright (c) Jamyth Luk 2020.
