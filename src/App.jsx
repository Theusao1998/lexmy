import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-background">
        <Routes>
          <Route path="/" element={
            <div className="flex items-center justify-center min-h-screen">
              <div className="text-center">
                <h1 className="text-4xl font-bold mb-4">Base44 APP</h1>
                <p className="text-muted-foreground">Plataforma está funcionando!</p>
              </div>
            </div>
          } />
        </Routes>
      </div>
    </Router>
  )
}

export default App
