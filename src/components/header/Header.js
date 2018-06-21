import React, { createContext } from 'react';
import './Header.css';
import photo from './photo.jpg';

const HeaderContent = {
    en: {
        btnUkrLabel: "Ukr",
        btnEnLabel: "Eng",
        name: "Nazarii Marko"
      },
      ukr: {
        btnUkrLabel: "Укр",
        btnEnLabel: "Англ",
        name: "Назарій Марко"
      }
}

const LanguageContext = createContext();

const Header = ({ language, setToUkr, setToEng }) => {
        return (
        <LanguageContext.Provider value={HeaderContent[language]}>
            <LanguageContext.Consumer>
            {HeaderContent => {
                return (
                <header>
                    <img src={photo} alt="My Face"/>
                    <h2 id="name">{HeaderContent.name}</h2>
                    <div className='btn'>
                        <button 
                            onClick={setToEng}>
                            {HeaderContent.btnEnLabel}
                        </button>
                        <button
                            onClick={setToUkr}>
                            {HeaderContent.btnUkrLabel}
                        </button>
                    </div>
                </header>
                );
                }
            }
            </LanguageContext.Consumer>
        </LanguageContext.Provider>
        );
}
export default Header;