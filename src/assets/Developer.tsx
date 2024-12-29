import { SVGType } from "@/types";

export const Developer = ({ width, height, className }: SVGType) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox="0 0 200 100"
      className={className}
      fill="none"
    >
      <text
        x="10"
        y="55"
        fontFamily="Arial, sans-serif"
        fontSize="24"
        fill="currentColor"
        fontWeight="bold"
      >
        &lt;ED /&gt;
      </text>
    </svg>
  );
};
