import React from 'react';

import Main from './components/main';
import Header from './components/navigation/header';

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
            <Header />
            <Main />
        </div>
    </IntlProvider>
);

export default App;
