import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#2d1832] text-white">
      {/* Hero Section */}
      <section className="h-screen flex items-center justify-center text-center px-4">
        <div className="section-fade">
          <h1 className="hero-text text-6xl sm:text-8xl font-bold mb-6 sparkle">
            Happy Birthday, IRENE
          </h1>
          <p className="text-xl sm:text-2xl text-pink-300">
            Twenty-one and absolutely glowing ✨
          </p>
          <div className="mt-8">
            <Image
              src="/holding_hands.png"
              alt="Holding Hands"
              width={300}
              height={300}
              className="mx-auto rounded-lg shadow-lg"
              priority
            />
            <p className="mt-6 text-xl sm:text-2xl font-semibold text-pink-300">
              HAPPY BIRTHDAY TO THE MOST BEAUTIFUL PERSON I KNOW
            </p>
          </div>
        </div>
      </section>

      {/* Qualities Section */}
      <section className="py-20 px-4 sm:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="grid gap-12">
            <div className="section-fade delay-[400ms] section-card">
              <h2 className="text-3xl sm:text-4xl font-semibold mb-4 text-pink-300">Beautiful Soul</h2>
              <p className="text-lg text-gray-200">
                Your kindness and grace touch hearts, making the world a more
                beautiful place with your presence 🌸
              </p>
            </div>

            <div className="section-fade delay-[600ms] section-card">
              <h2 className="text-3xl sm:text-4xl font-semibold mb-4 text-pink-300">Sparkling Future</h2>
              <p className="text-lg text-gray-200">
                At 21, you're blooming into an amazing woman, and your future
                shines as bright as your smile ⭐
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Final Message */}
      <section className="py-20 px-4 sm:px-8">
        <div className="max-w-4xl mx-auto text-center section-fade delay-[800ms] section-card">
          <h2 className="text-4xl sm:text-5xl font-bold mb-6 text-pink-300 sparkle">
            Here's to You, IRENE
          </h2>
          <p className="text-xl text-gray-200">
            May your 21st year be filled with sparkles, joy, and endless magic ✨
          </p>
        </div>
      </section>
    </div>
  );
}
