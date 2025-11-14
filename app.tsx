import { AnimatedBackground } from "./components/AnimatedBackground";

export default function App() {
  return (
    <div className="min-h-screen relative overflow-hidden" style={{ backgroundColor: '#FEFBF6' }}>
      <AnimatedBackground />
      
      {/* Hero Content - Replace with your actual content */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-6">
        <h1 className="text-center max-w-4xl">
          Your Portfolio Hero Content
        </h1>
        <p className="text-center max-w-2xl mt-4 opacity-80">
          This is your hero section with the animated gradient background
        </p>
      </div>
    </div>
  );
}
