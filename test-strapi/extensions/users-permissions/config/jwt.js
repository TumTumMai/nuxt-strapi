module.exports = {
  jwtSecret: process.env.JWT_SECRET || '57b4d0d4-cda2-41ac-81a5-837825c4f750',
  jwt: {
    expiresIn: "5m",
  }
};