import FileUpload from './components/FileUpload'
import './App.css'

function App() {
  return (
    <div className="app">
      <header className="app-header">
        <h1>Neuron5Solutions - Week 3 Part 1</h1>
        <p>File/Image Upload with Backend Storage</p>
      </header>
      
      <main>
        <FileUpload />
      </main>

      <footer className="app-footer">
        <p>Built with React + Vite | Fiza Khan - Neuron5Solutions Internship</p>
      </footer>
    </div>
  )
}

export default App
