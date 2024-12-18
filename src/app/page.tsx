'use client';

import GetSession from "./getSession"; // Import the GetSession component
import { useState } from "react";
import AddSession from "./addSession"; // Import the AddSession component

export default function Home() {
  const [showSessions, setShowSessions] = useState(false); // State to toggle showing surf sessions
  const [showAddSessionForm, setShowAddSessionForm] = useState(false); // State to toggle showing the Add Session form#

  // Handle button click to show sessions
  const handleDeployClick = () => {
    setShowSessions((prev) => !prev); // Toggle visibility
  };

  const handleAddSessionClick = () => {
    setShowAddSessionForm((prev) => !prev); // Toggle visibility
    console.log('Add Session button clicked');
  };

  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center">
        <h1 className="text-4xl font-extrabold text-white bg-gradient-to-r from-[#9b59b6] to-[#8e44ad] p-4 rounded-lg text-center mb-6 shadow-lg">
          Surf Sessions
        </h1>

        {/* Button to show or hide sessions */}
        <button 
          onClick={handleDeployClick} 
          className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5">
          {showSessions ? 'Hide Sessions' : 'Show Sessions'}
        </button>

        {/* Render sessions if visible */}
        {showSessions && <GetSession />}

        {/* Button to toggle Add Session form visibility */}
        {!showAddSessionForm ? (
          <button 
            onClick={handleAddSessionClick} 
            className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5">
            Add Session
          </button>
        ) : (
          <div>
            <AddSession />  {/* This handles form submission and logic */}
            <div style={{ display: 'flex', justifyContent: 'center', gap: '10px', marginTop: '10px' }}>
              <button
                onClick={() => setShowAddSessionForm(false)}
                className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-red-500 text-white gap-2 hover:bg-red-700 text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5">
                Cancel
              </button>
            </div>
          </div>
        )}
      </main>
    </div>
  );
}
