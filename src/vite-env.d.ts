/// <reference types="vite/client" />
/// <reference types="react" />
/// <reference types="react-dom" />

declare module 'framer-motion' {
  import * as React from 'react';
  export interface MotionProps {
    initial?: any;
    animate?: any;
    exit?: any;
    transition?: any;
    whileHover?: any;
    whileTap?: any;
    className?: string;
    style?: React.CSSProperties;
    [key: string]: any;
  }

  export interface MotionDivProps
    extends MotionProps,
      React.HTMLAttributes<HTMLDivElement> {}
  export interface MotionHeadingProps
    extends MotionProps,
      React.HTMLAttributes<HTMLHeadingElement> {}
  export interface MotionParagraphProps
    extends MotionProps,
      React.HTMLAttributes<HTMLParagraphElement> {}
  export interface MotionAnchorProps
    extends MotionProps,
      React.HTMLAttributes<HTMLAnchorElement> {}
  export interface MotionSpanProps
    extends MotionProps,
      React.HTMLAttributes<HTMLSpanElement> {}

  export const motion: {
    div: React.FC<MotionDivProps>;
    h1: React.FC<MotionHeadingProps>;
    h2: React.FC<MotionHeadingProps>;
    h3: React.FC<MotionHeadingProps>;
    p: React.FC<MotionParagraphProps>;
    a: React.FC<MotionAnchorProps>;
    span: React.FC<MotionSpanProps>;
    [key: string]: React.FC<any>;
  };
}

declare module 'react-intersection-observer' {
  export function useInView(options?: any): [any, boolean];
}

declare module 'lucide-react' {
  import * as React from 'react';

  export interface IconProps extends React.SVGAttributes<SVGElement> {
    size?: number | string;
    strokeWidth?: number | string;
  }

  export const Youtube: React.FC<IconProps>;
  export const Mail: React.FC<IconProps>;
  export const MapPin: React.FC<IconProps>;
  export const Phone: React.FC<IconProps>;
  export const Github: React.FC<IconProps>;
}
