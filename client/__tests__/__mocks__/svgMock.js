const React = require('react');
const SvgMock = ({ children, ...props }) => React.createElement('svg', props, children);

module.exports = {
    __esModule: true,
    default: SvgMock,
    ReactComponent: SvgMock,
};