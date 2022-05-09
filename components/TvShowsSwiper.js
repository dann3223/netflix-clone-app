import React from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import breakingbad from "../public/breakingbad.jpg";
import bettercallsaul from "../public/bettercallsaul.jpg";
import seinfeld from "../public/seinfeld.jpg";
import sexeducation from "../public/sexeducation.jpg";

export const TvShowsSwiper = () => {
	return (
		<div className="pl-6 littlelg:hidden">
			<h4>TV Shows</h4>
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
						<Image src={breakingbad} alt="" layout="fill" />
					</div>
				</SwiperSlide>
				<SwiperSlide>
					<div className="relative w-[140px] h-[80px] littlesm:w-[162px] littlesm:h-[92px] md:w-[234px] md:h-[133px]">
						<Image src={bettercallsaul} alt="" layout="fill" />
					</div>
				</SwiperSlide>
				<SwiperSlide>
					<div className="relative w-[140px] h-[80px] littlesm:w-[162px] littlesm:h-[92px] md:w-[234px] md:h-[133px]">
						<Image src={seinfeld} alt="" layout="fill" />
					</div>
				</SwiperSlide>
				<SwiperSlide>
					<div className="relative w-[140px] h-[80px] littlesm:w-[162px] littlesm:h-[92px] md:w-[234px] md:h-[133px]">
						<Image src={sexeducation} alt="" layout="fill" />
					</div>
				</SwiperSlide>
			</Swiper>
		</div>
	);
};
