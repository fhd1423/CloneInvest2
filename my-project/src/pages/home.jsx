import Head from 'next/head'
import Image from 'next/image'
import portfolio from 'src/public/portfolio.jpg'
import { useRouter } from 'next/router'


export default function Home() {
  const router = useRouter()
  return (
    <div>

      <nav class="bg-gray-800">
        <div class="w-full h-16 flex flex-row items-center px-5 text-slate-100 justify-between">
          <ul class="flex">
            <button onClick={() => router.push('/home')} class="mx-7 rounded-md border-2 border-white p-2 hover:bg-white hover:text-black">Home</button>
            <button onClick={() => router.push('/createEvent')} class="mx-7 rounded-md border-2 border-white p-2 hover:bg-white hover:text-black">Create Event</button>
          </ul>
          <button onClick={() => router.push('/profile')} class="rounded-md border-2 border-white p-2 hover:bg-white hover:text-black">Profile</button>
        </div>
      </nav>

      <div>

      </div>

    </div>
  )
}
