import React from "react";

export interface anchorTagProps {
  href?: string;
  className?: string;
  children?: React.ReactNode;
  noBlank?: boolean;
}
export const AnchorTag = ({
  children,
  href,
  className,
  noBlank = false,
}: anchorTagProps) => {
  return (
    <a
      className={
        "text-white hover:animate-pulse text-lg md:text-3xl text-bold hover:text-white " +
        className
      }
      href={href}
      target={noBlank ? "" : "_blank"}
    >
      {children}
    </a>
  );
};
export interface svgProps {
  viewBox?: string;
  className?: string;
  xmlSpace?: string;
  children?: React.ReactNode;
}
export const Svg = ({ children, viewBox, className, xmlSpace }: svgProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox={viewBox}
      className={
        "w-8 h-8 md:w-10 md:h-10 fill-white hover:animate-pulse" +
        " " +
        className
      }
      xmlSpace={xmlSpace}
    >
      {children}
    </svg>
  );
};
