import React from 'react';
import GlobalStyle from './components/GlobalStyle';
import Movie from './components/Movie'

class App extends React.Component {
  componentDidMount() {
    console.log('componentdidmount')
  }
  render() {
    console.log('render')
    return (
      <>
        <GlobalStyle />
        <Movie />
      </>
    )
  }
}

export default App;
