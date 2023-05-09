import { useState } from 'react'

const Button = ({ handleClick, text }) => (
  <button onClick={handleClick}>
    {text}
  </button>
)

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
    'The only way to go fast, is to go well.'
  ]

  const [selected, setSelected] = useState(0)
  const [votes, setVotes] = useState(Array(anecdotes.length).fill(0))

  const nextAnecdoteBtnClick = () => {
    const currentSelection = selected
    const nextSelection = Math.floor(Math.random() * (anecdotes.length - 0))
    setSelected(nextSelection)
    console.log('selected: ', currentSelection, ' -> ', nextSelection)
  }

  const voteBtnClick = () => {
    const votesCopy = [...votes]
    votesCopy[selected] += 1
    console.log('votes is now ', votesCopy)
    setVotes(votesCopy)
  }

  const getBestAnecdoteIndex = () => {
    let bestIndex = 0
    let mostVotes = -1
    for (let i = 0; i < anecdotes.length; i++) {
      if (votes[i] > mostVotes) {
        bestIndex = i
        mostVotes = votes[i]
      }
    }
    return bestIndex
  }

  return (
    <div>
      <h1>Anectode of the day</h1>
      <p>{anecdotes[selected]}</p>
      <p>has {votes[selected]} votes</p>
      <Button handleClick={voteBtnClick} text="vote"></Button>
      <Button handleClick={() => nextAnecdoteBtnClick()} text="next anecdote"></Button>
      <h1>Anectode with most votes</h1>
      <p>{anecdotes[getBestAnecdoteIndex()]}</p>
      <p>has {votes[getBestAnecdoteIndex()]} votes</p>
    </div>
  )
}

export default App
