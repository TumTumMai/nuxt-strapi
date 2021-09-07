module.exports = ({ env }) => ({
  host: env('HOST', '0.0.0.0'),
  port: env.int('PORT', 1336),
  admin: {
    auth: {
      secret: env('ADMIN_JWT_SECRET', '2168b22f3f8c568d251106503b654b91'),
    },
  },
  settings: {
    cors: {
      enabled: true,
      origin: ['*']
    },
  },

});
