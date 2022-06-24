import React, { useState, useEffect, useRef } from 'react'
import {
	useViewportScroll,
	motion,
	useTransform,
	useMotionValue,
} from 'framer-motion'
import { useInView } from 'react-intersection-observer'

import './Scroll.css'

export default function Scroll() {
	//check whether scrolling up or down

	let previousScroll = 0
	let currentScroll = 0

	// check whether delay occurs in boxes and circle animation

	let delayVal = true
	let val = true

	//store value when mobile comes to middle

	let store = 0

	//store whether mobile comes in middle

	let status = 'scrolling down'

	//check whether mobile animation removed after rotation occurs

	let classRemoved = true
	const body = useRef(null)
	const rot = useRef(null)
	const { scrollY } = useViewportScroll()

	//store the value of scroll so that mobile moves forward

	const [lastScroll, setScroll] = useState(50)

	//moves text up

	const y2 = useTransform(scrollY, [0, 300], [0, -600])

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

	/*check display boxes or hide */

	const [dBox, setdBox] = useState(false)

	/*delay of animation of circle behind mobile */

	const [delay, setDelay] = useState(0)

	//function to bring the animation of boxes back to its place

	function Removed() {
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
		classRemoved = false
	}

	/*useEffect hook with scroll animation*/

	useEffect(() => {
		classRemoved = true
		body.current.classList.add('mobile')
		body.current.classList.remove('set')
		/* sc */
		window.addEventListener('scroll', function () {
			console.log('lastScroll', lastScroll)
			console.log('currentScroll', currentScroll)
			console.log('previousScroll', previousScroll)
			console.log('delayVal', delayVal)
			console.log('move:', val)
			console.log('store', store)
			console.log('class removed', classRemoved)

			/*set scrolling down until  mobile comes in middle*/

			if (status === 'scrolling down') {
				console.log('status is:', status)
				if (val === true) {
					let newScroll =
						document.documentElement.scrollTop ||
						document.body.scrollTop
					store = newScroll
					setScroll(newScroll)
					console.log('newScroll', newScroll)
				}
			} else {
				console.log('status is:', status)
				//giving scroll value
				let newScroll =
					document.documentElement.scrollTop ||
					document.body.scrollTop
				console.log('store', store)
				if (newScroll <= store) {
					console.log('moving back')
					if (!classRemoved) {
						classRemoved = true

						//animation of mobile rotation after coming back

						body.current.classList.add('set')

						body.current.classList.add('r')
					}

					setActive(false)

					setdBox(false)

					setScroll(newScroll)

					delayVal = true
				}
			}

			currentScroll =
				document.documentElement.scrollTop || document.body.scrollTop
			if (body != null) {
				console.log(
					body.current.getBoundingClientRect().x + 260,
					window.innerWidth / 2
				)
			}
			if (currentScroll === 0) {
				previousScroll = 0
			}
			if (currentScroll > 0 && previousScroll <= currentScroll) {
				console.log('scrolling down')
				body.current.classList.remove('set')

				if (window.innerWidth > 1050) {
					/*check whether mobiles comes in middle or not*/
					if (
						body.current.getBoundingClientRect().x + 260 >=
						window.innerWidth / 2
					) {
						setActive(true)
						setdBox(true)
						status = 'scrolling up'
						setDelay(1)

						/*animation of mobile rotation added*/

						if (delayVal) {
							if (classRemoved) {
								console.log('animation added ')
								body.current.classList.add('rot')
								body.current.classList.remove('r')
								body.current.classList.add('msize2')
							}
						}
						setXBox1('220px')
						setYBox1('-310px')

						setXBox2('220px')
						setYBox2('270px')

						setXBox3('250px')

						setXBox4('130px')
						setYBox4('190px')

						setXBox5('95px')
						setYBox5('-280px')

						setXBox6('280px')

						setXBox7('-370px')

						setXBox8('-150px')
						setYBox8('-280px')

						setXBox9('-145px')
						setYBox9('205px')

						setXBox10('-240px')
						setYBox10('-350px')

						setXBox11('-250px')

						setXBox12('-235px')
						setYBox12('280px')

						val = false
					}
				}
				if (window.innerWidth < 900) {
					if (
						body.current.getBoundingClientRect().x + 60 >=
						window.innerWidth / 2
					) {
						status = 'scrolling up'
						if (delayVal) {
							if (classRemoved) {
								console.log('animation added ')
								body.current.classList.add('rot')
								body.current.classList.remove('r')
								body.current.classList.add('msize2')
							}
						}
						setDelay(1)

						setActive(true)

						setXBox1('24vw')
						setYBox1('-39vw')

						setXBox2('25vw')
						setYBox2('30vw')

						setXBox3('25vw')

						setXBox4('12vw')
						setYBox4('25vw')

						setXBox5('12vw')
						setYBox5('-25vw')

						setXBox6('35vw')

						setXBox7('-35vw')

						setXBox8('-12vw')
						setYBox8('-25vw')

						setXBox9('-12vw')
						setYBox9('25vw')

						setXBox10('-25vw')
						setYBox10('-39vw')

						setXBox11('-27vw')

						setXBox12('-25vw')
						setYBox12('32vw')

						setdBox(true)

						val = false
					} else {
						status = 'scrolling down'
						console.log('status is scrolling down')
					}
				}
				if (window.innerWidth > 800 && window.innerWidth < 1050) {
					console.log('greator than 700')

					if (
						body.current.getBoundingClientRect().x + 200 >=
						window.innerWidth / 2
					) {
						if (delayVal) {
							if (classRemoved) {
								console.log('animation added ')
								body.current.classList.add('rot')
								body.current.classList.remove('r')
								body.current.classList.add('msize2')
							}
						}

						setDelay(1)
						status = 'scrolling up'

						setXBox1('220px')
						setYBox1('-310px')

						setXBox2('220px')
						setYBox2('270px')

						setXBox3('250px')

						setXBox4('130px')
						setYBox4('190px')

						setXBox5('95px')
						setYBox5('-280px')

						setXBox6('280px')

						setXBox7('-370px')

						setXBox8('-150px')
						setYBox8('-280px')

						setXBox9('-145px')
						setYBox9('205px')

						setXBox10('-240px')
						setYBox10('-350px')

						setXBox11('-230px')

						setXBox12('-235px')
						setYBox12('280px')

						setActive(true)

						val = false

						setdBox(true)

						console.log('active true')
					} else {
						status = 'scrolling down'
						console.log('status is scrolling down')
					}
				}
				previousScroll = currentScroll - 3.8
			} else {
				console.log('scrolling up')
				Removed()
				console.log('going back')
				setdBox(false)
				val = true
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
		<span>
			<span className="rapper">
				<span className="rapper1">
					<span style={{ justifyItems: 'center' }}>
						{/* mobile animation with circle */}

						<motion.div
							style={{
								position: 'fixed',
								marginTop: '-16.5%',
								marginLeft: '20%',
								left: lastScroll / 3,
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
						>
							{/* animations of circle */}

							<span style={{ transform: 'rotate(90deg)' }}>
								<motion.div
									style={{
										backgroundColor: 'magenta',
										borderRadius: 300,
									}}
									animate={{
										visibility: isActive
											? 'visible'
											: 'hidden',
									}}
									variants={variants}
									transition={{
										duration: 2,
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
								src={require('../Assets/mobile.jpg')}
								style={{
									borderRadius: '10%',

									transform: 'rotate(90deg)',
								}}
							/>
							{/* boxes animations start */}

							<span
								className="boxes"
								style={{
									transform: 'rotate(-90deg)',
								}}
							>
								<motion.div
									className="box1"
									transition={{
										duration: 0.5,
										delay: delay,
										ease: 'easeInOut',
									}}
									animate={{
										transform: `translatex(${xBox1}) translatey(${yBox1})`,
										visibility: dBox ? 'visible' : 'hidden',
									}}
								>
									box1
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
										visibility: dBox ? 'visible' : 'hidden',
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
										x: xBox3,
										visibility: dBox ? 'visible' : 'hidden',
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
										visibility: dBox ? 'visible' : 'hidden',
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
										visibility: dBox ? 'visible' : 'hidden',
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
										y: xBox6,
										visibility: dBox ? 'visible' : 'hidden',
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
										y: xBox7,
										visibility: dBox ? 'visible' : 'hidden',
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
										visibility: dBox ? 'visible' : 'hidden',
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
										visibility: dBox ? 'visible' : 'hidden',
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
										visibility: dBox ? 'visible' : 'hidden',
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
										x: xBox11,
										visibility: dBox ? 'visible' : 'hidden',
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
										visibility: dBox ? 'visible' : 'hidden',
									}}
								>
									box12
								</motion.div>
							</span>
						</motion.div>
						{/* text animation */}

						<motion.div
							style={{
								y: y2,
								fontSize: '2vw',
								color: 'white',
								position: 'absolute',
								right: '20%',
								marginTop: '-3.2%',
							}}
						>
							<div style={{ width: '20vw' }}>
								Track your Habits and activities.All in one
								TimeLine.
								<br />
								<button
									style={{
										marginTop: '10%',
										fontSize: '1.5vw',
									}}
									type="button"
									className="button"
								>
									Get the app.
								</button>
							</div>
						</motion.div>
					</span>
				</span>
			</span>
		</span>
	)
}
