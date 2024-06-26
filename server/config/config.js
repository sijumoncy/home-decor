const dotenv = require("dotenv");
const Joi = require("joi");

dotenv.config();

const envVarsSchema = Joi.object()
  .keys({
    NODE_ENV: Joi.string().valid("production", "development").required(),
    PORT: Joi.number().default(8000),
    API_URL: Joi.string()
      .description("base url of api with version")
      .default("/api/v1"),
    API_SERVER_URL: Joi.string()
      .description("base url of server")
      .default("http://127.0.0.1:8000"),
    MONGO_URI: Joi.string().required().description("Mongo DB url"),
    MONGO_DB_NAME: Joi.string().required().description("Mongo DB name"),
    JWT_SECRET: Joi.string().required().description("JWT secret key"),
    JWT_ACCESS_EXPIRATION_MINUTES: Joi.number()
      .default(30)
      .description("minutes after which access tokens expire"),
    JWT_REFRESH_EXPIRATION_DAYS: Joi.number()
      .default(30)
      .description("days after which refresh tokens expire"),
    CRYPTO_PWD_SECRET: Joi.string()
      .required()
      .description("Crypto Password secret key"),
    STRIPE_SECRET: Joi.string().required().description("Strip secret key"),
  })
  .unknown();

const { value: envVars, error } = envVarsSchema
  .prefs({ errors: { label: "key" } })
  .validate(process.env);

if (error) {
  throw new Error(`Config validation error: ${error.message}`);
}

const config = {
  env: envVars.NODE_ENV,
  port: envVars.PORT,
  apiBaseUrl: envVars.API_URL,
  apiServerUrl: envVars.API_SERVER_URL,
  mongo: {
    url: envVars.MONGO_URI,
    dbName: envVars.MONGO_DB_NAME,
  },
  jwt: {
    secret: envVars.JWT_SECRET,
    accessExpirationMinutes: envVars.JWT_ACCESS_EXPIRATION_MINUTES,
    refreshExpirationDays: envVars.JWT_REFRESH_EXPIRATION_DAYS,
  },
  crypto: {
    secret: envVars.CRYPTO_PWD_SECRET,
  },
  stripe: {
    secret: envVars.STRIPE_SECRET,
  },
};

module.exports = config;
