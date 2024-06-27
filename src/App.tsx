import { ServerRespond } from './DataStreamer';
import './App.css';
import { App } from './App.1';

/**
 * State declaration for <App />
 */
export interface IState {
  data: ServerRespond[],
  showGraph: boolean,
}

export default App;
