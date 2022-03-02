import React from 'react';
import NavBar from './NavBar';
import BackgroundImage from '../image/71.jpg';

const Home = () => {
    return (
			<div>
				<NavBar />
				<main>
					<img src={BackgroundImage} alt="BackgroundImage" className="absolute object-cover w-full h-full" />
					<section className="relative flex justify-center min-h-screen pt-6 lg:pt-48 px-8">
						<h1 className="text-6xl text-green-900 font-bold cursive leading-none lg:leading-snug home-name">Hi!!! I'm Saikat Hossain</h1>
					</section>
				</main>
			</div>
		);
};

export default Home;