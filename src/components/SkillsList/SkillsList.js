import React, {createContext} from 'react';
import './SkillsList.css';

import SkillsItem from '../SkillsItem/SkillsItem';

const skillsContent = {
    en: {
        skillsLabel: "My Skills:",
        skills: ["js", "English", "html", "css", "react", "git"]
    },
    ukr: {
        skillsLabel: "Мої Навички:",
        skills: ["js", "англійська", "html", "css", "реакт!!!11!!", "git"]
    }
}

const LanguageContext = createContext();

const SkillsList = ({ language }) => {
    return (
        <LanguageContext.Provider value={skillsContent[language]}>
        <LanguageContext.Consumer>
        {skillsContent => {
            return(
                <section>
                    <h2>{skillsContent.skillsLabel}</h2>
                        <ul>
                                {skillsContent.skills.map(el => <li><SkillsItem item={el.toString().toUpperCase()}/></li>)}
                        </ul>
                </section>
            );
        }
        }
        </LanguageContext.Consumer>
        </LanguageContext.Provider>
    );
}

export default SkillsList;