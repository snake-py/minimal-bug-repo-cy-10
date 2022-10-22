import { defineConfig } from 'cypress';

const getFromEnv = (defaultEnv) => {
    const envPrefix = ['VUE_APP', 'PERCY'];

    const customEnvKeys = Object.keys(process.env).filter((key) =>
        envPrefix.some((prefix) => key.startsWith(prefix))
    );
    const mergedEnv = defaultEnv;
    customEnvKeys.forEach((key) => {
        mergedEnv[key] = process.env[key];
    });

    return mergedEnv;
};

const customConfigEnvs = getFromEnv({
    CY_BASE_URL: 'http://localhost:8080',
    CY_TIMEOUT: 60000,
    CY_WAIT_SHORT: 4000,
    CY_WAIT_MEDIUM: 6000,
    CY_WAIT_LONG: 9000,
    CY_LOGIN_USERNAME_OTP: '',
    CY_LOGIN_USERNAME: '',
    CY_LOGIN_PASSWORD: '',
    CY_ACCESS_OTP_TOKEN: '',
});

export default defineConfig({
    projectId: 'ID',
    experimentalSourceRewriting: false,
    video: false,
    chromeWebSecurity: false,

    retries: {
        runMode: 3,
        openMode: 0,
    },

    env: customConfigEnvs,
    fixturesFolder: 'tests/e2e/fixtures',
    screenshotsFolder: 'tests/e2e/screenshots',
    videosFolder: 'tests/e2e/videos',

    component: {
        supportFile: false,
        devServer: {
            framework: 'vue-cli',
            bundler: 'webpack',
        },
    },
    e2e: {
        setupNodeEvents(on, config) {
            // eslint-disable-next-line  @typescript-eslint/no-var-requires
            require('cypress-terminal-report/src/installLogsPrinter')(on);
        },
        specPattern: 'tests/e2e/specs/**/*.{js,jsx,ts,tsx}',
        supportFile: 'tests/e2e/support/index.js',
    },
});
