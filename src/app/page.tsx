import CosmicNebula from '@/components/cosmic-nebula'

export default function Home() {
  return (
    <div className="relative min-h-screen overflow-hidden">
      <CosmicNebula />
      
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen gap-8 p-4">
        <div className="relative w-24 h-24 md:w-32 md:h-32">
          <img
            src="/logo.svg"
            alt="Z.ai Logo"
            className="w-full h-full object-contain"
          />
        </div>
        
        <div className="text-center space-y-4 max-w-2xl">
          <h1 className="text-4xl md:text-6xl font-bold text-white drop-shadow-lg">
            Cosmic Nebula Background
          </h1>
          <p className="text-lg md:text-xl text-white/90 drop-shadow-md">
            Experience the beauty of deep space with twinkling stars and ethereal nebulae
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
              <h3 className="text-xl font-semibold text-white mb-2">5000 Stars</h3>
              <p className="text-white/80">Twinkling white particles distributed throughout space</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
              <h3 className="text-xl font-semibold text-white mb-2">Purple Nebulae</h3>
              <p className="text-white/80">Semi-transparent clouds with smoky texture</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
              <h3 className="text-xl font-semibold text-white mb-2">Smooth Animation</h3>
              <p className="text-white/80">Gentle rotation with dynamic lighting effects</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}