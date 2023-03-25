import Head from 'next/head'
import Image from 'next/image'
import portfolio from 'src/public/portfolio.jpg'

export default function Home() {
  return (
    <div className='bg-blue-200 h-screen w-screen text-white'>
      <div className='flex justify-end py-10 mr-10 text-white text-xl'>
        <button className='border-black bg-black rounded-lg border-2 p-3 mr-5 hover:bg-white hover:text-black'> Sign Up </button>
        <button className='border-black bg-black rounded-lg border-2 p-3 hover:bg-white hover:text-black'> Sign In </button>
      </div>s
      <div className='text-center'>
        <div className='text-4xl font-bold text-black'> Clone Invest

        </div>

      </div>


      <div className='text-center text-xl text-gray-500 justify-center mt-10 font-bold'>
        <div> View your friend's Robinhood Portfolio Weights</div>
        <div> Sort by Performance and Risk, and Copy a Portfolio to Your Robinhood Account Instantly...🚀</div>
        <div className='animate-bounce w-full'>
          without the <span className='text-black'> fees, </span> or the <span className='text-black'> hassle.🌟 </span>
        </div>
      </div>
      <div className='h-fit w-full flex justify-center'>
        <Image
          alt="Mountains"
          src={portfolio}
          placeholder="blur"
          width={500}
          height={250}
          style={{
            maxWidth: '100%',
            height: 'auto',
          }}
        />
      </div>
    </div>
  )
}
