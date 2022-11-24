import React, { useState, useEffect, useRef } from 'react'
import {
	useViewportScroll,
	motion,
	useTransform,
	useMotionValue,
} from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Carousel, Row, Col, Card } from 'react-bootstrap'
import './Reason.css'
export default function Reason() {
	const slide11 = useRef()
	const slide12 = useRef()
	useEffect(() => {
		window.addEventListener('scroll', function () {
			console.log(slide11.current.getBoundingClientRect().top)
			if (slide11.current.getBoundingClientRect().top < 350) {
				console.log('animation slide14')
				slide11.current.classList.remove('part1')
				slide12.current.classList.remove('part1')
				slide11.current.classList.add('slide14')
				slide12.current.classList.add('slide12')
			}
		})
	}, [])
	return (
		<span
			className="reason slideText2 "
			style={{
				textAlign: 'center',
				zIndex: 400,
			}}
		>
			<img
				className="mobileBottom"
				style={{
					width: '100vw',
					height: '10vw',
					zIndex: -4,

					backgroundColor: 'black',
				}}
				src={require('../Assets/zigzag.png')}
			/>
			<div id="reason" style={{ zIndex: -40 }}>
				<span className="part1 padding" ref={slide11}>
					<span className="info">Stil not Convinced?</span>
					<div
						className="slideText2 padding"
						style={{
							width: '60%',

							marginLeft: '20%',
							marginRight: '20%',
							marginBottom: '2%',
							textAlign: 'center',
							alignSelf: 'center',
							alignItems: 'center',
						}}
					>
						Custom MyCash brings to you state-of-the-art technology,
						security,speed and intelligent features that makw
						cashless payments easy for everyone
					</div>
				</span>
				<div>
					<div
						className="scroll"
						style={{
							display: 'flex',
							flexDirection: 'row',
							zIndex: -45,
							overflowX: 'auto',

							justifyContent: 'center',
						}}
					>
						<Row
							xl={10}
							lg={10}
							md={10}
							sm={10}
							className="part1 "
							ref={slide12}
							style={{
								justifyContent: 'center',
							}}
						>
							<Col
								xl={9}
								lg={9}
								md={7}
								sm={7}
								className="cardlast"
								style={{
									overflowX: 'auto',
									height: '400px',
								}}
							>
								<span
									style={{
										display: 'flex',

										flexDirection: 'row',
									}}
								>
									<span
										className="card2"
										style={{ marginRight: '5%' }}
									>
										<div>
											{' '}
											<img
												className="pic1"
												src={require('../Assets/sendmoney.png')}
											/>
										</div>
										<span>
											Share Cash in minutes
											<div className="cardText">
												Send Cash
											</div>
										</span>
									</span>
									<span
										className="card1"
										style={{ marginRight: '5%' }}
									>
										<div>
											{' '}
											<img
												className="pic1"
												src={require('../Assets/bill-payment.png')}
											/>
										</div>
										<span
											style={{
												display: 'flex',
												flexDirection: 'column',
											}}
										>
											No rush no line & payment made
											simple
											<div className="cardText">
												Pay your bills anywhere
											</div>
										</span>
									</span>
									<span className="card1">
										{' '}
										<div>
											{' '}
											<img
												className="pic1"
												src={require('../Assets/bill-payment.png')}
											/>
										</div>
										<span>
											{' '}
											Add credit on the spot
											<div className="cardText">
												{' '}
												Top Up instantly
											</div>
										</span>
									</span>
								</span>{' '}
							</Col>
						</Row>
					</div>
				</div>
			</div>
		</span>
	)
}
