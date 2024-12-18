// src/app/api.ts

const API_URL = 'https://xs24jm7bz0.execute-api.eu-west-2.amazonaws.com/prod/'; // Replace with your API URL

interface Session {
    date: string;
    location: string;
    wave_height:  string;
    duration: string;
    crowd: string;
    performance: string;
    rating: string;
  }

// Function to add a new session
export const addSession = async (data: Session) => {
    console.log('Adding session in api:', data);
  const response = await fetch(`${API_URL}/addSession`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify( data ),
  });

  if (!response.ok) {
    throw new Error('Failed to add session');
  }
};

// Function to get all sessions
export const getSessions = async () => {
  const response = await fetch(`${API_URL}/getSession`);
  if (!response.ok) {
    throw new Error('Failed to fetch sessions');
  }
  return await response.json();
};
