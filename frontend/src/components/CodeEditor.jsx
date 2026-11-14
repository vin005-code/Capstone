import { useState } from 'react'
import Editor from '@monaco-editor/react'
import './CodeEditor.css'

function CodeEditor() {
  const [language, setLanguage] = useState('python')
  const [code, setCode] = useState('def twoSum(nums, target):\n    pass')

  return (
    <div className="code-editor">
      <div className="editor-toolbar">
  <select
    value={language}
    onChange={(e) => setLanguage(e.target.value)}
  >
    <option value="python">Python</option>
    <option value="javascript">JavaScript</option>
    <option value="cpp">C++</option>
    <option value="java">Java</option>
  </select>

  <div className="editor-actions">
    <button className="run-button">Run Code</button>
    <button className="submit-button">Submit</button>
  </div>
</div>

      <Editor
        height="500px"
        language={language}
        theme="vs-dark"
        value={code}
        onChange={(value) => setCode(value || '')}
        options={{
          minimap: { enabled: false },
          fontSize: 14,
          automaticLayout: true,
        }}
      />
    </div>
  )
}

export default CodeEditor