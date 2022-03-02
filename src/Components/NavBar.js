import React from 'react';
import { NavLink } from "react-router-dom";
import { SocialIcon } from 'react-social-icons';
const NavBar = () => {
    return (
			<header className="bg-red-600 sticky top-0 z-50">
				<div className="container mx-auto flex justify-between">
					<nav className="flex">
						<NavLink
							activeClassName="text-white"
							className="inline-flex items-center py-6 px-3 mr-4 text-red-100 hover:text-green-800 text-4xl font-bold cursive tracking-widest"
							to="/"
						>
							SAIKAT
						</NavLink>
						<NavLink
							to="/post"
							className={({ isActive }) =>
								isActive
									? "inline-flex items-center py-3 px-3 my-6 rounded text-red-100 bg-red-700"
									: "inline-flex items-center py-3 px-3 my-6 rounded text-red-200 hover:text-green-800"
							}
						>
							Blog Post
						</NavLink>
						<NavLink
							to="/project"
							className={({ isActive }) =>
								isActive
									? "inline-flex items-center py-3 px-3 my-6 rounded text-red-100 bg-red-700"
									: "inline-flex items-center py-3 px-3 my-6 rounded text-red-200 hover:text-green-800"
							}
						>
							Projects
						</NavLink>
						<NavLink
							to="/about"
							className={({ isActive }) =>
								isActive
									? "inline-flex items-center py-3 px-3 my-6 rounded text-red-100 bg-red-700"
									: "inline-flex items-center py-3 px-3 my-6 rounded text-red-200 hover:text-green-800"
							}
						>
							About Me
						</NavLink>
					</nav>
					<div className="inline-flex py-3 px-3 my-6">
						<SocialIcon
							url="https://www.linkedin.com/in/saikat-in/"
							className="mr-4"
							target="_blank"
							fgColor="#fff"
							style={{ height: 35, width: 35 }}
						/>
						<SocialIcon
							url="https://github.com/saikat100"
							className="mr-4"
							target="_blank"
							fgColor="#fff"
							style={{ height: 35, width: 35 }}
						/>
						<SocialIcon
							url="https://www.facebook.com/HashTagSaikat/"
							className="mr-4"
							target="_blank"
							fgColor="#fff"
							style={{ height: 35, width: 35 }}
						/>
					</div>
				</div>
			</header>
		);
};

export default NavBar;