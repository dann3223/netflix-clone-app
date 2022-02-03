import React, { useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { signOut } from 'next-auth/react'
import Link from 'next/link'
import Image from 'next/image'
import netflix from '../public/netflix.svg'
import burger from '../public/burger.gif'
import suits from '../public/suits.jpg'
import bojack from '../public/bojack.jpg'
import demonslayer from '../public/demonslayer.jpg'
import peakyblinders from '../public/peakyblinders.jpg'
import breakingbad from '../public/breakingbad.jpg'
import bettercallsaul from '../public/bettercallsaul.jpg'
import seinfeld from '../public/seinfeld.jpg'
import sexeducation from '../public/sexeducation.jpg'
import forrestgump from '../public/forrestgump.jpg'
import minions from '../public/minions.jpg'
import rango from '../public/rango.jpg'
import madagascar from '../public/madagascar.jpg'
import blackmirror from '../public/blackmirror.jpg'
import lacasa from '../public/lacasa.jpg'
import alteredcarbon from '../public/alteredcarbon.jpg'
import closeenough from '../public/closeenough.jpg'
import community from '../public/community.jpg'
import howtosell from '../public/howtosell.jpg'
import arrested from '../public/arrested.jpg'
import atlanta from '../public/atlanta.jpg'

const Browse = () => {

  const [search, setSearch] = useState('')
  const [isNav, setIsNav] = useState(false)

  const handleSearch = (e) => {
    setSearch(e.target.value)
  }

  const handleNav = () => {
    setIsNav(!isNav)
  }

  return (
    <div>
      <div className='bg-[#141414] text-white'>
        <nav className='grid grid-cols-4 place-items-center bg-black bg-opacity-50 pb-6 sticky top-0 z-20'>
          <div
            onClick={handleNav} 
            className='place-self-start w-[24px] h-[24px] relative top-3 left-6 cursor-pointer littlesm:w-[28px] littlesm:h-[28px] littlelg:w-[36px] littlelg:h-[36px]'>
            <Image src={burger} alt='' layout='fill' />
          </div>
          <div className='w-[75px] h-[20px] place-self-start relative top-3 cursor-pointer littlesm:w-[108px] littlesm:h-[29.2px] littlelg:w-[134px] littlelg:h-[36px]'>
            <Link href='/browse' passHref>
              <Image src={netflix} alt='' layout='fill' />
            </Link>
          </div>
          <div className='relative top-3 col-span-2 place-self-center'>
            <input type="text" placeholder='Search' value={search} onChange={handleSearch} className='bg-[#141414] border-[1px] border-[#C4C4C4] outline-none w-28 pl-2' />
          </div>
        </nav>
        
        {isNav?
          <section className='absolute w-60 bg-black text-footer font-bold z-10'>
            <div className='pl-6 flex flex-col gap-2 pb-4 relative'>
              <div className='w-[3px] h-8 bg-red absolute left-0 -top-1'></div>
              <p className='text-white'>Home</p>
              <p>My List</p>
              <p>Account</p>
              <p>Help Center</p>
              <p className='cursor-pointer' onClick={() => signOut({ callbackUrl: 'http://localhost:3000/' })}>Log Out</p>
            </div>
            <div className='h-[1px] w-full bg-footer'></div>
            <div className='pl-6 flex flex-col gap-1 pt-4 pb-4'>
              <p>Thrillers</p>
              <p>Movies</p>
              <p>TV Shows</p>
              <p>Made For Kids</p>
              <p>International</p>
              <p>Reality Shows</p>
              <p>Action</p>
              <p>Anime</p>
              <p>Comedy</p>
              <p>Fantasy</p>
              <p>Science Fiction</p>
              <p>Stand Up Comedy</p>
              <p>Documentaries</p>
              <p>Musicals</p>
              <p>Hollywood</p>
              <p>Romances</p>
              <p>Dramas</p>
            </div>
          </section>
        : <></>
        }

        <main className='text-footer font-bold text-lg pl-6 pt-2 pb-10 flex flex-col gap-10 over'>
          <div className=''>
            <h4>Trends</h4>
            <Swiper
              spaceBetween={130}
              slidesPerView={3}
            >
              <SwiperSlide>
                <div className='relative w-[140px] h-[80px]'>
                  <Image src={suits} alt='' layout='fill' />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className='relative w-[140px] h-[80px]'>
                  <Image src={bojack} alt='' layout='fill' />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className='relative w-[140px] h-[80px]'>
                  <Image src={demonslayer} alt='' layout='fill' />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className='relative w-[140px] h-[80px]'>
                  <Image src={peakyblinders} alt='' layout='fill' />
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
          <div>
            <h4>TV Shows</h4>
            <Swiper
              spaceBetween={130}
              slidesPerView={3}
            >
              <SwiperSlide>
                <div className='relative w-[140px] h-[80px]'>
                  <Image src={breakingbad} alt='' layout='fill' />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className='relative w-[140px] h-[80px]'>
                  <Image src={bettercallsaul} alt='' layout='fill' />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className='relative w-[140px] h-[80px]'>
                  <Image src={seinfeld} alt='' layout='fill' />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className='relative w-[140px] h-[80px]'>
                  <Image src={sexeducation} alt='' layout='fill' />
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
          <div>
            <h4>Movies</h4>
            <Swiper
              spaceBetween={130}
              slidesPerView={3}
            >
              <SwiperSlide>
                <div className='relative w-[140px] h-[80px]'>
                  <Image src={forrestgump} alt='' layout='fill' />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className='relative w-[140px] h-[80px]'>
                  <Image src={minions} alt='' layout='fill' />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className='relative w-[140px] h-[80px]'>
                  <Image src={rango} alt='' layout='fill' />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className='relative w-[140px] h-[80px]'>
                  <Image src={madagascar} alt='' layout='fill' />
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
          <div>
            <h4>Only on Netflix</h4>
            <Swiper
              spaceBetween={130}
              slidesPerView={3}
            >
              <SwiperSlide>
                <div className='relative w-[140px] h-[80px]'>
                  <Image src={blackmirror} alt='' layout='fill' />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className='relative w-[140px] h-[80px]'>
                  <Image src={lacasa} alt='' layout='fill' />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className='relative w-[140px] h-[80px]'>
                  <Image src={alteredcarbon} alt='' layout='fill' />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className='relative w-[140px] h-[80px]'>
                  <Image src={closeenough} alt='' layout='fill' />
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
          <div>
            <h4>Comedies</h4>
            <Swiper
              spaceBetween={130}
              slidesPerView={3}
            >
              <SwiperSlide>
                <div className='relative w-[140px] h-[80px]'>
                  <Image src={community} alt='' layout='fill' />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className='relative w-[140px] h-[80px]'>
                  <Image src={howtosell} alt='' layout='fill' />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className='relative w-[140px] h-[80px]'>
                  <Image src={arrested} alt='' layout='fill' />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className='relative w-[140px] h-[80px]'>
                  <Image src={atlanta} alt='' layout='fill' />
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Browse;
