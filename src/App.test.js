import ReactDOM from 'react-dom'
import SamurajJSApp from "./App";

test('renders learn react link', () => {
  const div = document.createElement('div')
  ReactDOM.render(<SamurajJSApp/>, div)
  ReactDOM.unmountComponentAtNode(div)

});
