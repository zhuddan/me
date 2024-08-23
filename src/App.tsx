import ReactMarkdown from 'react-markdown'
import markdownContent from './me.md?raw'
import 'github-markdown-css/github-markdown.css'
import './reset.css'

function App() {
  return (
    <div className="container ">
      <ReactMarkdown
        className="markdown-body"
        components={{
          ul: ({ children }) => <ul className="list-disc">{children}</ul>,
          li: ({ children }) => <li className="mb-1">{children}</li>,
        }}
      >
        {markdownContent}
      </ReactMarkdown>
    </div>
  )
}

export default App
