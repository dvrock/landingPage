import React, { useState, useEffect, useRef } from 'react'
import {
	useViewportScroll,
	motion,
	useTransform,
	useMotionValue,
} from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Carousel, Row, Col } from 'react-bootstrap'
import './Bottom.css'
export default function Bottom() {
	let menus = 0
	const [classes, setClass] = useState(false)
	const slide13 = useRef()
	const slide14 = useRef()
	const slide15 = useRef()
	const menu1 = useRef()
	const menu2 = useRef()
	const menu3 = useRef()
	const menu4 = useRef()
	useEffect(() => {
		console.log(menu1)
		menu1.current.classList.add('div')
		menu2.current.classList.add('div')
	}, [])
	console.log(menu1)
	useEffect(() => {
		window.addEventListener('scroll', function () {
			console.log(slide13.current.getBoundingClientRect().top)

			if (slide13.current.getBoundingClientRect().top < 600) {
				console.log('animation slide14')
				slide13.current.classList.remove('part1')

				slide13.current.classList.add('slide14')
			}
			if (slide13.current.getBoundingClientRect().top < 300) {
				console.log('animation slide14')

				slide14.current.classList.remove('part1')
				slide15.current.classList.remove('part1')

				slide14.current.classList.add('slide11')
				slide15.current.classList.add('slide14')
			}
		})
	}, [])
	function show() {
		console.log(menus)
		if (menu1.current != undefined && menu2.current != undefined) {
			console.log('classes', classes)
			if (classes) {
				menus = 0
				setClass(false)
			}
			if (menus === 1) {
				menu1.current.classList.remove('div')
				console.log('class removed', menus)
				setClass(true)
			} else {
				menu1.current.classList.add('div')
			}
			if (menus === 2) {
				menu2.current.classList.remove('div')
				console.log('class removed', menus)
				setClass(true)
			} else {
				menu2.current.classList.add('div')
			}
		}
	}

	return (
		<div
			id="bottom"
			style={{
				textAlign: 'center',
				marginTop: '30%',
				zIndex: 400,
			}}
		>
			<span className="part1 padding1" ref={slide13}>
				<span style={{ color: 'red', width: '50%' }} className="info">
					Download the <span>App Now?</span>
				</span>
				<div
					ref={slide13}
					className="slideText2 padding"
					style={{
						width: '60%',

						marginLeft: '20%',
						marginRight: '20%',
						alignSelf: 'center',

						textAlign: 'center',
					}}
				>
					Lorem Ipsum is simply dummy text of the printing and
					typesetting industry. Lorem Ipsum has been the industry's
				</div>

				<span className="padding">
					<div
						className="button3"
						style={{
							alignSelf: 'center',
							justifyContent: 'center',
							display: 'flex',
							flexDirection: 'row',

							marginTop: '2%',
							marginBottom: '2%',
						}}
					>
						<img
							className="button2 "
							style={{
								backgroundColor: 'white',
								color: 'black',

								marginRight: '4px',
								whiteSpace: 'nowrap',
							}}
							src={require('../Assets/appstore.png')}
						/>
						<img
							className="button2"
							style={{
								backgroundColor: 'white',
								color: 'black',

								marginRight: '4px',
								whiteSpace: 'nowrap',
								fontSize: '2vw',
							}}
							src={require('../Assets/googleplay.png')}
						/>
					</div>
				</span>
			</span>
			<span className="part1" ref={slide14}>
				<div
					ref={slide14}
					className="scroll"
					style={{
						display: 'flex',
						flexDirection: 'row',
						marginLeft: '3%',
						overflowX: 'auto',
						marginRight: '3%',
						justifyContent: 'center',
					}}
				>
					<Row
						xl={11}
						lg={11}
						md={11}
						sm={11}
						style={{
							justifyContent: 'center',
						}}
					>
						<Col
							xl={9}
							lg={9}
							md={7}
							sm={7}
							style={{
								height: '250px',
							}}
						>
							<span
								style={{
									display: 'flex',

									flexDirection: 'row',
								}}
							>
								<span
									className="card4 slideText4"
									style={{
										display: 'flex',

										flexDirection: 'row',
									}}
								>
									<div
										style={{
											display: 'flex',

											flexDirection: 'column',
										}}
									>
										{' '}
										<img
											src={require('../Assets/sendmoney.png')}
										/>
									</div>
									<span
										style={{
											display: 'flex',

											flexDirection: 'column',
										}}
									>
										Customer Helpline
										<div className="">+111-111-111</div>
									</span>
								</span>
								<span
									className="card3 slideText4"
									style={{
										display: 'flex',

										flexDirection: 'row',
									}}
								>
									<div
										style={{
											display: 'flex',

											flexDirection: 'column',
										}}
									>
										{' '}
										<img
											className="pic1"
											src={require('../Assets/sendmoney.png')}
										/>
									</div>
									<span
										style={{
											display: 'flex',

											flexDirection: 'column',
										}}
									>
										Share Cash in minutes
										<div className="slideText4">
											Send Cash
										</div>
									</span>
								</span>{' '}
								<span
									className="card3 slideText4"
									style={{
										marginRight: '5%',

										display: 'flex',

										flexDirection: 'row',
									}}
								>
									<div
										style={{
											display: 'flex',

											flexDirection: 'column',
										}}
									>
										{' '}
										<img
											className="pic1"
											src={require('../Assets/sendmoney.png')}
										/>
									</div>
									<span
										style={{
											display: 'flex',

											flexDirection: 'column',
										}}
									>
										Share Cash in minutes
										<div className=" slideText4">
											Send Cash
										</div>
									</span>
								</span>
							</span>{' '}
						</Col>
					</Row>
				</div>
			</span>
			<span className="part1" ref={slide15}>
				<div className="bottom">
					<Row
						xl={9}
						lg={9}
						md={9}
						sm={9}
						style={{
							justifyContent: 'center',
							marginTop: '2%',
							overflowX: 'auto',
							marginBottom: '7%',
						}}
					>
						<Col
							xl={2}
							lg={2}
							md={4}
							sm={4}
							style={{
								textAlign: 'start',
								marginRight: '3%',
								marginLeft: '3%',
								border: '1px solid white',
							}}
							className="card12 slideText4"
						>
							<span
								style={{
									marginRight: '30%',

									display: 'flex',

									flexDirection: 'row',
								}}
							>
								<span
									style={{
										display: 'flex',

										flexDirection: 'column',
									}}
								>
									<div>
										<div
											style={{
												display: 'flex',
												width: '80%',
												marginRight: '20%',
												flexDirection: 'row',
											}}
										>
											<span>Download My Cash</span>
											<span className="plus">
												<div className="tab">
													<span
														onClick={() => {
															menus = 1
															show()
														}}
													>
														+
													</span>
												</div>
											</span>
										</div>
									</div>
									<div
										id="menu"
										// className="menu"
										ref={menu1}
									>
										<div style={{ marginTop: '5%' }}>
											Google Play Store
										</div>
										<div
											style={{
												marginTop: '5%',
												marginBottom: '5%',
											}}
										>
											App Store
										</div>
									</div>
								</span>
							</span>{' '}
						</Col>
						<Col
							xl={2}
							lg={2}
							md={4}
							sm={4}
							style={{
								overflowX: 'auto',
								marginRight: '3%',
								marginLeft: '3%',
								textAlign: 'start',
								border: '1px solid white',
							}}
							className="card22 slideText4"
						>
							<span
								style={{
									marginRight: '5%',

									display: 'flex',

									flexDirection: 'row',
								}}
							>
								<span
									style={{
										display: 'flex',

										flexDirection: 'column',
									}}
								>
									<div>
										<div
											style={{
												display: 'flex',

												flexDirection: 'row',
											}}
										>
											<span>Legal</span>
											<span
												className="plus"
												onClick={() => {
													menus = 2
													show()
												}}
											>
												+
											</span>
										</div>
									</div>
									<div ref={menu2}>
										<div style={{ marginTop: '5%' }}>
											Terms & Conditions
										</div>
										<div
											style={{
												marginTop: '5%',
												marginBottom: '5%',
											}}
										>
											Privacy Policy
										</div>
									</div>
								</span>
							</span>{' '}
						</Col>
					</Row>
				</div>
			</span>
		</div>
	)
}
