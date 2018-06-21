import React, {createContext} from 'react';
import './PersonalInfo.css';

const personalInfoContent = {
    en: {
        label: 'Personal Info',
        phone: 'Phone number',
        email: 'Еmail',
        dateLabel: 'Date of birth',
        date: 'April, 28, 1998',
        git: 'Github'
    },
    ukr: {
        label: 'Особиста Інформація',
        phone: 'Тел.',
        email: 'Імейл',
        dateLabel: 'Дата народження',
        date: '28 квітня 1998р',
        git: 'Github'
    }
};

const LanguageContext = createContext();

const PersonalInfo = ({language}) => {
    return(
        <LanguageContext.Provider value={personalInfoContent[language]}>
            <LanguageContext.Consumer>
                {content => {
                    return(
                        <section>
                            <h2>{content.label}</h2>
                            <p>
                                {content.phone}: <span>+38 (098) 043-65-94</span>
                                <br/>
                                {content.email}: <span>nafik.sprey@gmail.com</span>
                                <br/>
                                {content.dateLabel}: <span>{content.date}</span>
                                <br/>
                                {content.git}: <span><a href="https://github.com/physicist1m">
                                    https://github.com/physicist1m
                                </a></span>
                            </p>
                        </section>
                    );
                }}
            </LanguageContext.Consumer>
        </LanguageContext.Provider>
    );
}

export default PersonalInfo;