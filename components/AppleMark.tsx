// The site's own logo mark: a drawn red apple with a bite taken out of it.
// `id` keeps the SVG mask unique when the mark appears more than once on a page.
export default function AppleMark({ id, size = 34 }: { id: string; size?: number }) {
  const maskId = `apple-bite-${id}`;
  return (
    <svg width={size} height={size} viewBox="0 0 32 32" aria-hidden="true" focusable="false">
      <defs>
        <mask id={maskId}>
          <rect width="32" height="32" fill="#fff" />
          <circle cx="27.6" cy="15.5" r="4.3" fill="#000" />
        </mask>
      </defs>
      <g mask={`url(#${maskId})`}>
        <path
          d="M16 10.6C13.4 8.5 6 8 5.5 16c-.3 6 3.5 13 7 13 1.5 0 2.3-.8 3.5-.8s2 .8 3.5.8c3.5 0 7.3-7 7-13-.5-8-8-7.5-10.5-5.4Z"
          fill="#e0283c"
        />
        <ellipse cx="10.4" cy="15.4" rx="1.5" ry="3.1" transform="rotate(18 10.4 15.4)" fill="#fff" opacity=".35" />
      </g>
      <path d="M16 10.6c0-2.6.8-4.6 2-5.8" stroke="#8a5a2b" strokeWidth="1.6" strokeLinecap="round" fill="none" />
      <path d="M17.3 6.9c1.3-3.3 5.2-4 7.2-3.2-.9 2.8-3.9 4.4-7.2 3.2Z" fill="#3fa34d" />
    </svg>
  );
}
