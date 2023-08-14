import React, { useState, useEffect } from 'react';
import TrackCard from './Trackcards';

const App = () => {
  const [isDesktop, setIsDesktop] = useState(window.innerWidth >= 768);

  useEffect(() => {
    const handleResize = () => {
      const screenWidth = window.innerWidth;
      setIsDesktop(screenWidth >= 768);
    };

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div className="relative min-h-screen flex justify-end items-end">
      {/* Background */}
      <div className="absolute inset-0 z-[-1]">
        {isDesktop ? (
          <img src="/images/desktop_bg.png" alt="Desktop Background" className="object-cover w-full h-full" />
        ) : (
          <img src="/images/mobile_bg.png" alt="Mobile Background" className="object-cover w-full h-full" />
        )}
      </div>

      <div className="absolute inset-0 flex flex-col items-end justify-center pb-8 pr-4 md:pb-12 md:pr-8 lg:pb-16 lg:pr-12 xl:pb-20 xl:pr-16">
        <TrackCard title="TRACK 01" icon="/images/scholar.png" positionRight={true} isDesktop={isDesktop} />
        <TrackCard title="TRACK 02" icon="/images/medical.png" positionRight={false} isDesktop={isDesktop} />
        <TrackCard title="TRACK 03" icon="/images/education.png" positionRight={true} isDesktop={isDesktop} />
        <TrackCard title="TRACK 04" icon="/images/currency.png" positionRight={false} isDesktop={isDesktop} />
      </div>
    </div>
  );
};

export default App;
