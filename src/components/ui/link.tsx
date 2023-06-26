import NextLink, { LinkProps as NextLinkProps } from 'next/link';
import React from 'react';

const Link: React.FC<
    NextLinkProps & { className?: string; title?: string; children?: React.ReactNode; style?: React.CSSProperties }
> = ({ href, children, ...props }) => {
    return (
        <NextLink href={href}>
            <span {...props}>{children}</span>
        </NextLink>
    );
};

export default Link;
