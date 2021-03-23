import React from 'react';
import GlobalStyle from './components/GlobalStyle';
import Movie from './components/Movie'

class App extends React.Component {
  state = {
    number: 0
  }

  handleIncrease = () => {
    const { number } = this.state;
    this.setState({
      number: number + 1
    })
  }
  handleDecrease = () => {
    const { number } = this.state;
    this.setState({
      number: number - 1
    })
  }
  render() {
    console.log('render')
    const { number } = this.state;
    return (
      <>
        <GlobalStyle />
        <div>값: {number}</div>
        <button onClick={this.handleIncrease}>+</button>
        <button onClick={this.handleDecrease}>-</button>
        <Movie name="react"/>
      </>
    )
  }
}

export default App;
