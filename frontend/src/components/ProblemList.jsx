import { useState } from 'react'
import './ProblemList.css'

function ProblemList() {
  const [search, setSearch] = useState('')
  const [difficulty, setDifficulty] = useState('All')
  const [status, setStatus] = useState('All')

  const problems = [
    { id: 1, title: 'Two Sum', difficulty: 'Easy', status: 'Solved' },
    { id: 2, title: 'Reverse Linked List', difficulty: 'Medium', status: 'Unsolved' },
    { id: 3, title: 'Longest Substring', difficulty: 'Medium', status: 'Unsolved' },
    { id: 4, title: 'Median of Two Sorted Arrays', difficulty: 'Hard', status: 'Unsolved' },
  ]

const filteredProblems = problems.filter((problem) => {
  const matchesSearch = problem.title.toLowerCase().includes(search.toLowerCase())

  const matchesDifficulty =
    difficulty === 'All' || problem.difficulty === difficulty

  const matchesStatus =
    status === 'All' || problem.status === status

  return matchesSearch && matchesDifficulty && matchesStatus
})

  return (
    <div className="problem-section">
      <h2>Problems</h2>

      <div className="problem-filters">
        <input
          type="text"
          placeholder="Search problems..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        <select
          value={difficulty}
          onChange={(e) => setDifficulty(e.target.value)}
        >
          <option value="All">All Difficulties</option>
          <option value="Easy">Easy</option>
          <option value="Medium">Medium</option>
          <option value="Hard">Hard</option>
        </select>
        <select
  value={status}
  onChange={(e) => setStatus(e.target.value)}
>
  <option value="All">All Status</option>
  <option value="Solved">Solved</option>
  <option value="Unsolved">Unsolved</option>
</select>
      </div>

      {filteredProblems.map((problem) => (
        <div className="problem-row" key={problem.id}>
          <span className="problem-title">{problem.title}</span>
          <span className={problem.difficulty.toLowerCase()}>{problem.difficulty}</span>
          <span className={problem.status.toLowerCase()}>{problem.status}</span>
        </div>
      ))}

      {filteredProblems.length === 0 && <p>No problems found.</p>}
    </div>
  )
}

export default ProblemList