import Image from "next/image";
import Link from "next/link";
import React from "react";
import netflix from "../public/netflix.svg";
import usuario1 from "../public/usuario1.png";
import usuario2 from "../public/usuario2.png";
import usuario3 from "../public/usuario3.png";
import usuario4 from "../public/usuario4.png";
import usuario5 from "../public/usuario5.png";

export const UserSelection = () => {
	return (
		<div className="bg-[#141414] text-white h-screen">
			<div className="relative w-[75px] h-[20px] top-5 left-3 cursor-pointer littlesm:w-[108px] littlesm:h-[29.2px] littlelg:w-[134px] littlelg:h-[36px]">
				<Link href="/login" passHref>
					<Image src={netflix} alt="" layout="fill" />
				</Link>
			</div>
			<section className="flex flex-col justify-center items-center pt-12 md:pt-36">
				<h3 className="font-normal text-3xl text-center littlexl:text-4xl">
					Who is watching <br className="littlesm:hidden" />
					right now?
				</h3>
				<div className="grid grid-cols-2 gap-x-2 gap-y-8 pt-6 littlesm:gap-x-4 md:grid-cols-5">
					<Link href="/browse" passHref>
						<div className="bg-gray w-20 h-20 rounded-lg relative littlelg:w-24 littlelg:h-24 littlexl:w-36 littlexl:h-36 hover:ring-4 hover:ring-white">
							<Image
								src={usuario2}
								alt=""
								layout="fill"
								className="rounded-md"
							/>
							<p className="text-[#808080] text-xs absolute top-[84px] left-6 littlelg:top-24 littlelg:left-8 littlexl:top-40 littlexl:left-14 littlexl:text-sm">
								User 1
							</p>
						</div>
					</Link>

					<Link href="/browse" passHref>
						<div className="bg-gray w-20 h-20 rounded-lg relative littlelg:w-24 littlelg:h-24 littlexl:w-36 littlexl:h-36 hover:ring-4 hover:ring-white">
							<Image
								src={usuario1}
								alt=""
								layout="fill"
								className="rounded-md"
							/>
							<p className="text-[#808080] text-xs absolute top-[84px] left-6 littlelg:top-24 littlelg:left-8 littlexl:top-40 littlexl:left-14 littlexl:text-sm">
								User 2
							</p>
						</div>
					</Link>

					<Link href="/browse" passHref>
						<div className="bg-gray w-20 h-20 rounded-lg relative littlelg:w-24 littlelg:h-24 littlexl:w-36 littlexl:h-36 hover:ring-4 hover:ring-white">
							<Image
								src={usuario3}
								alt=""
								layout="fill"
								className="rounded-md"
							/>
							<p className="text-[#808080] text-xs absolute top-[84px] left-6 littlelg:top-24 littlelg:left-8 littlexl:top-40 littlexl:left-14 littlexl:text-sm">
								User 3
							</p>
						</div>
					</Link>

					<Link href="/browse" passHref>
						<div className="bg-gray w-20 h-20 rounded-lg relative littlelg:w-24 littlelg:h-24 littlexl:w-36 littlexl:h-36 hover:ring-4 hover:ring-white">
							<Image
								src={usuario4}
								alt=""
								layout="fill"
								className="rounded-md"
							/>
							<p className="text-[#808080] text-xs absolute top-[84px] left-6 littlelg:top-24 littlelg:left-8 littlexl:top-40 littlexl:left-14 littlexl:text-sm">
								User 4
							</p>
						</div>
					</Link>

					<Link href="/browse" passHref>
						<div className="bg-gray w-20 h-20 rounded-lg relative littlelg:w-24 littlelg:h-24 littlexl:w-36 littlexl:h-36 hover:ring-4 hover:ring-white">
							<Image
								src={usuario5}
								alt=""
								layout="fill"
								className="rounded-md"
							/>
							<p className="text-[#808080] text-xs absolute top-[84px] left-6 littlelg:top-24 littlelg:left-8 littlexl:top-40 littlexl:left-14 littlexl:text-sm">
								User 5
							</p>
						</div>
					</Link>
				</div>
				<Link href="/login" passHref>
					<button className="mt-10 text-[#808080] text-sm px-2 border-[1px] littlexl:mt-16 hover:bg-gray">
						Manage Profiles
					</button>
				</Link>
			</section>
		</div>
	);
};
