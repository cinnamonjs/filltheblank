"use client"

import { useState } from 'react';
import { Link } from "@nextui-org/link";
import { motion } from "framer-motion"
import Obj from '@/components/bgobj';
import { siteConfig } from "@/config/site";
import { ThemeSwitch } from "@/components/theme-switch";
import {
	TwitterIcon,
	GithubIcon,
	DiscordIcon,
} from "@/components/icons";

export default function Home() {
	const [position, setPosition] = useState({ x: 0, y: 0 });

	const handleMouseMove = (event: { clientX: number; clientY: number; }) => {
		setPosition({ x: event.clientX - window.innerWidth / 2, y: event.clientY - window.innerHeight / 2 });
		console.log(position);
	};
	return (
		<div className='flex relative top-0 flex-col w-screen h-screen overflow-hidden bg-gray-50 dark:bg-zinc-800' onMouseMove={handleMouseMove}>
			<Obj position={position} speedx={0.08} speedy={0.02} size={'w-24 h-24'} location={'top-8 left-3/4'} color={'bg-purple-100'} />
			<Obj position={position} speedx={0.12} speedy={0.04} size={'w-20 h-20'} location={'top-24 left-[calc(75%_-_6rem)] rounded-full'} color={'bg-rose-300/40'} />
			<Obj position={position} speedx={0.34} speedy={0.12} size={'w-24 h-10'} location={'top-4 left-[calc(75%_+_8rem)]'} color={'bg-teal-300/40'} />
			<Obj position={position} speedx={0.04} speedy={0.04} size={'w-48 h-48'} location={'top-32 left-[calc(75%_+_1rem)]'} color={'bg-sky-300/40'} />
			<Obj position={position} speedx={0.18} speedy={0.22} size={'w-16 h-16'} location={'top-[calc(25%_-_8rem)] left-[calc(25%_-_4rem)] rounded-full'} color={'bg-rose-300/40'} />
			<Obj position={position} speedx={0.14} speedy={0.18} size={'w-8 h-8'} location={'top-[calc(25%_-_12rem)] left-[calc(25%_+_12rem)]'} color={'bg-yellow-300/40'} />
			<Obj position={position} speedx={0.09} speedy={0.11} size={'w-20 h-24'} location={'top-[calc(25%_+_3rem)] left-[calc(25%_-_5rem)]'} color={'bg-sky-300/40'} />
			<Obj position={position} speedx={0.24} speedy={0.09} size={'w-24 h-24'} location={'top-[calc(25%_+_7rem)] left-[calc(25%_+_8rem)] rounded-full'} color={'bg-teal-300/40'} />
			<Obj position={position} speedx={0.04} speedy={0.03} size={'w-72 h-72'} location={'top-[calc(75%_-_12rem)] right-[calc(12%_-_11rem)] rounded-full'} color={'bg-rose-300/40'} />
			<Obj position={position} speedx={0.34} speedy={0.18} size={'w-10 h-10'} location={'top-[calc(75%_-_2rem)] right-[calc(12%_+_2rem)]'} color={'bg-purple-300/40'} />
			<Obj position={position} speedx={0.08} speedy={0.33} size={'w-8 h-8'} location={'bottom-[calc(15%_-_12rem)] left-[calc(12%_-_11rem)] rounded-full'} color={'bg-yellow-300/40'} />
			<Obj position={position} speedx={0.04} speedy={0.08} size={'w-80 h-80'} location={'bottom-[calc(15%_-_2rem)] left-[calc(12%_+_2rem)]'} color={'bg-green-300/40'} />
			<Obj position={position} speedx={0.04} speedy={0.05} size={'w-20 h-20'} location={'bottom-[calc(45%_+_2rem)] left-[calc(45%_-_11rem)] rounded-full'} color={'bg-yellow-300/40'} />
			<Obj position={position} speedx={0.08} speedy={0.06} size={'w-24 h-24'} location={'bottom-[calc(45%_-_2rem)] left-[calc(45%_+_2rem)]'} color={'bg-green-300/40'} />
			<div className={`z-10 transition-all bg-size-150 bg-pos-0 hover:bg-pos-100 mt-32 mx-auto tracking-[-0.15rem] hover:tracking-[1rem] font-sans font-bold text-7xl text-transparent bg-clip-text bg-gradient-to-br from-sky-700 dark:from-sky-300 from-10% via-indigo-900 dark:via-indigo-300 via-30% to-rose-700 dark:to-rose-400 to-70% duration-1000 ease-in-out`}>Fill the blanks</div>
			<img src="https://media.tenor.com/-vOy1q13l7oAAAAC/kaon-priconne.gif" className="mx-auto mt-4 rounded-xl drop-shadow-md w-80"></img>
			<motion.button className='z-10 mx-auto w-[200px] text-center mt-60 font-bold tracking-tight font-sans text-2xl text-black/70 bg-transparent hover:bg-white dark:hover:bg-black/70 hover:px-8 hover:pb-1 hover:drop-shadow-md rounded-full'
				whileHover={{
					scale: 1.2,
					x: (position.x + 20) * 0.1,
					y: (position.y - 20) * 0.3,
					transition: {
						delay: 0,
						type: 'tween',
						duration: 0.2,
					}
				}}
			>
				<Link href="/game" className='text-black/70 dark:text-white/80 text-2xl'>Starts!</Link>
			</motion.button>
			<div className='absolute bottom-20 left-1/2 -translate-x-1/2'>
				<Link isExternal href={'https://discord.com/users/520221818066305024'} aria-label="Discord">
					<DiscordIcon className="text-default-500" />
				</Link>
				<Link isExternal href={'https://github.com/cinnamonjs'} aria-label="Github">
					<GithubIcon className="text-default-500" />
				</Link>
				<ThemeSwitch />
			</div>
		</div>
	);
}
