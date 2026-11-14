import './OutputPanel.css'

function OutputPanel() {
  return (
    <div className="output-panel">
      <div className="output-header">
        <h3>Test Results</h3>
        <span>Not Run</span>
      </div>

      <div className="output-content">
        <p>Run your code to see the output here.</p>
      </div>
    </div>
  )
}

export default OutputPanel
