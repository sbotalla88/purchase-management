/* eslint-disable */
//  @typescript-eslint/no-var-requires
const runtimeCaching = require('next-pwa/cache');
// @typescript-eslint/no-var-requires
const { i18n } = require('./next-i18next.config');
// @typescript-eslint/no-var-requires
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');
// @typescript-eslint/no-var-requires
const ESLintPlugin = require('eslint-webpack-plugin');
// @typescript-eslint/no-var-requires
const withBundleAnalyzer = require('@next/bundle-analyzer')({
    enabled: process.env.ANALYZE === 'true',
});
const MomentLocalesPlugin = require('moment-locales-webpack-plugin');

//  @typescript-eslint/no-var-requires
const withPWA = require('next-pwa')({
    disable: process.env.NODE_ENV === 'development',
    dest: 'public',
    runtimeCaching,
});

/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
    i18n,
    eslint: {
        // Warning: This allows production builds to successfully complete even if
        // your project has ESLint errors.
        ignoreDuringBuilds: false,
    },
    typescript: {
        // !! WARN !!
        // Dangerously allow production builds to successfully complete even if
        // your project has type errors.
        // !! WARN !!
        ignoreBuildErrors: false,
    },
    devIndicators: {
        buildActivity: false,
    },
};

module.exports = withBundleAnalyzer(
    withPWA({
        ...nextConfig,
        webpack(config, { isServer }) {
            if (process.env.NODE_ENV === 'development') {
                config.plugins.push(
                    new ESLintPlugin({
                        extensions: ['js', 'ts', 'tsx', 'jsx'],
                    })
                );
            }
            if (!isServer && process.env.NODE_ENV !== 'development') {
                config.plugins.push(new ForkTsCheckerWebpackPlugin());
            }
            config.plugins.push(new MomentLocalesPlugin());
            return config;
        },
    })
);
