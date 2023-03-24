import CounterView from './features/counter/CounterView';
import TodosView from './features/todos/TodosView';

function App() {
  return (
    <div className="App">
      <CounterView />
      <hr />
      <TodosView />
    </div>
  );
}

export default App;
