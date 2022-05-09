import Image from "next/image";
import React from "react";
import tv from "../public/tv.png";
import cellphone from "../public/cellphone.jpg";
import devices from "../public/devices.png";
import kids from "../public/kids.png";

export const MarketingList = () => {
	return (
		<>
			<section className="bg-black pb-14 px-3 littlelg:pb-8 littlexl:pb-12">
				<div className="pt-12 flex flex-col gap-2 items-center text-center max-w-[1250px] mx-auto littlesm:gap-0 littlelg:flex-row littlelg:pt-4 littlelg:justify-around">
					<div className="flex flex-col gap-2 littlelg:w-6/12 littlelg:text-left littlelg:max-w-[545px]">
						<h2 className="font-bold text-2xl littlesm:text-4xl littlelg:text-5xl littlelg:px-6">
							Enjoy on your TV.
						</h2>
						<p className="text-lg px-3 leading-6 littlesm:text-xl littlesm:px-6 littlesm:pt-4 littlelg:text-2xl">
							Watch on Smart TVs, Playstation, Xbox, Chromecast, Apple TV,
							Blu-ray players, and more.
						</p>
					</div>
					<div className="relative w-[288px] h-[216px] littlesm:w-[463px] littlesm:h-[347px] littlexl:w-[530px] littlexl:h-[395px]">
						<Image src={tv} alt="" layout="fill" />
					</div>
				</div>
			</section>

			<div className="h-2 bg-gray"></div>
			<section className="bg-black pb-12 px-3 littlesm:pb-16">
				<div className="pt-12 flex flex-col items-center text-center max-w-[1250px] mx-auto littlesm:pt-20 littlelg:flex-row littlelg:pt-10 littlelg:justify-around">
					<div className="flex flex-col littlelg:w-6/12 littlelg:text-left littlelg:order-2 littlelg:max-w-[545px]">
						<h2 className="font-bold text-2xl littlesm:text-4xl littlelg:text-5xl littlelg:px-6">
							Download your shows to watch offline.
						</h2>
						<p className="text-lg px-3 pt-2 leading-6 littlesm:pt-4 littlesm:text-xl littlesm:px-6 littlelg:text-2xl">
							Save your favorites easily and always have something to watch.
						</p>
					</div>
					<div className="relative w-[288px] h-[216px] littlesm:w-[463px] littlesm:h-[347px] littlelg:w-[394px] littlelg:h-[296px] littlelg:order-1 littlexl:w-[530px] littlexl:h-[395px]">
						<Image src={cellphone} alt="" layout="fill" />
					</div>
				</div>
			</section>

			<div className="h-2 bg-gray"></div>
			<section className="bg-black pb-12 px-3 littlesm:pb-16">
				<div className="pt-12 flex flex-col gap-2 items-center text-center max-w-[1250px] mx-auto littlesm:pt-20 littlesm:gap-0 littlelg:flex-row littlelg:pt-14 littlelg:justify-around">
					<div className="flex flex-col littlelg:w-6/12 littlelg:text-left littlelg:max-w-[545px]">
						<h2 className="font-bold text-2xl littlesm:text-4xl littlelg:text-5xl littlelg:px-6">
							Watch everywhere.
						</h2>
						<p className="text-lg px-3 leading-6 littlesm:text-xl littlesm:px-6 littlesm:pt-4 littlelg:text-2xl">
							Stream unlimited movies and TV shows on your phone, tablet,
							laptop, and TV without paying more.
						</p>
					</div>
					<div className="relative w-[288px] h-[216px] littlesm:w-[463px] littlesm:h-[347px] littlelg:w-[433px] littlelg:h-[325px] littlexl:w-[530px] littlexl:h-[395px]">
						<Image src={devices} alt="" layout="fill" />
					</div>
				</div>
			</section>

			<div className="h-2 bg-gray"></div>
			<section className="bg-black pb-12 px-3 littlesm:pb-20">
				<div className="pt-12 flex flex-col gap-2 items-center text-center max-w-[1250px] mx-auto littlesm:pt-20 littlesm:gap-0 littlelg:flex-row littlelg:pt-16 littlelg:justify-around">
					<div className="flex flex-col littlelg:w-6/12 littlelg:text-left littlelg:order-2 littlelg:max-w-[545px]">
						<h2 className="font-bold text-2xl littlesm:text-4xl littlelg:text-5xl littlelg:px-6">
							Create profiles for kids.
						</h2>
						<p className="text-lg px-3 leading-6 littlesm:text-xl littlesm:px-6 littlesm:pt-4 littlelg:text-2xl">
							Send kids on adventures with their favorite characters in a space
							made just for them
							<span className="tracking-tighter">---</span>free with your
							membership.
						</p>
					</div>
					<div className="relative w-[288px] h-[216px] littlesm:w-[463px] littlesm:h-[347px] littlelg:order-1 littlelg:w-[394px] littlelg:h-[296px] littlexl:w-[530px] littlexl:h-[395px]">
						<Image src={kids} alt="" layout="fill" />
					</div>
				</div>
			</section>
		</>
	);
};
