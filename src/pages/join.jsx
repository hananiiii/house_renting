import React from 'react';
import Header from '../components/header';
const JoinUsForm = () => {
  return (
    <section>
        <Header/>
    <div className="md:max-w-xl max-w-md mx-auto mt-32 p-6 bg-white text-text_color rounded shadow-xl">
      <h2 className="text-4xl mb-6 flex justify-center mx-auto font-semibold ">Join Us</h2>
      <form>
        <div className="mb-4">
          <label className="block  text-sm font-semibold mb-2">Name</label>
          <input
            type="text"
            className="border rounded w-full py-2 px-3"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block  text-sm font-semibold mb-2">Email</label>
          <input
            type="email"
            className="border rounded w-full py-2 px-3"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block  text-sm font-semibold mb-2">Phone</label>
          <input
            type="tel"
            className="border rounded w-full py-2 px-3"
            required
          />
        </div>
        <button
          type="submit"
          className="bg-title_color w-full text-white font-semibold py-2 px-4 rounded"
        >
          Join
        </button>
      </form>
    </div>
    </section>
  );
};

export default JoinUsForm;
