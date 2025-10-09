export default function Home() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-gradient-to-br from-primary-light to-secondary">
      <div className="text-center text-white">
        <h1 className="text-6xl font-bold mb-4 animate-fade-in">
          Lorenzo Dastoli
        </h1>
        <p className="text-2xl mb-8 animate-slide-up">Frontend Developer</p>
        <div className="flex gap-4 justify-center animate-slide-up">
          <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center">
            <span className="text-3xl">🚀</span>
          </div>
          <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center">
            <span className="text-3xl">💻</span>
          </div>
          <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center">
            <span className="text-3xl">✨</span>
          </div>
        </div>
        <p className="mt-8 text-lg opacity-90">
          Portfolio coming soon...
        </p>
      </div>
    </main>
  );
}