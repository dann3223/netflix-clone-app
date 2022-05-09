import Image from "next/image";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import community from "../public/community.jpg";
import howtosell from "../public/howtosell.jpg";
import arrested from "../public/arrested.jpg";
import atlanta from "../public/atlanta.jpg";

export const ComediesSwiper = () => {
	return (
		<div className="pl-6 littlelg:hidden">
			<h4>Comedies</h4>
			<Swiper
				breakpoints={{
					320: {
						width: 320,
						slidesPerView: 3,
						spaceBetween: 110,
					},
					550: {
						width: 550,
						slidesPerView: 3,
						spaceBetween: -60,
					},
					758: {
						width: 758,
						slidesPerView: 3,
						spaceBetween: -50,
					},
				}}
			>
				<SwiperSlide>
					<div className="relative w-[140px] h-[80px] littlesm:w-[162px] littlesm:h-[92px] md:w-[234px] md:h-[133px]">
						<Image src={community} alt="" layout="fill" />
					</div>
				</SwiperSlide>
				<SwiperSlide>
					<div className="relative w-[140px] h-[80px] littlesm:w-[162px] littlesm:h-[92px] md:w-[234px] md:h-[133px]">
						<Image src={howtosell} alt="" layout="fill" />
					</div>
				</SwiperSlide>
				<SwiperSlide>
					<div className="relative w-[140px] h-[80px] littlesm:w-[162px] littlesm:h-[92px] md:w-[234px] md:h-[133px]">
						<Image src={arrested} alt="" layout="fill" />
					</div>
				</SwiperSlide>
				<SwiperSlide>
					<div className="relative w-[140px] h-[80px] littlesm:w-[162px] littlesm:h-[92px] md:w-[234px] md:h-[133px]">
						<Image src={atlanta} alt="" layout="fill" />
					</div>
				</SwiperSlide>
			</Swiper>
		</div>
	);
};
