import type { GatsbyConfig } from 'gatsby';

const config: GatsbyConfig = {
  siteMetadata: {
    title: `vladis-mobil-grooming`,
    siteUrl: `https://www.yourdomain.tld`
  },
  graphqlTypegen: true,
  plugins: [
    'gatsby-plugin-postcss',
    'gatsby-plugin-image',
    `gatsby-plugin-sass`,
    'gatsby-plugin-sitemap',
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        icon: 'static/favicon.png',
        options: {
          name: `Vladis Mobil Grooming & Spa in PA, NJ, DE, NY`,
          short_name: `Vladis Mobil Grooming & Spa in PA, NJ, DE, NY`,
          start_url: `/`,
          background_color: `#080708`,
          theme_color: `#0EA5E9`,
          display: `standalone`
        },
        icons: [
          {
            src: `/static/android-chrome-192x192.png`,
            sizes: `192x192`,
            type: `image/png`
          },
          {
            src: `/static/android-chrome-512x512.png`,
            sizes: `512x512`,
            type: `image/png`
          }
        ]
      }
    },
    // 'gatsby-plugin-mdx',
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    // {
    //   resolve: 'gatsby-source-filesystem',
    //   options: {
    //     "name": "images",
    //     "path": "./src/images/"
    //   },
    //   __key: "images"
    // },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'pages',
        path: './src/pages/'
      },
      __key: 'pages'
    }
    // {
    //   resolve: 'gatsby-source-strapi',
    //   options: {
    //     apiURL: 'https://vladis-mobil-grooming-backend-fdfcbfd75b30.herokuapp.com/',
    //     // apiURL: 'http://127.0.0.1:1337',
    //     accessToken:
    //       '6c7c9831774545ae5d8c59b9dd66f1f3522999b5719279c19138f9e1f810aa09d36b86328a0e92519e744d15cd260ee93f78e9262888a53718c4b67ac38d1944751917c5d3314932a3f6772d69a12cd23733873fb72f5b3281c008d3fd16aeeabdb293a3395ae0d366d921c28fec38a794a11b0e4a194fba2e1c5ad07712a395',
    //     // accessToken:
    //     //   'b9cf795f8ab17c09c60791af3902dfe754b8594404480bab31c12cb802b149dbe08cb878f0ab51fc47d17102209c5dec46dc842b1c3dc8b69c10a7e5c392fe52a6e35362bb58a49322045f159d32d01ce479dc93ada66ece771a4664f43d4d38976fd7451d7c3f25b35117bcbd4ae9b603f96260ffa860189375c6c5f1d638f4',
    //     collectionTypes: [],
    //     singleTypes: [
    //       'main',
    //       'hero-section',
    //       'features-section',
    //       'services-section',
    //       'before-the-session-section',
    //       'reviews-section',
    //       'faqs-section',
    //       'playbar-section'
    //     ]
    //   }
    // }
  ]
};

export default config;
