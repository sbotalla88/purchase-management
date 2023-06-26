import React from 'react';

import { NextSeo } from 'next-seo';
import Head from 'next/head';

type IMetaProps = {
    title: string;
    description: string;
    canonical?: string;
};

const Meta = (props: IMetaProps) => (
    <>
        <Head>
            <meta charSet="UTF-8" key="charset" />
            <meta name="viewport" content="width=device-width,initial-scale=1" key="viewport" />
            <link rel="apple-touch-icon" href={`/apple-touch-icon.png`} key="apple" />
        </Head>
        <NextSeo
            title={props.title}
            description={props.description}
            canonical={props.canonical}
            openGraph={{
                title: props.title,
                description: props.description,
                url: props.canonical,
                locale: 'en',
                site_name: 'Alpine',
            }}
        />
    </>
);

export default React.memo(Meta);
