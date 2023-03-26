import Head from 'next/head'
import Image from 'next/image'
import planet from 'src/public/Featured-Image-12.png'
import { useSession, signIn, signOut, getSession } from 'next-auth/react'

export default function Home() {
  return (
    <div className='bg-slate-900 h-screen w-screen text-white'>
      <div className='flex justify-end py-10 mr-10 text-white text-xl'>
        <button onClick={() => signIn()} className='border-black bg-black rounded-lg border-2 p-3 hover:bg-white hover:text-black'> Sign In With Google</button>
      </div>
      <div className='text-center'>
        <div className='text-4xl font-bold'> Planet Positive

        </div>

      </div>


      <div className='text-center text-xl text-white justify-center mt-10 font-bold'>
        <div> search nearby events to keep your community sustainable.</div>
        make a lasting,  <span className='text-green-500'> green </span> <span> impact🚀 </span>
      </div>
      <div className='py-10 h-fit w-full flex justify-center'>
        <Image
          alt="Mountains"
          src={planet}
          placeholder="blur"
          width={500}
          height={250}
          style={{
            maxWidth: '100%',
            height: 'auto',
          }}
        />
      </div>
    </div >
  )
}