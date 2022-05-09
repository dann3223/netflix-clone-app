import React from "react";
import { Disclosure } from "@headlessui/react";

export const Disclosures = () => {
	return (
		<div className="w-full mt-6 littlelg:mt-12">
			<Disclosure>
				{({ open }) => (
					<>
						<Disclosure.Button className="flex justify-between w-full py-3 px-5 text-base font-normal text-left bg-discgray outline-none littlesm:text-xl littlesm:py-4 littlesm:w-9/12 littlesm:max-w-[800px] littlesm:mx-auto littlelg:text-2xl littlelg:py-5">
							<span>What is Netflix?</span>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								className={`${
									open ? "hidden" : ""
								} h-6 w-6 littlelg:h-7 littlelg:w-7`}
								fill="none"
								viewBox="0 0 24 24"
								stroke="currentColor"
							>
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									strokeWidth={2}
									d="M12 4v16m8-8H4"
								/>
							</svg>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								className={`${
									open ? "" : "hidden"
								} h-6 w-6 littlelg:h-7 littlelg:w-7`}
								fill="none"
								viewBox="0 0 24 24"
								stroke="currentColor"
							>
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									strokeWidth={2}
									d="M6 18L18 6M6 6l12 12"
								/>
							</svg>
						</Disclosure.Button>
						<Disclosure.Panel className="mt-[1px] px-5 pt-6 pb-6 text-white text-left text-base bg-discgray littlesm:text-xl littlesm:w-9/12 littlesm:max-w-[800px] littlesm:mx-auto littlelg:text-2xl">
							Netflix is a streaming service that offers a wide variety of
							award-winning TV shows, movies, anime, documentaries, and more on
							thousands of internet-connected devices.
							<br />
							<br />
							You can watch as much as you want, whenever you want without a
							single commercial <span className="tracking-tighter">--</span> all
							for one low monthly price. There is always something new to
							discover and new TV shows and movies are added every week!
						</Disclosure.Panel>
					</>
				)}
			</Disclosure>
			<Disclosure as="div" className="mt-2">
				{({ open }) => (
					<>
						<Disclosure.Button className="flex justify-between w-full py-3 px-5 text-base font-normal text-left bg-discgray outline-none littlesm:text-xl littlesm:py-4 littlesm:w-9/12 littlesm:max-w-[800px] littlesm:mx-auto littlelg:text-2xl littlelg:py-5">
							<span>How much does Netflix cost?</span>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								className={`${
									open ? "hidden" : ""
								} h-6 w-6 littlelg:h-7 littlelg:w-7`}
								fill="none"
								viewBox="0 0 24 24"
								stroke="currentColor"
							>
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									strokeWidth={2}
									d="M12 4v16m8-8H4"
								/>
							</svg>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								className={`${
									open ? "" : "hidden"
								} h-6 w-6 littlelg:h-7 littlelg:w-7`}
								fill="none"
								viewBox="0 0 24 24"
								stroke="currentColor"
							>
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									strokeWidth={2}
									d="M6 18L18 6M6 6l12 12"
								/>
							</svg>
						</Disclosure.Button>
						<Disclosure.Panel className="mt-[1px] px-5 pt-6 pb-6 text-white text-left text-base bg-discgray littlesm:text-xl littlesm:w-9/12 littlesm:max-w-[800px] littlesm:mx-auto littlelg:text-2xl">
							Watch Netflix on your smartphone, tablet, Smart TV, laptop, or
							streaming device, all for one fixed monthly fee. Plans range from
							$$$ to $$$ a month (pre-tax). No extra costs, no contracts.
						</Disclosure.Panel>
					</>
				)}
			</Disclosure>
			<Disclosure as="div" className="mt-2">
				{({ open }) => (
					<>
						<Disclosure.Button className="flex justify-between w-full py-3 px-5 text-base font-normal text-left bg-discgray outline-none littlesm:text-xl littlesm:py-4 littlesm:w-9/12 littlesm:max-w-[800px] littlesm:mx-auto littlelg:text-2xl littlelg:py-5">
							<span>Where can I watch?</span>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								className={`${
									open ? "hidden" : ""
								} h-6 w-6 littlelg:h-7 littlelg:w-7`}
								fill="none"
								viewBox="0 0 24 24"
								stroke="currentColor"
							>
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									strokeWidth={2}
									d="M12 4v16m8-8H4"
								/>
							</svg>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								className={`${
									open ? "" : "hidden"
								} h-6 w-6 littlelg:h-7 littlelg:w-7`}
								fill="none"
								viewBox="0 0 24 24"
								stroke="currentColor"
							>
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									strokeWidth={2}
									d="M6 18L18 6M6 6l12 12"
								/>
							</svg>
						</Disclosure.Button>
						<Disclosure.Panel className="mt-[1px] px-5 pt-6 pb-6 text-white text-left text-base bg-discgray littlesm:text-xl littlesm:w-9/12 littlesm:max-w-[800px] littlesm:mx-auto littlelg:text-2xl">
							Watch anywhere, anytime. Sign in with your Netflix account to
							watch instantly on the web at netflix.com from your personal
							computer or on any internet-connected device that offers the
							Netflix app, including smart TVs, smartphones, tablets, streaming
							media players and game consoles.
							<br />
							<br />
							You can also download your favorite shows with the iOS, Android,
							or Windows 10 app. Use downloads to watch while you are on the go
							and without an internet connection. Take Netflix with you
							anywhere.
						</Disclosure.Panel>
					</>
				)}
			</Disclosure>
			<Disclosure as="div" className="mt-2">
				{({ open }) => (
					<>
						<Disclosure.Button className="flex justify-between w-full py-3 px-5 text-base font-normal text-left bg-discgray outline-none littlesm:text-xl littlesm:py-4 littlesm:w-9/12 littlesm:max-w-[800px] littlesm:mx-auto littlelg:text-2xl littlelg:py-5">
							<span>How do I cancel?</span>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								className={`${
									open ? "hidden" : ""
								} h-6 w-6 littlelg:h-7 littlelg:w-7`}
								fill="none"
								viewBox="0 0 24 24"
								stroke="currentColor"
							>
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									strokeWidth={2}
									d="M12 4v16m8-8H4"
								/>
							</svg>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								className={`${
									open ? "" : "hidden"
								} h-6 w-6 littlelg:h-7 littlelg:w-7`}
								fill="none"
								viewBox="0 0 24 24"
								stroke="currentColor"
							>
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									strokeWidth={2}
									d="M6 18L18 6M6 6l12 12"
								/>
							</svg>
						</Disclosure.Button>
						<Disclosure.Panel className="mt-[1px] px-5 pt-6 pb-6 text-white text-left text-base bg-discgray littlesm:text-xl littlesm:w-9/12 littlesm:max-w-[800px] littlesm:mx-auto littlelg:text-2xl">
							Netflix is flexible. There are no pesky contracts and no
							commitments. You can easily cancel your account online in two
							clicks. There are no cancellation fees{" "}
							<span className="tracking-tighter">--</span> start or stop your
							account anytime.
						</Disclosure.Panel>
					</>
				)}
			</Disclosure>
			<Disclosure as="div" className="mt-2">
				{({ open }) => (
					<>
						<Disclosure.Button className="flex justify-between w-full py-3 px-5 text-base font-normal text-left bg-discgray outline-none littlesm:text-xl littlesm:py-4 littlesm:w-9/12 littlesm:max-w-[800px] littlesm:mx-auto littlelg:text-2xl littlelg:py-5">
							<span>What can I watch on Netflix?</span>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								className={`${
									open ? "hidden" : ""
								} h-6 w-6 littlelg:h-7 littlelg:w-7`}
								fill="none"
								viewBox="0 0 24 24"
								stroke="currentColor"
							>
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									strokeWidth={2}
									d="M12 4v16m8-8H4"
								/>
							</svg>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								className={`${
									open ? "" : "hidden"
								} h-6 w-6 littlelg:h-7 littlelg:w-7`}
								fill="none"
								viewBox="0 0 24 24"
								stroke="currentColor"
							>
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									strokeWidth={2}
									d="M6 18L18 6M6 6l12 12"
								/>
							</svg>
						</Disclosure.Button>
						<Disclosure.Panel className="mt-[1px] px-5 pt-6 pb-6 text-white text-left text-base bg-discgray littlesm:text-xl littlesm:w-9/12 littlesm:max-w-[800px] littlesm:mx-auto littlelg:text-2xl">
							Netflix has an extensive library of feature films, documentaries,
							TV shows, anime, award-winning Netflix originals, and more. Watch
							as much as you want, anytime you want.
						</Disclosure.Panel>
					</>
				)}
			</Disclosure>
			<Disclosure as="div" className="mt-2">
				{({ open }) => (
					<>
						<Disclosure.Button className="flex justify-between w-full py-3 px-5 text-base font-normal text-left bg-discgray outline-none littlesm:text-xl littlesm:py-4 littlesm:w-9/12 littlesm:max-w-[800px] littlesm:mx-auto littlelg:text-2xl littlelg:py-5">
							<span>Is Netflix good for kids?</span>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								className={`${
									open ? "hidden" : ""
								} h-6 w-6 littlelg:h-7 littlelg:w-7`}
								fill="none"
								viewBox="0 0 24 24"
								stroke="currentColor"
							>
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									strokeWidth={2}
									d="M12 4v16m8-8H4"
								/>
							</svg>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								className={`${
									open ? "" : "hidden"
								} h-6 w-6 littlelg:h-7 littlelg:w-7`}
								fill="none"
								viewBox="0 0 24 24"
								stroke="currentColor"
							>
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									strokeWidth={2}
									d="M6 18L18 6M6 6l12 12"
								/>
							</svg>
						</Disclosure.Button>
						<Disclosure.Panel className="mt-[1px] px-5 pt-6 pb-6 text-white text-left text-base bg-discgray littlesm:text-xl littlesm:w-9/12 littlesm:max-w-[800px] littlesm:mx-auto littlelg:text-2xl">
							The Netflix Kids experience is included in your membership to give
							parents control while kids enjoy family-friendly TV shows and
							movies in their own space.
							<br />
							<br />
							Kids profiles come with PIN-protected parental controls that let
							you restrict the maturity rating of content kids can watch and
							block specific titles you don’t want kids to see.
						</Disclosure.Panel>
					</>
				)}
			</Disclosure>
		</div>
	);
};
