import './App.css'
import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './components/Home'
import ProjectShow from './pages/ProjectShow'
import ProjectListing from './pages/ProjectListing'
import BugListing from './pages/BugListing'
import BugShow from './pages/BugShow'
import ProjectEdit from './components/ProjectEdit'
import BugCreation from './components/BugCreation'

const App = () => (
	<BrowserRouter>
		<Routes>
			<Route path='/' element={<Home />}/>
			<Route path='projects' element={<ProjectListing />}/>
			<Route path='/projects/:id' element={<ProjectShow />}/>
			<Route path='/projects/:id/edit' element={<ProjectEdit />}/>
			<Route path='/projects/:id/bugs' element={<BugListing />}/>
			<Route path='/projects/:id/bugs/:bug_id' element={<BugShow />}/>
			<Route path='/projects/:id/bugs/new' element={<BugCreation/>}/>
		</Routes>
	</BrowserRouter>
)

export default App
