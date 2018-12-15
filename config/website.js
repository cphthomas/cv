const tailwind = require('../tailwind');

module.exports = {
  pathPrefix: '/', // Prefix for all links. If you deploy your site to example.com/portfolio your pathPrefix should be "/portfolio"

  siteTitle: 'Thomas Petersen CV', // Navigation and Site Title
  siteTitleAlt: 'Thomas Petersen CV', // Alternative Site title for SEO
  siteUrl: 'https://thomas.tepedu.dk', // Domain of your site. No trailing slash!
  siteLanguage: 'da', // Language Tag on <html> element
  siteLogo: '/logos/logo-1024.png', // Used for SEO and manifest
  siteDescription: 'Thomas Petersen CV',

  // siteFBAppID: '123456789', // Facebook App ID - Optional
  userTwitter: '@cphthomas', // Twitter Username
  //ogSiteName: 'cara', // Facebook Site Name
  //ogLanguage: 'en_US', // Facebook Language

  // Manifest and Progress color
  themeColor: tailwind.colors.orange,
  backgroundColor: tailwind.colors.blue,
};
