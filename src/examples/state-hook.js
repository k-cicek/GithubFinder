import React, { useEffect, useState } from "react";
import ReactDom from "react-dom";

/* class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count:0
    }
  }

  componentDidMount() {
    console.log('componentDidMount')
  }

  componentDidUpdate() {
    console.log('componentDidUpdate')
  }

  render() {
    return <div>
      <p>Butona {this.state.count} kez tıkladınız</p>
      <button onClick={() => this.setState({count: this.state.count + 1})}>+1</button>
      
      </div>;
  }
} */

const App = (props) => {
  const [count, setCount] = useState(props.count);
  const [text, setText] = useState(props.text);

  //text
  useEffect(() => {
    console.log("text");
  }, [text]);

   //count
   useEffect(() => {
    console.log("count");

    localStorage.setItem('count', count )
  }, [count]);

  //componentDidMount, sadece component yüklendiğinde çalışmasını istersek kullanırız.
  useEffect(() => {
    console.log("componentDidMount");

    const countData = localStorage.getItem('count');

    if(countData) {
      setCount(Number(countData))
    }
  }, []);

  //componentDidMount, componentDidUpdate
  useEffect(() => {
    console.log("componentDidMount-componentDidUpdate");
  });

  return (
    <div>
      <p>Butona {count} kez tıkladınız.</p>
      <p>Girilen text: {text}</p>
      <button onClick={() => setCount(count + 1)}>+1</button>
      <button onClick={() => setCount(count - 1)}>-1</button>
      <button onClick={() => setCount(props.count)}>reset</button>
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
    </div>
  );
};
App.defaultProps = {
  count: 5,
  text: "hi",
};

/* function App(props) {
  return (
    <div className="div">function component </div>
  )
} */

ReactDom.render(<App />, document.getElementById("root"));
