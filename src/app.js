import React from 'react';
import Home from './components/home';

// Locale related
import { addLocaleData, IntlProvider } from 'react-intl';
import localeData from 'locale-data';

// Styles
import './styles.scss';

addLocaleData(localeData);

const { locale, messages } = __I18N__;

const App = () => (
    <IntlProvider
        locale={locale}
        messages={messages}
    >
        <div className="mainApp">
            <Home />
        </div>
    </IntlProvider>
);

export default App;
