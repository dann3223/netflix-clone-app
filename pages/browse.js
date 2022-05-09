import React, { useState } from "react";
import Link from "next/link";
import Head from "next/head";
import Image from "next/image";
import { TrendSwiper } from "../components/TrendSwiper";
import { TvShowsSwiper } from "../components/TvShowsSwiper";
import { MoviesSwiper } from "../components/MoviesSwiper";
import { OnlyOnNetflixSwiper } from "../components/OnlyOnNetflixSwiper";
import { ComediesSwiper } from "../components/ComediesSwiper";
import netflix from "../public/netflix.svg";
import burger from "../public/burger.gif";

const Browse = () => {
	const [search, setSearch] = useState("");
	const [isNav, setIsNav] = useState(false);

	const handleSearch = e => {
		setSearch(e.target.value);
	};

	const handleNav = () => {
		setIsNav(!isNav);
	};

	return (
		<>
			<Head>
				<title>Netflix Clone</title>
				<link rel="shortcut icon" href="/netflixlogo.svg" />
			</Head>
			<div className="bg-black">
				<div className="bg-[#141414] text-white md:bg-black max-w-screen-maxsize mx-auto">
					<div className="browse-background">
						<nav className="grid grid-cols-4 place-items-center bg-black bg-opacity-50 pb-6 sticky top-0 z-20 md:bg-opacity-0">
							<div
								onClick={handleNav}
								className="place-self-start w-[24px] h-[24px] relative top-3 left-6 cursor-pointer littlesm:w-[28px] littlesm:h-[28px] littlelg:w-[36px] littlelg:h-[36px]"
							>
								<Image src={burger} alt="" layout="fill" />
							</div>
							<div className="w-[75px] h-[20px] place-self-start relative top-3 cursor-pointer littlesm:right-16 md:right-28 littlelg:right-40 littlexl:right-56 littlesm:w-[108px] littlesm:h-[29.2px] littlelg:w-[134px] littlelg:h-[36px]">
								<Link href="/browse" passHref>
									<Image src={netflix} alt="" layout="fill" />
								</Link>
							</div>
							<div className="relative top-3 col-span-2 place-self-center w-full grid place-items-center">
								<input
									type="text"
									placeholder="Search"
									value={search}
									onChange={handleSearch}
									className="bg-[#141414] border-[1px] border-[#C4C4C4] outline-none w-10/12 pl-2 md:place-self-start md:w-8/12"
								/>
							</div>
						</nav>

						{isNav ? (
							<section className="absolute w-60 bg-black text-footer font-bold z-10">
								<div className="pl-6 flex flex-col gap-2 pb-4 relative">
									<div className="w-[3px] h-8 bg-red absolute left-0 -top-1"></div>
									<p className="text-white">Home</p>
									<p>My List</p>
									<p>Account</p>
									<p>Help Center</p>
									<Link href="/" passHref>
										<p className="cursor-pointer">Log Out</p>
									</Link>
								</div>
								<div className="h-[1px] w-full bg-footer"></div>
								<div className="pl-6 flex flex-col gap-1 pt-4 pb-4">
									<p>Thrillers</p>
									<p>Movies</p>
									<p>TV Shows</p>
									<p>Made For Kids</p>
									<p>International</p>
									<p>Reality Shows</p>
									<p>Action</p>
									<p>Anime</p>
									<p>Comedy</p>
									<p>Fantasy</p>
									<p>Science Fiction</p>
									<p>Stand Up Comedy</p>
									<p>Documentaries</p>
									<p>Musicals</p>
									<p>Hollywood</p>
									<p>Romances</p>
									<p>Dramas</p>
								</div>
							</section>
						) : (
							<></>
						)}

						<main className="text-footer font-bold text-lg pt-2 pb-10 flex flex-col gap-10 md:pt-96">
							<TrendSwiper />

							<TvShowsSwiper />

							<MoviesSwiper />

							<OnlyOnNetflixSwiper />

							<ComediesSwiper />
						</main>
					</div>
				</div>
			</div>
		</>
	);
};

export default Browse;
