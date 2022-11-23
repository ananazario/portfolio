import './Header.sass';
import { AiFillHome, AiFillLinkedin, AiFillGithub, AiOutlineFundProjectionScreen, AiOutlineAudit, AiFillPhone } from 'react-icons/ai';
import { BsFileEarmarkPerson } from 'react-icons/bs'

const Header = () => {
    const icones = [
        { name: "linkedin", id:"linkedin", icon: < AiFillLinkedin />},
        { name: "github", id:"github", icon: < AiFillGithub />}
    ];

    const menuMobile = [
        { name: "home", id:"home", icon: < AiFillHome />},
        { name: "person", id:"person", icon: < BsFileEarmarkPerson />},
        { name: "skill", id:"skill", icon: < AiOutlineFundProjectionScreen />},
        { name: "project", id:"project", icon: < AiOutlineAudit />},
        { name: "phone", id:"phone", icon: < AiFillPhone />}
    ];

    return (
        <header>
            <div className="header">
                <a href="#home" className="title-header">Ana Carolina</a>
                <ul className="list-header">
                    <li>Sobre mim</li>
                    <li>Projetos</li>
                    <li>Skills</li>
                    <li>Contato</li>
                </ul>

                <ul className='list-header'>
                        {icones.map((icone) => (
                                <li key={icone.name}>
                                    {icone.icon} 
                                </li> 
                        ))}
                </ul>
            </div>

            <div className="header-mobile">
                <ul className="list-header-mobile">
                    {menuMobile.map((menu) => (
                        <li key={menu.name}>
                            {menu.icon} 
                        </li>
                    ))}
                </ul>
            </div>
        </header>
    )
}

export default Header