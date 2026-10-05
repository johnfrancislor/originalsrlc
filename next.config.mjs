/** @type {import('next').NextConfig} */
const nextConfig = {
  // Pin the workspace root; the parent folder holds other projects' lockfiles.
  turbopack: { root: import.meta.dirname },
  // No `output: "export"` here: this site keeps a Node server so it can use
  // API routes (src/app/api/*) and server actions. Pages without dynamic data
  // are still pre-rendered as static HTML at build time.

  // Keep the old site's URLs working.
  async redirects() {
    const oldPages = {
      index: "/",
      about: "/about",
      about_location: "/about#location",
      about_logo: "/about#polar-bear",
      treating: "/dyslexia",
      treating_about: "/dyslexia#about-dyslexia",
      treating_approach: "/dyslexia#approach",
      treating_enrollment: "/dyslexia#enrollment",
      help: "/get-involved",
      help_volunteer: "/get-involved#volunteer",
      help_donate: "/get-involved#donate",
      contact: "/contact",
    };
    return [
      ...Object.entries(oldPages).map(([page, destination]) => ({
        source: `/en/${page}.php`,
        destination,
        permanent: true,
      })),
      { source: "/en", destination: "/", permanent: true },
    ];
  },
};

export default nextConfig;
