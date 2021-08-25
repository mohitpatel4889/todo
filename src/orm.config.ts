  require('dotenv').config({
    debug: true,
    path: require('path').resolve(__dirname, `../.env.${process.env.NODE_ENV}`),
  });

const databaseUrl = process.env.DATABASE_URL;

module.exports = {
  type: 'postgres',
  url: databaseUrl,
  autoLoadEntities: true,
  migrations: ['src/migration/*.ts'],
  entities: ['src/**/*.entity.ts'],
  cli: {
    migrationsDir: 'src/migration',
  },
};
