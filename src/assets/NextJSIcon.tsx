import { SVGType } from "@/types";

export const NextJSIcon = ({ width, height, className }: SVGType) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M8 1.5a6.5 6.5 0 103.65 11.88L6 6.577v4.673a.75.75 0 01-1.5 0V4.5a.75.75 0 011.327-.48l7.474 9a.75.75 0 01-.088 1.049 8 8 0 112.12-2.865.75.75 0 11-1.375-.602A6.453 6.453 0 0014.5 8 6.5 6.5 0 008 1.5zm2.5 2.25a.75.75 0 01.75.75v3a.75.75 0 01-1.5 0v-3a.75.75 0 01.75-.75z"
        fill="currentColor"
      />
    </svg>
  );
};
