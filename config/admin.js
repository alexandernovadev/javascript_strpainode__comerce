module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', 'e2465acf971440b0e18ee1807d00cc1e'),
  },
});
