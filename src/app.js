import React from 'react';

import Main from './components/main';

// Locale related
import { addLocaleData, IntlProvider } from 'react-intl';
import localeData from 'locale-data';

// Styles
import './styles.scss';

addLocaleData(localeData);

const { locale, messages } = __I18N__;

const App = () => (
    <IntlProvider locale={locale} messages={messages}>

        <div className="mainApp">
            <Main />
        </div>
    </IntlProvider>
);

export default App;
