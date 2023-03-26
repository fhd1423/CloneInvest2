import Head from 'next/head';
import Image from 'next/image';
import React, { useState, useEffect } from 'react'
//import { useSession, signIn, signOut, getSession } from 'next-auth/react'
import db from './firebase_connect';
import { collection, addDoc } from "firebase/firestore";

const Event = () => {

    const [eventName, setEventName] = useState('eventName');
    const handleEventNameChange = (event) => {
        setEventName(event.target.value);
    };
    const [location, setLocation] = useState('location');
    const handleLocationChange = (event) => {
        setLocation(event.target.value);
    };
    const [date, setDate] = useState('date');
    const handleDateChange = (event) => {
        setDate(event.target.value);
    };
    const [time, setTime] = useState('time');
    const handleTimeChange = (event) => {
        setTime(event.target.value);
    };
    const [numPeopleNeeded, setNumPeopleNeeded] = useState('numPeopleNeeded');
    const handleNumPeopleNeededChange = (event) => {
        setNumPeopleNeeded(event.target.value);
    };

    async function submit(e) {
        e.preventDefault();
        const docRef = await addDoc(collection(db, "event"), {
            eventName: eventName,
            organizer: "",
            location: location,
            date: date,
            time: time,
            numPeopleNeeded: numPeopleNeeded,
            ListOfAttendees: 0
        });
        console.log("Document written with ID: ", docRef.id);
    }

  return (
    <div className="w-full max-w-xs">
      <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="eventName">
            Event Name
          </label>
          <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="eventName" type="text" placeholder="eventName" onChange={handleEventNameChange}/>
        </div>
        <div className="mb-6">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="location">
            Location
          </label>
          <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="location" type="text" placeholder="location" onChange={handleLocationChange}/>
        </div>
        <div className="mb-8">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="date">
            Date
          </label>
          <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="date" type="text" placeholder="date" onChange={handleDateChange}/>
        </div>
        <div className="mb-10">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="time">
            Time
          </label>
          <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="time" type="text" placeholder="time" onChange={handleTimeChange}/>
        </div>

        <div className="mb-12">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="numPeopleNeeded">
            Number of People Needed
          </label>
          <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="numPeopleNeeded" type="text" placeholder="numPeopleNeeded" onChange={handleNumPeopleNeededChange}/>
        </div>

        <div className="flex items-center justify-between">
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button" onClick={submit}>
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}

export default Event