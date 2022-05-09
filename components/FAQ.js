import Link from "next/link";
import React from "react";
import { Disclosures } from "./Disclosures";

export const FAQ = () => {
	return (
		<section className="bg-black pb-12 littlelg:pb-20">
			<div className="pt-12 flex flex-col items-center text-center littlesm:pt-20">
				<h2 className="font-bold text-2xl littlesm:text-4xl littlesm:px-12 littlelg:text-5xl">
					Frequently Asked Questions
				</h2>

				<Disclosures />

				<p className="text-lg px-3 leading-6 mt-6 littlesm:text-xl littlesm:px-0 littlesm:w-8/12 littlesm:mx-auto littlelg:mt-14">
					Ready to watch? Enter your email to create or restart your membership.
				</p>
				<div className="flex flex-col justify-center items-center gap-3 w-8/12 max-w-[800px] littlelg:flex-row littlelg:justify-between littlelg:gap-0">
					<input
						type="text"
						placeholder="Email address"
						className="mt-3 pl-3 py-3 w-10/12 mx-auto border-[1px] border-[#656565] text-black outline-none focus:border-[#0091FF] littlelg:h-[60px]"
					/>
					<Link href="/login" passHref>
						<button className="flex bg-red mt-3 py-2 px-3 rounded-sm box-shadow-special littlesm:text-lg littlelg:w-60 littlelg:text-2xl littlelg:justify-between littlelg:items-center littlelg:h-[60px] littlelg:px-6">
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
		</section>
	);
};
