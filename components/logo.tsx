// Logo Component
const Logo = ({ onClick }: { onClick: () => void }) => (
  <div className="flex items-center gap-3 group cursor-pointer" onClick={onClick}>
    <div className="relative">
      <div className="w-12 h-12 bg-gradient-to-r from-blue-600 via-purple-600 to-blue-800 rounded-xl flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-110">
        <span className="text-white font-bold text-xl">Z</span>
      </div>
      <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl opacity-0 group-hover:opacity-20 blur transition-all duration-300"></div>
    </div>
    <div className="hidden sm:block">
      <h1 className="font-medium text-xl bg-gradient-to-r from-slate-800 to-slate-600 bg-clip-text text-transparent">Zumar Saeed</h1>
    </div>
  </div>
);

export default Logo;
