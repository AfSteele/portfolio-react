import '../index.css';
import React from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/hero';
import CoreTechnologies from '@/components/CoreTechnologies';

export default function Home() {
  return (
    <>
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <div className="flex-1 flex flex-col">
          <Hero />
        </div>
      </div>
      <CoreTechnologies />
    </>
  );
}

