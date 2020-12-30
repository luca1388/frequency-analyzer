import './App.css';
import Header from './components/Header/Header';
import Layout from './components/Layout/Layout';
import Message from './components/Message/Message';

function App() {
  return (
    <div className="App">
      <Header />
      <Layout>
        <h2>Insert your code here:</h2>
        <Message />
      </Layout>
    </div>
  );
}

export default App;
