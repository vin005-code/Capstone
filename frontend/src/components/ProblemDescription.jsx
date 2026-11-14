import './ProblemDescription.css'
function ProblemDescription() {
  return (
    <div className="problem-description">
      <h2>Two Sum</h2>

      <div className="problem-meta">
        <span className="easy">Easy</span>
        <span>Array</span>
        <span>Hash Table</span>
      </div>

      <h3>Problem</h3>

      <p>
        Given an array of integers nums and an integer target,
        return the indices of the two numbers such that they add
        up to target.
      </p>

      <p>
        You may assume that each input has exactly one solution,
        and you may not use the same element twice.
      </p>

      <h3>Example 1</h3>

      <pre>
{`Input: nums = [2,7,11,15], target = 9
Output: [0,1]
Explanation: nums[0] + nums[1] == 9`}
      </pre>

      <h3>Example 2</h3>

      <pre>
{`Input: nums = [3,2,4], target = 6
Output: [1,2]`}
      </pre>

      <h3>Constraints</h3>

      <ul>
        <li>2 ≤ nums.length ≤ 10⁴</li>
        <li>-10⁹ ≤ nums[i] ≤ 10⁹</li>
        <li>-10⁹ ≤ target ≤ 10⁹</li>
        <li>Only one valid answer exists.</li>
      </ul>
    </div>
  )
}

export default ProblemDescription