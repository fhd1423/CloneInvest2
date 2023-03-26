import Head from 'next/head'
import Image from 'next/image'
import portfolio from 'src/public/portfolio.jpg'

export default function Home() {
  return (
    <div>

        <nav class="bg-gray-800">
            <div class="w-full h-16 flex flex-row items-center px-5 text-slate-100 justify-between">
                <ul class="flex">
                    <li class="mx-7">Home</li>
                    <li class="mx-7">Create Event</li>
                </ul>
                <div class="">profile</div>
            </div>
        </nav>

        <div>

        </div>

    </div>
  )
}
