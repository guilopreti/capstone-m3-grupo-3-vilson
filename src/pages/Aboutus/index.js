import logomarca from '../../assets/image/logomarca.png'
import HeaderHome from "../../components/HeaderHome"
import MenuNav from "../../components/MenuNav"
import { Container } from "./style"
import { AiFillLinkedin } from 'react-icons/ai'
import { AiFillGithub } from 'react-icons/ai'


const Aboutus = () => {

    return (
        <>
            <HeaderHome />
            <MenuNav />
            <Container>
                <div>
                    <h1>Sobre</h1>
                </div>
                <div>
                    <p>Mussum Ipsum, cacilds vidis litro abertis. Mais vale um bebadis conhecidiss, que um alcoolatra anonimis.Nec orci ornare consequat. Praesent lacinia ultrices consectetur. Sed non ipsum felis.Admodum accumsan disputationi eu sit. Vide electram sadipscing et per.Não sou faixa preta cumpadi, sou preto inteiris, inteiris.</p>

                    <p>Manduma pindureta quium dia nois paga.Viva Forevis aptent taciti sociosqu ad litora torquent.Quem num gosta di mim que vai caçá sua turmis!Posuere libero varius. Nullam a nisl ut ante blandit hendrerit. Aenean sit amet nisi.</p>

                    <p>Sapien in monti palavris qui num significa nadis i pareci latim.Quem manda na minha terra sou euzis!Admodum accumsan disputationi eu sit. Vide electram sadipscing et per.Si num tem leite então bota uma pinga aí cumpadi!</p>

                    <p>Sapien in monti palavris qui num significa nadis i pareci latim.Viva Forevis aptent taciti sociosqu ad litora torquent.Tá deprimidis, eu conheço uma cachacis que pode alegrar sua vidis.Suco de cevadiss, é um leite divinis, qui tem lupuliz, matis, aguis e fermentis.</p>
                    <p>Nec orci ornare consequat. Praesent lacinia ultrices consectetur. Sed non ipsum felis.Per aumento de cachacis, eu reclamis.Interessantiss quisso pudia ce receita de bolis, mais bolis eu num gostis.Quem num gosta di mé, boa gentis num é.</p>
                </div>
                <div className="developers">
                    <h2>Desenvolvedores</h2>
                    <ul className="developers-ul">
                        <li>
                            <img src="https://ca.slack-edge.com/TQZR39SET-U02FL8B2LKV-d8e02c787294-512" alt="Desenvolvedor Guilherme Lopreti" />
                            <span>TL: Guilherme Lopreti</span>
                            <div className='linkstosocial'>
                                <a target='_blank' href="https://www.linkedin.com/in/guilherme-lopreti-silva-aa4798169/"><AiFillLinkedin /></a>
                                <a target='_blank' href="https://github.com/guilopreti"><AiFillGithub /></a>
                            </div>
                        </li>
                        <li>
                            <img src="https://ca.slack-edge.com/TQZR39SET-U02APBXUN3Y-a27dfecc01c1-512" alt="Desenvolvedor Igo Santana" />
                            <span>PO: Igo Santana</span>
                            <div className='linkstosocial'>
                                <a target='_blank' href="https://www.linkedin.com/in/igosantana33/"><AiFillLinkedin /></a>
                                <a target='_blank' href="https://github.com/igosantana"><AiFillGithub /></a>
                            </div>
                        </li>
                        <li>
                            <img src="https://ca.slack-edge.com/TQZR39SET-U02G05HMLNM-8621bfa2222b-512" alt="Desenvolvedor Renan Ribeiro" />
                            <span>QA: Renan Ribeiro</span>
                            <div className='linkstosocial'>
                                <a target='_blank' href="#"><AiFillLinkedin /></a>
                                <a target='_blank' href="https://github.com/renandcr"><AiFillGithub /></a>
                            </div>
                        </li>
                        <li>
                            <img src="https://ca.slack-edge.com/TQZR39SET-U02AWAB8UKD-84bc2e270545-512" alt="Desenvolvedor Márcio Castro" />
                            <span>QA: Marcio Castro</span>
                            <div className='linkstosocial'>
                                <a target='_blank' href="https://www.linkedin.com/in/m%C3%A1rcio-castro-a59bb424/"><AiFillLinkedin /></a>
                                <a target='_blank' href="#"><AiFillGithub /></a>
                            </div>
                        </li>
                        <li>
                            <img src="https://ca.slack-edge.com/TQZR39SET-U02FJEEB92R-b9517ad21591-512" alt="Desenvolvedor Nieliton Rodrigues" />
                            <span>SM: Nieliton Rodrigues</span>
                            <div className='linkstosocial'>
                                <a target='_blank' href="https://www.linkedin.com/in/nieliton-rodrgs/"><AiFillLinkedin /></a>
                                <a target='_blank' href="https://github.com/nielitton"><AiFillGithub /></a>
                            </div>
                        </li>
                    </ul>
                </div>
            </Container>
        </>
    )

}

export default Aboutus