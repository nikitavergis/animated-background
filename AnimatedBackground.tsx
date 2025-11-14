export function AnimatedBackground() {
  return (
    <>
      {/* Static fallback for devices with prefers-reduced-motion */}
      <div className="absolute inset-0 opacity-0 motion-reduce:opacity-100 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full opacity-30 blur-3xl" 
             style={{ background: 'radial-gradient(circle, #FF77B7 0%, transparent 70%)' }} />
        <div className="absolute top-1/3 right-1/4 w-80 h-80 rounded-full opacity-25 blur-3xl" 
             style={{ background: 'radial-gradient(circle, #33D39F 0%, transparent 70%)' }} />
        <div className="absolute bottom-1/3 left-1/3 w-72 h-72 rounded-full opacity-30 blur-3xl" 
             style={{ background: 'radial-gradient(circle, #6BA5FF 0%, transparent 70%)' }} />
      </div>

      {/* Animated gradient blobs */}
      <div className="absolute inset-0 motion-reduce:opacity-0 pointer-events-none overflow-hidden">
        {/* Pink blob 1 - starts left, moves right */}
        <div 
          className="absolute w-96 h-96 rounded-full opacity-30 blur-3xl animate-float-1"
          style={{ 
            background: 'radial-gradient(circle, #FF77B7 0%, transparent 70%)',
            top: '10%',
            left: '5%'
          }}
        />
        
        {/* Green blob 1 - starts right, moves left */}
        <div 
          className="absolute w-80 h-80 rounded-full opacity-25 blur-3xl animate-float-2"
          style={{ 
            background: 'radial-gradient(circle, #33D39F 0%, transparent 70%)',
            top: '15%',
            right: '8%'
          }}
        />
        
        {/* Blue blob 1 - starts bottom left, moves up-right */}
        <div 
          className="absolute w-[22rem] h-[22rem] rounded-full opacity-30 blur-3xl animate-float-3"
          style={{ 
            background: 'radial-gradient(circle, #6BA5FF 0%, transparent 70%)',
            bottom: '20%',
            left: '10%'
          }}
        />
        
        {/* Pink blob 2 - starts bottom right, moves top-left */}
        <div 
          className="absolute w-72 h-72 rounded-full opacity-25 blur-3xl animate-float-4"
          style={{ 
            background: 'radial-gradient(circle, #FF77B7 0%, transparent 70%)',
            bottom: '15%',
            right: '5%'
          }}
        />
        
        {/* Green blob 2 - starts top, moves bottom */}
        <div 
          className="absolute w-64 h-64 rounded-full opacity-20 blur-3xl animate-float-5"
          style={{ 
            background: 'radial-gradient(circle, #33D39F 0%, transparent 70%)',
            top: '5%',
            left: '40%'
          }}
        />
        
        {/* Blue blob 2 - starts middle-right, moves left */}
        <div 
          className="absolute w-80 h-80 rounded-full opacity-25 blur-3xl animate-float-6"
          style={{ 
            background: 'radial-gradient(circle, #6BA5FF 0%, transparent 70%)',
            top: '45%',
            right: '10%'
          }}
        />
      </div>
    </>
  );
}
