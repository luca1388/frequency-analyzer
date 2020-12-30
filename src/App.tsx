import { useCallback, useEffect, useState } from "react";
import "./App.css";
import Chart from "./Chart/Chart";
import Header from "./components/Header/Header";
import Layout from "./components/Layout/Layout";
import Message from "./components/Message/Message";
import TableResult from "./components/TableResult/TableResult";

export type Letters =
  | "a"
  | "b"
  | "c"
  | "d"
  | "e"
  | "f"
  | "g"
  | "h"
  | "i"
  | "j"
  | "k"
  | "l"
  | "m"
  | "n"
  | "o"
  | "p"
  | "q"
  | "r"
  | "s"
  | "t"
  | "u"
  | "v"
  | "w"
  | "x"
  | "y"
  | "z";

export type Alphabet = {
  [key in Letters]: number;
};

const initialFrequencies = {
  a: 0,
  b: 0,
  c: 0,
  d: 0,
  e: 0,
  f: 0,
  g: 0,
  h: 0,
  i: 0,
  j: 0,
  k: 0,
  l: 0,
  m: 0,
  n: 0,
  o: 0,
  p: 0,
  q: 0,
  r: 0,
  s: 0,
  t: 0,
  u: 0,
  v: 0,
  w: 0,
  x: 0,
  y: 0,
  z: 0,
};

function App() {
  const [frequencies, setFrequencies] = useState<Alphabet>(initialFrequencies);
  const [messageLength, setMessageLength] = useState<number>(0);

  const typeMessageHandler = useCallback((msg: string) => {
    let updatedFrequencies: Alphabet = { ...initialFrequencies };
    Array.from(msg).forEach((char) => {
      if (typeof updatedFrequencies[char as Letters] !== "undefined") {
        updatedFrequencies[char as Letters]++;
      }
    });
    setFrequencies(updatedFrequencies);
    setMessageLength(msg.length);
  }, []);

  useEffect(() => {
    console.log(messageLength);
  }, [messageLength]);

  return (
    <div className="App">
      <Header />
      <Layout>
        <h2>Insert your code here:</h2>
        <Message onType={typeMessageHandler} />
        <TableResult frequencies={frequencies} messageLength={messageLength} />
        <Chart frequencies={frequencies} length={messageLength} />
      </Layout>
    </div>
  );
}

export default App;
