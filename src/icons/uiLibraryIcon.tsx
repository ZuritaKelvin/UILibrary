import React from 'react';
import type { SVGProps } from 'react';

export function UIIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="30px" height="30px" viewBox="0 0 24 24" {...props}>
      <path fill="none" stroke="currentColor" strokeLinecap="round" strokeWidth={2} d="M5 7h14M5 12h14M5 17h10"></path>
    </svg>);
}
