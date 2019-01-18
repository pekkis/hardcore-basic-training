# Hardcore Basic Training

## Introduction

Welcome to my two-day hardcore Basics JavaScript Client + Server Workshop. It is _very important_
that you read and follow these instructions before the actual two training days.

## Installation

Start by forking / cloning this repository from Github.

If you don't know how to use Git, you should spend an hour to [learn the basics](https://guides.github.com/introduction/git-handbook/)!

If you really don't want to use / learn git, just download the repo.

## Human Requirements

- You are a developer.
- You have working knowledge on programming in general. It helps to have a basic understanding of JavaScript, HTML, CSS and the general principles of the web and web applications (client / server model, HTTP protocol etc).

## Computer Requirements

- MacOS and Linux are grade A citizens. This should work in Windows too, but the web isn't for Windows so results may vary. If it doesn't work, just use a Unix virtual machine!
- The current version of node.js (series 10 stable LTS for example). Might work on older / newer / other ones, but no guarantees!
- The [Yarn package manager](https://yarnpkg.com).
- An editor / IDE that supports all the good stuff. If you don't absolutely know better, please install [VSCode](https://code.visualstudio.com/). It's da best.
- Chrome (or Firefox) as a development browser.

### Browser extensions

Install these Chrome extensions, or similar ones for your browser of choice.

- [React dev tools](https://chrome.google.com/webstore/detail/react-developer-tools/fmkadmapgofadopljbjfkapdkoienihi)
- [Redux dev tools](https://chrome.google.com/webstore/detail/redux-devtools/lmhkpmbekcpmknklioeibfkpmmfibljd)

### VSCode packages

If you use VSCode, you must install at least the following extensions.

- ESLint
- Prettier - Code formatter
- EditorConfig for VS Code
- PostCSS syntax
- vscode-styled-components

## Howto

The software is divided into two subfolders. `client` has the client side
code. `server` contains a server side skeleton for our work with the server side stuff.

Commands are always run in either of these folders, not in the common
root folder of the project.

While preparing for the training session, you must follow the _development mode_ path
until you reach the situation in [this screenshot](https://www.dropbox.com/s/np9dsnil0p7jny7/Screenshot%202018-08-16%2014.07.12.png?dl=0).

## Development mode

### client

- `cd client`
- `yarn`
- `cp .env.example .env`
- `yarn run start`
  - open your browser and go to http://localhost:8888

You should get a nice welcoming message saying something like "Welcome to React training".

### server

- `cd server`
- `yarn`
- `yarn run start`

You should get just a repeating "hellurei" on the terminal screen.

## Build

### client

The app builds to `dist/` (client code) and `dist-server` (server side rendering) folder.

- `yarn run build`
