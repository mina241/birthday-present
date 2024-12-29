"use client";

import Image from "next/image";
import { useState, useRef } from "react";

export default function Home() {
  const [showHeart, setShowHeart] = useState(false);
  const [activeMemory, setActiveMemory] = useState<number | null>(null);
  const [showFullMessage, setShowFullMessage] = useState(false);
  const heartTimeout = useRef<NodeJS.Timeout | null>(null);

  const handleMemoryClick = (index: number) => {
    setActiveMemory(index === activeMemory ? null : index);
  };

  const handleHeartClick = () => {
    setShowHeart(true);
    if (heartTimeout.current) clearTimeout(heartTimeout.current);
    heartTimeout.current = setTimeout(() => setShowHeart(false), 1000);
  };

  const toggleMessage = () => {
    setShowFullMessage(!showFullMessage);
  };

  return (
    <div className="min-h-screen bg-[#2d1832] text-white">
      {/* Hero Section - Floating Animation */}
      <section className="h-screen flex items-center justify-center text-center px-4">
        <div className="floating-card p-8 rounded-2xl">
          <h1 className="hero-text text-6xl sm:text-8xl font-bold mb-6 sparkle">
            Happy Birthday, IRENE
          </h1>
          <p className="text-xl sm:text-2xl text-pink-300">
            SHINING AND LIVING HER BEST DAYS AT 21 🤍
          </p>
          <div className="mt-8">
            <Image
              src="/holding_hands.png"
              alt="Holding Hands"
              width={300}
              height={300}
              className="mx-auto rounded-lg shadow-lg hover:scale-105 transition-transform"
              priority
            />
          </div>
        </div>
      </section>

      {/* Beautiful Soul - Polaroid Style */}
      <section className="py-16 px-4 sm:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="polaroid-card">
            <h2 className="text-3xl font-semibold mb-4 text-pink-600">
              Beautiful Soul
            </h2>
            <p className="text-lg text-gray-800">
              Your kindness and grace touch hearts, making the world a more
              beautiful place with your presence 🌸
            </p>
          </div>
        </div>
      </section>

      {/* Interactive Memories Section */}
      <section className="py-16 px-4 sm:px-8">
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          {[0, 1].map((index) => (
            <div
              key={index}
              className={`memory-card p-6 rounded-xl cursor-pointer ${
                activeMemory === index ? 'scale-105' : ''
              }`}
              onClick={() => handleMemoryClick(index)}
            >
              <h3 className="text-2xl font-semibold mb-3 text-pink-300">
                {index === 0 ? "Sparkling Future" : "Cherished Moments"}
              </h3>
              <p className="text-gray-200">
                {index === 0
                  ? "At 21, you're blooming into an amazing woman, and your future shines as bright as your smile ⭐"
                  : "Every moment spent with you becomes a treasured memory, filled with laughter and joy 💫"}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Personal Message - Glowing Border */}
      <section className="py-16 px-4 sm:px-8 relative">
        <div className="max-w-4xl mx-auto">
          <div 
            className="glowing-border rounded-xl p-8 cursor-pointer hover:scale-[1.02] transition-transform"
            onClick={toggleMessage}
          >
            <h2 className="text-3xl font-semibold mb-4 text-pink-300">
              To My Beautiful Bubbles
            </h2>
            <p className="text-lg text-gray-200">
              Happy birthday to my most amazing and beautiful friend! Click to read my heartfelt message... ✨
            </p>
          </div>
        </div>

        {/* Full Message Popup */}
        {showFullMessage && (
          <div className="fixed inset-0 bg-black/70 flex items-center justify-center p-4 z-50">
            <div className="message-popup bg-[#2d1832] max-w-4xl mx-auto p-8 rounded-xl relative">
              <button 
                onClick={toggleMessage}
                className="absolute top-4 right-4 text-pink-300 hover:text-pink-400 text-xl"
              >
                ✕
              </button>
              <h2 className="text-3xl font-semibold mb-6 text-pink-300">
                To My Beautiful Bubbles
              </h2>
              <p className="text-lg text-gray-200 leading-relaxed">
                Happy birthday to my most amazing and beautiful friend! 8 years have passed like a moment, yet they are filled with so much love and unforgettable memories. I know I&apos;ve been bitchy sometimes, but you&apos;ve always been my support and the safe space I turn to in my weakest moments. Having you by my side is one of the greatest blessings I thank God for every single day. You&apos;re more than a friend—you&apos;re my sister and my second soul, and every moment I&apos;ve spent with you has been among the best years of my life. I hope our friendship lasts forever because life is so much better and kinder with you in it. I love you more than words can ever express, and I pray that your life is always filled with happiness and success.
              </p>
            </div>
          </div>
        )}
      </section>

      {/* Final Message - Sparkle Button */}
      <section className="py-20 px-4 sm:px-8">
        <div
          className="max-w-4xl mx-auto text-center sparkle-button p-8 rounded-xl bg-gradient-to-r from-pink-500/20 to-purple-500/20 cursor-pointer"
          onClick={handleHeartClick}
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-6 text-pink-300">
            Here&apos;s to You, IRENE
          </h2>
          <p className="text-xl text-gray-200">
            May your 21st year be filled with sparkles, joy, and endless magic ✨
          </p>
          {showHeart && (
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="text-red-500 text-6xl animate-ping">❤️</span>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
