/** @type {import('next').NextConfig} */
const nextConfig = {
    webpack: (config) => ({
        ...config,
        watchOptions: {
            ...config.watchOptions,
            poll: 800,
            aggregateTimeout: 300,
        },
    }),
};

export default nextConfig;
