import Image from "next/image";
import Link from "next/link";
import React from "react";
import netflix from "../public/netflix.svg";

export const MainView = () => {
	return (
		<main className="main-background flex flex-col justify-center items-center px-3 littlesm:px-12 littlelg:px-16">
			<div className="w-full flex justify-between items-center pt-6 littlesm:pt-8">
				<div className="flex items-end relative w-[88.8px] h-[24px] littlesm:w-[108px] littlesm:h-[29.2px] littlelg:w-[134px] littlelg:h-[36px]">
					<Image src={netflix} alt="" layout="fill" />
				</div>
				<Link href="/login" passHref>
					<button className="bg-red text-sm py-1 px-2 rounded-sm drop-shadow littlelg:px-4 littlelg:py-2">
						Sign In
					</button>
				</Link>
			</div>
			<div className="pt-16 pb-16 flex flex-col gap-3 items-center text-center littlesm:pt-40 littlesm:pb-40 littlelg:pb-44">
				<h1 className="font-bold text-3xl leading-8 littlesm:text-5xl littlexl:text-6xl">
					Unlimited movies, TV
					<br className="hidden md:block" /> shows, and more.
				</h1>
				<p className="text-lg littlesm:text-xl littlelg:text-2xl">
					Watch anywhere. Cancel anytime.
				</p>
				<p className="text-lg leading-6 littlesm:text-xl littlelg:text-2xl">
					Ready to watch? Enter your email to create
					<br className="hidden md:block" /> or restart your membership.
				</p>
				<div className="flex flex-col justify-center items-center gap-3 w-8/12 max-w-[500px] littlelg:flex-row littlelg:justify-between littlelg:gap-0 littlelg:w-full">
					<input
						type="text"
						placeholder="Email address"
						className="pl-3 py-3 w-full border-[1px] border-[#656565] text-black outline-none focus:border-[#0091FF] littlelg:h-[60px]"
					/>
					<Link href="/login" passHref>
						<button className="flex bg-red py-2 px-3 rounded-sm box-shadow-special littlesm:text-lg littlelg:w-80 littlelg:text-2xl littlelg:justify-between littlelg:items-center littlelg:h-[60px] littlelg:px-6">
							Get Started
							<svg
								xmlns="http://www.w3.org/2000/svg"
								className="h-6 w-6"
								fill="none"
								viewBox="0 0 24 24"
								stroke="white"
							>
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									strokeWidth={2}
									d="M9 5l7 7-7 7"
								/>
							</svg>
						</button>
					</Link>
				</div>
			</div>
		</main>
	);
};
