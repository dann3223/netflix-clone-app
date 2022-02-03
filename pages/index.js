import Head from 'next/head'
import Image from 'next/image'
import netflix from '../public/netflix.svg'
import tv from '../public/tv.png'
import cellphone from '../public/cellphone.jpg'
import devices from '../public/devices.png'
import kids from '../public/kids.png'
import { Disclosure } from '@headlessui/react'
import Link from 'next/link'

export default function Home() {
  return (
    <>
    <Head>
      <title>Netflix Clone</title>
      <link rel="shortcut icon" href='/netflixlogo.svg' />
    </Head>
    <div className='text-white'>
      <main className='main-background flex flex-col justify-center items-center px-3 littlesm:px-12 littlelg:px-16'>
        <div className='w-full flex justify-between items-center pt-6 littlesm:pt-8'>
          <div className='flex items-end relative w-[88.8px] h-[24px] littlesm:w-[108px] littlesm:h-[29.2px] littlelg:w-[134px] littlelg:h-[36px]'>
            <Image src={netflix} alt="" layout='fill' />
          </div>
          <Link href='/login' passHref><button className='bg-red text-sm py-1 px-2 rounded-sm drop-shadow littlelg:px-4 littlelg:py-2'>Sign In</button></Link>
        </div>
        <div className='pt-16 pb-16 flex flex-col gap-3 items-center text-center littlesm:pt-40 littlesm:pb-40 littlelg:pb-44'>
          <h1 className='font-bold text-3xl leading-8 littlesm:text-5xl littlexl:text-6xl'>Unlimited movies, TV<br className='hidden md:block'/> shows, and more.</h1>
          <p className='text-lg littlesm:text-xl littlelg:text-2xl'>Watch anywhere. Cancel anytime.</p>
          <p className='text-lg leading-6 littlesm:text-xl littlelg:text-2xl'>Ready to watch? Enter your email to create<br className='hidden md:block'/> or restart your membership.</p>
          <div className='flex flex-col justify-center items-center gap-3 w-8/12 max-w-[500px] littlelg:flex-row littlelg:justify-between littlelg:gap-0 littlelg:w-full'>
            <input type="text" placeholder='Email address' className='pl-3 py-3 w-full border-[1px] border-[#656565] text-black outline-none focus:border-[#0091FF] littlelg:h-[60px]' />
            <Link href='/login' passHref>
            <button className='flex bg-red py-2 px-3 rounded-sm box-shadow-special littlesm:text-lg littlelg:w-80 littlelg:text-2xl littlelg:justify-between littlelg:items-center littlelg:h-[60px] littlelg:px-6'>
              Get Started
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="white">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
            </Link>
          </div>
        </div>
      </main>

      <div className='h-2 bg-gray'></div>
      <section className='bg-black pb-14 px-3 littlelg:pb-8 littlexl:pb-12'>
        <div className='pt-12 flex flex-col gap-2 items-center text-center max-w-[1250px] mx-auto littlesm:gap-0 littlelg:flex-row littlelg:pt-4 littlelg:justify-around'>
          <div className='flex flex-col gap-2 littlelg:w-6/12 littlelg:text-left littlelg:max-w-[545px]'>
            <h2 className='font-bold text-2xl littlesm:text-4xl littlelg:text-5xl littlelg:px-6'>Enjoy on your TV.</h2>
            <p className='text-lg px-3 leading-6 littlesm:text-xl littlesm:px-6 littlesm:pt-4 littlelg:text-2xl'>Watch on Smart TVs, Playstation, Xbox, Chromecast, Apple TV, Blu-ray players, and more.</p>
          </div>
          <div className='relative w-[288px] h-[216px] littlesm:w-[463px] littlesm:h-[347px] littlexl:w-[530px] littlexl:h-[395px]'>
            <Image src={tv} alt="" layout='fill' />
          </div>
        </div>
      </section>

      <div className='h-2 bg-gray'></div>
      <section className='bg-black pb-12 px-3 littlesm:pb-16'>
        <div className='pt-12 flex flex-col items-center text-center max-w-[1250px] mx-auto littlesm:pt-20 littlelg:flex-row littlelg:pt-10 littlelg:justify-around'>
          <div className='flex flex-col littlelg:w-6/12 littlelg:text-left littlelg:order-2 littlelg:max-w-[545px]'>
            <h2 className='font-bold text-2xl littlesm:text-4xl littlelg:text-5xl littlelg:px-6'>Download your shows to watch offline.</h2>
            <p className='text-lg px-3 pt-2 leading-6 littlesm:pt-4 littlesm:text-xl littlesm:px-6 littlelg:text-2xl'>Save your favorites easily and always have something to watch.</p>
          </div>
          <div className='relative w-[288px] h-[216px] littlesm:w-[463px] littlesm:h-[347px] littlelg:w-[394px] littlelg:h-[296px] littlelg:order-1 littlexl:w-[530px] littlexl:h-[395px]'>
            <Image src={cellphone} alt="" layout='fill' />
          </div>
        </div>
      </section>

      <div className='h-2 bg-gray'></div>
      <section className='bg-black pb-12 px-3 littlesm:pb-16'>
        <div className='pt-12 flex flex-col gap-2 items-center text-center max-w-[1250px] mx-auto littlesm:pt-20 littlesm:gap-0 littlelg:flex-row littlelg:pt-14 littlelg:justify-around'>
          <div className='flex flex-col littlelg:w-6/12 littlelg:text-left littlelg:max-w-[545px]'>
            <h2 className='font-bold text-2xl littlesm:text-4xl littlelg:text-5xl littlelg:px-6'>Watch everywhere.</h2>
            <p className='text-lg px-3 leading-6 littlesm:text-xl littlesm:px-6 littlesm:pt-4 littlelg:text-2xl'>Stream unlimited movies and TV shows on your phone, tablet, laptop, and TV without paying more.</p>
          </div>
          <div className='relative w-[288px] h-[216px] littlesm:w-[463px] littlesm:h-[347px] littlelg:w-[433px] littlelg:h-[325px] littlexl:w-[530px] littlexl:h-[395px]'>
            <Image src={devices} alt="" layout='fill' />
          </div>
        </div>
      </section>

      <div className='h-2 bg-gray'></div>
      <section className='bg-black pb-12 px-3 littlesm:pb-20'>
        <div className='pt-12 flex flex-col gap-2 items-center text-center max-w-[1250px] mx-auto littlesm:pt-20 littlesm:gap-0 littlelg:flex-row littlelg:pt-16 littlelg:justify-around'>
          <div className='flex flex-col littlelg:w-6/12 littlelg:text-left littlelg:order-2 littlelg:max-w-[545px]'>
            <h2 className='font-bold text-2xl littlesm:text-4xl littlelg:text-5xl littlelg:px-6'>Create profiles for kids.</h2>
            <p className='text-lg px-3 leading-6 littlesm:text-xl littlesm:px-6 littlesm:pt-4 littlelg:text-2xl'>Send kids on adventures with their favorite characters in a space made just for them<span className='tracking-tighter'>---</span>free with your membership.</p>
          </div>
          <div className='relative w-[288px] h-[216px] littlesm:w-[463px] littlesm:h-[347px] littlelg:order-1 littlelg:w-[394px] littlelg:h-[296px] littlexl:w-[530px] littlexl:h-[395px]'>
            <Image src={kids} alt="" layout='fill' />
          </div>
        </div>
      </section>

      <div className='h-2 bg-gray'></div>
      <section className='bg-black pb-12 littlelg:pb-20'>
        <div className='pt-12 flex flex-col items-center text-center littlesm:pt-20'>
          <h2 className='font-bold text-2xl littlesm:text-4xl littlesm:px-12 littlelg:text-5xl'>Frequently Asked Questions</h2>
          <div className='w-full mt-6 littlelg:mt-12'>
            <Disclosure>
              {({ open }) => (
                <>
                  <Disclosure.Button className="flex justify-between w-full py-3 px-5 text-base font-normal text-left bg-discgray outline-none littlesm:text-xl littlesm:py-4 littlesm:w-9/12 littlesm:max-w-[800px] littlesm:mx-auto littlelg:text-2xl littlelg:py-5">
                    <span>What is Netflix?</span>
                    <svg 
                      xmlns="http://www.w3.org/2000/svg" 
                      className={`${
                        open ? 'hidden' : ''
                      } h-6 w-6 littlelg:h-7 littlelg:w-7`}
                      fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                    </svg>
                    <svg 
                      xmlns="http://www.w3.org/2000/svg" 
                      className={`${
                        open ? '' : 'hidden'
                      } h-6 w-6 littlelg:h-7 littlelg:w-7`}
                      fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </Disclosure.Button>
                  <Disclosure.Panel className="mt-[1px] px-5 pt-6 pb-6 text-white text-left text-base bg-discgray littlesm:text-xl littlesm:w-9/12 littlesm:max-w-[800px] littlesm:mx-auto littlelg:text-2xl">
                    Netflix is a streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries, and more on thousands of internet-connected devices.<br/><br/>
                    You can watch as much as you want, whenever you want without a single commercial <span className='tracking-tighter'>--</span> all for one low monthly price. There is always something new to discover and new TV shows and movies are added every week!
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
                        open ? 'hidden' : ''
                      } h-6 w-6 littlelg:h-7 littlelg:w-7`}
                      fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                    </svg>
                    <svg 
                      xmlns="http://www.w3.org/2000/svg" 
                      className={`${
                        open ? '' : 'hidden'
                      } h-6 w-6 littlelg:h-7 littlelg:w-7`}
                      fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </Disclosure.Button>
                  <Disclosure.Panel className="mt-[1px] px-5 pt-6 pb-6 text-white text-left text-base bg-discgray littlesm:text-xl littlesm:w-9/12 littlesm:max-w-[800px] littlesm:mx-auto littlelg:text-2xl">
                    Watch Netflix on your smartphone, tablet, Smart TV, laptop, or streaming device, all for one fixed monthly fee. Plans range from $$$ to $$$ a month (pre-tax). No extra costs, no contracts.
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
                        open ? 'hidden' : ''
                      } h-6 w-6 littlelg:h-7 littlelg:w-7`}
                      fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                    </svg>
                    <svg 
                      xmlns="http://www.w3.org/2000/svg" 
                      className={`${
                        open ? '' : 'hidden'
                      } h-6 w-6 littlelg:h-7 littlelg:w-7`}
                      fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </Disclosure.Button>
                  <Disclosure.Panel className="mt-[1px] px-5 pt-6 pb-6 text-white text-left text-base bg-discgray littlesm:text-xl littlesm:w-9/12 littlesm:max-w-[800px] littlesm:mx-auto littlelg:text-2xl">
                    Watch anywhere, anytime. Sign in with your Netflix account to watch instantly on the web at netflix.com from your personal computer or on any internet-connected device that offers the Netflix app, including smart TVs, smartphones, tablets, streaming media players and game consoles.<br/><br/>
                    You can also download your favorite shows with the iOS, Android, or Windows 10 app. Use downloads to watch while you are on the go and without an internet connection. Take Netflix with you anywhere.
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
                        open ? 'hidden' : ''
                      } h-6 w-6 littlelg:h-7 littlelg:w-7`}
                      fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                    </svg>
                    <svg 
                      xmlns="http://www.w3.org/2000/svg" 
                      className={`${
                        open ? '' : 'hidden'
                      } h-6 w-6 littlelg:h-7 littlelg:w-7`}
                      fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </Disclosure.Button>
                  <Disclosure.Panel className="mt-[1px] px-5 pt-6 pb-6 text-white text-left text-base bg-discgray littlesm:text-xl littlesm:w-9/12 littlesm:max-w-[800px] littlesm:mx-auto littlelg:text-2xl">
                    Netflix is flexible. There are no pesky contracts and no commitments. You can easily cancel your account online in two clicks. There are no cancellation fees <span className='tracking-tighter'>--</span> start or stop your account anytime.
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
                        open ? 'hidden' : ''
                      } h-6 w-6 littlelg:h-7 littlelg:w-7`}
                      fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                    </svg>
                    <svg 
                      xmlns="http://www.w3.org/2000/svg" 
                      className={`${
                        open ? '' : 'hidden'
                      } h-6 w-6 littlelg:h-7 littlelg:w-7`}
                      fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </Disclosure.Button>
                  <Disclosure.Panel className="mt-[1px] px-5 pt-6 pb-6 text-white text-left text-base bg-discgray littlesm:text-xl littlesm:w-9/12 littlesm:max-w-[800px] littlesm:mx-auto littlelg:text-2xl">
                    Netflix has an extensive library of feature films, documentaries, TV shows, anime, award-winning Netflix originals, and more. Watch as much as you want, anytime you want.
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
                        open ? 'hidden' : ''
                      } h-6 w-6 littlelg:h-7 littlelg:w-7`}
                      fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                    </svg>
                    <svg 
                      xmlns="http://www.w3.org/2000/svg" 
                      className={`${
                        open ? '' : 'hidden'
                      } h-6 w-6 littlelg:h-7 littlelg:w-7`}
                      fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </Disclosure.Button>
                  <Disclosure.Panel className="mt-[1px] px-5 pt-6 pb-6 text-white text-left text-base bg-discgray littlesm:text-xl littlesm:w-9/12 littlesm:max-w-[800px] littlesm:mx-auto littlelg:text-2xl">
                    The Netflix Kids experience is included in your membership to give parents control while kids enjoy family-friendly TV shows and movies in their own space.<br/><br/>
                    Kids profiles come with PIN-protected parental controls that let you restrict the maturity rating of content kids can watch and block specific titles you don’t want kids to see.
                  </Disclosure.Panel>
                </>
              )}
            </Disclosure>
          </div>
          <p className='text-lg px-3 leading-6 mt-6 littlesm:text-xl littlesm:px-0 littlesm:w-8/12 littlesm:mx-auto littlelg:mt-14'>Ready to watch? Enter your email to create or restart your membership.</p>
          <div className='flex flex-col justify-center items-center gap-3 w-8/12 max-w-[800px] littlelg:flex-row littlelg:justify-between littlelg:gap-0'>
            <input type="text" placeholder='Email address' className='mt-3 pl-3 py-3 w-10/12 mx-auto border-[1px] border-[#656565] text-black outline-none focus:border-[#0091FF] littlelg:h-[60px]' />
            <Link href='/login' passHref>
            <button className='flex bg-red mt-3 py-2 px-3 rounded-sm box-shadow-special littlesm:text-lg littlelg:w-60 littlelg:text-2xl littlelg:justify-between littlelg:items-center littlelg:h-[60px] littlelg:px-6'>
              Get Started
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="white">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
            </Link>
          </div>
        </div>
      </section>

      <div className='h-2 bg-gray'></div>
      <footer className='bg-black pb-8 text-footer text-xs flex flex-col items-center pt-12 littlesm:text-sm littlelg:text-base littlelg:pb-12'>
        <p className='text-base cursor-pointer littlesm:text-lg'>Questions? Call 1-234-567-8910</p>
          <ul className='grid grid-cols-2 gap-4 pt-6 littlesm:grid-cols-3 littlelg:grid-cols-4 littlelg:gap-6'>
            <li className='cursor-pointer'>FAQ</li>
            <li className='cursor-pointer'>Account</li>
            <li className='cursor-pointer'>Investor Relations</li>
            <li className='cursor-pointer'>Ways to Watch</li>
            <li className='cursor-pointer'>Privacy</li>
            <li className='cursor-pointer'>Corporate<br/>Information</li>
            <li className='cursor-pointer'>Speed Test</li>
            <li className='cursor-pointer'>Only on Netflix</li>
            <li className='cursor-pointer'>Help Center</li>
            <li className='cursor-pointer'>Media Center</li>
            <li className='cursor-pointer'>Jobs</li>
            <li className='cursor-pointer'>Terms of Use</li>
            <li className='cursor-pointer'>Cookie Preferences</li>
            <li className='cursor-pointer'>Contact Us</li>
            <li className='cursor-pointer'>Legal Notices</li>
            <li className='cursor-pointer'>Netflix ©</li>
          </ul>
      </footer>
    </div>
    </>
  )
}
