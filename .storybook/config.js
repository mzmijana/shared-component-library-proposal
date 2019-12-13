import { configure } from '@storybook/html'

const stories = require.context('../src', true, /\.stories\.js$/)

const loadStories = () => {
    stories.keys().forEach(filename => stories(filename))
}

configure(loadStories, module)
