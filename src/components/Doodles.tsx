/**
 * Subtle doodle-style SVG elements for personality
 * Used as decorative "thinking marks" and annotations
 */

export function DoodleUnderline({ className = "" }: { className?: string }) {
  return (
    <svg
      width="120"
      height="20"
      viewBox="0 0 120 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M 2 15 Q 30 8, 60 15 T 118 15"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        fill="none"
      />
    </svg>
  );
}

export function DoodleCircle({ className = "" }: { className?: string }) {
  return (
    <svg
      width="40"
      height="40"
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <circle
        cx="20"
        cy="20"
        r="18"
        stroke="currentColor"
        strokeWidth="1.5"
        fill="none"
        opacity="0.6"
      />
      <circle
        cx="20"
        cy="20"
        r="12"
        stroke="currentColor"
        strokeWidth="1"
        fill="none"
        opacity="0.4"
      />
    </svg>
  );
}

export function DoodleArrow({ className = "" }: { className?: string }) {
  return (
    <svg
      width="60"
      height="24"
      viewBox="0 0 60 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M 2 12 L 50 12"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path
        d="M 45 7 L 55 12 L 45 17"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
    </svg>
  );
}

export function DoodleBracket({ className = "" }: { className?: string }) {
  return (
    <svg
      width="20"
      height="60"
      viewBox="0 0 20 60"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M 15 5 L 5 5 L 5 55 L 15 55"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        fill="none"
      />
    </svg>
  );
}

export function DoodleDots({ className = "" }: { className?: string }) {
  return (
    <svg
      width="60"
      height="8"
      viewBox="0 0 60 8"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <circle cx="6" cy="4" r="2" fill="currentColor" opacity="0.8" />
      <circle cx="20" cy="4" r="2" fill="currentColor" opacity="0.6" />
      <circle cx="34" cy="4" r="2" fill="currentColor" opacity="0.4" />
      <circle cx="48" cy="4" r="2" fill="currentColor" opacity="0.2" />
    </svg>
  );
}

export function DoodleAccent({ className = "" }: { className?: string }) {
  return (
    <svg
      width="100"
      height="40"
      viewBox="0 0 100 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M 5 20 Q 25 5, 50 20 T 100 20"
        stroke="currentColor"
        strokeWidth="1.5"
        fill="none"
        opacity="0.5"
      />
      <circle cx="10" cy="20" r="2" fill="currentColor" opacity="0.6" />
      <circle cx="50" cy="20" r="2" fill="currentColor" opacity="0.6" />
      <circle cx="90" cy="20" r="2" fill="currentColor" opacity="0.6" />
    </svg>
  );
}
