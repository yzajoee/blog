import React, {Component} from 'react';
import Bhead from './components/header'
import Bwrap from './components/body'
import Bfoot from './components/footer'
class App extends Component {
  render() {
    return (
      <div class="bl-wrap">
        <Bhead></Bhead>
        <Bwrap></Bwrap>
        <Bfoot></Bfoot>
      </div>
    );
  }
}

export default App;
