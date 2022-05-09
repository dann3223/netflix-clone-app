import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import Image from "next/image";
import forrestgump from "../public/forrestgump.jpg";
import minions from "../public/minions.jpg";
import rango from "../public/rango.jpg";
import madagascar from "../public/madagascar.jpg";

export const MoviesSwiper = () => {
	return (
		<div className="pl-6 littlelg:hidden">
			<h4>Movies</h4>
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
						<Image src={forrestgump} alt="" layout="fill" />
					</div>
				</SwiperSlide>
				<SwiperSlide>
					<div className="relative w-[140px] h-[80px] littlesm:w-[162px] littlesm:h-[92px] md:w-[234px] md:h-[133px]">
						<Image src={minions} alt="" layout="fill" />
					</div>
				</SwiperSlide>
				<SwiperSlide>
					<div className="relative w-[140px] h-[80px] littlesm:w-[162px] littlesm:h-[92px] md:w-[234px] md:h-[133px]">
						<Image src={rango} alt="" layout="fill" />
					</div>
				</SwiperSlide>
				<SwiperSlide>
					<div className="relative w-[140px] h-[80px] littlesm:w-[162px] littlesm:h-[92px] md:w-[234px] md:h-[133px]">
						<Image src={madagascar} alt="" layout="fill" />
					</div>
				</SwiperSlide>
			</Swiper>
		</div>
	);
};
