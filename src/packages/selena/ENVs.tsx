

// const API_PATH = 'http://localhost:13169';

// const API_PATH = "https://apolloforselena.onrender.com";
const API_PATH = process.env.API_PATH_M;
export default {
    LOAD_FORMATS_PATH: API_PATH + '/loadformats',
    DOWNLOAD_PATH: API_PATH + '/download'
}



