import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Navigation from './components/Navigation'
import Login from './components/Login'
import Register from './components/Register'
import AddBook from './components/AddBook'
import HomePage from './components/HomePage'
import ViewBooks from './components/ViewBooks'

function App() {
  return (
    <>
      <Navigation />
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Login />} />
          <Route path='/r' element={<Register />} />
          <Route path='/a' element={<AddBook />} />
          <Route path='/h' element={<HomePage />} />
          <Route path='/v' element={<ViewBooks />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
