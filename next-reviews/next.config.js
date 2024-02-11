// @ts-check

/** @type {import('next').NextConfig} */
const nextConfig = {
    /* config options here */
    images:{
        remotePatterns:[
            {
                hostname:"localhost",
                protocol:"http",
                port:"1337",
                pathname:"/uploads/**"
            }
        ]
    }
}

module.exports = nextConfig