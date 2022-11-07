// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
    ssr: true,

    app: {
        head: {
            charset: "utf-8",
            viewport: "width=device-width,initial-scale=1,minimum-scale=1,maximum-scale=5",
            title: "test title",
            htmlAttrs: {
                lang: "ko",
            },
            meta: [{ name: "format-detection", content: "telephone=no" }],
        },
    },

    css: ["@/assets/scss/common.scss"],

    modules: [],

    vite: {
        server: {
            proxy: {
                "/api": {
                    target: "http://localhost:8200/",
                    changeOrigin: true,
                    rewrite: (path) => path.replace(/^\/api/, "/api/v1"),
                },
            },
        },
        css: {
            preprocessorOptions: {
                scss: {
                    additionalData: `@use "sass:map";@use "sass:list";@import "@/assets/scss/var/variables";`,
                },
            },
        },
    },
});

// export default {

//     globalName: "vitamin",

//     globals: {
//         id: (globalName) => `${globalName}`,
//         context: (globalName) => `${globalName.toUpperCase()}`,
//     },

//     env: {
//         secrets: {
//             sessionKey: secrets.getSecret("SESSION_KEY"),
//             backendHost: secrets.getSecret("PHDKIM_BACKEND_HOST"),
//             showGoogleAnalyticsTag: secrets.getSecret("SHOW_GOOGLE_ANALYTICS_TAG"),
//             sentryDsnFront: secrets.getSecret("SENTRY_DSN_FRONT"),
//             gaTrackingId: secrets.getSecret("GA_TRACKING_ID"),
//             awsCloudfrontDomain: process.env.NODE_ENV == "development" ? "/media/" : `https://${secrets.getSecret("AWS_CLOUDFRONT_DOMAIN")}/media/`,
//             baseUrl: secrets.getSecret("BASE_URL"),
//             companyAppUrl: secrets.getSecret("COMPANY_APP_URL"),
//         },
//     },

//     // Build Configuration: https://go.nuxtjs.dev/config-build
//     build: {
//         postcss: null,
//         publicPath: buildPath(),
//         extractCSS: true,
//         optimization: {
//             splitChunks: {
//                 cacheGroups: {
//                     styles: {
//                         name: "common",
//                         test: /\.(css|vue)$/,
//                         chunks: "all",
//                         enforce: true,
//                     },
//                 },
//             },
//         },
//         extend(config, { isClient }) {
//             if (isClient) {
//                 config.node = {
//                     dgram: "empty",
//                 };
//             }
//         },
//     },

//     dayjs: {
//         locales: ["ko"],
//         defaultLocale: "ko",
//         defaultTimeZone: "Asia/Seoul",
//         plugins: ["utc", "timezone"],
//     },
// };
