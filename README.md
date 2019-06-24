
# Quick start

## Install redux-modal in your-project
1. Run `yarn add https://github.com/HealthByRo/redux-modal`
1. `import { modalReducer } from 'redux-modal';`
1. Done!

## Contribution
1. Run `yarn global add getstorybook` to instal StoryBook.
1. Clone this repo using `git clone git@github.com:HealthByRo/redux-modal.git`
1. Run `cd redux-modal/`
1. Run `yarn` to install dependencies.
1. Run `yarn run storybook` to start StoryBook.
1. Run `yarn watch` to rebuild lib automatically on file change.

# Release
Follow the release process steps https://bitbucket.org/arabellatech/demo-react/wiki/Library_Release_Process

# Upgrading dependencies
1. Run `yarn`
1. Commit `package.json` and `yarn.lock` changes
1. Run `flow-typed install --overwrite`
1. Check if `yarn flow` returns any new errors, if not, commit `flow-typed/` changes
