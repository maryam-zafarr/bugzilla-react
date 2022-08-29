import './App.css'
import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './components/Home'
import ProjectShow from './pages/ProjectShow'
import ProjectListing from './pages/ProjectListing'
import BugListing from './pages/BugListing'
import BugShow from './pages/BugShow'
import ProjectEdit from './components/ProjectEdit'
import BugCreation from './components/BugCreation'
import IncorrectRoute from './components/IncorrectRoute'

const App = () => (
	<BrowserRouter>
		<Navbar />
		<Routes>
			<Route path='projects' element={<ProjectListing />}/>
			<Route path='/projects/:id' element={<ProjectShow />}/>
			<Route path='/projects/:id/edit' element={<ProjectEdit />}/>
			<Route path='/projects/:id/bugs' element={<BugListing />}/>
			<Route path='/projects/:id/bugs/:bug_id' element={<BugShow />}/>
			<Route path='/projects/:id/bugs/new' element={<BugCreation/>}/>
			<Route exact path='/' element={<Home />}/>
			<Route path='*' element={<IncorrectRoute />} />
		</Routes>
	</BrowserRouter>
)

export default App
