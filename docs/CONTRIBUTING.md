# Contributing to the project
**Table of Contents**
- [General](#general)
- [Requirements](#requirements)
- [JavaScript Contributions](#javascript)
- [NPM Modules / Dev dependencies](#dev-dependencies)
- - -
## General
Write access to the GitHub repository is restricted, so make a fork and clone
that. All work should be done on its own branch, named according to the issue
number (*e.g. `42` or `bug/23`*). When you are finished with your work, push your
feature branch to your fork, preserving branch name (*not to master*), and create
a pull request.

**Always pull from `upstream master` prior to sending pull-requests.**

## Requirements
- [Node/NPM](https://nodejs.org/en/)
- [Git](https://www.git-scm.com/download/)

## JavaScript
Due to Content-Security-Policy, use of `eval` and inline scripts are **prohibited**.
Further, this project uses ECMAScript 2015  [modules](http://exploringjs.com/es6/ch_modules.html),
so be sure to familiarize yourself with the syntax.

All JavaScript **MUST** pass Eslint according to the rules defined in `.eslintrc`
and have an extension of `.js`.

![JavaScript sample](https://i.imgur.com/Ac0fKZu.png)

## NPM
Although this is not intended as an NPM package, it does make use of eslint.

The following scripts are available:
- `test` which runs any configured tests (`eslint .`)

## Dev dependencies
- [eslint](https://eslint.org)
