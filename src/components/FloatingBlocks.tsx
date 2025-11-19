export function FloatingBlocks() {
  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {/* Floating geometric blocks */}
      <div className="absolute top-[10%] left-[5%] w-12 h-12 border-2 border-primary/20 rotate-12 animate-[float_20s_ease-in-out_infinite]" />
      <div className="absolute top-[20%] right-[10%] w-16 h-16 border-2 border-accent/20 -rotate-45 animate-[float_25s_ease-in-out_infinite_2s]" />
      <div className="absolute top-[60%] left-[15%] w-10 h-10 border-2 border-secondary/20 rotate-45 animate-[float_30s_ease-in-out_infinite_4s]" />
      <div className="absolute top-[80%] right-[20%] w-14 h-14 border-2 border-primary/20 -rotate-12 animate-[float_22s_ease-in-out_infinite_1s]" />
      <div className="absolute top-[40%] right-[5%] w-12 h-12 border-2 border-accent/20 rotate-90 animate-[float_28s_ease-in-out_infinite_3s]" />
      <div className="absolute top-[30%] left-[25%] w-8 h-8 border-2 border-secondary/20 rotate-180 animate-[float_26s_ease-in-out_infinite_5s]" />
      
      <style>{`
        @keyframes float {
          0%, 100% {
            transform: translateY(0) rotate(var(--rotate-start, 0deg));
          }
          50% {
            transform: translateY(-30px) rotate(var(--rotate-end, 180deg));
          }
        }
      `}</style>
    </div>
  );
}
