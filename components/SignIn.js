import Image from "next/image";
import Link from "next/link";
import React from "react";
import netflix from "../public/netflix.svg";

export const SignIn = ({ handleSignIn }) => {
	return (
		<div className="bg-black text-white">
			<div className="relative w-[75px] h-[20px] top-5 left-3 cursor-pointer littlesm:w-[108px] littlesm:h-[29.2px] littlelg:w-[134px] littlelg:h-[36px]">
				<Link href="/" passHref>
					<Image src={netflix} alt="" layout="fill" />
				</Link>
			</div>
			<section className="flex flex-col justify-center items-center w-11/12 mx-auto pt-5 pb-32 littlesm:w-[320px] md:pt-20 littlelg:pb-36 littlexl:pb-48">
				<h3 className="font-bold text-3xl self-start mt-8">Sign In</h3>
				<button
					onClick={handleSignIn}
					className="font-bold text-lg py-3 bg-red w-full rounded-md mt-4"
				>
					Sign In
				</button>
				<div className="flex w-full justify-between text-footer text-sm mt-2">
					<div className="flex items-center">
						<input type="checkbox" name="remember" id="remember" />
						<label htmlFor="remember" className="pl-1 cursor-pointer">
							Remember me
						</label>
					</div>
					<Link href="/login">Need help?</Link>
				</div>
				<div className="text-footer mt-8">
					<p>
						New to Netflix?{" "}
						<span className="text-base text-white">
							<Link href="/login">Sign up now.</Link>
						</span>
					</p>
					<p className="text-sm mt-3">
						This page is protected by Google reCAPTCHA to ensure you are not a
						bot.{" "}
						<span className="text-[#0645AD]">
							<Link href="/login">Learn more.</Link>
						</span>
					</p>
				</div>
			</section>
			<div className="h-px w-full bg-footer"></div>
			<footer className="pt-6 pb-12 flex flex-col justify-center items-center text-footer">
				<p>Questions? Call 1-234-567-8910</p>
				<ul className="grid grid-cols-2 text-sm gap-3 mt-5 littlelg:grid-cols-4 littlelg:gap-6">
					<li className="cursor-pointer">FAQ</li>
					<li className="cursor-pointer">Help Center</li>
					<li className="cursor-pointer">Terms of Use</li>
					<li className="cursor-pointer">Privacy</li>
					<li className="cursor-pointer">Cookie Preferences</li>
					<li className="cursor-pointer">Corporate Information</li>
				</ul>
			</footer>
		</div>
	);
};
