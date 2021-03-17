import React from 'react';
import GlobalStyle from './components/GlobalStyle';
import Movie from './components/Movie'

class App extends React.Component {
  componentDidMount() {
    console.log('componentdidmount')
  }
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
    this.setState(({ number }) => ({
      number: number - 1
    }))
  }
  render() {
    console.log('render')
    return (
      <>
        <GlobalStyle />
        <h1>카운터</h1>
        <div>값: {this.state.number}</div>
        <button onClick={this.handleIncrease}>+</button>
        <button onClick={this.handleDecrease}>-</button>
        <Movie />
      </>
    )
  }
}

export default App;
