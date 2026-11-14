import ProblemDescription from '../components/ProblemDescription'
import CodeEditor from '../components/CodeEditor'
import OutputPanel from '../components/OutputPanel'
import './StudentWorkspace.css'

function StudentWorkspace() {
  return (
    <div className="workspace">
      <div className="workspace-left">
        <ProblemDescription />
      </div>

      <div className="workspace-right">
        <CodeEditor />
        <OutputPanel />
      </div>
    </div>
  )
}

export default StudentWorkspace
