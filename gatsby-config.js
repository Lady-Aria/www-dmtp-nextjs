module.exports = {
  siteMetadata: {
    siteTitle: `Dead Man's Toe Productions`,
    copyright: `Dead Man's Toe Productions`,
    author: {
      name: `Arianna Armon`,
    },
    siteDescription: `Dead Man's Toe Productions`,
    siteUrl: `https://www.deadmanstoeproductions.com/`,
    social: {
      instagram: `dmt.prod`,
    },
    keywords: ["Dead Man's Toe Productions"],
  },
  plugins: [
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Dead Man's Toe Productions`,
        short_name: `DMTP`,
        start_url: `/`,
        icon: `src/assets/images/favicon.png`, // This path is relative to the root of the site.
      },
    },
    `gatsby-plugin-remove-generator`,
    `gatsby-plugin-sitemap`,
    {
      resolve: `gatsby-plugin-robots-txt`,
      options: {
        host: "https://www.deadmanstoeproductions.com",
        sitemap: "https://www.deadmanstoeproductions.com/sitemap.xml",
        policy: [
          {
            userAgent: "*",
            allow: "/",
          },
        ],
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/blog`,
        name: `blog`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/assets/images`,
      },
    },
    {
      resolve: "gatsby-plugin-react-svg",
      options: {
        rule: {
          include: "/assets/",
        },
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 590,
            },
          },
          {
            resolve: `gatsby-remark-responsive-iframe`,
            options: {
              wrapperStyle: `margin-bottom: 1.0725rem`,
            },
          },
          `gatsby-remark-prismjs`,
          `gatsby-remark-copy-linked-files`,
          `gatsby-remark-smartypants`,
        ],
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: `UA-121311307-4`,
      },
    },
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-next-seo`,
    {
      resolve: `gatsby-plugin-sass`,
      options: {
        // Configure SASS to process Tailwind
        postCssPlugins: [
          require("tailwindcss"),
          require("./tailwind.config.js"),
        ],
      },
    },
    // `gatsby-plugin-postcss`,
    {
      resolve: `gatsby-plugin-purgecss`,
      options: {
        printRejected: true, // Print removed selectors and processed file names
        // develop: true, // Enable while using `gatsby develop`
        tailwind: true, // Enable tailwindcss support
        // whitelist: ['whitelist'], // Don't remove this selector
        ignore: ["react-day-picker/"], // Ignore files/folders
        whitelistPatterns: [
          /w-/,
          /list-/,
          /-link/,
          /gray-link/,
          /DayPicker/,
          /text-gray/,
          /sm:hidden/,
          /sm:block/,
          /md:hidden/,
          /md:block/,
          /lg:hidden/,
          /lg:block/,
          /xl:hidden/,
          /xl:block/,
          /opacity/,
          /flex-row/,
          /bg-white/,
          /w-80/,
          /h-80/,
          /h-120/,
          /h-240/,
          /p-0/,
          /p-8/,
          /p-6/,
          /p-16/,
          /pl-8/,
          /pr-8/,
          /mr-4/,
          /justify-end/,
          /xl:pl-8/,
          /BrainhubCarousel/,
          /bg-columbia/,
          /bg-blue-900/,
          /text-blue-400/,
          /text-blue-500/,
          /shadow-flat-card/,
        ],
        //purgeOnly : ['components/', '/main.css', 'bootstrap/'], // Purge only these files/folders
      },
    },
  ],
}
