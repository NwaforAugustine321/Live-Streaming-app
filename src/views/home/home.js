import img1 from '../../img/card/1.png';
import img2 from '../../img/card/2.png';
import img3 from '../../img/card/3.png';
import img4 from '../../img/card/4.png';
import img5 from '../../img/card/5.png';
import img6 from '../../img/card/6.png';
import img7 from '../../img/card/7.png';
import img8 from '../../img/card/8.png';
import img9 from '../../img/card/9.png';
import img10 from '../../img/card/10.png';
import img11 from '../../img/card/11.png';
import img12 from '../../img/card/12.png';
import img13 from '../../img/card/13.png';
import img14 from '../../img/card/14.png';
import img15 from '../../img/card/15.png';
import img16 from '../../img/card/16.png';
import img17 from '../../img/card/17.png';
import img18 from '../../img/card/18.png';
import React, { useEffect } from 'react';
import {Subscriptions} from '../../component';
const Home = () => {
	useEffect(() => {
		
	});
	return (
		<div>
			<div className='home home--static'>
				<div className='home__carousel owl-carousel' id='flixtv-hero'>
					<div className='home__card'>
						<a href='details.html'>
							<img src='img/home/1.jpg' alt='' />
						</a>
						<div>
							<h2>Money Plane</h2>
							<ul>
								<li>Free</li>
								<li>Action</li>
								<li>2021</li>
							</ul>
						</div>
						<button className='home__add' type='button'>
							<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'>
								<path d='M16,2H8A3,3,0,0,0,5,5V21a1,1,0,0,0,.5.87,1,1,0,0,0,1,0L12,18.69l5.5,3.18A1,1,0,0,0,18,22a1,1,0,0,0,.5-.13A1,1,0,0,0,19,21V5A3,3,0,0,0,16,2Zm1,17.27-4.5-2.6a1,1,0,0,0-1,0L7,19.27V5A1,1,0,0,1,8,4h8a1,1,0,0,1,1,1Z' />
							</svg>
						</button>
						<span className='home__rating'>
							<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'>
								<path d='M22,9.67A1,1,0,0,0,21.14,9l-5.69-.83L12.9,3a1,1,0,0,0-1.8,0L8.55,8.16,2.86,9a1,1,0,0,0-.81.68,1,1,0,0,0,.25,1l4.13,4-1,5.68A1,1,0,0,0,6.9,21.44L12,18.77l5.1,2.67a.93.93,0,0,0,.46.12,1,1,0,0,0,.59-.19,1,1,0,0,0,.4-1l-1-5.68,4.13-4A1,1,0,0,0,22,9.67Zm-6.15,4a1,1,0,0,0-.29.88l.72,4.2-3.76-2a1.06,1.06,0,0,0-.94,0l-3.76,2,.72-4.2a1,1,0,0,0-.29-.88l-3-3,4.21-.61a1,1,0,0,0,.76-.55L12,5.7l1.88,3.82a1,1,0,0,0,.76.55l4.21.61Z' />
							</svg>{' '}
							9.1
						</span>
					</div>
					<div className='home__card'>
						<a href='details.html'>
							<img src={img2} alt='' />
						</a>
						<div>
							<h2>The Art of Political</h2>
							<ul>
								<li>Free</li>
								<li>Documentary</li>
								<li>2019</li>
							</ul>
						</div>
						<button className='home__add' type='button'>
							<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'>
								<path d='M16,2H8A3,3,0,0,0,5,5V21a1,1,0,0,0,.5.87,1,1,0,0,0,1,0L12,18.69l5.5,3.18A1,1,0,0,0,18,22a1,1,0,0,0,.5-.13A1,1,0,0,0,19,21V5A3,3,0,0,0,16,2Zm1,17.27-4.5-2.6a1,1,0,0,0-1,0L7,19.27V5A1,1,0,0,1,8,4h8a1,1,0,0,1,1,1Z' />
							</svg>
						</button>
						<span className='home__rating'>
							<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'>
								<path d='M22,9.67A1,1,0,0,0,21.14,9l-5.69-.83L12.9,3a1,1,0,0,0-1.8,0L8.55,8.16,2.86,9a1,1,0,0,0-.81.68,1,1,0,0,0,.25,1l4.13,4-1,5.68A1,1,0,0,0,6.9,21.44L12,18.77l5.1,2.67a.93.93,0,0,0,.46.12,1,1,0,0,0,.59-.19,1,1,0,0,0,.4-1l-1-5.68,4.13-4A1,1,0,0,0,22,9.67Zm-6.15,4a1,1,0,0,0-.29.88l.72,4.2-3.76-2a1.06,1.06,0,0,0-.94,0l-3.76,2,.72-4.2a1,1,0,0,0-.29-.88l-3-3,4.21-.61a1,1,0,0,0,.76-.55L12,5.7l1.88,3.82a1,1,0,0,0,.76.55l4.21.61Z' />
							</svg>{' '}
							8.3
						</span>
					</div>
					<div className='home__card'>
						<a href='details.html'>
							<img src='img/home/3.jpg' alt='' />
						</a>
						<div>
							<h2>Antebellum</h2>
							<ul>
								<li>Free</li>
								<li>Horror</li>
								<li>2021</li>
							</ul>
						</div>
						<button className='home__add' type='button'>
							<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'>
								<path d='M16,2H8A3,3,0,0,0,5,5V21a1,1,0,0,0,.5.87,1,1,0,0,0,1,0L12,18.69l5.5,3.18A1,1,0,0,0,18,22a1,1,0,0,0,.5-.13A1,1,0,0,0,19,21V5A3,3,0,0,0,16,2Zm1,17.27-4.5-2.6a1,1,0,0,0-1,0L7,19.27V5A1,1,0,0,1,8,4h8a1,1,0,0,1,1,1Z' />
							</svg>
						</button>
						<span className='home__rating'>
							<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'>
								<path d='M22,9.67A1,1,0,0,0,21.14,9l-5.69-.83L12.9,3a1,1,0,0,0-1.8,0L8.55,8.16,2.86,9a1,1,0,0,0-.81.68,1,1,0,0,0,.25,1l4.13,4-1,5.68A1,1,0,0,0,6.9,21.44L12,18.77l5.1,2.67a.93.93,0,0,0,.46.12,1,1,0,0,0,.59-.19,1,1,0,0,0,.4-1l-1-5.68,4.13-4A1,1,0,0,0,22,9.67Zm-6.15,4a1,1,0,0,0-.29.88l.72,4.2-3.76-2a1.06,1.06,0,0,0-.94,0l-3.76,2,.72-4.2a1,1,0,0,0-.29-.88l-3-3,4.21-.61a1,1,0,0,0,.76-.55L12,5.7l1.88,3.82a1,1,0,0,0,.76.55l4.21.61Z' />
							</svg>{' '}
							7.9
						</span>
					</div>
					<div className='home__card'>
						<a href='details.html'>
							<img src='img/home/4.jpg' alt='' />
						</a>
						<div>
							<h2>Kids Next Door</h2>
							<ul>
								<li>Free</li>
								<li>Documentary</li>
								<li>2017</li>
							</ul>
						</div>
						<button className='home__add' type='button'>
							<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'>
								<path d='M16,2H8A3,3,0,0,0,5,5V21a1,1,0,0,0,.5.87,1,1,0,0,0,1,0L12,18.69l5.5,3.18A1,1,0,0,0,18,22a1,1,0,0,0,.5-.13A1,1,0,0,0,19,21V5A3,3,0,0,0,16,2Zm1,17.27-4.5-2.6a1,1,0,0,0-1,0L7,19.27V5A1,1,0,0,1,8,4h8a1,1,0,0,1,1,1Z' />
							</svg>
						</button>
						<span className='home__rating'>
							<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'>
								<path d='M22,9.67A1,1,0,0,0,21.14,9l-5.69-.83L12.9,3a1,1,0,0,0-1.8,0L8.55,8.16,2.86,9a1,1,0,0,0-.81.68,1,1,0,0,0,.25,1l4.13,4-1,5.68A1,1,0,0,0,6.9,21.44L12,18.77l5.1,2.67a.93.93,0,0,0,.46.12,1,1,0,0,0,.59-.19,1,1,0,0,0,.4-1l-1-5.68,4.13-4A1,1,0,0,0,22,9.67Zm-6.15,4a1,1,0,0,0-.29.88l.72,4.2-3.76-2a1.06,1.06,0,0,0-.94,0l-3.76,2,.72-4.2a1,1,0,0,0-.29-.88l-3-3,4.21-.61a1,1,0,0,0,.76-.55L12,5.7l1.88,3.82a1,1,0,0,0,.76.55l4.21.61Z' />
							</svg>{' '}
							8.4
						</span>
					</div>
					<div className='home__card'>
						<a href='details.html'>
							<img src='img/home/5.jpg' alt='' />
						</a>
						<div>
							<h2>The Empty Man</h2>
							<ul>
								<li>Free</li>
								<li>Horror</li>
								<li>2020</li>
							</ul>
						</div>
						<button className='home__add' type='button'>
							<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'>
								<path d='M16,2H8A3,3,0,0,0,5,5V21a1,1,0,0,0,.5.87,1,1,0,0,0,1,0L12,18.69l5.5,3.18A1,1,0,0,0,18,22a1,1,0,0,0,.5-.13A1,1,0,0,0,19,21V5A3,3,0,0,0,16,2Zm1,17.27-4.5-2.6a1,1,0,0,0-1,0L7,19.27V5A1,1,0,0,1,8,4h8a1,1,0,0,1,1,1Z' />
							</svg>
						</button>
						<span className='home__rating'>
							<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'>
								<path d='M22,9.67A1,1,0,0,0,21.14,9l-5.69-.83L12.9,3a1,1,0,0,0-1.8,0L8.55,8.16,2.86,9a1,1,0,0,0-.81.68,1,1,0,0,0,.25,1l4.13,4-1,5.68A1,1,0,0,0,6.9,21.44L12,18.77l5.1,2.67a.93.93,0,0,0,.46.12,1,1,0,0,0,.59-.19,1,1,0,0,0,.4-1l-1-5.68,4.13-4A1,1,0,0,0,22,9.67Zm-6.15,4a1,1,0,0,0-.29.88l.72,4.2-3.76-2a1.06,1.06,0,0,0-.94,0l-3.76,2,.72-4.2a1,1,0,0,0-.29-.88l-3-3,4.21-.61a1,1,0,0,0,.76-.55L12,5.7l1.88,3.82a1,1,0,0,0,.76.55l4.21.61Z' />
							</svg>{' '}
							8.4
						</span>
					</div>
					<div className='home__card'>
						<a href='details.html'>
							<img src='img/home/6.jpg' alt='' />
						</a>
						<div>
							<h2>Jungleland</h2>
							<ul>
								<li>Free</li>
								<li>Documentary</li>
								<li>2020</li>
							</ul>
						</div>
						<button className='home__add' type='button'>
							<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'>
								<path d='M16,2H8A3,3,0,0,0,5,5V21a1,1,0,0,0,.5.87,1,1,0,0,0,1,0L12,18.69l5.5,3.18A1,1,0,0,0,18,22a1,1,0,0,0,.5-.13A1,1,0,0,0,19,21V5A3,3,0,0,0,16,2Zm1,17.27-4.5-2.6a1,1,0,0,0-1,0L7,19.27V5A1,1,0,0,1,8,4h8a1,1,0,0,1,1,1Z' />
							</svg>
						</button>
						<span className='home__rating'>
							<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'>
								<path d='M22,9.67A1,1,0,0,0,21.14,9l-5.69-.83L12.9,3a1,1,0,0,0-1.8,0L8.55,8.16,2.86,9a1,1,0,0,0-.81.68,1,1,0,0,0,.25,1l4.13,4-1,5.68A1,1,0,0,0,6.9,21.44L12,18.77l5.1,2.67a.93.93,0,0,0,.46.12,1,1,0,0,0,.59-.19,1,1,0,0,0,.4-1l-1-5.68,4.13-4A1,1,0,0,0,22,9.67Zm-6.15,4a1,1,0,0,0-.29.88l.72,4.2-3.76-2a1.06,1.06,0,0,0-.94,0l-3.76,2,.72-4.2a1,1,0,0,0-.29-.88l-3-3,4.21-.61a1,1,0,0,0,.76-.55L12,5.7l1.88,3.82a1,1,0,0,0,.76.55l4.21.61Z' />
							</svg>{' '}
							9.1
						</span>
					</div>
					<div className='home__card'>
						<a href='details.html'>
							<img src='img/home/7.jpg' alt='' />
						</a>
						<div>
							<h2>Bad Impulse</h2>
							<ul>
								<li>Free</li>
								<li>History</li>
								<li>2017</li>
							</ul>
						</div>
						<button className='home__add' type='button'>
							<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'>
								<path d='M16,2H8A3,3,0,0,0,5,5V21a1,1,0,0,0,.5.87,1,1,0,0,0,1,0L12,18.69l5.5,3.18A1,1,0,0,0,18,22a1,1,0,0,0,.5-.13A1,1,0,0,0,19,21V5A3,3,0,0,0,16,2Zm1,17.27-4.5-2.6a1,1,0,0,0-1,0L7,19.27V5A1,1,0,0,1,8,4h8a1,1,0,0,1,1,1Z' />
							</svg>
						</button>
						<span className='home__rating'>
							<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'>
								<path d='M22,9.67A1,1,0,0,0,21.14,9l-5.69-.83L12.9,3a1,1,0,0,0-1.8,0L8.55,8.16,2.86,9a1,1,0,0,0-.81.68,1,1,0,0,0,.25,1l4.13,4-1,5.68A1,1,0,0,0,6.9,21.44L12,18.77l5.1,2.67a.93.93,0,0,0,.46.12,1,1,0,0,0,.59-.19,1,1,0,0,0,.4-1l-1-5.68,4.13-4A1,1,0,0,0,22,9.67Zm-6.15,4a1,1,0,0,0-.29.88l.72,4.2-3.76-2a1.06,1.06,0,0,0-.94,0l-3.76,2,.72-4.2a1,1,0,0,0-.29-.88l-3-3,4.21-.61a1,1,0,0,0,.76-.55L12,5.7l1.88,3.82a1,1,0,0,0,.76.55l4.21.61Z' />
							</svg>{' '}
							8.8
						</span>
					</div>
					<div className='home__card'>
						<a href='details.html'>
							<img src='img/home/8.jpg' alt='' />
						</a>
						<div>
							<h2>Tenet</h2>
							<ul>
								<li>Free</li>
								<li>Action</li>
								<li>2021</li>
							</ul>
						</div>
						<button className='home__add' type='button'>
							<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'>
								<path d='M16,2H8A3,3,0,0,0,5,5V21a1,1,0,0,0,.5.87,1,1,0,0,0,1,0L12,18.69l5.5,3.18A1,1,0,0,0,18,22a1,1,0,0,0,.5-.13A1,1,0,0,0,19,21V5A3,3,0,0,0,16,2Zm1,17.27-4.5-2.6a1,1,0,0,0-1,0L7,19.27V5A1,1,0,0,1,8,4h8a1,1,0,0,1,1,1Z' />
							</svg>
						</button>
						<span className='home__rating'>
							<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'>
								<path d='M22,9.67A1,1,0,0,0,21.14,9l-5.69-.83L12.9,3a1,1,0,0,0-1.8,0L8.55,8.16,2.86,9a1,1,0,0,0-.81.68,1,1,0,0,0,.25,1l4.13,4-1,5.68A1,1,0,0,0,6.9,21.44L12,18.77l5.1,2.67a.93.93,0,0,0,.46.12,1,1,0,0,0,.59-.19,1,1,0,0,0,.4-1l-1-5.68,4.13-4A1,1,0,0,0,22,9.67Zm-6.15,4a1,1,0,0,0-.29.88l.72,4.2-3.76-2a1.06,1.06,0,0,0-.94,0l-3.76,2,.72-4.2a1,1,0,0,0-.29-.88l-3-3,4.21-.61a1,1,0,0,0,.76-.55L12,5.7l1.88,3.82a1,1,0,0,0,.76.55l4.21.61Z' />
							</svg>{' '}
							7.6
						</span>
					</div>
				</div>
				<button className='home__nav home__nav--prev' data-nav='#flixtv-hero' type='button' />
				<button className='home__nav home__nav--next' data-nav='#flixtv-hero' type='button' />
			</div>
			{/* end home */}
			{/* catalog */}
			<div className='catalog'>
				<div className='container'>
					<div className='row'>
						<div className='col-12'>
							<div className='catalog__nav'>
								<div className='catalog__select-wrap'>
									<select className='catalog__select' name='genres'>
										<option value='All genres'>All genres</option>
										<option value='Action/Adventure'>Action/Adventure</option>
										<option value='Animals'>Animals</option>
										<option value='Animation'>Animation</option>
										<option value='Biography'>Biography</option>
										<option value='Comedy'>Comedy</option>
										<option value='Cooking'>Cooking</option>
										<option value='Dance'>Dance</option>
										<option value='Documentary'>Documentary</option>
										<option value='Drama'>Drama</option>
										<option value='Education'>Education</option>
										<option value='Entertainment'>Entertainment</option>
										<option value='Family'>Family</option>
										<option value='Fantasy'>Fantasy</option>
										<option value='History'>History</option>
										<option value='Horror'>Horror</option>
										<option value='Independent'>Independent</option>
										<option value='International'>International</option>
										<option value='Kids & Family'>Kids &amp; Family</option>
										<option value='Medical'>Medical</option>
										<option value='Military/War'>Military/War</option>
										<option value='Music'>Music</option>
										<option value='Mystery/Crime'>Mystery/Crime</option>
										<option value='Nature'>Nature</option>
										<option value='Paranormal'>Paranormal</option>
										<option value='Politics'>Politics</option>
										<option value='Racing'>Racing</option>
										<option value='Romance'>Romance</option>
										<option value='Sci-Fi/Horror'>Sci-Fi/Horror</option>
										<option value='Science'>Science</option>
										<option value='Science Fiction'>Science Fiction</option>
										<option value='Science/Nature'>Science/Nature</option>
										<option value='Travel'>Travel</option>
										<option value='Western'>Western</option>
									</select>
									<select className='catalog__select' name='years'>
										<option value='All the years'>All the years</option>
										<option value={1}>'50s</option>
										<option value={2}>'60s</option>
										<option value={3}>'70s</option>
										<option value={4}>'80s</option>
										<option value={5}>'90s</option>
										<option value={6}>2000-10</option>
										<option value={7}>2010-20</option>
										<option value={8}>2021</option>
									</select>
								</div>
								<div className='slider-radio'>
									<input type='radio' name='grade' id='featured' defaultChecked='checked' />
									<label htmlFor='featured'>Featured</label>
									<input type='radio' name='grade' id='popular' />
									<label htmlFor='popular'>Popular</label>
									<input type='radio' name='grade' id='newest' />
									<label htmlFor='newest'>Newest</label>
								</div>
							</div>
							<div className='row row--grid'>
								<div className='col-6 col-sm-4 col-lg-3 col-xl-2'>
									<div className='card'>
										<a href='details.html' className='card__cover'>
											<img src={img1} alt='' />
											<svg width={22} height={22} viewBox='0 0 22 22' fill='none' xmlns='http://www.w3.org/2000/svg'>
												<path
													fillRule='evenodd'
													clipRule='evenodd'
													d='M11 1C16.5228 1 21 5.47716 21 11C21 16.5228 16.5228 21 11 21C5.47716 21 1 16.5228 1 11C1 5.47716 5.47716 1 11 1Z'
													strokeLinecap='round'
													strokeLinejoin='round'
												/>
												<path
													fillRule='evenodd'
													clipRule='evenodd'
													d='M14.0501 11.4669C13.3211 12.2529 11.3371 13.5829 10.3221 14.0099C10.1601 14.0779 9.74711 14.2219 9.65811 14.2239C9.46911 14.2299 9.28711 14.1239 9.19911 13.9539C9.16511 13.8879 9.06511 13.4569 9.03311 13.2649C8.93811 12.6809 8.88911 11.7739 8.89011 10.8619C8.88911 9.90489 8.94211 8.95489 9.04811 8.37689C9.07611 8.22089 9.15811 7.86189 9.18211 7.80389C9.22711 7.69589 9.30911 7.61089 9.40811 7.55789C9.48411 7.51689 9.57111 7.49489 9.65811 7.49789C9.74711 7.49989 10.1091 7.62689 10.2331 7.67589C11.2111 8.05589 13.2801 9.43389 14.0401 10.2439C14.1081 10.3169 14.2951 10.5129 14.3261 10.5529C14.3971 10.6429 14.4321 10.7519 14.4321 10.8619C14.4321 10.9639 14.4011 11.0679 14.3371 11.1549C14.3041 11.1999 14.1131 11.3999 14.0501 11.4669Z'
													strokeLinecap='round'
													strokeLinejoin='round'
												/>
											</svg>
										</a>
										<button className='card__add' type='button'>
											<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'>
												<path d='M16,2H8A3,3,0,0,0,5,5V21a1,1,0,0,0,.5.87,1,1,0,0,0,1,0L12,18.69l5.5,3.18A1,1,0,0,0,18,22a1,1,0,0,0,.5-.13A1,1,0,0,0,19,21V5A3,3,0,0,0,16,2Zm1,17.27-4.5-2.6a1,1,0,0,0-1,0L7,19.27V5A1,1,0,0,1,8,4h8a1,1,0,0,1,1,1Z' />
											</svg>
										</button>
										<span className='card__rating'>
											<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'>
												<path d='M22,9.67A1,1,0,0,0,21.14,9l-5.69-.83L12.9,3a1,1,0,0,0-1.8,0L8.55,8.16,2.86,9a1,1,0,0,0-.81.68,1,1,0,0,0,.25,1l4.13,4-1,5.68A1,1,0,0,0,6.9,21.44L12,18.77l5.1,2.67a.93.93,0,0,0,.46.12,1,1,0,0,0,.59-.19,1,1,0,0,0,.4-1l-1-5.68,4.13-4A1,1,0,0,0,22,9.67Zm-6.15,4a1,1,0,0,0-.29.88l.72,4.2-3.76-2a1.06,1.06,0,0,0-.94,0l-3.76,2,.72-4.2a1,1,0,0,0-.29-.88l-3-3,4.21-.61a1,1,0,0,0,.76-.55L12,5.7l1.88,3.82a1,1,0,0,0,.76.55l4.21.61Z' />
											</svg>{' '}
											8.3
										</span>
										<h3 className='card__title'>
											<a href='details.html'>The Good Lord Bird</a>
										</h3>
										<ul className='card__list'>
											<li>Free</li>
											<li>Action</li>
											<li>2019</li>
										</ul>
									</div>
								</div>
								<div className='col-6 col-sm-4 col-lg-3 col-xl-2'>
									<div className='card'>
										<a href='details.html' className='card__cover'>
											<img src={img2} alt='' />
											<svg width={22} height={22} viewBox='0 0 22 22' fill='none' xmlns='http://www.w3.org/2000/svg'>
												<path
													fillRule='evenodd'
													clipRule='evenodd'
													d='M11 1C16.5228 1 21 5.47716 21 11C21 16.5228 16.5228 21 11 21C5.47716 21 1 16.5228 1 11C1 5.47716 5.47716 1 11 1Z'
													strokeLinecap='round'
													strokeLinejoin='round'
												/>
												<path
													fillRule='evenodd'
													clipRule='evenodd'
													d='M14.0501 11.4669C13.3211 12.2529 11.3371 13.5829 10.3221 14.0099C10.1601 14.0779 9.74711 14.2219 9.65811 14.2239C9.46911 14.2299 9.28711 14.1239 9.19911 13.9539C9.16511 13.8879 9.06511 13.4569 9.03311 13.2649C8.93811 12.6809 8.88911 11.7739 8.89011 10.8619C8.88911 9.90489 8.94211 8.95489 9.04811 8.37689C9.07611 8.22089 9.15811 7.86189 9.18211 7.80389C9.22711 7.69589 9.30911 7.61089 9.40811 7.55789C9.48411 7.51689 9.57111 7.49489 9.65811 7.49789C9.74711 7.49989 10.1091 7.62689 10.2331 7.67589C11.2111 8.05589 13.2801 9.43389 14.0401 10.2439C14.1081 10.3169 14.2951 10.5129 14.3261 10.5529C14.3971 10.6429 14.4321 10.7519 14.4321 10.8619C14.4321 10.9639 14.4011 11.0679 14.3371 11.1549C14.3041 11.1999 14.1131 11.3999 14.0501 11.4669Z'
													strokeLinecap='round'
													strokeLinejoin='round'
												/>
											</svg>
										</a>
										<button className='card__add' type='button'>
											<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'>
												<path d='M16,2H8A3,3,0,0,0,5,5V21a1,1,0,0,0,.5.87,1,1,0,0,0,1,0L12,18.69l5.5,3.18A1,1,0,0,0,18,22a1,1,0,0,0,.5-.13A1,1,0,0,0,19,21V5A3,3,0,0,0,16,2Zm1,17.27-4.5-2.6a1,1,0,0,0-1,0L7,19.27V5A1,1,0,0,1,8,4h8a1,1,0,0,1,1,1Z' />
											</svg>
										</button>
										<span className='card__rating'>
											<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'>
												<path d='M22,9.67A1,1,0,0,0,21.14,9l-5.69-.83L12.9,3a1,1,0,0,0-1.8,0L8.55,8.16,2.86,9a1,1,0,0,0-.81.68,1,1,0,0,0,.25,1l4.13,4-1,5.68A1,1,0,0,0,6.9,21.44L12,18.77l5.1,2.67a.93.93,0,0,0,.46.12,1,1,0,0,0,.59-.19,1,1,0,0,0,.4-1l-1-5.68,4.13-4A1,1,0,0,0,22,9.67Zm-6.15,4a1,1,0,0,0-.29.88l.72,4.2-3.76-2a1.06,1.06,0,0,0-.94,0l-3.76,2,.72-4.2a1,1,0,0,0-.29-.88l-3-3,4.21-.61a1,1,0,0,0,.76-.55L12,5.7l1.88,3.82a1,1,0,0,0,.76.55l4.21.61Z' />
											</svg>{' '}
											8.1
										</span>
										<h3 className='card__title'>
											<a href='details.html'>The Dictator</a>
										</h3>
										<ul className='card__list'>
											<li>Free</li>
											<li>Comedy</li>
											<li>2012</li>
										</ul>
									</div>
								</div>
								<div className='col-6 col-sm-4 col-lg-3 col-xl-2'>
									<div className='card'>
										<a href='details.html' className='card__cover'>
											<img src={img3} alt='' />
											<svg width={22} height={22} viewBox='0 0 22 22' fill='none' xmlns='http://www.w3.org/2000/svg'>
												<path
													fillRule='evenodd'
													clipRule='evenodd'
													d='M11 1C16.5228 1 21 5.47716 21 11C21 16.5228 16.5228 21 11 21C5.47716 21 1 16.5228 1 11C1 5.47716 5.47716 1 11 1Z'
													strokeLinecap='round'
													strokeLinejoin='round'
												/>
												<path
													fillRule='evenodd'
													clipRule='evenodd'
													d='M14.0501 11.4669C13.3211 12.2529 11.3371 13.5829 10.3221 14.0099C10.1601 14.0779 9.74711 14.2219 9.65811 14.2239C9.46911 14.2299 9.28711 14.1239 9.19911 13.9539C9.16511 13.8879 9.06511 13.4569 9.03311 13.2649C8.93811 12.6809 8.88911 11.7739 8.89011 10.8619C8.88911 9.90489 8.94211 8.95489 9.04811 8.37689C9.07611 8.22089 9.15811 7.86189 9.18211 7.80389C9.22711 7.69589 9.30911 7.61089 9.40811 7.55789C9.48411 7.51689 9.57111 7.49489 9.65811 7.49789C9.74711 7.49989 10.1091 7.62689 10.2331 7.67589C11.2111 8.05589 13.2801 9.43389 14.0401 10.2439C14.1081 10.3169 14.2951 10.5129 14.3261 10.5529C14.3971 10.6429 14.4321 10.7519 14.4321 10.8619C14.4321 10.9639 14.4011 11.0679 14.3371 11.1549C14.3041 11.1999 14.1131 11.3999 14.0501 11.4669Z'
													strokeLinecap='round'
													strokeLinejoin='round'
												/>
											</svg>
										</a>
										<button className='card__add' type='button'>
											<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'>
												<path d='M16,2H8A3,3,0,0,0,5,5V21a1,1,0,0,0,.5.87,1,1,0,0,0,1,0L12,18.69l5.5,3.18A1,1,0,0,0,18,22a1,1,0,0,0,.5-.13A1,1,0,0,0,19,21V5A3,3,0,0,0,16,2Zm1,17.27-4.5-2.6a1,1,0,0,0-1,0L7,19.27V5A1,1,0,0,1,8,4h8a1,1,0,0,1,1,1Z' />
											</svg>
										</button>
										<span className='card__rating'>
											<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'>
												<path d='M22,9.67A1,1,0,0,0,21.14,9l-5.69-.83L12.9,3a1,1,0,0,0-1.8,0L8.55,8.16,2.86,9a1,1,0,0,0-.81.68,1,1,0,0,0,.25,1l4.13,4-1,5.68A1,1,0,0,0,6.9,21.44L12,18.77l5.1,2.67a.93.93,0,0,0,.46.12,1,1,0,0,0,.59-.19,1,1,0,0,0,.4-1l-1-5.68,4.13-4A1,1,0,0,0,22,9.67Zm-6.15,4a1,1,0,0,0-.29.88l.72,4.2-3.76-2a1.06,1.06,0,0,0-.94,0l-3.76,2,.72-4.2a1,1,0,0,0-.29-.88l-3-3,4.21-.61a1,1,0,0,0,.76-.55L12,5.7l1.88,3.82a1,1,0,0,0,.76.55l4.21.61Z' />
											</svg>{' '}
											7.9
										</span>
										<h3 className='card__title'>
											<a href='details.html'>12 Years a Slave</a>
										</h3>
										<ul className='card__list'>
											<li>Free</li>
											<li>History</li>
											<li>2013</li>
										</ul>
									</div>
								</div>
								<div className='col-6 col-sm-4 col-lg-3 col-xl-2'>
									<div className='card'>
										<a href='details.html' className='card__cover'>
											<img src={img4} alt='' />
											<svg width={22} height={22} viewBox='0 0 22 22' fill='none' xmlns='http://www.w3.org/2000/svg'>
												<path
													fillRule='evenodd'
													clipRule='evenodd'
													d='M11 1C16.5228 1 21 5.47716 21 11C21 16.5228 16.5228 21 11 21C5.47716 21 1 16.5228 1 11C1 5.47716 5.47716 1 11 1Z'
													strokeLinecap='round'
													strokeLinejoin='round'
												/>
												<path
													fillRule='evenodd'
													clipRule='evenodd'
													d='M14.0501 11.4669C13.3211 12.2529 11.3371 13.5829 10.3221 14.0099C10.1601 14.0779 9.74711 14.2219 9.65811 14.2239C9.46911 14.2299 9.28711 14.1239 9.19911 13.9539C9.16511 13.8879 9.06511 13.4569 9.03311 13.2649C8.93811 12.6809 8.88911 11.7739 8.89011 10.8619C8.88911 9.90489 8.94211 8.95489 9.04811 8.37689C9.07611 8.22089 9.15811 7.86189 9.18211 7.80389C9.22711 7.69589 9.30911 7.61089 9.40811 7.55789C9.48411 7.51689 9.57111 7.49489 9.65811 7.49789C9.74711 7.49989 10.1091 7.62689 10.2331 7.67589C11.2111 8.05589 13.2801 9.43389 14.0401 10.2439C14.1081 10.3169 14.2951 10.5129 14.3261 10.5529C14.3971 10.6429 14.4321 10.7519 14.4321 10.8619C14.4321 10.9639 14.4011 11.0679 14.3371 11.1549C14.3041 11.1999 14.1131 11.3999 14.0501 11.4669Z'
													strokeLinecap='round'
													strokeLinejoin='round'
												/>
											</svg>
										</a>
										<button className='card__add' type='button'>
											<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'>
												<path d='M16,2H8A3,3,0,0,0,5,5V21a1,1,0,0,0,.5.87,1,1,0,0,0,1,0L12,18.69l5.5,3.18A1,1,0,0,0,18,22a1,1,0,0,0,.5-.13A1,1,0,0,0,19,21V5A3,3,0,0,0,16,2Zm1,17.27-4.5-2.6a1,1,0,0,0-1,0L7,19.27V5A1,1,0,0,1,8,4h8a1,1,0,0,1,1,1Z' />
											</svg>
										</button>
										<span className='card__rating'>
											<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'>
												<path d='M22,9.67A1,1,0,0,0,21.14,9l-5.69-.83L12.9,3a1,1,0,0,0-1.8,0L8.55,8.16,2.86,9a1,1,0,0,0-.81.68,1,1,0,0,0,.25,1l4.13,4-1,5.68A1,1,0,0,0,6.9,21.44L12,18.77l5.1,2.67a.93.93,0,0,0,.46.12,1,1,0,0,0,.59-.19,1,1,0,0,0,.4-1l-1-5.68,4.13-4A1,1,0,0,0,22,9.67Zm-6.15,4a1,1,0,0,0-.29.88l.72,4.2-3.76-2a1.06,1.06,0,0,0-.94,0l-3.76,2,.72-4.2a1,1,0,0,0-.29-.88l-3-3,4.21-.61a1,1,0,0,0,.76-.55L12,5.7l1.88,3.82a1,1,0,0,0,.76.55l4.21.61Z' />
											</svg>{' '}
											8.8
										</span>
										<h3 className='card__title'>
											<a href='details.html'>Get On Up</a>
										</h3>
										<ul className='card__list'>
											<li>Free</li>
											<li>Biography</li>
											<li>2014</li>
										</ul>
									</div>
								</div>
								<div className='col-6 col-sm-4 col-lg-3 col-xl-2'>
									<div className='card'>
										<a href='details.html' className='card__cover'>
											<img src={img5} alt='' />
											<svg width={22} height={22} viewBox='0 0 22 22' fill='none' xmlns='http://www.w3.org/2000/svg'>
												<path
													fillRule='evenodd'
													clipRule='evenodd'
													d='M11 1C16.5228 1 21 5.47716 21 11C21 16.5228 16.5228 21 11 21C5.47716 21 1 16.5228 1 11C1 5.47716 5.47716 1 11 1Z'
													strokeLinecap='round'
													strokeLinejoin='round'
												/>
												<path
													fillRule='evenodd'
													clipRule='evenodd'
													d='M14.0501 11.4669C13.3211 12.2529 11.3371 13.5829 10.3221 14.0099C10.1601 14.0779 9.74711 14.2219 9.65811 14.2239C9.46911 14.2299 9.28711 14.1239 9.19911 13.9539C9.16511 13.8879 9.06511 13.4569 9.03311 13.2649C8.93811 12.6809 8.88911 11.7739 8.89011 10.8619C8.88911 9.90489 8.94211 8.95489 9.04811 8.37689C9.07611 8.22089 9.15811 7.86189 9.18211 7.80389C9.22711 7.69589 9.30911 7.61089 9.40811 7.55789C9.48411 7.51689 9.57111 7.49489 9.65811 7.49789C9.74711 7.49989 10.1091 7.62689 10.2331 7.67589C11.2111 8.05589 13.2801 9.43389 14.0401 10.2439C14.1081 10.3169 14.2951 10.5129 14.3261 10.5529C14.3971 10.6429 14.4321 10.7519 14.4321 10.8619C14.4321 10.9639 14.4011 11.0679 14.3371 11.1549C14.3041 11.1999 14.1131 11.3999 14.0501 11.4669Z'
													strokeLinecap='round'
													strokeLinejoin='round'
												/>
											</svg>
										</a>
										<button className='card__add' type='button'>
											<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'>
												<path d='M16,2H8A3,3,0,0,0,5,5V21a1,1,0,0,0,.5.87,1,1,0,0,0,1,0L12,18.69l5.5,3.18A1,1,0,0,0,18,22a1,1,0,0,0,.5-.13A1,1,0,0,0,19,21V5A3,3,0,0,0,16,2Zm1,17.27-4.5-2.6a1,1,0,0,0-1,0L7,19.27V5A1,1,0,0,1,8,4h8a1,1,0,0,1,1,1Z' />
											</svg>
										</button>
										<span className='card__rating'>
											<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'>
												<path d='M22,9.67A1,1,0,0,0,21.14,9l-5.69-.83L12.9,3a1,1,0,0,0-1.8,0L8.55,8.16,2.86,9a1,1,0,0,0-.81.68,1,1,0,0,0,.25,1l4.13,4-1,5.68A1,1,0,0,0,6.9,21.44L12,18.77l5.1,2.67a.93.93,0,0,0,.46.12,1,1,0,0,0,.59-.19,1,1,0,0,0,.4-1l-1-5.68,4.13-4A1,1,0,0,0,22,9.67Zm-6.15,4a1,1,0,0,0-.29.88l.72,4.2-3.76-2a1.06,1.06,0,0,0-.94,0l-3.76,2,.72-4.2a1,1,0,0,0-.29-.88l-3-3,4.21-.61a1,1,0,0,0,.76-.55L12,5.7l1.88,3.82a1,1,0,0,0,.76.55l4.21.61Z' />
											</svg>{' '}
											7.1
										</span>
										<h3 className='card__title'>
											<a href='details.html'>Interview With the Vampire</a>
										</h3>
										<ul className='card__list'>
											<li>Free</li>
											<li>Horror</li>
											<li>1994</li>
										</ul>
									</div>
								</div>
								<div className='col-6 col-sm-4 col-lg-3 col-xl-2'>
									<div className='card'>
										<a href='details.html' className='card__cover'>
											<img src={img6} alt='' />
											<svg width={22} height={22} viewBox='0 0 22 22' fill='none' xmlns='http://www.w3.org/2000/svg'>
												<path
													fillRule='evenodd'
													clipRule='evenodd'
													d='M11 1C16.5228 1 21 5.47716 21 11C21 16.5228 16.5228 21 11 21C5.47716 21 1 16.5228 1 11C1 5.47716 5.47716 1 11 1Z'
													strokeLinecap='round'
													strokeLinejoin='round'
												/>
												<path
													fillRule='evenodd'
													clipRule='evenodd'
													d='M14.0501 11.4669C13.3211 12.2529 11.3371 13.5829 10.3221 14.0099C10.1601 14.0779 9.74711 14.2219 9.65811 14.2239C9.46911 14.2299 9.28711 14.1239 9.19911 13.9539C9.16511 13.8879 9.06511 13.4569 9.03311 13.2649C8.93811 12.6809 8.88911 11.7739 8.89011 10.8619C8.88911 9.90489 8.94211 8.95489 9.04811 8.37689C9.07611 8.22089 9.15811 7.86189 9.18211 7.80389C9.22711 7.69589 9.30911 7.61089 9.40811 7.55789C9.48411 7.51689 9.57111 7.49489 9.65811 7.49789C9.74711 7.49989 10.1091 7.62689 10.2331 7.67589C11.2111 8.05589 13.2801 9.43389 14.0401 10.2439C14.1081 10.3169 14.2951 10.5129 14.3261 10.5529C14.3971 10.6429 14.4321 10.7519 14.4321 10.8619C14.4321 10.9639 14.4011 11.0679 14.3371 11.1549C14.3041 11.1999 14.1131 11.3999 14.0501 11.4669Z'
													strokeLinecap='round'
													strokeLinejoin='round'
												/>
											</svg>
										</a>
										<button className='card__add' type='button'>
											<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'>
												<path d='M16,2H8A3,3,0,0,0,5,5V21a1,1,0,0,0,.5.87,1,1,0,0,0,1,0L12,18.69l5.5,3.18A1,1,0,0,0,18,22a1,1,0,0,0,.5-.13A1,1,0,0,0,19,21V5A3,3,0,0,0,16,2Zm1,17.27-4.5-2.6a1,1,0,0,0-1,0L7,19.27V5A1,1,0,0,1,8,4h8a1,1,0,0,1,1,1Z' />
											</svg>
										</button>
										<span className='card__rating'>
											<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'>
												<path d='M22,9.67A1,1,0,0,0,21.14,9l-5.69-.83L12.9,3a1,1,0,0,0-1.8,0L8.55,8.16,2.86,9a1,1,0,0,0-.81.68,1,1,0,0,0,.25,1l4.13,4-1,5.68A1,1,0,0,0,6.9,21.44L12,18.77l5.1,2.67a.93.93,0,0,0,.46.12,1,1,0,0,0,.59-.19,1,1,0,0,0,.4-1l-1-5.68,4.13-4A1,1,0,0,0,22,9.67Zm-6.15,4a1,1,0,0,0-.29.88l.72,4.2-3.76-2a1.06,1.06,0,0,0-.94,0l-3.76,2,.72-4.2a1,1,0,0,0-.29-.88l-3-3,4.21-.61a1,1,0,0,0,.76-.55L12,5.7l1.88,3.82a1,1,0,0,0,.76.55l4.21.61Z' />
											</svg>{' '}
											8.6
										</span>
										<h3 className='card__title'>
											<a href='details.html'>Pawn Sacrifice</a>
										</h3>
										<ul className='card__list'>
											<li>Free</li>
											<li>History</li>
											<li>2015</li>
										</ul>
									</div>
								</div>
								<div className='col-6 col-sm-4 col-lg-3 col-xl-2'>
									<div className='card'>
										<a href='details.html' className='card__cover'>
											<img src={img7} alt='' />
											<svg width={22} height={22} viewBox='0 0 22 22' fill='none' xmlns='http://www.w3.org/2000/svg'>
												<path
													fillRule='evenodd'
													clipRule='evenodd'
													d='M11 1C16.5228 1 21 5.47716 21 11C21 16.5228 16.5228 21 11 21C5.47716 21 1 16.5228 1 11C1 5.47716 5.47716 1 11 1Z'
													strokeLinecap='round'
													strokeLinejoin='round'
												/>
												<path
													fillRule='evenodd'
													clipRule='evenodd'
													d='M14.0501 11.4669C13.3211 12.2529 11.3371 13.5829 10.3221 14.0099C10.1601 14.0779 9.74711 14.2219 9.65811 14.2239C9.46911 14.2299 9.28711 14.1239 9.19911 13.9539C9.16511 13.8879 9.06511 13.4569 9.03311 13.2649C8.93811 12.6809 8.88911 11.7739 8.89011 10.8619C8.88911 9.90489 8.94211 8.95489 9.04811 8.37689C9.07611 8.22089 9.15811 7.86189 9.18211 7.80389C9.22711 7.69589 9.30911 7.61089 9.40811 7.55789C9.48411 7.51689 9.57111 7.49489 9.65811 7.49789C9.74711 7.49989 10.1091 7.62689 10.2331 7.67589C11.2111 8.05589 13.2801 9.43389 14.0401 10.2439C14.1081 10.3169 14.2951 10.5129 14.3261 10.5529C14.3971 10.6429 14.4321 10.7519 14.4321 10.8619C14.4321 10.9639 14.4011 11.0679 14.3371 11.1549C14.3041 11.1999 14.1131 11.3999 14.0501 11.4669Z'
													strokeLinecap='round'
													strokeLinejoin='round'
												/>
											</svg>
										</a>
										<button className='card__add' type='button'>
											<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'>
												<path d='M16,2H8A3,3,0,0,0,5,5V21a1,1,0,0,0,.5.87,1,1,0,0,0,1,0L12,18.69l5.5,3.18A1,1,0,0,0,18,22a1,1,0,0,0,.5-.13A1,1,0,0,0,19,21V5A3,3,0,0,0,16,2Zm1,17.27-4.5-2.6a1,1,0,0,0-1,0L7,19.27V5A1,1,0,0,1,8,4h8a1,1,0,0,1,1,1Z' />
											</svg>
										</button>
										<span className='card__rating'>
											<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'>
												<path d='M22,9.67A1,1,0,0,0,21.14,9l-5.69-.83L12.9,3a1,1,0,0,0-1.8,0L8.55,8.16,2.86,9a1,1,0,0,0-.81.68,1,1,0,0,0,.25,1l4.13,4-1,5.68A1,1,0,0,0,6.9,21.44L12,18.77l5.1,2.67a.93.93,0,0,0,.46.12,1,1,0,0,0,.59-.19,1,1,0,0,0,.4-1l-1-5.68,4.13-4A1,1,0,0,0,22,9.67Zm-6.15,4a1,1,0,0,0-.29.88l.72,4.2-3.76-2a1.06,1.06,0,0,0-.94,0l-3.76,2,.72-4.2a1,1,0,0,0-.29-.88l-3-3,4.21-.61a1,1,0,0,0,.76-.55L12,5.7l1.88,3.82a1,1,0,0,0,.76.55l4.21.61Z' />
											</svg>{' '}
											7.0
										</span>
										<h3 className='card__title'>
											<a href='details.html'>Operation Finale</a>
										</h3>
										<ul className='card__list'>
											<li>Free</li>
											<li>Drama</li>
											<li>2018</li>
										</ul>
									</div>
								</div>
								<div className='col-6 col-sm-4 col-lg-3 col-xl-2'>
									<div className='card'>
										<a href='details.html' className='card__cover'>
											<img src={img8} alt='' />
											<svg width={22} height={22} viewBox='0 0 22 22' fill='none' xmlns='http://www.w3.org/2000/svg'>
												<path
													fillRule='evenodd'
													clipRule='evenodd'
													d='M11 1C16.5228 1 21 5.47716 21 11C21 16.5228 16.5228 21 11 21C5.47716 21 1 16.5228 1 11C1 5.47716 5.47716 1 11 1Z'
													strokeLinecap='round'
													strokeLinejoin='round'
												/>
												<path
													fillRule='evenodd'
													clipRule='evenodd'
													d='M14.0501 11.4669C13.3211 12.2529 11.3371 13.5829 10.3221 14.0099C10.1601 14.0779 9.74711 14.2219 9.65811 14.2239C9.46911 14.2299 9.28711 14.1239 9.19911 13.9539C9.16511 13.8879 9.06511 13.4569 9.03311 13.2649C8.93811 12.6809 8.88911 11.7739 8.89011 10.8619C8.88911 9.90489 8.94211 8.95489 9.04811 8.37689C9.07611 8.22089 9.15811 7.86189 9.18211 7.80389C9.22711 7.69589 9.30911 7.61089 9.40811 7.55789C9.48411 7.51689 9.57111 7.49489 9.65811 7.49789C9.74711 7.49989 10.1091 7.62689 10.2331 7.67589C11.2111 8.05589 13.2801 9.43389 14.0401 10.2439C14.1081 10.3169 14.2951 10.5129 14.3261 10.5529C14.3971 10.6429 14.4321 10.7519 14.4321 10.8619C14.4321 10.9639 14.4011 11.0679 14.3371 11.1549C14.3041 11.1999 14.1131 11.3999 14.0501 11.4669Z'
													strokeLinecap='round'
													strokeLinejoin='round'
												/>
											</svg>
										</a>
										<button className='card__add' type='button'>
											<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'>
												<path d='M16,2H8A3,3,0,0,0,5,5V21a1,1,0,0,0,.5.87,1,1,0,0,0,1,0L12,18.69l5.5,3.18A1,1,0,0,0,18,22a1,1,0,0,0,.5-.13A1,1,0,0,0,19,21V5A3,3,0,0,0,16,2Zm1,17.27-4.5-2.6a1,1,0,0,0-1,0L7,19.27V5A1,1,0,0,1,8,4h8a1,1,0,0,1,1,1Z' />
											</svg>
										</button>
										<span className='card__rating'>
											<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'>
												<path d='M22,9.67A1,1,0,0,0,21.14,9l-5.69-.83L12.9,3a1,1,0,0,0-1.8,0L8.55,8.16,2.86,9a1,1,0,0,0-.81.68,1,1,0,0,0,.25,1l4.13,4-1,5.68A1,1,0,0,0,6.9,21.44L12,18.77l5.1,2.67a.93.93,0,0,0,.46.12,1,1,0,0,0,.59-.19,1,1,0,0,0,.4-1l-1-5.68,4.13-4A1,1,0,0,0,22,9.67Zm-6.15,4a1,1,0,0,0-.29.88l.72,4.2-3.76-2a1.06,1.06,0,0,0-.94,0l-3.76,2,.72-4.2a1,1,0,0,0-.29-.88l-3-3,4.21-.61a1,1,0,0,0,.76-.55L12,5.7l1.88,3.82a1,1,0,0,0,.76.55l4.21.61Z' />
											</svg>{' '}
											7.5
										</span>
										<h3 className='card__title'>
											<a href='details.html'>Denial</a>
										</h3>
										<ul className='card__list'>
											<li>Free</li>
											<li>Drama</li>
											<li>2016</li>
										</ul>
									</div>
								</div>
								<div className='col-6 col-sm-4 col-lg-3 col-xl-2'>
									<div className='card'>
										<a href='details.html' className='card__cover'>
											<img src={img9} alt='' />
											<svg width={22} height={22} viewBox='0 0 22 22' fill='none' xmlns='http://www.w3.org/2000/svg'>
												<path
													fillRule='evenodd'
													clipRule='evenodd'
													d='M11 1C16.5228 1 21 5.47716 21 11C21 16.5228 16.5228 21 11 21C5.47716 21 1 16.5228 1 11C1 5.47716 5.47716 1 11 1Z'
													strokeLinecap='round'
													strokeLinejoin='round'
												/>
												<path
													fillRule='evenodd'
													clipRule='evenodd'
													d='M14.0501 11.4669C13.3211 12.2529 11.3371 13.5829 10.3221 14.0099C10.1601 14.0779 9.74711 14.2219 9.65811 14.2239C9.46911 14.2299 9.28711 14.1239 9.19911 13.9539C9.16511 13.8879 9.06511 13.4569 9.03311 13.2649C8.93811 12.6809 8.88911 11.7739 8.89011 10.8619C8.88911 9.90489 8.94211 8.95489 9.04811 8.37689C9.07611 8.22089 9.15811 7.86189 9.18211 7.80389C9.22711 7.69589 9.30911 7.61089 9.40811 7.55789C9.48411 7.51689 9.57111 7.49489 9.65811 7.49789C9.74711 7.49989 10.1091 7.62689 10.2331 7.67589C11.2111 8.05589 13.2801 9.43389 14.0401 10.2439C14.1081 10.3169 14.2951 10.5129 14.3261 10.5529C14.3971 10.6429 14.4321 10.7519 14.4321 10.8619C14.4321 10.9639 14.4011 11.0679 14.3371 11.1549C14.3041 11.1999 14.1131 11.3999 14.0501 11.4669Z'
													strokeLinecap='round'
													strokeLinejoin='round'
												/>
											</svg>
										</a>
										<button className='card__add' type='button'>
											<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'>
												<path d='M16,2H8A3,3,0,0,0,5,5V21a1,1,0,0,0,.5.87,1,1,0,0,0,1,0L12,18.69l5.5,3.18A1,1,0,0,0,18,22a1,1,0,0,0,.5-.13A1,1,0,0,0,19,21V5A3,3,0,0,0,16,2Zm1,17.27-4.5-2.6a1,1,0,0,0-1,0L7,19.27V5A1,1,0,0,1,8,4h8a1,1,0,0,1,1,1Z' />
											</svg>
										</button>
										<span className='card__rating'>
											<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'>
												<path d='M22,9.67A1,1,0,0,0,21.14,9l-5.69-.83L12.9,3a1,1,0,0,0-1.8,0L8.55,8.16,2.86,9a1,1,0,0,0-.81.68,1,1,0,0,0,.25,1l4.13,4-1,5.68A1,1,0,0,0,6.9,21.44L12,18.77l5.1,2.67a.93.93,0,0,0,.46.12,1,1,0,0,0,.59-.19,1,1,0,0,0,.4-1l-1-5.68,4.13-4A1,1,0,0,0,22,9.67Zm-6.15,4a1,1,0,0,0-.29.88l.72,4.2-3.76-2a1.06,1.06,0,0,0-.94,0l-3.76,2,.72-4.2a1,1,0,0,0-.29-.88l-3-3,4.21-.61a1,1,0,0,0,.76-.55L12,5.7l1.88,3.82a1,1,0,0,0,.76.55l4.21.61Z' />
											</svg>{' '}
											7.2
										</span>
										<h3 className='card__title'>
											<a href='details.html'>Luce</a>
										</h3>
										<ul className='card__list'>
											<li>Free</li>
											<li>Drama</li>
											<li>2019</li>
										</ul>
									</div>
								</div>
								<div className='col-6 col-sm-4 col-lg-3 col-xl-2'>
									<div className='card'>
										<a href='details.html' className='card__cover'>
											<img src={img10} alt='' />
											<svg width={22} height={22} viewBox='0 0 22 22' fill='none' xmlns='http://www.w3.org/2000/svg'>
												<path
													fillRule='evenodd'
													clipRule='evenodd'
													d='M11 1C16.5228 1 21 5.47716 21 11C21 16.5228 16.5228 21 11 21C5.47716 21 1 16.5228 1 11C1 5.47716 5.47716 1 11 1Z'
													strokeLinecap='round'
													strokeLinejoin='round'
												/>
												<path
													fillRule='evenodd'
													clipRule='evenodd'
													d='M14.0501 11.4669C13.3211 12.2529 11.3371 13.5829 10.3221 14.0099C10.1601 14.0779 9.74711 14.2219 9.65811 14.2239C9.46911 14.2299 9.28711 14.1239 9.19911 13.9539C9.16511 13.8879 9.06511 13.4569 9.03311 13.2649C8.93811 12.6809 8.88911 11.7739 8.89011 10.8619C8.88911 9.90489 8.94211 8.95489 9.04811 8.37689C9.07611 8.22089 9.15811 7.86189 9.18211 7.80389C9.22711 7.69589 9.30911 7.61089 9.40811 7.55789C9.48411 7.51689 9.57111 7.49489 9.65811 7.49789C9.74711 7.49989 10.1091 7.62689 10.2331 7.67589C11.2111 8.05589 13.2801 9.43389 14.0401 10.2439C14.1081 10.3169 14.2951 10.5129 14.3261 10.5529C14.3971 10.6429 14.4321 10.7519 14.4321 10.8619C14.4321 10.9639 14.4011 11.0679 14.3371 11.1549C14.3041 11.1999 14.1131 11.3999 14.0501 11.4669Z'
													strokeLinecap='round'
													strokeLinejoin='round'
												/>
											</svg>
										</a>
										<button className='card__add' type='button'>
											<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'>
												<path d='M16,2H8A3,3,0,0,0,5,5V21a1,1,0,0,0,.5.87,1,1,0,0,0,1,0L12,18.69l5.5,3.18A1,1,0,0,0,18,22a1,1,0,0,0,.5-.13A1,1,0,0,0,19,21V5A3,3,0,0,0,16,2Zm1,17.27-4.5-2.6a1,1,0,0,0-1,0L7,19.27V5A1,1,0,0,1,8,4h8a1,1,0,0,1,1,1Z' />
											</svg>
										</button>
										<span className='card__rating'>
											<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'>
												<path d='M22,9.67A1,1,0,0,0,21.14,9l-5.69-.83L12.9,3a1,1,0,0,0-1.8,0L8.55,8.16,2.86,9a1,1,0,0,0-.81.68,1,1,0,0,0,.25,1l4.13,4-1,5.68A1,1,0,0,0,6.9,21.44L12,18.77l5.1,2.67a.93.93,0,0,0,.46.12,1,1,0,0,0,.59-.19,1,1,0,0,0,.4-1l-1-5.68,4.13-4A1,1,0,0,0,22,9.67Zm-6.15,4a1,1,0,0,0-.29.88l.72,4.2-3.76-2a1.06,1.06,0,0,0-.94,0l-3.76,2,.72-4.2a1,1,0,0,0-.29-.88l-3-3,4.21-.61a1,1,0,0,0,.76-.55L12,5.7l1.88,3.82a1,1,0,0,0,.76.55l4.21.61Z' />
											</svg>{' '}
											8.9
										</span>
										<h3 className='card__title'>
											<a href='details.html'>Fighting with My Family</a>
										</h3>
										<ul className='card__list'>
											<li>Free</li>
											<li>Biography</li>
											<li>2019</li>
										</ul>
									</div>
								</div>
								<div className='col-6 col-sm-4 col-lg-3 col-xl-2'>
									<div className='card'>
										<a href='details.html' className='card__cover'>
											<img src={img11} alt='' />
											<svg width={22} height={22} viewBox='0 0 22 22' fill='none' xmlns='http://www.w3.org/2000/svg'>
												<path
													fillRule='evenodd'
													clipRule='evenodd'
													d='M11 1C16.5228 1 21 5.47716 21 11C21 16.5228 16.5228 21 11 21C5.47716 21 1 16.5228 1 11C1 5.47716 5.47716 1 11 1Z'
													strokeLinecap='round'
													strokeLinejoin='round'
												/>
												<path
													fillRule='evenodd'
													clipRule='evenodd'
													d='M14.0501 11.4669C13.3211 12.2529 11.3371 13.5829 10.3221 14.0099C10.1601 14.0779 9.74711 14.2219 9.65811 14.2239C9.46911 14.2299 9.28711 14.1239 9.19911 13.9539C9.16511 13.8879 9.06511 13.4569 9.03311 13.2649C8.93811 12.6809 8.88911 11.7739 8.89011 10.8619C8.88911 9.90489 8.94211 8.95489 9.04811 8.37689C9.07611 8.22089 9.15811 7.86189 9.18211 7.80389C9.22711 7.69589 9.30911 7.61089 9.40811 7.55789C9.48411 7.51689 9.57111 7.49489 9.65811 7.49789C9.74711 7.49989 10.1091 7.62689 10.2331 7.67589C11.2111 8.05589 13.2801 9.43389 14.0401 10.2439C14.1081 10.3169 14.2951 10.5129 14.3261 10.5529C14.3971 10.6429 14.4321 10.7519 14.4321 10.8619C14.4321 10.9639 14.4011 11.0679 14.3371 11.1549C14.3041 11.1999 14.1131 11.3999 14.0501 11.4669Z'
													strokeLinecap='round'
													strokeLinejoin='round'
												/>
											</svg>
										</a>
										<button className='card__add' type='button'>
											<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'>
												<path d='M16,2H8A3,3,0,0,0,5,5V21a1,1,0,0,0,.5.87,1,1,0,0,0,1,0L12,18.69l5.5,3.18A1,1,0,0,0,18,22a1,1,0,0,0,.5-.13A1,1,0,0,0,19,21V5A3,3,0,0,0,16,2Zm1,17.27-4.5-2.6a1,1,0,0,0-1,0L7,19.27V5A1,1,0,0,1,8,4h8a1,1,0,0,1,1,1Z' />
											</svg>
										</button>
										<span className='card__rating'>
											<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'>
												<path d='M22,9.67A1,1,0,0,0,21.14,9l-5.69-.83L12.9,3a1,1,0,0,0-1.8,0L8.55,8.16,2.86,9a1,1,0,0,0-.81.68,1,1,0,0,0,.25,1l4.13,4-1,5.68A1,1,0,0,0,6.9,21.44L12,18.77l5.1,2.67a.93.93,0,0,0,.46.12,1,1,0,0,0,.59-.19,1,1,0,0,0,.4-1l-1-5.68,4.13-4A1,1,0,0,0,22,9.67Zm-6.15,4a1,1,0,0,0-.29.88l.72,4.2-3.76-2a1.06,1.06,0,0,0-.94,0l-3.76,2,.72-4.2a1,1,0,0,0-.29-.88l-3-3,4.21-.61a1,1,0,0,0,.76-.55L12,5.7l1.88,3.82a1,1,0,0,0,.76.55l4.21.61Z' />
											</svg>{' '}
											7.2
										</span>
										<h3 className='card__title'>
											<a href='details.html'>Footloose</a>
										</h3>
										<ul className='card__list'>
											<li>Free</li>
											<li>Drama</li>
											<li>2011</li>
										</ul>
									</div>
								</div>
								<div className='col-6 col-sm-4 col-lg-3 col-xl-2'>
									<div className='card'>
										<a href='details.html' className='card__cover'>
											<img src={img12} alt='' />
											<svg width={22} height={22} viewBox='0 0 22 22' fill='none' xmlns='http://www.w3.org/2000/svg'>
												<path
													fillRule='evenodd'
													clipRule='evenodd'
													d='M11 1C16.5228 1 21 5.47716 21 11C21 16.5228 16.5228 21 11 21C5.47716 21 1 16.5228 1 11C1 5.47716 5.47716 1 11 1Z'
													strokeLinecap='round'
													strokeLinejoin='round'
												/>
												<path
													fillRule='evenodd'
													clipRule='evenodd'
													d='M14.0501 11.4669C13.3211 12.2529 11.3371 13.5829 10.3221 14.0099C10.1601 14.0779 9.74711 14.2219 9.65811 14.2239C9.46911 14.2299 9.28711 14.1239 9.19911 13.9539C9.16511 13.8879 9.06511 13.4569 9.03311 13.2649C8.93811 12.6809 8.88911 11.7739 8.89011 10.8619C8.88911 9.90489 8.94211 8.95489 9.04811 8.37689C9.07611 8.22089 9.15811 7.86189 9.18211 7.80389C9.22711 7.69589 9.30911 7.61089 9.40811 7.55789C9.48411 7.51689 9.57111 7.49489 9.65811 7.49789C9.74711 7.49989 10.1091 7.62689 10.2331 7.67589C11.2111 8.05589 13.2801 9.43389 14.0401 10.2439C14.1081 10.3169 14.2951 10.5129 14.3261 10.5529C14.3971 10.6429 14.4321 10.7519 14.4321 10.8619C14.4321 10.9639 14.4011 11.0679 14.3371 11.1549C14.3041 11.1999 14.1131 11.3999 14.0501 11.4669Z'
													strokeLinecap='round'
													strokeLinejoin='round'
												/>
											</svg>
										</a>
										<button className='card__add' type='button'>
											<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'>
												<path d='M16,2H8A3,3,0,0,0,5,5V21a1,1,0,0,0,.5.87,1,1,0,0,0,1,0L12,18.69l5.5,3.18A1,1,0,0,0,18,22a1,1,0,0,0,.5-.13A1,1,0,0,0,19,21V5A3,3,0,0,0,16,2Zm1,17.27-4.5-2.6a1,1,0,0,0-1,0L7,19.27V5A1,1,0,0,1,8,4h8a1,1,0,0,1,1,1Z' />
											</svg>
										</button>
										<span className='card__rating'>
											<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'>
												<path d='M22,9.67A1,1,0,0,0,21.14,9l-5.69-.83L12.9,3a1,1,0,0,0-1.8,0L8.55,8.16,2.86,9a1,1,0,0,0-.81.68,1,1,0,0,0,.25,1l4.13,4-1,5.68A1,1,0,0,0,6.9,21.44L12,18.77l5.1,2.67a.93.93,0,0,0,.46.12,1,1,0,0,0,.59-.19,1,1,0,0,0,.4-1l-1-5.68,4.13-4A1,1,0,0,0,22,9.67Zm-6.15,4a1,1,0,0,0-.29.88l.72,4.2-3.76-2a1.06,1.06,0,0,0-.94,0l-3.76,2,.72-4.2a1,1,0,0,0-.29-.88l-3-3,4.21-.61a1,1,0,0,0,.76-.55L12,5.7l1.88,3.82a1,1,0,0,0,.76.55l4.21.61Z' />
											</svg>{' '}
											7.6
										</span>
										<h3 className='card__title'>
											<a href='details.html'>Swimming for Gold</a>
										</h3>
										<ul className='card__list'>
											<li>Free</li>
											<li>Drama</li>
											<li>2020</li>
										</ul>
									</div>
								</div>
								<div className='col-6 col-sm-4 col-lg-3 col-xl-2'>
									<div className='card'>
										<a href='details.html' className='card__cover'>
											<img src={img13} alt='' />
											<svg width={22} height={22} viewBox='0 0 22 22' fill='none' xmlns='http://www.w3.org/2000/svg'>
												<path
													fillRule='evenodd'
													clipRule='evenodd'
													d='M11 1C16.5228 1 21 5.47716 21 11C21 16.5228 16.5228 21 11 21C5.47716 21 1 16.5228 1 11C1 5.47716 5.47716 1 11 1Z'
													strokeLinecap='round'
													strokeLinejoin='round'
												/>
												<path
													fillRule='evenodd'
													clipRule='evenodd'
													d='M14.0501 11.4669C13.3211 12.2529 11.3371 13.5829 10.3221 14.0099C10.1601 14.0779 9.74711 14.2219 9.65811 14.2239C9.46911 14.2299 9.28711 14.1239 9.19911 13.9539C9.16511 13.8879 9.06511 13.4569 9.03311 13.2649C8.93811 12.6809 8.88911 11.7739 8.89011 10.8619C8.88911 9.90489 8.94211 8.95489 9.04811 8.37689C9.07611 8.22089 9.15811 7.86189 9.18211 7.80389C9.22711 7.69589 9.30911 7.61089 9.40811 7.55789C9.48411 7.51689 9.57111 7.49489 9.65811 7.49789C9.74711 7.49989 10.1091 7.62689 10.2331 7.67589C11.2111 8.05589 13.2801 9.43389 14.0401 10.2439C14.1081 10.3169 14.2951 10.5129 14.3261 10.5529C14.3971 10.6429 14.4321 10.7519 14.4321 10.8619C14.4321 10.9639 14.4011 11.0679 14.3371 11.1549C14.3041 11.1999 14.1131 11.3999 14.0501 11.4669Z'
													strokeLinecap='round'
													strokeLinejoin='round'
												/>
											</svg>
										</a>
										<button className='card__add' type='button'>
											<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'>
												<path d='M16,2H8A3,3,0,0,0,5,5V21a1,1,0,0,0,.5.87,1,1,0,0,0,1,0L12,18.69l5.5,3.18A1,1,0,0,0,18,22a1,1,0,0,0,.5-.13A1,1,0,0,0,19,21V5A3,3,0,0,0,16,2Zm1,17.27-4.5-2.6a1,1,0,0,0-1,0L7,19.27V5A1,1,0,0,1,8,4h8a1,1,0,0,1,1,1Z' />
											</svg>
										</button>
										<span className='card__rating'>
											<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'>
												<path d='M22,9.67A1,1,0,0,0,21.14,9l-5.69-.83L12.9,3a1,1,0,0,0-1.8,0L8.55,8.16,2.86,9a1,1,0,0,0-.81.68,1,1,0,0,0,.25,1l4.13,4-1,5.68A1,1,0,0,0,6.9,21.44L12,18.77l5.1,2.67a.93.93,0,0,0,.46.12,1,1,0,0,0,.59-.19,1,1,0,0,0,.4-1l-1-5.68,4.13-4A1,1,0,0,0,22,9.67Zm-6.15,4a1,1,0,0,0-.29.88l.72,4.2-3.76-2a1.06,1.06,0,0,0-.94,0l-3.76,2,.72-4.2a1,1,0,0,0-.29-.88l-3-3,4.21-.61a1,1,0,0,0,.76-.55L12,5.7l1.88,3.82a1,1,0,0,0,.76.55l4.21.61Z' />
											</svg>{' '}
											7.1
										</span>
										<h3 className='card__title'>
											<a href='details.html'>Infamous</a>
										</h3>
										<ul className='card__list'>
											<li>Free</li>
											<li>Thriller</li>
											<li>2020</li>
										</ul>
									</div>
								</div>
								<div className='col-6 col-sm-4 col-lg-3 col-xl-2'>
									<div className='card'>
										<a href='details.html' className='card__cover'>
											<img src={img14} alt='' />
											<svg width={22} height={22} viewBox='0 0 22 22' fill='none' xmlns='http://www.w3.org/2000/svg'>
												<path
													fillRule='evenodd'
													clipRule='evenodd'
													d='M11 1C16.5228 1 21 5.47716 21 11C21 16.5228 16.5228 21 11 21C5.47716 21 1 16.5228 1 11C1 5.47716 5.47716 1 11 1Z'
													strokeLinecap='round'
													strokeLinejoin='round'
												/>
												<path
													fillRule='evenodd'
													clipRule='evenodd'
													d='M14.0501 11.4669C13.3211 12.2529 11.3371 13.5829 10.3221 14.0099C10.1601 14.0779 9.74711 14.2219 9.65811 14.2239C9.46911 14.2299 9.28711 14.1239 9.19911 13.9539C9.16511 13.8879 9.06511 13.4569 9.03311 13.2649C8.93811 12.6809 8.88911 11.7739 8.89011 10.8619C8.88911 9.90489 8.94211 8.95489 9.04811 8.37689C9.07611 8.22089 9.15811 7.86189 9.18211 7.80389C9.22711 7.69589 9.30911 7.61089 9.40811 7.55789C9.48411 7.51689 9.57111 7.49489 9.65811 7.49789C9.74711 7.49989 10.1091 7.62689 10.2331 7.67589C11.2111 8.05589 13.2801 9.43389 14.0401 10.2439C14.1081 10.3169 14.2951 10.5129 14.3261 10.5529C14.3971 10.6429 14.4321 10.7519 14.4321 10.8619C14.4321 10.9639 14.4011 11.0679 14.3371 11.1549C14.3041 11.1999 14.1131 11.3999 14.0501 11.4669Z'
													strokeLinecap='round'
													strokeLinejoin='round'
												/>
											</svg>
										</a>
										<button className='card__add' type='button'>
											<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'>
												<path d='M16,2H8A3,3,0,0,0,5,5V21a1,1,0,0,0,.5.87,1,1,0,0,0,1,0L12,18.69l5.5,3.18A1,1,0,0,0,18,22a1,1,0,0,0,.5-.13A1,1,0,0,0,19,21V5A3,3,0,0,0,16,2Zm1,17.27-4.5-2.6a1,1,0,0,0-1,0L7,19.27V5A1,1,0,0,1,8,4h8a1,1,0,0,1,1,1Z' />
											</svg>
										</button>
										<span className='card__rating'>
											<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'>
												<path d='M22,9.67A1,1,0,0,0,21.14,9l-5.69-.83L12.9,3a1,1,0,0,0-1.8,0L8.55,8.16,2.86,9a1,1,0,0,0-.81.68,1,1,0,0,0,.25,1l4.13,4-1,5.68A1,1,0,0,0,6.9,21.44L12,18.77l5.1,2.67a.93.93,0,0,0,.46.12,1,1,0,0,0,.59-.19,1,1,0,0,0,.4-1l-1-5.68,4.13-4A1,1,0,0,0,22,9.67Zm-6.15,4a1,1,0,0,0-.29.88l.72,4.2-3.76-2a1.06,1.06,0,0,0-.94,0l-3.76,2,.72-4.2a1,1,0,0,0-.29-.88l-3-3,4.21-.61a1,1,0,0,0,.76-.55L12,5.7l1.88,3.82a1,1,0,0,0,.76.55l4.21.61Z' />
											</svg>{' '}
											7.2
										</span>
										<h3 className='card__title'>
											<a href='details.html'>Above the Shadows</a>
										</h3>
										<ul className='card__list'>
											<li>Free</li>
											<li>Science Fiction</li>
											<li>2019</li>
										</ul>
									</div>
								</div>
								<div className='col-6 col-sm-4 col-lg-3 col-xl-2'>
									<div className='card'>
										<a href='details.html' className='card__cover'>
											<img src={img15} alt='' />
											<svg width={22} height={22} viewBox='0 0 22 22' fill='none' xmlns='http://www.w3.org/2000/svg'>
												<path
													fillRule='evenodd'
													clipRule='evenodd'
													d='M11 1C16.5228 1 21 5.47716 21 11C21 16.5228 16.5228 21 11 21C5.47716 21 1 16.5228 1 11C1 5.47716 5.47716 1 11 1Z'
													strokeLinecap='round'
													strokeLinejoin='round'
												/>
												<path
													fillRule='evenodd'
													clipRule='evenodd'
													d='M14.0501 11.4669C13.3211 12.2529 11.3371 13.5829 10.3221 14.0099C10.1601 14.0779 9.74711 14.2219 9.65811 14.2239C9.46911 14.2299 9.28711 14.1239 9.19911 13.9539C9.16511 13.8879 9.06511 13.4569 9.03311 13.2649C8.93811 12.6809 8.88911 11.7739 8.89011 10.8619C8.88911 9.90489 8.94211 8.95489 9.04811 8.37689C9.07611 8.22089 9.15811 7.86189 9.18211 7.80389C9.22711 7.69589 9.30911 7.61089 9.40811 7.55789C9.48411 7.51689 9.57111 7.49489 9.65811 7.49789C9.74711 7.49989 10.1091 7.62689 10.2331 7.67589C11.2111 8.05589 13.2801 9.43389 14.0401 10.2439C14.1081 10.3169 14.2951 10.5129 14.3261 10.5529C14.3971 10.6429 14.4321 10.7519 14.4321 10.8619C14.4321 10.9639 14.4011 11.0679 14.3371 11.1549C14.3041 11.1999 14.1131 11.3999 14.0501 11.4669Z'
													strokeLinecap='round'
													strokeLinejoin='round'
												/>
											</svg>
										</a>
										<button className='card__add' type='button'>
											<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'>
												<path d='M16,2H8A3,3,0,0,0,5,5V21a1,1,0,0,0,.5.87,1,1,0,0,0,1,0L12,18.69l5.5,3.18A1,1,0,0,0,18,22a1,1,0,0,0,.5-.13A1,1,0,0,0,19,21V5A3,3,0,0,0,16,2Zm1,17.27-4.5-2.6a1,1,0,0,0-1,0L7,19.27V5A1,1,0,0,1,8,4h8a1,1,0,0,1,1,1Z' />
											</svg>
										</button>
										<span className='card__rating'>
											<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'>
												<path d='M22,9.67A1,1,0,0,0,21.14,9l-5.69-.83L12.9,3a1,1,0,0,0-1.8,0L8.55,8.16,2.86,9a1,1,0,0,0-.81.68,1,1,0,0,0,.25,1l4.13,4-1,5.68A1,1,0,0,0,6.9,21.44L12,18.77l5.1,2.67a.93.93,0,0,0,.46.12,1,1,0,0,0,.59-.19,1,1,0,0,0,.4-1l-1-5.68,4.13-4A1,1,0,0,0,22,9.67Zm-6.15,4a1,1,0,0,0-.29.88l.72,4.2-3.76-2a1.06,1.06,0,0,0-.94,0l-3.76,2,.72-4.2a1,1,0,0,0-.29-.88l-3-3,4.21-.61a1,1,0,0,0,.76-.55L12,5.7l1.88,3.82a1,1,0,0,0,.76.55l4.21.61Z' />
											</svg>{' '}
											9.1
										</span>
										<h3 className='card__title'>
											<a href='details.html'>After Darkness</a>
										</h3>
										<ul className='card__list'>
											<li>Free</li>
											<li>Science Fiction</li>
											<li>2018</li>
										</ul>
									</div>
								</div>
								<div className='col-6 col-sm-4 col-lg-3 col-xl-2'>
									<div className='card'>
										<a href='details.html' className='card__cover'>
											<img src={img16} alt='' />
											<svg width={22} height={22} viewBox='0 0 22 22' fill='none' xmlns='http://www.w3.org/2000/svg'>
												<path
													fillRule='evenodd'
													clipRule='evenodd'
													d='M11 1C16.5228 1 21 5.47716 21 11C21 16.5228 16.5228 21 11 21C5.47716 21 1 16.5228 1 11C1 5.47716 5.47716 1 11 1Z'
													strokeLinecap='round'
													strokeLinejoin='round'
												/>
												<path
													fillRule='evenodd'
													clipRule='evenodd'
													d='M14.0501 11.4669C13.3211 12.2529 11.3371 13.5829 10.3221 14.0099C10.1601 14.0779 9.74711 14.2219 9.65811 14.2239C9.46911 14.2299 9.28711 14.1239 9.19911 13.9539C9.16511 13.8879 9.06511 13.4569 9.03311 13.2649C8.93811 12.6809 8.88911 11.7739 8.89011 10.8619C8.88911 9.90489 8.94211 8.95489 9.04811 8.37689C9.07611 8.22089 9.15811 7.86189 9.18211 7.80389C9.22711 7.69589 9.30911 7.61089 9.40811 7.55789C9.48411 7.51689 9.57111 7.49489 9.65811 7.49789C9.74711 7.49989 10.1091 7.62689 10.2331 7.67589C11.2111 8.05589 13.2801 9.43389 14.0401 10.2439C14.1081 10.3169 14.2951 10.5129 14.3261 10.5529C14.3971 10.6429 14.4321 10.7519 14.4321 10.8619C14.4321 10.9639 14.4011 11.0679 14.3371 11.1549C14.3041 11.1999 14.1131 11.3999 14.0501 11.4669Z'
													strokeLinecap='round'
													strokeLinejoin='round'
												/>
											</svg>
										</a>
										<button className='card__add' type='button'>
											<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'>
												<path d='M16,2H8A3,3,0,0,0,5,5V21a1,1,0,0,0,.5.87,1,1,0,0,0,1,0L12,18.69l5.5,3.18A1,1,0,0,0,18,22a1,1,0,0,0,.5-.13A1,1,0,0,0,19,21V5A3,3,0,0,0,16,2Zm1,17.27-4.5-2.6a1,1,0,0,0-1,0L7,19.27V5A1,1,0,0,1,8,4h8a1,1,0,0,1,1,1Z' />
											</svg>
										</button>
										<span className='card__rating'>
											<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'>
												<path d='M22,9.67A1,1,0,0,0,21.14,9l-5.69-.83L12.9,3a1,1,0,0,0-1.8,0L8.55,8.16,2.86,9a1,1,0,0,0-.81.68,1,1,0,0,0,.25,1l4.13,4-1,5.68A1,1,0,0,0,6.9,21.44L12,18.77l5.1,2.67a.93.93,0,0,0,.46.12,1,1,0,0,0,.59-.19,1,1,0,0,0,.4-1l-1-5.68,4.13-4A1,1,0,0,0,22,9.67Zm-6.15,4a1,1,0,0,0-.29.88l.72,4.2-3.76-2a1.06,1.06,0,0,0-.94,0l-3.76,2,.72-4.2a1,1,0,0,0-.29-.88l-3-3,4.21-.61a1,1,0,0,0,.76-.55L12,5.7l1.88,3.82a1,1,0,0,0,.76.55l4.21.61Z' />
											</svg>{' '}
											9.0
										</span>
										<h3 className='card__title'>
											<a href='details.html'>I Still See You</a>
										</h3>
										<ul className='card__list'>
											<li>Free</li>
											<li>Horror</li>
											<li>2018</li>
										</ul>
									</div>
								</div>
								<div className='col-6 col-sm-4 col-lg-3 col-xl-2'>
									<div className='card'>
										<a href='details.html' className='card__cover'>
											<img src={img17} alt='' />
											<svg width={22} height={22} viewBox='0 0 22 22' fill='none' xmlns='http://www.w3.org/2000/svg'>
												<path
													fillRule='evenodd'
													clipRule='evenodd'
													d='M11 1C16.5228 1 21 5.47716 21 11C21 16.5228 16.5228 21 11 21C5.47716 21 1 16.5228 1 11C1 5.47716 5.47716 1 11 1Z'
													strokeLinecap='round'
													strokeLinejoin='round'
												/>
												<path
													fillRule='evenodd'
													clipRule='evenodd'
													d='M14.0501 11.4669C13.3211 12.2529 11.3371 13.5829 10.3221 14.0099C10.1601 14.0779 9.74711 14.2219 9.65811 14.2239C9.46911 14.2299 9.28711 14.1239 9.19911 13.9539C9.16511 13.8879 9.06511 13.4569 9.03311 13.2649C8.93811 12.6809 8.88911 11.7739 8.89011 10.8619C8.88911 9.90489 8.94211 8.95489 9.04811 8.37689C9.07611 8.22089 9.15811 7.86189 9.18211 7.80389C9.22711 7.69589 9.30911 7.61089 9.40811 7.55789C9.48411 7.51689 9.57111 7.49489 9.65811 7.49789C9.74711 7.49989 10.1091 7.62689 10.2331 7.67589C11.2111 8.05589 13.2801 9.43389 14.0401 10.2439C14.1081 10.3169 14.2951 10.5129 14.3261 10.5529C14.3971 10.6429 14.4321 10.7519 14.4321 10.8619C14.4321 10.9639 14.4011 11.0679 14.3371 11.1549C14.3041 11.1999 14.1131 11.3999 14.0501 11.4669Z'
													strokeLinecap='round'
													strokeLinejoin='round'
												/>
											</svg>
										</a>
										<button className='card__add' type='button'>
											<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'>
												<path d='M16,2H8A3,3,0,0,0,5,5V21a1,1,0,0,0,.5.87,1,1,0,0,0,1,0L12,18.69l5.5,3.18A1,1,0,0,0,18,22a1,1,0,0,0,.5-.13A1,1,0,0,0,19,21V5A3,3,0,0,0,16,2Zm1,17.27-4.5-2.6a1,1,0,0,0-1,0L7,19.27V5A1,1,0,0,1,8,4h8a1,1,0,0,1,1,1Z' />
											</svg>
										</button>
										<span className='card__rating'>
											<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'>
												<path d='M22,9.67A1,1,0,0,0,21.14,9l-5.69-.83L12.9,3a1,1,0,0,0-1.8,0L8.55,8.16,2.86,9a1,1,0,0,0-.81.68,1,1,0,0,0,.25,1l4.13,4-1,5.68A1,1,0,0,0,6.9,21.44L12,18.77l5.1,2.67a.93.93,0,0,0,.46.12,1,1,0,0,0,.59-.19,1,1,0,0,0,.4-1l-1-5.68,4.13-4A1,1,0,0,0,22,9.67Zm-6.15,4a1,1,0,0,0-.29.88l.72,4.2-3.76-2a1.06,1.06,0,0,0-.94,0l-3.76,2,.72-4.2a1,1,0,0,0-.29-.88l-3-3,4.21-.61a1,1,0,0,0,.76-.55L12,5.7l1.88,3.82a1,1,0,0,0,.76.55l4.21.61Z' />
											</svg>{' '}
											8.5
										</span>
										<h3 className='card__title'>
											<a href='details.html'>The Midnight Man</a>
										</h3>
										<ul className='card__list'>
											<li>Free</li>
											<li>Thriller</li>
											<li>2018</li>
										</ul>
									</div>
								</div>
								<div className='col-6 col-sm-4 col-lg-3 col-xl-2'>
									<div className='card'>
										<a href='details.html' className='card__cover'>
											<img src={img18} alt='' />
											<svg width={22} height={22} viewBox='0 0 22 22' fill='none' xmlns='http://www.w3.org/2000/svg'>
												<path
													fillRule='evenodd'
													clipRule='evenodd'
													d='M11 1C16.5228 1 21 5.47716 21 11C21 16.5228 16.5228 21 11 21C5.47716 21 1 16.5228 1 11C1 5.47716 5.47716 1 11 1Z'
													strokeLinecap='round'
													strokeLinejoin='round'
												/>
												<path
													fillRule='evenodd'
													clipRule='evenodd'
													d='M14.0501 11.4669C13.3211 12.2529 11.3371 13.5829 10.3221 14.0099C10.1601 14.0779 9.74711 14.2219 9.65811 14.2239C9.46911 14.2299 9.28711 14.1239 9.19911 13.9539C9.16511 13.8879 9.06511 13.4569 9.03311 13.2649C8.93811 12.6809 8.88911 11.7739 8.89011 10.8619C8.88911 9.90489 8.94211 8.95489 9.04811 8.37689C9.07611 8.22089 9.15811 7.86189 9.18211 7.80389C9.22711 7.69589 9.30911 7.61089 9.40811 7.55789C9.48411 7.51689 9.57111 7.49489 9.65811 7.49789C9.74711 7.49989 10.1091 7.62689 10.2331 7.67589C11.2111 8.05589 13.2801 9.43389 14.0401 10.2439C14.1081 10.3169 14.2951 10.5129 14.3261 10.5529C14.3971 10.6429 14.4321 10.7519 14.4321 10.8619C14.4321 10.9639 14.4011 11.0679 14.3371 11.1549C14.3041 11.1999 14.1131 11.3999 14.0501 11.4669Z'
													strokeLinecap='round'
													strokeLinejoin='round'
												/>
											</svg>
										</a>
										<button className='card__add' type='button'>
											<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'>
												<path d='M16,2H8A3,3,0,0,0,5,5V21a1,1,0,0,0,.5.87,1,1,0,0,0,1,0L12,18.69l5.5,3.18A1,1,0,0,0,18,22a1,1,0,0,0,.5-.13A1,1,0,0,0,19,21V5A3,3,0,0,0,16,2Zm1,17.27-4.5-2.6a1,1,0,0,0-1,0L7,19.27V5A1,1,0,0,1,8,4h8a1,1,0,0,1,1,1Z' />
											</svg>
										</button>
										<span className='card__rating'>
											<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'>
												<path d='M22,9.67A1,1,0,0,0,21.14,9l-5.69-.83L12.9,3a1,1,0,0,0-1.8,0L8.55,8.16,2.86,9a1,1,0,0,0-.81.68,1,1,0,0,0,.25,1l4.13,4-1,5.68A1,1,0,0,0,6.9,21.44L12,18.77l5.1,2.67a.93.93,0,0,0,.46.12,1,1,0,0,0,.59-.19,1,1,0,0,0,.4-1l-1-5.68,4.13-4A1,1,0,0,0,22,9.67Zm-6.15,4a1,1,0,0,0-.29.88l.72,4.2-3.76-2a1.06,1.06,0,0,0-.94,0l-3.76,2,.72-4.2a1,1,0,0,0-.29-.88l-3-3,4.21-.61a1,1,0,0,0,.76-.55L12,5.7l1.88,3.82a1,1,0,0,0,.76.55l4.21.61Z' />
											</svg>{' '}
											9.3
										</span>
										<h3 className='card__title'>
											<a href='details.html'>The Dustwalker</a>
										</h3>
										<ul className='card__list'>
											<li>Free</li>
											<li>Thriller</li>
											<li>2019</li>
										</ul>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div className='row'>
						<div className='col-12'>
							<button className='catalog__more' type='button'>
								Load more
							</button>
						</div>
					</div>
				</div>
			</div>
			{/* end catalog */}
			{/* subscriptions */}
			<Subscriptions/>
			{/* end subscriptions */}
			{/* plan */}
			<section className='section section--pb0 section--gradient'>
				<div className='container'>
					<div className='row'>
						<div className='col-12'>
							<h2 className='section__title'>Select Your Plan</h2>
							<p className='section__text'>No hidden fees, equipment rentals, or installation appointments.</p>
						</div>
					</div>
					<div className='row'>
						<div className='col-12 col-md-6 col-xl-4 order-md-2 order-xl-1'>
							<div className='plan'>
								<h3 className='plan__title'>Regular</h3>
								<ul className='plan__list'>
									<li className='green'>
										<svg width={19} height={14} viewBox='0 0 19 14' fill='none' xmlns='http://www.w3.org/2000/svg'>
											<path
												d='M1.43994 6.95981L6.77477 12.2924L17.4399 1.62723'
												strokeWidth={2}
												strokeLinecap='round'
												strokeLinejoin='round'
											/>
										</svg>{' '}
										FlixTV Originals
									</li>
									<li className='green'>
										<svg width={19} height={14} viewBox='0 0 19 14' fill='none' xmlns='http://www.w3.org/2000/svg'>
											<path
												d='M1.43994 6.95981L6.77477 12.2924L17.4399 1.62723'
												strokeWidth={2}
												strokeLinecap='round'
												strokeLinejoin='round'
											/>
										</svg>{' '}
										Switch plans or cancel anytime
									</li>
									<li className='red'>
										<svg width={19} height={19} viewBox='0 0 19 19' fill='none' xmlns='http://www.w3.org/2000/svg'>
											<path d='M17.596 1.59982L1.60938 17.5865' strokeWidth={2} strokeLinecap='round' strokeLinejoin='round' />
											<path d='M17.601 17.5961L1.60101 1.5928' strokeWidth={2} strokeLinecap='round' strokeLinejoin='round' />
										</svg>{' '}
										Stream 65+ top Live
									</li>
									<li className='red'>
										<svg width={19} height={19} viewBox='0 0 19 19' fill='none' xmlns='http://www.w3.org/2000/svg'>
											<path d='M17.596 1.59982L1.60938 17.5865' strokeWidth={2} strokeLinecap='round' strokeLinejoin='round' />
											<path d='M17.601 17.5961L1.60101 1.5928' strokeWidth={2} strokeLinecap='round' strokeLinejoin='round' />
										</svg>{' '}
										TV channels
									</li>
								</ul>
								<span className='plan__price'>
									$11.99<span>/month</span>
								</span>
								<button className='plan__btn' type='button'>
									Select plan
								</button>
							</div>
						</div>
						<div className='col-12 col-xl-4 order-md-1 order-xl-2'>
							<div className='plan plan--best'>
								<h3 className='plan__title'>Premium</h3>
								<ul className='plan__list'>
									<li className='green'>
										<svg width={19} height={14} viewBox='0 0 19 14' fill='none' xmlns='http://www.w3.org/2000/svg'>
											<path
												d='M1.43994 6.95981L6.77477 12.2924L17.4399 1.62723'
												strokeWidth={2}
												strokeLinecap='round'
												strokeLinejoin='round'
											/>
										</svg>{' '}
										FlixTV Originals
									</li>
									<li className='green'>
										<svg width={19} height={14} viewBox='0 0 19 14' fill='none' xmlns='http://www.w3.org/2000/svg'>
											<path
												d='M1.43994 6.95981L6.77477 12.2924L17.4399 1.62723'
												strokeWidth={2}
												strokeLinecap='round'
												strokeLinejoin='round'
											/>
										</svg>{' '}
										Switch plans or cancel anytime
									</li>
									<li className='green'>
										<svg width={19} height={14} viewBox='0 0 19 14' fill='none' xmlns='http://www.w3.org/2000/svg'>
											<path
												d='M1.43994 6.95981L6.77477 12.2924L17.4399 1.62723'
												strokeWidth={2}
												strokeLinecap='round'
												strokeLinejoin='round'
											/>
										</svg>{' '}
										Stream 65+ top Live
									</li>
									<li className='red'>
										<svg width={19} height={19} viewBox='0 0 19 19' fill='none' xmlns='http://www.w3.org/2000/svg'>
											<path d='M17.596 1.59982L1.60938 17.5865' strokeWidth={2} strokeLinecap='round' strokeLinejoin='round' />
											<path d='M17.601 17.5961L1.60101 1.5928' strokeWidth={2} strokeLinecap='round' strokeLinejoin='round' />
										</svg>{' '}
										TV channels
									</li>
								</ul>
								<span className='plan__price'>
									$34.99<span>/month</span>
								</span>
								<button className='plan__btn' type='button'>
									Select plan
								</button>
							</div>
						</div>
						<div className='col-12 col-md-6 col-xl-4 order-md-3 order-xl-3'>
							<div className='plan'>
								<h3 className='plan__title'>Premium + TV channels</h3>
								<ul className='plan__list'>
									<li className='green'>
										<svg width={19} height={14} viewBox='0 0 19 14' fill='none' xmlns='http://www.w3.org/2000/svg'>
											<path
												d='M1.43994 6.95981L6.77477 12.2924L17.4399 1.62723'
												strokeWidth={2}
												strokeLinecap='round'
												strokeLinejoin='round'
											/>
										</svg>{' '}
										FlixTV Originals
									</li>
									<li className='green'>
										<svg width={19} height={14} viewBox='0 0 19 14' fill='none' xmlns='http://www.w3.org/2000/svg'>
											<path
												d='M1.43994 6.95981L6.77477 12.2924L17.4399 1.62723'
												strokeWidth={2}
												strokeLinecap='round'
												strokeLinejoin='round'
											/>
										</svg>{' '}
										Switch plans or cancel anytime
									</li>
									<li className='green'>
										<svg width={19} height={14} viewBox='0 0 19 14' fill='none' xmlns='http://www.w3.org/2000/svg'>
											<path
												d='M1.43994 6.95981L6.77477 12.2924L17.4399 1.62723'
												strokeWidth={2}
												strokeLinecap='round'
												strokeLinejoin='round'
											/>
										</svg>{' '}
										Stream 65+ top Live
									</li>
									<li className='green'>
										<svg width={19} height={14} viewBox='0 0 19 14' fill='none' xmlns='http://www.w3.org/2000/svg'>
											<path
												d='M1.43994 6.95981L6.77477 12.2924L17.4399 1.62723'
												strokeWidth={2}
												strokeLinecap='round'
												strokeLinejoin='round'
											/>
										</svg>{' '}
										TV channels
									</li>
								</ul>
								<span className='plan__price'>
									$49.99<span>/month</span>
								</span>
								<button className='plan__btn' type='button'>
									Select plan
								</button>
							</div>
						</div>
					</div>
				</div>
			</section>
			{/* end plan */}
			{/* videos */}
			<section className='section'>
				<div className='container'>
					<div className='row'>
						<div className='col-12'>
							<h2 className='section__title'>
								<b>Flix</b>TV Originals
							</h2>
							<p className='section__text'>Celebrity interviews, trending entertainment stories, and expert analysis.</p>
						</div>
						<div className='col-12'>
							<div className='section__carousel-wrap'>
								<div className='section__interview owl-carousel' id='flixtv'>
									<div className='interview'>
										<a href='interview.html' className='interview__cover'>
											<img src='img/interview/1.jpg' alt='' />
											<span>
												<svg width={22} height={22} viewBox='0 0 22 22' fill='none' xmlns='http://www.w3.org/2000/svg'>
													<path
														fillRule='evenodd'
														clipRule='evenodd'
														d='M11 1C16.5228 1 21 5.47716 21 11C21 16.5228 16.5228 21 11 21C5.47716 21 1 16.5228 1 11C1 5.47716 5.47716 1 11 1Z'
														strokeLinecap='round'
														strokeLinejoin='round'
													/>
													<path
														fillRule='evenodd'
														clipRule='evenodd'
														d='M14.0501 11.4669C13.3211 12.2529 11.3371 13.5829 10.3221 14.0099C10.1601 14.0779 9.74711 14.2219 9.65811 14.2239C9.46911 14.2299 9.28711 14.1239 9.19911 13.9539C9.16511 13.8879 9.06511 13.4569 9.03311 13.2649C8.93811 12.6809 8.88911 11.7739 8.89011 10.8619C8.88911 9.90489 8.94211 8.95489 9.04811 8.37689C9.07611 8.22089 9.15811 7.86189 9.18211 7.80389C9.22711 7.69589 9.30911 7.61089 9.40811 7.55789C9.48411 7.51689 9.57111 7.49489 9.65811 7.49789C9.74711 7.49989 10.1091 7.62689 10.2331 7.67589C11.2111 8.05589 13.2801 9.43389 14.0401 10.2439C14.1081 10.3169 14.2951 10.5129 14.3261 10.5529C14.3971 10.6429 14.4321 10.7519 14.4321 10.8619C14.4321 10.9639 14.4011 11.0679 14.3371 11.1549C14.3041 11.1999 14.1131 11.3999 14.0501 11.4669Z'
														strokeLinecap='round'
														strokeLinejoin='round'
													/>
												</svg>{' '}
												5:33
											</span>
										</a>
										<h3 className='interview__title'>
											<a href='interview.html'>What Was Ben Affleck Planning for His Unmade 'Batman' Film?</a>
										</h3>
									</div>
									<div className='interview'>
										<a href='interview.html' className='interview__cover'>
											<img src='img/interview/2.jpg' alt='' />
											<span>
												<svg width={22} height={22} viewBox='0 0 22 22' fill='none' xmlns='http://www.w3.org/2000/svg'>
													<path
														fillRule='evenodd'
														clipRule='evenodd'
														d='M11 1C16.5228 1 21 5.47716 21 11C21 16.5228 16.5228 21 11 21C5.47716 21 1 16.5228 1 11C1 5.47716 5.47716 1 11 1Z'
														strokeLinecap='round'
														strokeLinejoin='round'
													/>
													<path
														fillRule='evenodd'
														clipRule='evenodd'
														d='M14.0501 11.4669C13.3211 12.2529 11.3371 13.5829 10.3221 14.0099C10.1601 14.0779 9.74711 14.2219 9.65811 14.2239C9.46911 14.2299 9.28711 14.1239 9.19911 13.9539C9.16511 13.8879 9.06511 13.4569 9.03311 13.2649C8.93811 12.6809 8.88911 11.7739 8.89011 10.8619C8.88911 9.90489 8.94211 8.95489 9.04811 8.37689C9.07611 8.22089 9.15811 7.86189 9.18211 7.80389C9.22711 7.69589 9.30911 7.61089 9.40811 7.55789C9.48411 7.51689 9.57111 7.49489 9.65811 7.49789C9.74711 7.49989 10.1091 7.62689 10.2331 7.67589C11.2111 8.05589 13.2801 9.43389 14.0401 10.2439C14.1081 10.3169 14.2951 10.5129 14.3261 10.5529C14.3971 10.6429 14.4321 10.7519 14.4321 10.8619C14.4321 10.9639 14.4011 11.0679 14.3371 11.1549C14.3041 11.1999 14.1131 11.3999 14.0501 11.4669Z'
														strokeLinecap='round'
														strokeLinejoin='round'
													/>
												</svg>{' '}
												2:41
											</span>
										</a>
										<h3 className='interview__title'>
											<a href='interview.html'>A Guide to the Work of Ryan Murphy</a>
										</h3>
									</div>
									<div className='interview'>
										<a href='interview.html' className='interview__cover'>
											<img src='img/interview/3.jpg' alt='' />
											<span>
												<svg width={22} height={22} viewBox='0 0 22 22' fill='none' xmlns='http://www.w3.org/2000/svg'>
													<path
														fillRule='evenodd'
														clipRule='evenodd'
														d='M11 1C16.5228 1 21 5.47716 21 11C21 16.5228 16.5228 21 11 21C5.47716 21 1 16.5228 1 11C1 5.47716 5.47716 1 11 1Z'
														strokeLinecap='round'
														strokeLinejoin='round'
													/>
													<path
														fillRule='evenodd'
														clipRule='evenodd'
														d='M14.0501 11.4669C13.3211 12.2529 11.3371 13.5829 10.3221 14.0099C10.1601 14.0779 9.74711 14.2219 9.65811 14.2239C9.46911 14.2299 9.28711 14.1239 9.19911 13.9539C9.16511 13.8879 9.06511 13.4569 9.03311 13.2649C8.93811 12.6809 8.88911 11.7739 8.89011 10.8619C8.88911 9.90489 8.94211 8.95489 9.04811 8.37689C9.07611 8.22089 9.15811 7.86189 9.18211 7.80389C9.22711 7.69589 9.30911 7.61089 9.40811 7.55789C9.48411 7.51689 9.57111 7.49489 9.65811 7.49789C9.74711 7.49989 10.1091 7.62689 10.2331 7.67589C11.2111 8.05589 13.2801 9.43389 14.0401 10.2439C14.1081 10.3169 14.2951 10.5129 14.3261 10.5529C14.3971 10.6429 14.4321 10.7519 14.4321 10.8619C14.4321 10.9639 14.4011 11.0679 14.3371 11.1549C14.3041 11.1999 14.1131 11.3999 14.0501 11.4669Z'
														strokeLinecap='round'
														strokeLinejoin='round'
													/>
												</svg>{' '}
												7:19
											</span>
										</a>
										<h3 className='interview__title'>
											<a href='interview.html'>Gugu Mbatha-Raw Shares the Films That Give Her Hope</a>
										</h3>
									</div>
									<div className='interview'>
										<a href='interview.html' className='interview__cover'>
											<img src='img/interview/4.jpg' alt='' />
											<span>
												<svg width={22} height={22} viewBox='0 0 22 22' fill='none' xmlns='http://www.w3.org/2000/svg'>
													<path
														fillRule='evenodd'
														clipRule='evenodd'
														d='M11 1C16.5228 1 21 5.47716 21 11C21 16.5228 16.5228 21 11 21C5.47716 21 1 16.5228 1 11C1 5.47716 5.47716 1 11 1Z'
														strokeLinecap='round'
														strokeLinejoin='round'
													/>
													<path
														fillRule='evenodd'
														clipRule='evenodd'
														d='M14.0501 11.4669C13.3211 12.2529 11.3371 13.5829 10.3221 14.0099C10.1601 14.0779 9.74711 14.2219 9.65811 14.2239C9.46911 14.2299 9.28711 14.1239 9.19911 13.9539C9.16511 13.8879 9.06511 13.4569 9.03311 13.2649C8.93811 12.6809 8.88911 11.7739 8.89011 10.8619C8.88911 9.90489 8.94211 8.95489 9.04811 8.37689C9.07611 8.22089 9.15811 7.86189 9.18211 7.80389C9.22711 7.69589 9.30911 7.61089 9.40811 7.55789C9.48411 7.51689 9.57111 7.49489 9.65811 7.49789C9.74711 7.49989 10.1091 7.62689 10.2331 7.67589C11.2111 8.05589 13.2801 9.43389 14.0401 10.2439C14.1081 10.3169 14.2951 10.5129 14.3261 10.5529C14.3971 10.6429 14.4321 10.7519 14.4321 10.8619C14.4321 10.9639 14.4011 11.0679 14.3371 11.1549C14.3041 11.1999 14.1131 11.3999 14.0501 11.4669Z'
														strokeLinecap='round'
														strokeLinejoin='round'
													/>
												</svg>{' '}
												4:58
											</span>
										</a>
										<h3 className='interview__title'>
											<a href='interview.html'>Best of 2020: Top Trending Moments</a>
										</h3>
									</div>
									<div className='interview'>
										<a href='interview.html' className='interview__cover'>
											<img src='img/interview/5.jpg' alt='' />
											<span>
												<svg width={22} height={22} viewBox='0 0 22 22' fill='none' xmlns='http://www.w3.org/2000/svg'>
													<path
														fillRule='evenodd'
														clipRule='evenodd'
														d='M11 1C16.5228 1 21 5.47716 21 11C21 16.5228 16.5228 21 11 21C5.47716 21 1 16.5228 1 11C1 5.47716 5.47716 1 11 1Z'
														strokeLinecap='round'
														strokeLinejoin='round'
													/>
													<path
														fillRule='evenodd'
														clipRule='evenodd'
														d='M14.0501 11.4669C13.3211 12.2529 11.3371 13.5829 10.3221 14.0099C10.1601 14.0779 9.74711 14.2219 9.65811 14.2239C9.46911 14.2299 9.28711 14.1239 9.19911 13.9539C9.16511 13.8879 9.06511 13.4569 9.03311 13.2649C8.93811 12.6809 8.88911 11.7739 8.89011 10.8619C8.88911 9.90489 8.94211 8.95489 9.04811 8.37689C9.07611 8.22089 9.15811 7.86189 9.18211 7.80389C9.22711 7.69589 9.30911 7.61089 9.40811 7.55789C9.48411 7.51689 9.57111 7.49489 9.65811 7.49789C9.74711 7.49989 10.1091 7.62689 10.2331 7.67589C11.2111 8.05589 13.2801 9.43389 14.0401 10.2439C14.1081 10.3169 14.2951 10.5129 14.3261 10.5529C14.3971 10.6429 14.4321 10.7519 14.4321 10.8619C14.4321 10.9639 14.4011 11.0679 14.3371 11.1549C14.3041 11.1999 14.1131 11.3999 14.0501 11.4669Z'
														strokeLinecap='round'
														strokeLinejoin='round'
													/>
												</svg>{' '}
												3:52
											</span>
										</a>
										<h3 className='interview__title'>
											<a href='interview.html'>How Movies and TV Shaped Our Perception of HIV/AIDS</a>
										</h3>
									</div>
									<div className='interview'>
										<a href='interview.html' className='interview__cover'>
											<img src='img/interview/6.jpg' alt='' />
											<span>
												<svg width={22} height={22} viewBox='0 0 22 22' fill='none' xmlns='http://www.w3.org/2000/svg'>
													<path
														fillRule='evenodd'
														clipRule='evenodd'
														d='M11 1C16.5228 1 21 5.47716 21 11C21 16.5228 16.5228 21 11 21C5.47716 21 1 16.5228 1 11C1 5.47716 5.47716 1 11 1Z'
														strokeLinecap='round'
														strokeLinejoin='round'
													/>
													<path
														fillRule='evenodd'
														clipRule='evenodd'
														d='M14.0501 11.4669C13.3211 12.2529 11.3371 13.5829 10.3221 14.0099C10.1601 14.0779 9.74711 14.2219 9.65811 14.2239C9.46911 14.2299 9.28711 14.1239 9.19911 13.9539C9.16511 13.8879 9.06511 13.4569 9.03311 13.2649C8.93811 12.6809 8.88911 11.7739 8.89011 10.8619C8.88911 9.90489 8.94211 8.95489 9.04811 8.37689C9.07611 8.22089 9.15811 7.86189 9.18211 7.80389C9.22711 7.69589 9.30911 7.61089 9.40811 7.55789C9.48411 7.51689 9.57111 7.49489 9.65811 7.49789C9.74711 7.49989 10.1091 7.62689 10.2331 7.67589C11.2111 8.05589 13.2801 9.43389 14.0401 10.2439C14.1081 10.3169 14.2951 10.5129 14.3261 10.5529C14.3971 10.6429 14.4321 10.7519 14.4321 10.8619C14.4321 10.9639 14.4011 11.0679 14.3371 11.1549C14.3041 11.1999 14.1131 11.3999 14.0501 11.4669Z'
														strokeLinecap='round'
														strokeLinejoin='round'
													/>
												</svg>{' '}
												3:52
											</span>
										</a>
										<h3 className='interview__title'>
											<a href='interview.html'>American Gods</a>
										</h3>
									</div>
								</div>
								<button className='section__nav section__nav--interview section__nav--prev' data-nav='#flixtv' type='button'>
									<svg width={17} height={15} viewBox='0 0 17 15' fill='none' xmlns='http://www.w3.org/2000/svg'>
										<path d='M1.25 7.72559L16.25 7.72559' strokeWidth='1.5' strokeLinecap='round' strokeLinejoin='round' />
										<path
											d='M7.2998 1.70124L1.2498 7.72524L7.2998 13.7502'
											strokeWidth='1.5'
											strokeLinecap='round'
											strokeLinejoin='round'
										/>
									</svg>
								</button>
								<button className='section__nav section__nav--interview section__nav--next' data-nav='#flixtv' type='button'>
									<svg width={17} height={15} viewBox='0 0 17 15' fill='none' xmlns='http://www.w3.org/2000/svg'>
										<path d='M15.75 7.72559L0.75 7.72559' strokeWidth='1.5' strokeLinecap='round' strokeLinejoin='round' />
										<path
											d='M9.7002 1.70124L15.7502 7.72524L9.7002 13.7502'
											strokeWidth='1.5'
											strokeLinecap='round'
											strokeLinejoin='round'
										/>
									</svg>
								</button>
							</div>
						</div>
					</div>
				</div>
			</section>
			{/* end videos */}
		</div>
	);
};
export default Home;
