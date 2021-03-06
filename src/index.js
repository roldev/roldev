import React from 'react';
import ReactDOM from 'react-dom';

import {GoogleReCaptchaProvider} from 'react-google-recaptcha-v3';
import { I18nextProvider } from "react-i18next";
import ReactGA from 'react-ga';

import App from './App';
import i18n from './i18n';


// google analytics exports start
export const initGA = () => {
    ReactGA.initialize(process.env.REACT_APP_GA_ID);
};

export const GApageView = (page) => {
    ReactGA.pageview(page);
};
// google analytics exports end

ReactDOM.render(
    <GoogleReCaptchaProvider reCaptchaKey={process.env.REACT_APP_RECAPTCHA_SITE_KEY}>
        <I18nextProvider i18n={i18n}>
            <React.StrictMode>
                <App />
            </React.StrictMode>
        </I18nextProvider>
    </GoogleReCaptchaProvider>,
  document.getElementById('root')
);
