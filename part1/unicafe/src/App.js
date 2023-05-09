import { useState } from 'react'

const Button = ({ handleClick, text }) => (
  <button onClick={handleClick}>
    {text}
  </button>
)

const StatisticLine = ({ text, stat }) => <><td>{text}</td><td>{stat}</td></>

const Statistics = ({ counts, total }) => {
  const getAvg = () => total > 0 ?  (counts.good - counts.bad) / total : 'N/A'
  const getRatio = () => total > 0 ? 100 * counts.good  / total : 'N/A'
  
  if (counts.good === 0 && counts.neutral === 0 && counts.bad === 0) {
    return (
      <div>
        <p>No feedback given</p>
      </div>
    )
  } else {
    return (
      <div>
        <table>
          <tbody>
            <tr><StatisticLine text="good" stat={counts.good}></StatisticLine></tr>
            <tr><StatisticLine text="neutral" stat={counts.neutral}></StatisticLine></tr>
            <tr><StatisticLine text="bad" stat={counts.bad}></StatisticLine></tr>
            <tr><StatisticLine text="all" stat={total}></StatisticLine></tr>
            <tr><StatisticLine text="average" stat={getAvg()}></StatisticLine></tr>
            <tr><StatisticLine text="positive" stat={`${getRatio()} %`}></StatisticLine></tr>
          </tbody>
        </table>
      </div>
    )
  }
}

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [total, setTotal] = useState(0)

  const incrementTotal = () => {
    setTotal(total + 1)
  }

  const goodClick = () => {
    setGood(good + 1)
    incrementTotal()
  }

  const neutralClick = () => {
    setNeutral(neutral + 1)
    incrementTotal()
  }

  const badClick = () => {
    setBad(bad + 1)
    incrementTotal()
  }

  return (
    <div>
      <h1>give feedback</h1>
      <Button handleClick={() => goodClick()} text="good"></Button>
      <Button handleClick={() => neutralClick()} text="neutral"></Button>
      <Button handleClick={() => badClick()} text="bad"></Button>
      <h1>statistics</h1>
      <Statistics counts={{good, neutral, bad}} total={total}></Statistics>
    </div>
  )
}

export default App
