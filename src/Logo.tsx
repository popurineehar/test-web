import React from "react";

export const ApuaIcon = ({
    size = 24,
    color = 'currentColor',
    className,
    ...props
}: React.SVGProps<SVGSVGElement> & { size?: number | string; color?: string }) => (
    <svg
        width={size}
        height={size}
        viewBox="0 0 512 512"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={className}
        {...props}
    >
        <rect width="512" height="512" rx="0" fill={color} />
        <rect x="70" y="46" width="372" height="420" rx="24" fill="white" />
        <path
            d="M96 256c88.366 0 160-71.634 160-160 0 88.366 71.634 160 160 160-88.366 0-160 71.634-160 160 0-88.366-71.634-160-160-160Z"
            fill={color}
            stroke={color}
            strokeWidth="24"
            strokeLinejoin="round"
        />
    </svg>
);