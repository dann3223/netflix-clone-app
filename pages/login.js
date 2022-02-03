import { useSession, signIn } from 'next-auth/react'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import netflix from '../public/netflix.svg'
import usuario1 from '../public/usuario1.png'
import usuario2 from '../public/usuario2.png'
import usuario3 from '../public/usuario3.png'
import usuario4 from '../public/usuario4.png'
import usuario5 from '../public/usuario5.png'

const Login = () => {
  const { data: session } = useSession()

  if (session) {
    return (
      <div className='h-screen'>
        <div className='bg-[#141414] text-white h-screen'>
          <div className='relative w-[75px] h-[20px] top-5 left-3 cursor-pointer littlesm:w-[108px] littlesm:h-[29.2px] littlelg:w-[134px] littlelg:h-[36px]'>
            <Link href='/login' passHref>
              <Image src={netflix} alt='' layout='fill' />
            </Link>
          </div>
          <section className='flex flex-col justify-center items-center pt-12 md:pt-36'>
            <h3 className='font-normal text-3xl text-center littlexl:text-4xl'>Who is watching <br className='littlesm:hidden'/>right now?</h3>
            <div className='grid grid-cols-2 gap-x-2 gap-y-8 pt-6 littlesm:gap-x-4 md:grid-cols-5'>
              <Link href='/browse' passHref>
                <div className='bg-gray w-20 h-20 rounded-lg relative littlelg:w-24 littlelg:h-24 littlexl:w-36 littlexl:h-36 hover:ring-4 hover:ring-white'>
                  <Image src={usuario2} alt='' layout='fill' className='rounded-md'/>
                  <p className='text-[#808080] text-xs absolute top-[84px] left-6 littlelg:top-24 littlelg:left-8 littlexl:top-40 littlexl:left-14 littlexl:text-sm'>User 1</p>
                </div>
              </Link>

              <Link href='/browse' passHref>
                <div className='bg-gray w-20 h-20 rounded-lg relative littlelg:w-24 littlelg:h-24 littlexl:w-36 littlexl:h-36 hover:ring-4 hover:ring-white'>
                  <Image src={usuario1} alt='' layout='fill' className='rounded-md'/>
                  <p className='text-[#808080] text-xs absolute top-[84px] left-6 littlelg:top-24 littlelg:left-8 littlexl:top-40 littlexl:left-14 littlexl:text-sm'>User 2</p>
                </div>
              </Link>

              <Link href='/browse' passHref>
                <div className='bg-gray w-20 h-20 rounded-lg relative littlelg:w-24 littlelg:h-24 littlexl:w-36 littlexl:h-36 hover:ring-4 hover:ring-white'>
                  <Image src={usuario3} alt='' layout='fill' className='rounded-md'/>
                  <p className='text-[#808080] text-xs absolute top-[84px] left-6 littlelg:top-24 littlelg:left-8 littlexl:top-40 littlexl:left-14 littlexl:text-sm'>User 3</p>
                </div>
              </Link>

              <Link href='/browse' passHref>
                <div className='bg-gray w-20 h-20 rounded-lg relative littlelg:w-24 littlelg:h-24 littlexl:w-36 littlexl:h-36 hover:ring-4 hover:ring-white'>
                  <Image src={usuario4} alt='' layout='fill' className='rounded-md'/>
                  <p className='text-[#808080] text-xs absolute top-[84px] left-6 littlelg:top-24 littlelg:left-8 littlexl:top-40 littlexl:left-14 littlexl:text-sm'>User 4</p>
                </div>
              </Link>

              <Link href='/browse' passHref>
                <div className='bg-gray w-20 h-20 rounded-lg relative littlelg:w-24 littlelg:h-24 littlexl:w-36 littlexl:h-36 hover:ring-4 hover:ring-white'>
                  <Image src={usuario5} alt='' layout='fill' className='rounded-md'/>
                  <p className='text-[#808080] text-xs absolute top-[84px] left-6 littlelg:top-24 littlelg:left-8 littlexl:top-40 littlexl:left-14 littlexl:text-sm'>User 5</p>
                </div>
              </Link>

            </div>
            <Link href='/login' passHref>
              <button className='mt-10 text-[#808080] text-sm px-2 border-[1px] littlexl:mt-16 hover:bg-gray'>Manage Profiles</button>
            </Link>
          </section>
        </div>
      </div>
    )
  }
  return (
    <div className='h-screen'>
    <div className='bg-black text-white'>
      <div className='relative w-[75px] h-[20px] top-5 left-3 cursor-pointer littlesm:w-[108px] littlesm:h-[29.2px] littlelg:w-[134px] littlelg:h-[36px]'>
        <Link href='/' passHref>
          <Image src={netflix} alt='' layout='fill' />
        </Link>
      </div>
      <section className='flex flex-col justify-center items-center w-11/12 mx-auto pt-5 pb-32 littlesm:w-[320px] md:pt-20 littlelg:pb-36 littlexl:pb-48'>
        <h3 className='font-bold text-3xl self-start mt-8'>Sign In</h3>
        <button onClick={() => signIn("google")} className='font-bold text-lg py-3 bg-red w-full rounded-md mt-4'>Sign In with Google</button>
        <div className='flex w-full justify-between text-footer text-sm mt-2'>
          <div className='flex items-center'>
            <input type="checkbox" name="remember" id="remember" />
            <label htmlFor="remember" className='pl-1'>Remember me</label>
          </div>
          <Link href='/login'>Need help?</Link>
        </div>
        <div className='text-footer mt-8'>
          <p>New to Netflix? <span className='text-base text-white'><Link href='/login'>Sign up now.</Link></span></p>
          <p className='text-sm mt-3'>This page is protected by Google reCAPTCHA to ensure you are not a bot. <span className='text-[#0645AD]'><Link href='/login'>Learn more.</Link></span></p>
        </div>
      </section>
      <div className='h-px w-full bg-footer'></div>
      <footer className='pt-6 pb-12 flex flex-col justify-center items-center text-footer'>
        <p>Questions? Call 1-234-567-8910</p>
        <ul className='grid grid-cols-2 text-sm gap-3 mt-5 littlelg:grid-cols-4 littlelg:gap-6'>
          <li className='cursor-pointer'>FAQ</li>
          <li className='cursor-pointer'>Help Center</li>
          <li className='cursor-pointer'>Terms of Use</li>
          <li className='cursor-pointer'>Privacy</li>
          <li className='cursor-pointer'>Cookie Preferences</li>
          <li className='cursor-pointer'>Corporate Information</li>
        </ul>
      </footer>
    </div>
    </div>
  )
};

export default Login;
