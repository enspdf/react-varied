import useCounterStore from './hooks/useCounterStore'
import './App.css'

const Increment = () => {
  const { increment } = useCounterStore()

  return <button onClick={increment}>Increment</button>
}

const Decrement = () => {
  const { decrement } = useCounterStore()

  return <button onClick={decrement}>Decrement</button>
}

const Reset = () => {
  const { reset } = useCounterStore()

  return <button onClick={reset}>Reset</button>
}

const Count = () => {
  const { bears } = useCounterStore()

  return <h1 style={{ color: 'white' }}>{bears}</h1>
}

const TotalBears = () => {
  const store = useCounterStore()

  console.log({ store });

  return null
}

const AnotherComponent = () => {
  return <h1>Another component</h1>
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Count />
        <Increment />
        <Decrement />
        <AnotherComponent />
        <TotalBears />
        <Reset />
      </header>
    </div>
  )
}

export default App
