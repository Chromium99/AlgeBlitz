const React = require('react')

const MockTamaguiProvider = ({ children }) => React.createElement(React.Fragment, null, children)
const MockStyled = (component) => component

module.exports = {
  TamaguiProvider: MockTamaguiProvider,
  styled: MockStyled
}
