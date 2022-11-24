import React, { useEffect, useRef } from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import './Bar.css'
import { Link } from 'react-router-dom'
import { Navbar, Nav, NavDropdown } from 'react-bootstrap'
export default function Bar(props) {
	const sliders = useRef()
	window.addEventListener('scroll', function () {
		if (data) {
			sliders.current.style.display = 'none'
		} else {
			sliders.current.style.display = 'block'
		}
	})
	useEffect(() => {
		console.log('localstorage', localStorage.getItem('dis'))
	}, [localStorage.getItem('dis')])

	let data = props.data
	console.log('props props props', data)

	return (
		<div
			ref={sliders}
			style={{
				display: 'block',
				position: 'sticky',
				top: 0,

				whiteSpace: 'nowrap',
				zIndex: 40,
			}}
		>
			<div>
				<div className="col-md-12">
					<Navbar
						bg="dark"
						variant="dark"
						expand="lg"
						style={{
							top: 0,
							whiteSpace: 'nowrap',
							color: 'black',
							zIndex: 10,
							paddingBottom: '1%',
						}}
						className="shadow fullbar"
					>
						<Navbar.Brand>
							<img
								src={require('../Assets/carlogo.png')}
								style={{
									height: '3em',
									width: '4em',
									marginLeft: '30%',
								}}
							/>
						</Navbar.Brand>
						<button type="button" className="get">
							Get App
						</button>{' '}
						<Navbar.Toggle
							onClick={() => {
								sliders.current.classList.toggle('slide')
								// sliders.current.classList.remove('navb')

								console.log('slideslideslideslideslideslide')
							}}
						/>
						<Nav
							className="ms-auto nave"
							style={{
								marginRight: '20%',
								marginTop: '3px',
							}}
						>
							<span className="start">
								<Nav.Link href="#home" className="link">
									Home
								</Nav.Link>
								<Nav.Link href="#about-us" className="link">
									About Us
								</Nav.Link>

								<Nav.Link href="#animation" className="link">
									Our Services
								</Nav.Link>
								<Nav.Link className="link" href="#reason">
									Reason
								</Nav.Link>
							</span>
							<span style={{ marginLeft: '80%' }}>
								<button type="button" className="try">
									Try App
								</button>
							</span>
						</Nav>
					</Navbar>
					<Nav
						className=" navb "
						style={{
							width: '100%',

							color: 'white',
						}}
					>
						<div className="start">
							<Nav.Link
								href="#home"
								className="link1"
								style={{ fontSize: '0.8rem' }}
							>
								Home
							</Nav.Link>
							<Nav.Link
								href="#about-us"
								className="link1"
								style={{ fontSize: '0.8rem' }}
							>
								About Us
							</Nav.Link>

							<Nav.Link
								href="#animation"
								className="link1"
								style={{ fontSize: '0.8rem' }}
							>
								Our Services
							</Nav.Link>
							<Nav.Link
								className="link1"
								href="#reason"
								style={{ fontSize: '0.8rem' }}
							>
								Reason
							</Nav.Link>
							<div></div>
						</div>
					</Nav>
					<br />
				</div>
			</div>
		</div>
	)
}
