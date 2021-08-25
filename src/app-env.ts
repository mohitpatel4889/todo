export enum AppEnv {
    TEST = 'test',
    DEVELOPMENT = 'development',
    STAGING = 'staging',
    PRODUCTION = 'production',
  }
  
  export function isTestEnv() {
    return process.env.NODE_ENV === AppEnv.TEST;
  }
  
  export function isDevelopmentEnv() {
    return process.env.NODE_ENV === AppEnv.DEVELOPMENT;
  }
  
  export function isStagingEnv() {
    return process.env.NODE_ENV === AppEnv.STAGING;
  }
  
  export function isProductionEnv() {
    return process.env.NODE_ENV === AppEnv.PRODUCTION;
  }
  