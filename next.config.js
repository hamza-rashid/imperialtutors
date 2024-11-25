module.exports = {
  async redirects() {
    return [
      {
        source: '/guide',
        destination: '/guide.pdf', // or just `/guide` if no extension
        permanent: true,
      },
    ];
  },
};
