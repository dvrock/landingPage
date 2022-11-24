import logo from './logo.svg'
import './App.css'
import React, { useEffect, useRef, useState } from 'react'
import Scroll from './components/Scroll'
import Slide from './components/Slide'
import Bar from './components/Bar'
import Info from './components/Info'
import Reason from './components/Reason'
import Bottom from './components/Bottom'
import './App.css'
import { useSearchParams } from 'react-router-dom'
import { Fade } from 'react-bootstrap'
function App() {
	const vis = useRef()

	let dis = false
	const [update, setUpdate] = useState(false)
	useEffect(() => {
		console.log('bar', dis)
		setUpdate(1)
	}, [dis])

	// console.log('bar', dis)
	return (
		<div style={{ backgroundColor: 'black' }}>
			<span>
				<Bar data={update} />
			</span>
			<span className="bodyMargin">
				<Slide />
				<Info />

				<Scroll
					display={() => {
						dis = true

						setUpdate(true)

						console.log('bared bared bared bared bared ', dis)
					}}
					display1={() => {
						setUpdate(false)
						console.log('bars bars bars bars bars ', dis)
					}}
				/>
				<Reason style={{ zIndex: -40 }} />
				<Bottom style={{ zIndex: -50 }} />
			</span>
		</div>
	)
}

export default App
