# Required Environment Variables

For production and secure operation, set the following environment variables:

- JWT_SECRET: secret used to sign JWT tokens (required)
- MPESA_CONSUMER_KEY: M-Pesa consumer key (recommended for payment features)
- MPESA_CONSUMER_SECRET: M-Pesa consumer secret (recommended for payment features)
- MPESA_PASSKEY: M-Pesa passkey (recommended for payment features)
- MPESA_SHORTCODE: Business short code for M-Pesa
- MPESA_BASE_URL: M-Pesa base URL (defaults to sandbox)
- CORS_ALLOWED_ORIGINS: comma-separated allowed origins for CORS in production

The server will refuse to start in production if `JWT_SECRET` is not set.
