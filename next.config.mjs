/** @type {import('@/configDev.js')} */
let configData;

import(`./config${process.env.NEXT_PUBLIC_TYPE}.js`)
    .then(async (data) => {
        configData = data
    })

export { configData }

/** @type {import('next').NextConfig} */
const nextConfig = {
    async redirects() {
        return [
            {
                source: '/',
                destination: '/br',
                basePath: false,
                permanent: true,
            },
        ]
    },
};

export default nextConfig;