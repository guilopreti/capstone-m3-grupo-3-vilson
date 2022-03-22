import HeaderHome from "../../components/HeaderHome"
import MenuNav from "../../components/MenuNav"
import { Container } from "./style"


const Aboutus = () => {

    return (
        <>
            <HeaderHome />
            <MenuNav />
            <Container>
                <div>
                    <h1>Sobre nós</h1>
                </div>
                <div>
                    <h2>Tinhamos um problema</h2>
                    <p>O problema que tinhamos era que, hoje muitas pessoas não tem como expressar sua opinião, sobre diversos assuntos. Muitos sites hoje em dia são pagos para que essas informações cheguem até seus leitores também, mesmo assim as pessoas também não tem certeza de que aquela notícia é veridica.</p>
                </div>
                <div>
                    <h2>Problema resolvido</h2>
                    <p>A ideia do nosso site é resolver todos esses problemas de forma simples e gratuita para todos os leitores que se interessarem, os leitores vão poder avaliar as noticias e opiniões sobre diversos assuntos, assim diminuindo o risco de fake news e verificando a vericidade das noticias.</p>
                </div>
                <div className="developers">
                    <h2>Desenvolvedores</h2>
                    <ul className="developers-ul">
                        <li>
                            <img src="https://ca.slack-edge.com/TQZR39SET-U02FL8B2LKV-d8e02c787294-512" alt="Desenvolvedor Guilherme Lopreti" />
                            <span>Guilherme Lopreti</span>
                        </li>
                        <li>
                            <img src="https://ca.slack-edge.com/TQZR39SET-U02APBXUN3Y-a27dfecc01c1-512" alt="Desenvolvedor Igo Santana" />
                            <span>Igo Santana</span>
                        </li>
                        <li>
                            <img src="https://ca.slack-edge.com/TQZR39SET-U02G05HMLNM-8621bfa2222b-512" alt="Desenvolvedor Renan Ribeiro" />
                            <span>Renan Ribeiro</span>
                        </li>
                        <li>
                            <img src="https://ca.slack-edge.com/TQZR39SET-U02AWAB8UKD-84bc2e270545-512" alt="Desenvolvedor Márcio Castro" />
                            <span>Marcio Castro</span>
                        </li>
                        <li>
                            <img src="https://ca.slack-edge.com/TQZR39SET-U02FJEEB92R-b9517ad21591-512" alt="Desenvolvedor Nieliton Rodrigues" />
                            <span>Nieliton Rodrigues</span>
                        </li>
                    </ul>
                </div>
            </Container>
        </>
    )

}

export default Aboutus