import React, { useState, useEffect, useRef, useMemo } from 'react'
import {
	useViewportScroll,
	motion,
	useTransform,
	useMotionValue,
} from 'framer-motion'
import { useInView } from 'react-intersection-observer'

import './Scroll.css'
import Bar from './Bar'

export default function Scroll({ display, display1 }) {
	//check whether scrolling up or down

	const [store2, setStore2] = useState(0)

	const previousScroll = useRef(0)
	const currentScroll = useRef(0)

	// check whether delay occurs in boxes and circle animation

	let delayVal = true
	let val = true

	//store.current value when mobile comes to middle

	// const store = useRef(0)

	//store.current whether mobile comes in middle

	let status = 'scrolling down'
	let store = useRef(0)
	//check whether mobile animation removed after rotation occurs

	let classRemoved = true
	const body = useRef(null)
	const rot = useRef(null)
	const { scrollY } = useViewportScroll()
	let initialValue = 1
	//store.current.current the value of scroll so that mobile moves forward

	const [lastScroll, setScroll] = useState(0)

	//moves text up

	const y2 = useTransform(scrollY, [0, 0], [400, -600])
	const scroll = useRef()
	//states of the animation

	const [isActive, setActive] = useState(false)

	/* each  box translation */

	const [xBox1, setXBox1] = useState(0)
	const [xBox2, setXBox2] = useState(0)
	const [xBox3, setXBox3] = useState(0)
	const [xBox4, setXBox4] = useState(0)
	const [xBox5, setXBox5] = useState(0)
	const [xBox6, setXBox6] = useState(0)
	const [xBox7, setXBox7] = useState(0)
	const [xBox8, setXBox8] = useState(0)
	const [xBox9, setXBox9] = useState(0)
	const [xBox10, setXBox10] = useState(0)
	const [xBox11, setXBox11] = useState(0)
	const [xBox12, setXBox12] = useState(0)
	const [yBox1, setYBox1] = useState(0)
	const [yBox2, setYBox2] = useState(0)
	const [yBox4, setYBox4] = useState(0)
	const [yBox5, setYBox5] = useState(0)
	const [yBox8, setYBox8] = useState(0)
	const [yBox9, setYBox9] = useState(0)
	const [yBox10, setYBox10] = useState(0)
	const [yBox12, setYBox12] = useState(0)
	const [move, setMove] = useState(190)
	/*check display boxes or hide */
	let checkScroll = true
	const [dBox, setdBox] = useState(false)
	const [checkShow, setShow] = useState(true)

	/*delay of animation of circle behind mobile */

	const [delay, setDelay] = useState(0)

	function Removed(resolve) {
		console.log('function call function call function call function call')

		setXBox1('0')
		setYBox1('0')
		setXBox2('0')
		setYBox2('0')
		setXBox3('0')
		setXBox4('0')
		setYBox4('0')
		setXBox5('0')
		setYBox5('0')
		setXBox6('0')
		setXBox7('0')
		setXBox8('0')
		setYBox8('0')
		setXBox9('0')
		setYBox9('0')
		setXBox10('0')
		setYBox10('0')
		setXBox11('0')
		setYBox12('0')
		setXBox12('0')
		setDelay(0)

		classRemoved = true
	}

	//function to bring the animation of boxes back to its place

	let num = 0
	/*useEffect hook with scroll animation*/

	useEffect(() => {
		classRemoved = true
		body.current.classList.add('mobiles')
		scroll.current.style.display = 'block'
		/* scroll event */
		let topScroll = 0
		window.addEventListener('scroll', function () {
			let screen = scroll.current.getBoundingClientRect().top
			currentScroll.current =
				document.documentElement.scrollTop || document.body.scrollTop
			if (window.innerWidth > 900) {
				if (checkScroll) {
					topScroll = currentScroll.current * 1.45
				}
			}

			if (window.innerWidth < 900) {
				if (checkScroll) {
					topScroll = currentScroll.current * 1.69
				}
			}
			console.log('lastScroll', lastScroll)
			console.log('checkScroll', checkScroll)
			console.log('newScroll', currentScroll.current - topScroll)
			console.log('Screen', screen)
			console.log('previousScroll.current', previousScroll.current)
			console.log('currentScroll.current', currentScroll.current)
			console.log('topScroll', topScroll)
			console.log('delayVal', delayVal)
			console.log('val:', val)
			console.log('store.current.current', store.current)
			console.log('class removed', classRemoved)
			console.log('move', move)

			if (body != null) {
				console.log(
					'scroll scroll scroll scroll scroll',
					scroll.current.getBoundingClientRect().top
				)

				if (window.innerWidth > 900) {
					if (scroll.current.getBoundingClientRect().top < -300) {
						//show mobile
						rot.current.classList.remove('scroll')
						checkScroll = false
						display()
						console.log(
							'show scroll scroll scroll scroll scroll',
							scroll.current.getBoundingClientRect().top
						)
					}
					if (scroll.current.getBoundingClientRect().top < -8090) {
						console.log(
							'add scroll scroll scroll scroll scroll',
							scroll.current.getBoundingClientRect().top
						)
						rot.current.classList.add('scroll')
						display1()
					}
				}
				if (window.innerWidth < 900) {
					if (scroll.current.getBoundingClientRect().top < 120) {
						//show mobile
						rot.current.classList.remove('scroll')
						checkScroll = false

						console.log(
							'show scroll scroll scroll scroll scroll',
							scroll.current.getBoundingClientRect().top
						)
					}
					if (scroll.current.getBoundingClientRect().top < -4590) {
						console.log(
							'add scroll scroll scroll scroll scroll',
							scroll.current.getBoundingClientRect().top
						)
						rot.current.classList.add('scroll')
					}
				}
				if (scroll.current.getBoundingClientRect().top > -1800) {
					console.log(
						'add scroll scroll scroll scroll scroll',
						scroll.current.getBoundingClientRect().top
					)
					rot.current.classList.add('scroll')
					display1()
				}
			}

			// console.log('mobile show', screen)
			// console.log('mobile again show', window.innerWidth)
			if (lastScroll < 0) {
				Removed()
				if (body != null) {
					body.current.classList.add('set')
					body.current.classList.remove('r')
					body.current.classList.remove('msize2')
					body.current.classList.remove('r2')
					previousScroll.current = 0
					val = true
				}
			}
			if (currentScroll.current <= topScroll) {
				if (body != null) {
					body.current.classList.add('set')
					body.current.classList.remove('r')
					body.current.classList.remove('msize2')
					body.current.classList.remove('r2')
					previousScroll.current = 0
				}
			}
			if (body != null) {
				console.log(
					'body values',
					body.current.getBoundingClientRect().x,
					window.innerWidth / 2
				)
			}
			let scrollValue = currentScroll.current - topScroll
			/*set scrolling down until  mobile comes in middle*/

			// console.log(
			// 	'Scroll value Scroll value Scroll valueScroll value',
			// 	scrollValue
			// )
			if (scrollValue < 0) {
				setScroll(10)
			}

			if (status === 'scrolling down') {
				console.log('status is:', status)
				if (val === true) {
					let scrollValue =
						document.documentElement.scrollTop ||
						document.body.scrollTop - topScroll
					store.current = currentScroll.current - topScroll + 40
					setStore2(currentScroll.current - topScroll)
					if (scrollValue > 0) {
						setScroll(currentScroll.current - topScroll)
					}
					console.log('value true value true value true value true')
				}
			} else {
				console.log('status is:', status)

				//giving scroll value
				let scrollValue = currentScroll.current - topScroll
				console.log('store.current', store.current)
				let temp =
					document.documentElement.scrollTop ||
					document.body.scrollTop - topScroll

				console.log('temp temp temp', temp)
				if (temp <= store.current && temp <= store2) {
					console.log(
						'moving backmoving back moving backmoving backmoving backmoving back'
					)

					//hide boxes

					//hide circle

					if (temp > 0) {
						setScroll(currentScroll.current - topScroll)
					}

					status = 'scrolling down'
					val = true
					classRemoved = true
					setDelay(3)
				}
			}
			if (
				currentScroll.current > 0 &&
				previousScroll.current <= currentScroll.current
			) {
				// console.log('scrolling down scrolling down scrolling down')
				setShow(true)

				if (window.innerWidth > 1050) {
					// console.log('screen screen screen', screen)
					/*check whether mobiles comes in middle or not*/
					if (
						body.current.getBoundingClientRect().x + 245 >=
						window.innerWidth / 2
					) {
						/*animation of mobile rotation added*/
						status = 'scrolling up'
						if (classRemoved) {
							console.log(
								'animation added !#!@#!$@$!$!@$!@$!@!!$$!!#@!@'
							)
							// body.current.classList.add('rot')
							// body.current.classList.remove('r')

							body.current.classList.add('msize2')

							setActive(true)
							setdBox(true)

							setDelay(1)
							setXBox1('-350px')
							setYBox1('-210px')

							setXBox2('280px')
							setYBox2('-210px')

							setXBox3('-195px')

							setXBox4('-240px')
							setYBox4('-110px')

							setXBox5('175px')
							setYBox5('-110px')

							setXBox6('-370px')

							setXBox7('370px')

							setXBox8('-240px')
							setYBox8('180px')

							setXBox9('240px')
							setYBox9('180px')

							setXBox10('-350px')
							setYBox10('280px')

							setXBox11('320px')

							setXBox12('310px')
							setYBox12('295px')

							val = false
						}
					}
				}
				if (window.innerWidth < 900) {
					if (
						body.current.getBoundingClientRect().x + 55 >=
						window.innerWidth / 2
					) {
						if (classRemoved) {
							console.log(
								'animation added dbjjafkjadgbskjfasdjkbjbk'
							)
							//rotate mobile
							//rot class rotate mobile 90 degree
							// body.current.classList.add('rot')
							//r class will increase mobile size and 0 to 90 deg move
							// body.current.classList.remove('r')
							//msize2 decress mobile size and rotate from 90 to 0 deg

							body.current.classList.add('msize2')

							setActive(true)
							setdBox(true)
							status = 'scrolling up'

							setDelay(1)
							//circle shown if active true

							setXBox1('-30vw')
							setYBox1('-35vw')

							setXBox2('25vw')
							setYBox2('-28vw')

							setXBox3('-22vw')

							setXBox4('-22vw')
							setYBox4('-13vw')

							setXBox5('22vw')
							setYBox5('-13vw')

							setXBox6('-30vw')

							setXBox7('30vw')

							setXBox8('-22vw')
							setYBox8('13vw')

							setXBox9('22vw')
							setYBox9('13vw')

							setXBox10('-30vw')
							setYBox10('30vw')

							setXBox11('27vw')

							setXBox12('25vw')
							setYBox12('30vw')
						}
					}
				}
				if (window.innerWidth > 800 && window.innerWidth < 1050) {
					console.log('greator than 700')
					console.log('screen screen screen', screen)
					if (
						body.current.getBoundingClientRect().x + 205 >=
						window.innerWidth / 2
					) {
						if (delayVal) {
							if (classRemoved) {
								console.log('animation added 3653653636536365')
								// body.current.classList.add('rot')
								//make mobile big and rotate from 0 deg to 90 deg
								// body.current.classList.remove('r')
								body.current.classList.add('msize2')

								setDelay(1)
								status = 'scrolling up'

								setXBox1('-350px')
								setYBox1('-210px')

								setXBox2('280px')
								setYBox2('-210px')

								setXBox3('-195px')

								setXBox4('-240px')
								setYBox4('-110px')

								setXBox5('175px')
								setYBox5('-110px')

								setXBox6('-370px')

								setXBox7('370px')

								setXBox8('-240px')
								setYBox8('180px')

								setXBox9('240px')
								setYBox9('180px')

								setXBox10('-350px')
								setYBox10('280px')

								setXBox11('320px')

								setXBox12('310px')
								setYBox12('295px')

								setActive(true)

								val = false

								setdBox(true)

								console.log('active true')
							}
						}
					}
				}
				//onscrolling up currentScroll.current.current decrease to 1167 but because previous store.current the previous value it willstay 1200 so the else part run
				previousScroll.current = currentScroll.current - 3.8
			} else {
				console.log('scrolling up scrolling up scrolling up')
				body.current.classList.remove('msize2')
				body.current.classList.remove('set')
				if (checkShow) {
					body.current.classList.add('r2')
					setShow(false)
				}
				if (window.innerWidth > 900) {
					if (scroll.current.getBoundingClientRect().top > -5090) {
						var promise = new Promise(function (resolve, reject) {
							Removed(resolve)
							setdBox(false)
							setActive(false)
						})

						promise

							.then(() => {
								body.current.classList.remove('r2')
							})
							.then(() => {
								body.current.classList.add('r')
							})
							.then(() => {
								classRemoved = true
								val = true
								previousScroll.current = 0
								currentScroll.current = 0
							})

						console.log('promise promise promise ', promise)
						console
							.log(
								classRemoved,
								'fbakejgrfewgahgigiuagdgfwegaaffgi'
							)
							.catch((err) => {
								console.log(err)
							})
					}
				}
				if (window.innerWidth < 900) {
					console.log('goingback going back going back')
					if (scroll.current.getBoundingClientRect().top > -3490) {
						var promise = new Promise(function (resolve, reject) {
							Removed(resolve)
							setdBox(false)
							setActive(false)
						})

						promise
							.then(() => {
								val = true
							})
							.then(() => {
								body.current.classList.remove('r2')
							})
							.then(() => {
								body.current.classList.add('r')
								console.log('goingback going back going back')
							})
							.then(() => {
								classRemoved = true

								val = true
								previousScroll.current = 0
								currentScroll.current = 0
							})
						console
							.log('promise promise promise ', promise)

							.catch((err) => {
								console.log(err)
							})
					}
				}
			}
		})
	}, [])
	const [ref, inView, entry] = useInView({
		/* Optional options */
		threshold: 0.5,
		triggerOnce: false,
	})

	const variants = {
		visible: { opacity: 1, scale: 1, y: 0 },
		hidden: {
			opacity: 0,
			scale: 0.65,
			y: 50,
		},
	}

	return (
		<span id="animation">
			<span ref={scroll}>
				<span className="rapper">
					<span className="rapper1">
						<span style={{ justifyItems: 'center' }}>
							{/* mobile animation with circle */}

							<motion.div
								style={{
									zIndex: -4020,
									position: 'fixed',

									marginLeft: '10%',
									left: lastScroll,
								}}
								ref={rot}
								transition={{
									duration: 1,
									delay: 0.6,
									ease: 'easeInOut',
								}}
								animate={{
									zIndex: 2,
								}}
								className="scroll mobiletop"
							>
								{/* animations of circle */}

								<span style={{ transform: 'rotate(90deg)' }}>
									<motion.div
										style={{
											backgroundColor:
												'rgb(187, 250, 252)',
											borderRadius: 300,
											zIndex: -10,
										}}
										animate={{
											visibility: isActive
												? 'visible'
												: 'hidden',
										}}
										variants={variants}
										transition={{
											duration: 3,
											delay: delay,
											ease: 'easeOut',
										}}
										ref={ref}
										className="magic"
									/>
								</span>
								{/* mobile image */}

								<img
									ref={body}
									className="set"
									src={require('../Assets/mobiles.jpg')}
									style={{
										borderRadius: '10%',
										zIndex: 10,
									}}
								/>
								{/* boxes animations start */}

								<span className="boxes">
									<motion.div
										className="box1"
										transition={{
											duration: 0.5,
											delay: delay,
											ease: 'easeInOut',
										}}
										animate={{
											transform: `translatex(${xBox1}) translatey(${yBox1})`,
											visibility: dBox
												? 'visible'
												: 'hidden',
										}}
									>
										<span>box1</span>
									</motion.div>

									<motion.div
										className="box2"
										transition={{
											duration: 0.5,
											delay: delay,
											ease: 'easeInOut',
										}}
										animate={{
											transform: `translatex(${xBox2}) translatey(${yBox2})`,
											visibility: dBox
												? 'visible'
												: 'hidden',
										}}
									>
										box2
									</motion.div>
									<motion.div
										className="box3"
										transition={{
											duration: 0.5,
											delay: delay,
											ease: 'easeInOut',
										}}
										animate={{
											y: xBox3,
											visibility: dBox
												? 'visible'
												: 'hidden',
										}}
									>
										box3
									</motion.div>
									<motion.div
										className="box4"
										transition={{
											duration: 0.5,
											delay: delay,
											ease: 'easeInOut',
										}}
										animate={{
											transform: `translatex(${xBox4}) translatey(${yBox4})`,
											visibility: dBox
												? 'visible'
												: 'hidden',
										}}
									>
										box4
									</motion.div>
									<motion.div
										className="box5"
										transition={{
											duration: 0.5,
											delay: delay,
											ease: 'easeInOut',
										}}
										animate={{
											transform: `translatex(${xBox5}) translatey(${yBox5})`,
											visibility: dBox
												? 'visible'
												: 'hidden',
										}}
									>
										box5
									</motion.div>
									<motion.div
										className="box6"
										transition={{
											duration: 0.5,
											delay: delay,
											ease: 'easeInOut',
										}}
										animate={{
											x: xBox6,
											visibility: dBox
												? 'visible'
												: 'hidden',
										}}
									>
										box6
									</motion.div>
									<motion.div
										className="box7"
										transition={{
											duration: 0.5,
											delay: delay,
											ease: 'easeInOut',
										}}
										animate={{
											x: xBox7,
											visibility: dBox
												? 'visible'
												: 'hidden',
										}}
									>
										Box7
									</motion.div>
									<motion.div
										className="box8"
										transition={{
											duration: 0.5,
											delay: delay,
											ease: 'easeInOut',
										}}
										animate={{
											transform: `translatex(${xBox8}) translatey(${yBox8})`,
											visibility: dBox
												? 'visible'
												: 'hidden',
										}}
									>
										Box8
									</motion.div>
									<motion.div
										className="box9"
										transition={{
											duration: 0.5,
											delay: delay,
											ease: 'easeInOut',
										}}
										animate={{
											transform: `translatex(${xBox9}) translatey(${yBox9})`,
											visibility: dBox
												? 'visible'
												: 'hidden',
										}}
									>
										box9
									</motion.div>
									<motion.div
										className="box10"
										transition={{
											duration: 0.5,
											delay: delay,
											ease: 'easeInOut',
										}}
										animate={{
											transform: `translatex(${xBox10}) translatey(${yBox10})`,
											visibility: dBox
												? 'visible'
												: 'hidden',
										}}
									>
										box10
									</motion.div>
									<motion.div
										className="box11"
										transition={{
											duration: 0.5,
											delay: delay,
											ease: 'easeInOut',
										}}
										animate={{
											y: xBox11,
											visibility: dBox
												? 'visible'
												: 'hidden',
										}}
									>
										box11
									</motion.div>
									<motion.div
										className="box12"
										transition={{
											duration: 0.5,
											delay: delay,
											ease: 'easeInOut',
										}}
										animate={{
											transform: `translatex(${xBox12}) translatey(${yBox12})`,
											visibility: dBox
												? 'visible'
												: 'hidden',
										}}
									>
										box12
									</motion.div>
								</span>
							</motion.div>
							{/* text animation */}

							<motion.div
								className="adjust2 slideText3"
								style={{
									// top: '720px',

									color: 'white',
									position: 'absolute',
									right: '20%',
								}}
							>
								<div style={{ width: '30vw' }}>
									Track your Habits and activities.All in one
									TimeLine.
									<br />
									<button
										style={{
											marginTop: '20%',
										}}
										type="button"
										className="button slideText3"
									>
										Get the app.
									</button>
								</div>
							</motion.div>
						</span>
					</span>
				</span>
			</span>
		</span>
	)
}
