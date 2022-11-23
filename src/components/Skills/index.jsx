import './Skills.sass'
import { DiHtml5, DiCss3, DiJsBadge, DiReact, DiGit, DiSass, DiBootstrap } from 'react-icons/di';
import { TbLetterD } from 'react-icons/tb';

const Skills = () => {
    const iconesSkills = [
        { name: "HTML", id:"html", icon: < DiHtml5 />, paragrafo: "Linguagem de marcação"},
        { name: "CSS", id:"css", icon: < DiCss3 />, paragrafo: "Linguagem de estilo"},
        { name: "JavaScript", id:"javascript", icon: < DiJsBadge />, paragrafo: "Linguagem de programação"},
        { name: "React", id:"react", icon: < DiReact />, paragrafo: "Linguagem de marcação"},
        { name: "Git", id:"git", icon: < DiGit />, paragrafo: "Linguagem de marcação"},
        { name: "SASS", id:"sass", icon: < DiSass />, paragrafo: "Linguagem de marcação"},
        { name: "Bootstrap", id:"bootstrap", icon: < DiBootstrap />, paragrafo: "Linguagem de marcação"},
        { name: "Ux Design", id:"ux design", icon: < TbLetterD />, paragrafo: "Experiencia do usuario e usabilidade"}
    ];

    return (
        <section className='skills'> 
            <h2 className='titulo-skills'>Skills</h2>
            <ul className='lista-skills'>
                {iconesSkills.map((skill) => (
                    <div className='lista-skills-div'>
                        <li key={skill.name}>
                            {skill.icon} 
                            <p>{skill.name}</p>
                        </li> 
                            <div className='texto'> 
                                <p>- {skill.paragrafo}</p>
                            </div>
                    </div>
                ))}
            </ul>
        </section>
    )
}

export default Skills