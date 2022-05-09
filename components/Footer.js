import React from "react";

export const Footer = () => {
	return (
		<footer className="bg-black pb-8 text-footer text-xs flex flex-col items-center pt-12 littlesm:text-sm littlelg:text-base littlelg:pb-12">
			<p className="text-base cursor-pointer littlesm:text-lg">
				Questions? Call 1-234-567-8910
			</p>
			<ul className="grid grid-cols-2 gap-4 pt-6 littlesm:grid-cols-3 littlelg:grid-cols-4 littlelg:gap-6">
				<li className="cursor-pointer">FAQ</li>
				<li className="cursor-pointer">Account</li>
				<li className="cursor-pointer">Investor Relations</li>
				<li className="cursor-pointer">Ways to Watch</li>
				<li className="cursor-pointer">Privacy</li>
				<li className="cursor-pointer">
					Corporate
					<br />
					Information
				</li>
				<li className="cursor-pointer">Speed Test</li>
				<li className="cursor-pointer">Only on Netflix</li>
				<li className="cursor-pointer">Help Center</li>
				<li className="cursor-pointer">Media Center</li>
				<li className="cursor-pointer">Jobs</li>
				<li className="cursor-pointer">Terms of Use</li>
				<li className="cursor-pointer">Cookie Preferences</li>
				<li className="cursor-pointer">Contact Us</li>
				<li className="cursor-pointer">Legal Notices</li>
				<li className="cursor-pointer">Netflix ©</li>
			</ul>
		</footer>
	);
};
