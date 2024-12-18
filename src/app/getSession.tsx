
'use client';

import { useState, useEffect } from 'react';
import { getSessions } from './api';  // Import the API function

// Define the type for the session data
interface Session {
  date: string;
  location: string;
  wave_height: number;
  duration: number;
  crowd?: string;
  performance?: string;
  rating: number;
}

export default function GetSession() {
  console.log('GetSession');
  const [sessions, setSessions] = useState<Session[]>([]); // Specify the type of sessions
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  useEffect(() => {
    const fetchSessions = async () => {
      setLoading(true);
      try {
        const data = await getSessions();
        console.log('data', data);
        setSessions(data);
      } catch (error) {
        setErrorMessage(`${error} Failed to fetch session`);
      } finally {
        setLoading(false);
      }
    };

    fetchSessions();
  }, []);

  if (loading) return <p>Loading...</p>;
  if (errorMessage) return <p style={{ color: 'red' }}>{errorMessage}</p>;

  return (
    <div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {sessions.map((session, index) => (
          <div key={index} className="border p-4 rounded-lg shadow-lg bg-white text-black"> {/* Added bg-white and text-black */}
            <h2 className="text-xl font-bold text-center">{session.location}</h2>
            <p>
              <span className="font-semibold">Date: </span>
              <span className="text-gray-800">{session.date}</span>
            </p>
            <p>
              <span className="font-semibold">Wave Height: </span>
              <span className="text-gray-800">{session.wave_height} ft</span>
            </p>
            <p>
              <span className="font-semibold">Duration: </span>
              <span className="text-gray-800">{session.duration} minutes</span>
            </p>
            <p>
              <span className="font-semibold">Crowd: </span>
              <span className="text-gray-800">{session.crowd || 'N/A'}</span>
            </p>
            <p>
              <span className="font-semibold">Performance: </span>
              <span className="text-gray-800">{session.performance || 'N/A'}</span>
            </p>
            <p>
              <span className="font-semibold">Rating: </span> 
              <span className="text-gray-800">{session.rating} / 5</span>
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
