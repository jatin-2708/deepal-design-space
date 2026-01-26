export function BehanceIcon({ className = "h-5 w-5" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 256 256"
      fill="none"
      stroke="currentColor"
      strokeWidth="16"
      strokeLinecap="round"
      strokeLinejoin="round"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {/* B */}
      <path d="M 32 40 L 32 216 M 32 40 L 80 40 Q 112 40 112 72 Q 112 104 80 104 L 32 104 M 32 104 L 90 104 Q 128 104 128 160 Q 128 216 90 216 L 32 216" />
      
      {/* e */}
      <path d="M 160 104 L 208 104 Q 240 104 240 160 Q 240 216 208 216 Q 160 216 160 160 Q 160 140 208 140 L 160 140 M 208 180 Q 224 180 224 160 Q 224 140 208 140" />
      
      {/* macron above e */}
      <line x1="160" y1="60" x2="240" y2="60" />
    </svg>
  );
}
