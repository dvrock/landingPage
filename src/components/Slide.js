import React, { useState, useEffect, useRef } from 'react'
import {
	useViewportScroll,
	motion,
	useTransform,
	useMotionValue,
} from 'framer-motion'
import './Scroll.css'
import { useInView } from 'react-intersection-observer'
import { Carousel, Row, Col, Container } from 'react-bootstrap'
import './Slide.css'
export default function Slide() {
	const slide1 = useRef()
	const slide2 = useRef()
	const slide3 = useRef()
	const component1 = useRef()
	useEffect(() => {
		console.log(slide1)
		component1.current.classList.remove('component1')
		slide1.current.classList.add('slide11')
		slide2.current.classList.add('slide12')
		slide3.current.classList.add('slide11')
	}, [])
	const alignCenter = {
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center',
	}
	return (
		<span className="component1" ref={component1} style={{ zIndex: 400 }}>
			<Container fluid className="padding">
				<Row
					xl={12}
					lg={12}
					md={6}
					sm={6}
					className="row1"
					style={{
						justifyContent: 'center',
						marginTop: '10px',
						backgroundColor: 'black',
					}}
				>
					<Col
						ref={slide1}
						xl={4}
						lg={4}
						md={10}
						sm={10}
						style={{
							...alignCenter,

							marginTop: '11vw',
						}}
					>
						{' '}
						<span
							className="cash"
							style={{
								color: 'red',
							}}
						>
							MyCash My Way
						</span>
						<div
							className="slideText"
							style={{
								marginTop: '9%',
								marginLeft: '-10%',
							}}
						>
							Lorem Ipsum is simply dummy text of the printing and
							typesetting industry. Lorem Ipsum has been the
							industry's standard dummy text ever since the 1500s.
						</div>
						<div
							className="button4"
							style={{
								display: 'flex',
								flexDirection: 'row',
								marginTop: '10%',
							}}
						>
							<img
								className="button1"
								style={{
									backgroundColor: 'white',
									color: 'black',

									whiteSpace: 'nowrap',
								}}
								src={require('../Assets/appstore.png')}
							/>
							<img
								className="button1"
								style={{
									backgroundColor: 'white',
									color: 'black',

									whiteSpace: 'nowrap',
									fontSize: '2vw',
								}}
								src={require('../Assets/googleplay.png')}
							/>
						</div>
					</Col>

					<Col
						xl={5}
						lg={5}
						md={12}
						ref={slide2}
						sm={12}
						className="pic"
						style={{
							...alignCenter,

							right: 0,
						}}
					>
						<img
							className="mobile"
							style={{
								...alignCenter,

								position: 'relative',
								left: 0,

								top: 0,

								alignSelf: 'center',
							}}
							src={require('../Assets/mobile.png')}
						/>
					</Col>
				</Row>

				<Row
					xl={11}
					lg={11}
					md={11}
					sm={11}
					ref={slide3}
					className="padding"
					style={{
						marginTop: '40%',
						justifyContent: 'center',
						marginLeft: '15%',
					}}
				>
					<Col
						xl={2}
						lg={2}
						md={3}
						sm={3}
						className="slideText1"
						style={{ marginLeft: '-7%' }}
					>
						Now do your routine task conveniently
					</Col>
					<Col
						xl={9}
						lg={9}
						md={7}
						sm={7}
						style={{
							overflowX: 'auto',
							height: '400px',
						}}
					>
						<span
							style={{
								display: 'flex',
								width: '100%',

								flexDirection: 'row',
							}}
						>
							<span
								style={{
									marginRight: '10%',
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
									{' '}
									<img
										className="pic1"
										src={require('../Assets/sendmoney.png')}
									/>
								</span>
								<span
									className="col1"
									style={{
										display: 'flex',
										flexDirection: 'column',
									}}
								>
									Share Cash in minutes
									<div className="slideText1">Send Cash</div>
								</span>
							</span>
							<span
								style={{
									marginRight: '10%',
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
									{' '}
									<img
										className="pic1"
										src={require('../Assets/bill-payment.png')}
									/>
								</span>
								<span
									className="col1"
									style={{
										display: 'flex',
										flexDirection: 'column',
									}}
								>
									No rush no line & payment made simple
									<div className="slideText1">
										Pay your bills anywhere
									</div>
								</span>
							</span>
							<span
								style={{
									marginRight: '10%',
									display: 'flex',
									flexDirection: 'row',
								}}
							>
								{' '}
								<span
									style={{
										display: 'flex',
										flexDirection: 'column',
									}}
								>
									{' '}
									<img
										className="pic1"
										src={require('../Assets/bill-payment.png')}
									/>
								</span>
								<span className="col1">
									{' '}
									Add credit on the spot
									<div className="slideText1">
										{' '}
										Top Up instantly
									</div>
								</span>
							</span>
						</span>{' '}
					</Col>
				</Row>
			</Container>
		</span>
	)
}
