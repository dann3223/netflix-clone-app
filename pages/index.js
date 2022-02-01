import Head from 'next/head'
import Image from 'next/image'
import netflix from '../public/netflix.svg'
import tv from '../public/tv.png'
import cellphone from '../public/cellphone.jpg'
import devices from '../public/devices.png'
import kids from '../public/kids.png'
import { Disclosure } from '@headlessui/react'

export default function Home() {
  return (
    <div className='text-white'>
      <main className='main-background flex flex-col justify-center items-center px-3'>
        <div className='w-full flex justify-between items-center pt-6'>
          <div className='flex items-end'>
            <Image src={netflix} alt="" width={88.8} height={24} />
          </div>
          <button className='bg-red text-sm py-1 px-2 rounded-sm drop-shadow'>Sign In</button>
        </div>
        <div className='pt-16 pb-16 flex flex-col gap-3 items-center text-center'>
          <h1 className='font-bold text-3xl leading-8'>Unlimited movies, TV shows, and more.</h1>
          <p className='text-lg'>Watch anywhere. Cancel anytime.</p>
          <p className='text-lg leading-6'>Ready to watch? Enter your email to create or restart your membership.</p>
          <input type="text" placeholder='Email address' className='pl-3 py-3 w-full border-[1px] border-[#656565] text-black outline-none focus:border-[#0091FF]' />
          <button className='flex bg-red py-2 px-3 rounded-sm box-shadow-special'>
            Get Started
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="white">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </main>
      <div className='h-2 bg-gray'></div>
      <section className='bg-black pb-14 px-3'>
        <div className='pt-12 flex flex-col gap-2 items-center text-center'>
          <h2 className='font-bold text-2xl'>Enjoy on your TV.</h2>
          <p className='text-lg px-3 leading-6'>Watch on Smart TVs, Playstation, Xbox, Chromecast, Apple TV, Blu-ray players, and more.</p>
          <Image src={tv} alt="" width={288} height={216} />
        </div>
      </section>
      <div className='h-2 bg-gray'></div>
      <section className='bg-black pb-12 px-3'>
        <div className='pt-12 flex flex-col items-center text-center'>
          <h2 className='font-bold text-2xl'>Download your shows to watch offline.</h2>
          <p className='text-lg px-3 pt-2 leading-6'>Save your favorites easily and always have something to watch.</p>
          <Image src={cellphone} alt="" width={288} height={216} />
        </div>
      </section>
      <div className='h-2 bg-gray'></div>
      <section className='bg-black pb-12 px-3'>
        <div className='pt-12 flex flex-col gap-2 items-center text-center'>
          <h2 className='font-bold text-2xl'>Watch everywhere.</h2>
          <p className='text-lg px-3 leading-6'>Stream unlimited movies and TV shows on your phone, tablet, laptop, and TV without paying more.</p>
          <Image src={devices} alt="" width={288} height={216} />
        </div>
      </section>
      <div className='h-2 bg-gray'></div>
      <section className='bg-black pb-12 px-3'>
        <div className='pt-12 flex flex-col gap-2 items-center text-center'>
          <h2 className='font-bold text-2xl'>Create profiles for kids.</h2>
          <p className='text-lg px-3 leading-6'>Send kids on adventures with their favorite characters in a space made just for them<span className='tracking-tighter'>---</span>free with your membership.</p>
          <Image src={kids} alt="" width={288} height={216} />
        </div>
      </section>
      <div className='h-2 bg-gray'></div>
      <section className='bg-black pb-12'>
        <div className='pt-12 flex flex-col items-center text-center'>
          <h2 className='font-bold text-2xl'>Frequently Asked Questions</h2>
          <div className='w-full mt-6'>
            <Disclosure>
              {({ open }) => (
                <>
                  <Disclosure.Button className="flex justify-between w-full py-3 px-5 text-base font-normal text-left bg-discgray outline-none">
                    <span>What is Netflix?</span>
                    <svg 
                      xmlns="http://www.w3.org/2000/svg" 
                      className={`${
                        open ? 'hidden' : ''
                      } h-6 w-6`}
                      fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                    </svg>
                    <svg 
                      xmlns="http://www.w3.org/2000/svg" 
                      className={`${
                        open ? '' : 'hidden'
                      } h-6 w-6`}
                      fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </Disclosure.Button>
                  <Disclosure.Panel className="mt-[1px] px-5 pt-6 pb-6 text-white text-left text-base bg-discgray">
                    Netflix is a streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries, and more on thousands of internet-connected devices.<br/><br/>
                    You can watch as much as you want, whenever you want without a single commercial <span className='tracking-tighter'>--</span> all for one low monthly price. There is always something new to discover and new TV shows and movies are added every week!
                  </Disclosure.Panel>
                </>
              )}
            </Disclosure>
            <Disclosure as="div" className="mt-2">
              {({ open }) => (
                <>
                  <Disclosure.Button className="flex justify-between w-full py-3 px-5 text-base font-normal text-left bg-discgray outline-none">
                    <span>How much does Netflix cost?</span>
                    <svg 
                      xmlns="http://www.w3.org/2000/svg" 
                      className={`${
                        open ? 'hidden' : ''
                      } h-6 w-6`}
                      fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                    </svg>
                    <svg 
                      xmlns="http://www.w3.org/2000/svg" 
                      className={`${
                        open ? '' : 'hidden'
                      } h-6 w-6`}
                      fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </Disclosure.Button>
                  <Disclosure.Panel className="mt-[1px] px-5 pt-6 pb-6 text-white text-left text-base bg-discgray">
                    Watch Netflix on your smartphone, tablet, Smart TV, laptop, or streaming device, all for one fixed monthly fee. Plans range from $$$ to $$$ a month (pre-tax). No extra costs, no contracts.
                  </Disclosure.Panel>
                </>
              )}
            </Disclosure>
            <Disclosure as="div" className="mt-2">
              {({ open }) => (
                <>
                  <Disclosure.Button className="flex justify-between w-full py-3 px-5 text-base font-normal text-left bg-discgray outline-none">
                    <span>Where can I watch?</span>
                    <svg 
                      xmlns="http://www.w3.org/2000/svg" 
                      className={`${
                        open ? 'hidden' : ''
                      } h-6 w-6`}
                      fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                    </svg>
                    <svg 
                      xmlns="http://www.w3.org/2000/svg" 
                      className={`${
                        open ? '' : 'hidden'
                      } h-6 w-6`}
                      fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </Disclosure.Button>
                  <Disclosure.Panel className="mt-[1px] px-5 pt-6 pb-6 text-white text-left text-base bg-discgray">
                    Watch anywhere, anytime. Sign in with your Netflix account to watch instantly on the web at netflix.com from your personal computer or on any internet-connected device that offers the Netflix app, including smart TVs, smartphones, tablets, streaming media players and game consoles.<br/><br/>
                    You can also download your favorite shows with the iOS, Android, or Windows 10 app. Use downloads to watch while you are on the go and without an internet connection. Take Netflix with you anywhere.
                  </Disclosure.Panel>
                </>
              )}
            </Disclosure>
            <Disclosure as="div" className="mt-2">
              {({ open }) => (
                <>
                  <Disclosure.Button className="flex justify-between w-full py-3 px-5 text-base font-normal text-left bg-discgray outline-none">
                    <span>How do I cancel?</span>
                    <svg 
                      xmlns="http://www.w3.org/2000/svg" 
                      className={`${
                        open ? 'hidden' : ''
                      } h-6 w-6`}
                      fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                    </svg>
                    <svg 
                      xmlns="http://www.w3.org/2000/svg" 
                      className={`${
                        open ? '' : 'hidden'
                      } h-6 w-6`}
                      fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </Disclosure.Button>
                  <Disclosure.Panel className="mt-[1px] px-5 pt-6 pb-6 text-white text-left text-base bg-discgray">
                    Netflix is flexible. There are no pesky contracts and no commitments. You can easily cancel your account online in two clicks. There are no cancellation fees <span className='tracking-tighter'>--</span> start or stop your account anytime.
                  </Disclosure.Panel>
                </>
              )}
            </Disclosure>
            <Disclosure as="div" className="mt-2">
              {({ open }) => (
                <>
                  <Disclosure.Button className="flex justify-between w-full py-3 px-5 text-base font-normal text-left bg-discgray outline-none">
                    <span>What can I watch on Netflix?</span>
                    <svg 
                      xmlns="http://www.w3.org/2000/svg" 
                      className={`${
                        open ? 'hidden' : ''
                      } h-6 w-6`}
                      fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                    </svg>
                    <svg 
                      xmlns="http://www.w3.org/2000/svg" 
                      className={`${
                        open ? '' : 'hidden'
                      } h-6 w-6`}
                      fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </Disclosure.Button>
                  <Disclosure.Panel className="mt-[1px] px-5 pt-6 pb-6 text-white text-left text-base bg-discgray">
                    Netflix has an extensive library of feature films, documentaries, TV shows, anime, award-winning Netflix originals, and more. Watch as much as you want, anytime you want.
                  </Disclosure.Panel>
                </>
              )}
            </Disclosure>
            <Disclosure as="div" className="mt-2">
              {({ open }) => (
                <>
                  <Disclosure.Button className="flex justify-between w-full py-3 px-5 text-base font-normal text-left bg-discgray outline-none">
                    <span>Is Netflix good for kids?</span>
                    <svg 
                      xmlns="http://www.w3.org/2000/svg" 
                      className={`${
                        open ? 'hidden' : ''
                      } h-6 w-6`}
                      fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                    </svg>
                    <svg 
                      xmlns="http://www.w3.org/2000/svg" 
                      className={`${
                        open ? '' : 'hidden'
                      } h-6 w-6`}
                      fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </Disclosure.Button>
                  <Disclosure.Panel className="mt-[1px] px-5 pt-6 pb-6 text-white text-left text-base bg-discgray">
                    The Netflix Kids experience is included in your membership to give parents control while kids enjoy family-friendly TV shows and movies in their own space.<br/><br/>
                    Kids profiles come with PIN-protected parental controls that let you restrict the maturity rating of content kids can watch and block specific titles you don’t want kids to see.
                  </Disclosure.Panel>
                </>
              )}
            </Disclosure>
          </div>
          <p className='text-lg px-3 leading-6 mt-6'>Ready to watch? Enter your email to create or restart your membership.</p>
          <input type="text" placeholder='Email address' className='mt-3 pl-3 py-3 w-[266px] border-[1px] border-[#858585] text-black outline-none' />
          <button className='flex bg-red mt-3 py-2 px-3 rounded-sm box-shadow-special'>
            Get Started
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="white">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </section>
      <div className='h-2 bg-gray'></div>
      <footer className='bg-black pb-8 text-footer text-xs flex flex-col items-center pt-12'>
        <p className='text-base'>Questions? Call 1-234-567-8910</p>
        <div className='flex justify-between pt-6 gap-6'>
          <ul className='flex flex-col gap-4'>
            <li>FAQ</li>
            <li>Account</li>
            <li>Investor Relations</li>
            <li>Ways to Watch</li>
            <li>Privacy</li>
            <li>Corporate<br/>Information</li>
            <li>Speed Test</li>
            <li>Only on Netflix</li>
            <li>Netflix ©</li>
          </ul>
          <ul className='flex flex-col gap-4'>
            <li>Help Center</li>
            <li>Media Center</li>
            <li>Jobs</li>
            <li>Terms of Use</li>
            <li>Cookie Preferences</li>
            <li>Contact Us</li>
            <li>Legal Notices</li>
          </ul>
        </div>
      </footer>
    </div>
  )
}
