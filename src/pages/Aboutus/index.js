import HeaderHome from "../../components/HeaderHome"
import MenuNav from "../../components/MenuNav"
import { Container } from "./style"
import { AiFillLinkedin } from 'react-icons/ai'
import { AiFillGithub } from 'react-icons/ai'
import { SiPicpay } from 'react-icons/si'

const Aboutus = () => {
  return (
    <>
      <HeaderHome />
      <MenuNav hiddenSearch />
      <Container>
        <div>
          <h1>Sobre</h1>
        </div>
        <div>
          <p>
            Com muita visão do que hoje ocorre no mundo, nosso site pode te trazer varias informações de forma acertiva e segura, do que está acontecendo ao nosso redor, com notícias públicadas pelos membros da nossa comunidade.
          </p>
          <p>
            Poderemos trazer aos nossos leitores confiança, devido ao empenho de nossa equipe, para evitar que as famosas "Fake news", sejam espalhadas na nossa plataforma, os nossos admins irão analisar cada postagem que será feita.
          </p>
          <p>
            Visando trazer praticidade para nosso leitor o "opnion!", é totalmente compativel para diversas telas, inclusive de celulares, para que os usuários possam ler nossos artigos mesmo no ônibus indo para o trabalho, ou no uber, da tela do seu celular.
          </p>
          <p>
            Iremos entregar ao leitor qualidade de leitura e informação, mas claro a nossa diferença dos outros sites de notícias é que qualquer leitor podera postar e ler nossos artigos de forma gratuíta.
          </p>
        </div>
        <div className='developers'>
          <h2>Desenvolvedores</h2>
          <ul className='developers-ul'>
            <li>
              <img
                src='https://ca.slack-edge.com/TQZR39SET-U02FL8B2LKV-d8e02c787294-512'
                alt='Desenvolvedor Guilherme Lopreti'
              />
              <span>TL: Guilherme Lopreti</span>
              <div className='linkstosocial'>
                <a
                  target='_blank'
                  href='https://www.linkedin.com/in/guilherme-lopreti-silva-aa4798169/'
                >
                  <AiFillLinkedin />
                </a>
                <a target='_blank' href='https://github.com/guilopreti'>
                  <AiFillGithub />
                </a>
              </div>
            </li>
            <li>
              <img
                src='https://ca.slack-edge.com/TQZR39SET-U02APBXUN3Y-a27dfecc01c1-512'
                alt='Desenvolvedor Igo Santana'
              />
              <span>PO: Igo Santana</span>
              <div className='linkstosocial'>
                <a
                  target='_blank'
                  href='https://www.linkedin.com/in/igosantana33/'
                >
                  <AiFillLinkedin />
                </a>
                <a target='_blank' href='https://github.com/igosantana'>
                  <AiFillGithub />
                </a>
              </div>
            </li>
            <li>
              <img
                src='https://ca.slack-edge.com/TQZR39SET-U02G05HMLNM-8621bfa2222b-512'
                alt='Desenvolvedor Renan Ribeiro'
              />
              <span>QA: Renan Ribeiro</span>
              <div className='linkstosocial'>
                <a target='_blank' href='#'>
                  <AiFillLinkedin />
                </a>
                <a target='_blank' href='https://github.com/renandcr'>
                  <AiFillGithub />
                </a>
              </div>
            </li>
            <li>
              <img
                src='https://ca.slack-edge.com/TQZR39SET-U02AWAB8UKD-84bc2e270545-512'
                alt='Desenvolvedor Márcio Castro'
              />
              <span>QA: Marcio Castro</span>
              <div className='linkstosocial'>
                <a
                  target='_blank'
                  href='https://www.linkedin.com/in/m%C3%A1rcio-castro-a59bb424/'
                >
                  <AiFillLinkedin />
                </a>
                <a target='_blank' href='#'>
                  <AiFillGithub />
                </a>
              </div>
            </li>
            <li>
              <img
                src='https://ca.slack-edge.com/TQZR39SET-U02FJEEB92R-b9517ad21591-512'
                alt='Desenvolvedor Nieliton Rodrigues'
              />
              <span>SM: Nieliton Rodrigues</span>
              <div className='linkstosocial'>
                <a
                  target='_blank'
                  href='https://www.linkedin.com/in/nieliton-rodrgs/'
                >
                  <AiFillLinkedin />
                </a>
                <a target='_blank' href='https://github.com/nielitton'>
                  <AiFillGithub />
                </a>
              </div>
            </li>
          </ul>
        </div>
        <div className="sponsorship"><span>Buy-me a coffe <SiPicpay/></span></div>
      </Container>
    </>
  )
}

export default Aboutus
