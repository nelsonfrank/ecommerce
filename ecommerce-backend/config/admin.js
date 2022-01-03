module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', 'a05e7be161b3b1ca19a4321985225cd6'),
  },
});
