const demos = [
  {
    name: 'Homepage',
    screenshotLight: '/img/screenshots/home.png',
    screenshotDark: '/img/screenshots/home-dark.png',
    link: '/home.html',
    new: false,
  },
  {
    name: 'Product',
    screenshotLight: '/img/screenshots/product.png',
    screenshotDark: '/img/screenshots/product-dark.png',
    link: '/product.html',
    new: false,
  },
  {
    name: 'About',
    screenshotLight: '/img/screenshots/about.png',
    screenshotDark: '/img/screenshots/about-dark.png',
    link: '/about.html',
    new: false,
  },
  {
    name: 'Pricing',
    screenshotLight: '/img/screenshots/pricing.png',
    screenshotDark: '/img/screenshots/pricing-dark.png',
    link: '/pricing.html',
    new: false,
  },
  {
    name: 'Jobs',
    screenshotLight: '/img/screenshots/jobs.png',
    screenshotDark: '/img/screenshots/jobs-dark.png',
    link: '/jobs.html',
    new: false,
  },
  {
    name: 'Job details',
    screenshotLight: '/img/screenshots/job.png',
    screenshotDark: '/img/screenshots/job-dark.png',
    link: '/job.html',
    new: false,
  },
  {
    name: 'Blog',
    screenshotLight: '/img/screenshots/blog.png',
    screenshotDark: '/img/screenshots/blog-dark.png',
    link: '/blog.html',
    new: false,
  },
  {
    name: 'Post',
    screenshotLight: '/img/screenshots/post.png',
    screenshotDark: '/img/screenshots/post-dark.png',
    link: '/post.html',
    new: false,
  },
  {
    name: 'Contact',
    screenshotLight: '/img/screenshots/contact.png',
    screenshotDark: '/img/screenshots/contact-dark.png',
    link: '/contact.html',
    new: false,
  },
  {
    name: 'Login',
    screenshotLight: '/img/screenshots/login.png',
    screenshotDark: '/img/screenshots/login-dark.png',
    link: '/login.html',
    new: false,
  },
  {
    name: 'Signup',
    screenshotLight: '/img/screenshots/signup.png',
    screenshotDark: '/img/screenshots/signup-dark.png',
    link: '/signup.html',
    new: false,
  },
  {
    name: 'Forgot password',
    screenshotLight: '/img/screenshots/forgot.png',
    screenshotDark: '/img/screenshots/forgot-dark.png',
    link: '/forgot.html',
    new: false,
  },
  {
    name: 'Error 404',
    screenshotLight: '/img/screenshots/404.png',
    screenshotDark: '/img/screenshots/404-dark.png',
    link: '/404.html',
    new: false,
  },
]

export function renderScreenshots() {
  return {
    screenshots: demos,
  }
}
