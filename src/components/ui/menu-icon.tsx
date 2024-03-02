export function MenuIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xlinkTitle="Open the main menu"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M3 7H21"
        stroke="#333333"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <path
        opacity="0.34"
        d="M3 12H21"
        stroke="#333333"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <path
        d="M3 17H21"
        stroke="#333333"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  );
}
