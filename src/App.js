import logo from './logo.svg';
import { useState } from 'react';
import './App.css';

const content = [
  [
    "React is extrmerly popular",
    "It makes buildinf complex, interactive UIs a breeze",
    "It's powerful & flexible",
    "It has a very active and versatile ecossytem"
  ],
  [
    "Components, JSX & Props",
    "State",
    "Hooks (e.g., useEffect()) ",
    "Dynamic rendering"
  ],
  [
    "Official web page (react.dev)",
    "Next.js (Fullstack framework)",
    "React Native (build native mobile apps with React"
  ],
  [
    "Vanilla JavaScript requires imperative programing",
    "Imperative Programming: You define all the steps needed to achieve a result",
    "React on the other hand embraces declarative programming",
    "With React, you define the goal and React figures out how to get there"
  ]
];
function App() {
  const [activeContentIndex, setActiveContentIndex] = useState(0);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <div id='tabs'>
          <menu>
            <button className={activeContentIndex === 0 ? "active" : "active"}
              onClick={() => setActiveContentIndex(0)}>
              Why React?
            </button>
            <button className={activeContentIndex === 1 ? "active" : "active"}
              onClick={() => setActiveContentIndex(1)}>
              Core Concepts
            </button>
            <button className={activeContentIndex === 2 ? "active" : "active"}
              onClick={() => setActiveContentIndex(2)}>
              Ecosystem
            </button>
            <button className={activeContentIndex === 3 ? "active" : "active"}
              onClick={() => setActiveContentIndex(3)}>
              React vs Vanilla JS
            </button>
          </menu>
          <div id='tab-content'>
            <ul>
              {content[activeContentIndex].map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
      </header>
    </div>
  );
}

export default App;
