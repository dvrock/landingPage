import React, { useState, useEffect, useRef } from 'react'
import {
	useViewportScroll,
	motion,
	useTransform,
	useMotionValue,
} from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Carousel, Row, Col, Container } from 'react-bootstrap'
import './Info.css'
export default function Slide() {
	const slide4 = useRef()
	const slide7 = useRef()
	const slide8 = useRef()
	const slide9 = useRef()
	const slide10 = useRef()
	const slide5 = useRef()
	const slide6 = useRef()
	useEffect(() => {
		if (window.innerWidth > 1000) {
			slide10.current.classList.add('setSize1')
			slide9.current.classList.add('setSize2')
		} else {
			slide10.current.classList.remove('setSize1')
			slide9.current.classList.remove('setSize2')
		}
		window.addEventListener('scroll', function () {
			if (window.innerWidth > 1000) {
				slide10.current.classList.add('setSize1')

				slide7.current.classList.add('setSize2')
				slide8.current.classList.add('setSize1')
				slide9.current.classList.add('setSize3')
			} else {
				slide10.current.classList.remove('setSize1')
				slide9.current.classList.remove('setSize3')
				slide8.current.classList.remove('setSize1')
				slide7.current.classList.remove('setSize2')
			}
			console.log(slide4.current.getBoundingClientRect().top)
			if (slide4.current.getBoundingClientRect().top < 700) {
				slide4.current.classList.remove('part1')

				slide4.current.classList.add('slide14')
			}
			if (slide4.current.getBoundingClientRect().top < -250) {
				console.log('animation slide14')
				slide5.current.classList.remove('part1')
				slide6.current.classList.remove('part1')
				slide5.current.classList.add('slide11')
				slide6.current.classList.add('slide12')
			}
			if (slide4.current.getBoundingClientRect().top < -550) {
				console.log('animation slide14')
				slide7.current.classList.remove('part1')
				slide8.current.classList.remove('part1')
				slide7.current.classList.add('slide14')
				slide8.current.classList.add('slide12')
			}
			if (slide4.current.getBoundingClientRect().top < -1800) {
				console.log('animation slide14')
				slide9.current.classList.remove('part1')
				slide10.current.classList.remove('part1')
				slide9.current.classList.add('slide12')
				slide10.current.classList.add('slide14')
			}
		})
	}, [])
	const alignCenter = {
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center',
	}
	return (
		<span className="slideText2 component2 ">
			<img
				style={{ width: '100vw', height: '10vw', zIndex: -4 }}
				src={require('../Assets/zigzag.png')}
			/>

			<div
				className=" padding"
				id="about-us"
				style={{
					backgroundColor: 'rgba(255, 255, 255, 0.96)',
					color: 'black',
					textAlign: 'center',
					zIndex: 4,
				}}
			>
				<span className="part1" ref={slide4} style={{ zIndex: 10 }}>
					<span
						style={{
							color: 'red',
							alignSelf: 'center',
							marginLeft: '4%',
						}}
						className="cash"
					>
						What Make Us Work For You?
					</span>
					<div
						className="slideText2 work"
						style={{
							textAlign: 'center',
						}}
					>
						Lorem Ipsum is simply dummy text of the printing and
						typesetting industry. Lorem Ipsum has been the
						industry's standard dummy text ever since the 1500s,
						when an unknown printer took a galley of type and
						scrambled it to make a type specimen book. It has
						survived not only five centuries, but also the leap into
						electronic typesetting
					</div>
				</span>
				<Container fluid>
					<Row
						xl={5}
						lg={5}
						md={5}
						sm={5}
						style={{
							justifyContent: 'center',
							marginTop: '10px',
							zIndex: 8,
						}}
					>
						<Col
							xl={5}
							lg={5}
							md={12}
							sm={12}
							className="pic part1"
							style={{
								...alignCenter,
							}}
							ref={slide5}
						>
							<img
								className="mobile1"
								style={{
									...alignCenter,
									marginLeft: '10%',
									minWidth: '200px',
									alignSelf: 'center',
								}}
								src={require('../Assets/mobile1.jpg')}
							/>
						</Col>
						<Col
							ref={slide6}
							xl={3}
							lg={3}
							md={10}
							sm={10}
							className="col5 part1"
							style={{
								textAlign: 'start',

								marginTop: '11vw',
							}}
						>
							<span className="col4 slideText2">
								{' '}
								Manage your finances transparently
							</span>
							<span>
								<hr className="our" />
							</span>
							<div className="col3" style={{ color: 'red' }}>
								Convenient and Accessibility
							</div>
							<div className="our">
								Our Attractive yet simplified user interface
								makes it easier for users to perform and track
								their Transactions
							</div>
							<hr className="our" />
							<span className="col4">
								QR-enabled Teachnology
								<div
									className="col4"
									style={{
										marginTop: '10px',
										textAlign: 'start',
									}}
								>
									Privacy & Security
								</div>
							</span>
						</Col>
					</Row>

					<Row
						xl={12}
						lg={12}
						md={4}
						className="row3"
						sm={4}
						style={{
							justifyContent: 'center',
							marginTop: '50px',
							position: 'relative',
							zIndex: 5,
						}}
					>
						<Col
							xl={5}
							lg={5}
							md={10}
							sm={10}
							ref={slide7}
							className="part1"
							style={{
								...alignCenter,
								textAlign: 'start',

								marginTop: '11vw',
							}}
						>
							<span
								style={{
									color: 'red',
								}}
								className="info"
							>
								Transfer Your Cash Effortlessly
							</span>
							<div className="slideText3">
								Lorem Ipsum is simply dummy text of the printing
								and typesetting industry. Lorem Ipsum has been
								the industry's standard dummy text ever since
								the 1500s, when an unknown printer took a galley
								of type and scrambled it to make a type specimen
								book. It has survived not only five centuries,
								but also the leap into electronic typesetting,
								remaining essentially unchanged. It was
								popularised in the 1960s with the release of
								Letraset sheets containing Lorem Ipsum passages,
								and more recently with desktop publishing
								software like Aldus PageMaker including versions
								of Lorem Ipsum
							</div>
						</Col>
						<Col
							xl={5}
							lg={5}
							md={12}
							sm={12}
							ref={slide8}
							className="pic part1"
							style={{
								...alignCenter,
							}}
						>
							<img
								className="mobile2"
								style={{
									...alignCenter,

									minWidth: '200px',
									alignSelf: 'center',
								}}
								src={require('../Assets/mobile2.png')}
							/>
						</Col>
					</Row>

					<Row
						className="row3"
						xl={12}
						lg={12}
						md={4}
						sm={4}
						style={{
							position: 'relative',

							zIndex: 2,
							justifyContent: 'center',
						}}
					>
						<Col
							xl={5}
							lg={5}
							md={12}
							sm={12}
							ref={slide9}
							className="pic part1"
							style={{
								...alignCenter,
							}}
						>
							<img
								className="mobile1 pic5"
								style={{
									...alignCenter,

									minWidth: '200px',
									alignSelf: 'center',
								}}
								src={require('../Assets/bill-payments.png')}
							/>
						</Col>

						<Col
							xl={5}
							lg={5}
							md={10}
							sm={10}
							ref={slide10}
							className="part1"
							style={{
								...alignCenter,
								textAlign: 'start',

								marginTop: '11vw',
							}}
						>
							<span
								className="info"
								style={{
									color: 'red',
								}}
							>
								Pay your Bills from Anywhere
							</span>
							<div className="slideText3">
								Lorem Ipsum is simply dummy text of the printing
								and typesetting industry. Lorem Ipsum has been
								the industry's standard dummy text ever since
								the 1500s, when an unknown printer took a galley
								of type and scrambled it to make a type specimen
								book. It has survived not only five centuries,
								but also the leap into electronic typesetting,
								remaining essentially unchanged. It was
								popularised in the 1960s with the release of
								Letraset sheets containing Lorem Ipsum passages,
								and more recently with desktop publishing
								software like Aldus PageMaker including versions
								of Lorem Ipsum
							</div>
						</Col>
					</Row>
				</Container>
			</div>
		</span>
	)
}
