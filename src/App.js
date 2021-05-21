import './styles/App.css';
import { isMobile } from 'react-device-detect';
import { Desktop } from './components/Desktop';
import { Mobile } from './components/Mobile';

function App() {
  return <div className="App">{renderApp()}</div>;
}

function renderApp() {
  if (isMobile) {
    return <Mobile />;
  } else {
    return <Desktop />;
  }
}

export default App;
