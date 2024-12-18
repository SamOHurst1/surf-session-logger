import { useState } from 'react';
import { addSession } from './api';  // Import the API function

export default function AddSession() {
  const [formData, setFormData] = useState({
    date: '',
    location: '',
    wave_height: '',
    duration: '',
    crowd: '',
    performance: '',
    rating: '',
  });

  const [errorMessage, setErrorMessage] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  const [loading, setLoading] = useState(false);


  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    const numericFields = ['wave_height', 'duration', 'rating'];

    setFormData((prev) => ({
      ...prev,
      [name]: numericFields.includes(name) ? Number(value) : value,
    }));
  };

  const handleAddSession = async (e: React.FormEvent) => {
    e.preventDefault();

    // Validate inputs
    const { date, location, wave_height, duration, crowd, performance, rating } = formData;
    if (!date || !location || !wave_height || !duration || !crowd || !performance || !rating) {
      setErrorMessage('All fields are required');
      return;
    }

    if (isNaN(Number(wave_height)) || isNaN(Number(duration)) || isNaN(Number(rating))) {
      setErrorMessage('Wave Height, Duration, and Rating must be numeric');
      return;
    }

    setLoading(true);

    try {
      // Simulate the `addSession` API call
      console.log('Adding session:', formData);
      await addSession(formData);

      // Reset the form
      setFormData({ date: '', location: '', wave_height: '', duration: '', crowd:'', performance:'', rating: '' });
      setErrorMessage('');
      setSuccessMessage('Session added successfully!');
    } catch (error) {
      setErrorMessage(`${error} Failed to add session`);
    } finally {
      setLoading(false);
    }
  };

  // if (loading) return <p>Adding Session Log</p>;


  return (
    <div>
      <form onSubmit={handleAddSession} style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          <label htmlFor="date" style={{ width: '100px' }}>Date:</label>
          <input
            type="date"
            name="date"
            id="date"
            value={formData.date}
            onChange={handleInputChange}
            placeholder="Enter date (e.g., 2024-12-15)"
            style={{ color: 'black', width: '200px' }}
          />
        </div>

        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          <label htmlFor="location" style={{ width: '100px' }}>Location:</label>
          <input
            type="text"
            name="location"
            id="location"
            value={formData.location}
            onChange={handleInputChange}
            placeholder="Enter location"
            style={{ color: 'black', width: '200px' }}
          />
        </div>

        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          <label htmlFor="wave_height" style={{ width: '100px' }}>Wave Height (ft):</label>
          <input
            type="number"
            name="wave_height"
            id="wave_height"
            value={formData.wave_height || ''}
            onChange={handleInputChange}
            placeholder="Enter wave height"
            style={{ color: 'black', width: '200px' }}
          />
        </div>

        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          <label htmlFor="duration" style={{ width: '100px' }}>Duration (minutes):</label>
          <input
            type="number"
            name="duration"
            id="duration"
            value={formData.duration || ''}
            onChange={handleInputChange}
            placeholder="Enter duration (in minutes)"
            style={{ color: 'black', width: '200px' }}
          />
        </div>

        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          <label htmlFor="crowd" style={{ width: '100px' }}>Crowd Factor:</label>
          <select
            name="crowd"
            id="crowd"
            value={formData.crowd}
            onChange={handleInputChange}
            style={{ color: 'black', width: '200px' }}
          >
            <option value="">Select Crowd</option>
            <option value="empty">Empty</option>
            <option value="light">Light</option>
            <option value="moderate">Moderate</option>
            <option value="busy">Busy</option>
            <option value="packed">Packed</option>
          </select>
        </div>

        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          <label htmlFor="performance" style={{ width: '100px' }}>Performance:</label>
          <select
            name="performance"
            id="performance"
            value={formData.performance}
            onChange={handleInputChange}
            style={{ color: 'black', width: '200px' }}
          >
            <option value="">Select Performance</option>
            <option value="empty">Bad</option>
            <option value="light">Medium</option>
            <option value="moderate">Good</option>
            <option value="busy">Excellent</option>
          </select>
        </div>

        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          <label htmlFor="rating" style={{ width: '100px' }}>Rating:</label>
          <input
            type="number"
            name="rating"
            id="rating"
            value={formData.rating || ''}
            onChange={handleInputChange}
            placeholder="Enter rating (1-5)"
            style={{ color: 'black', width: '200px' }}
          />
        </div>

        <button
          className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5"
          type="submit"
        >
          Submit Session
        </button>
      </form>

      {loading && <p style={{ color: 'yellow' }}>Adding Session...</p>}
      {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}
      {successMessage && <p style={{ color: 'green' }}>{successMessage}</p>}
    </div>
  );
}