# React Playground - Demo App

Bootstrapped using [base-setup](https://github.com/emptymusings/Miscellaneous/tree/main/react-playground/base-setup)

## Demo App

This is just a playground set up to explore React customizations and offer a playground. It may be able to be bootstrapped to launch other effors.

It uses **webpack 5**, **babel**, **react-router 6**, **mui 5**, **eslint**, **prettier**, **husky**.

## Prettier Git Hooks - Husky

### Subdirectory Based Projects
If a project is in a subdirectory, the path in the base .husky/pre-commit file will need to be changed to the project's path *relative to the base `git` directory*.  This can be done by replacing the line with the value in the braces below **and the braces** (`cd` command) with the appropriate path relative to where your `.git` directory resides.

Also note: if you're running this in Linux, you'll need to use the `chmod` command to make the `pre-commit` file executable.

```
#!/bin/sh
. "$(dirname "$0")/_/husky.sh"
cd ./{path-to-your-project-directory} && npx lint-staged 

```

### Main Project in Base Directory
If you're project is in the same base directory as your `.git` directory, you may be able to just remove the `pre-commit` script and simply follow the [prettier instructions here](https://prettier.io/docs/en/install.html#git-hooks).

## Resources
- [MUI 5](https://mui.com/)
- [ESLint](https://www.carlrippon.com/creating-react-app-with-typescript-eslint-with-webpack5/)
- [Prettier - Official](https://prettier.io/docs/en/install.html)
- [Git Hooks via husky *in a subdirectory*](https://scottsauber.com/2021/06/01/using-husky-git-hooks-and-lint-staged-with-nested-folders/)
