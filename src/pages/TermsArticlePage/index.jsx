import HeaderHome from "../../components/HeaderHome";
import MenuNav from "../../components/MenuNav";
import Button, {
  Container,
  Title,
  Text,
  StrongText,
  List,
  Item,
  CheckboxContainer,
} from "./styled";
import { useState } from "react";
import Checkbox from "../../components/Checkbox";
import { useHistory } from "react-router-dom";

const TermsArticlePage = () => {
  const [checkedTerms, setCheckedTerms] = useState(false);
  const [checkedConditions, setCheckedConditions] = useState(false);
  const [disableButton, setDisableButton] = useState(true);

  const history = useHistory();

  const handleChangeTerms = () => {
    setCheckedTerms(!checkedTerms);
    setDisableButton(true);
    checkedConditions && setDisableButton(false);
  };

  const handleChangeConditions = () => {
    setCheckedConditions(!checkedConditions);
    setDisableButton(true);
    checkedTerms && setDisableButton(false);
  };

  const goCreatePost = () => {
    const createpost = disableButton ? null : history.push("/create");
    return createpost;
  };

  return (
    <>
      <HeaderHome />
      <MenuNav />
      <Container>
        <Title>Termos para o seu cadastro no Opnion</Title>

        <Text>
          Estamos coletando seus dados em acordo com a Lei 13.709/2018 - Lei
          Geral de Proteção aos Dados. Respeitamos a sua privacidade e nos
          comprometemos com o sigilo das informações prestadas. Ao se cadastrar,
          você está autorizando o envio de e-mails. Eventuais dúvidas e consulta
          de dados devem ser enviadas para privacidade@opnion.com.br.
        </Text>

        <CheckboxContainer>
          <Checkbox
            checked={checkedTerms}
            handleCheckboxChange={handleChangeTerms}
          ></Checkbox>
          <StrongText>
            Estou de acordo com os termos de cadastro do Opnion.
          </StrongText>
        </CheckboxContainer>

        <Title>Condições para publicar no Opnion</Title>

        <Text>
          Opnion é uma comunidade livre e com regras. Queremos um portal de
          notícias verídicas, democráticas, onde todos possam se manter
          atualizados e conhecer pontos de vista variados. Como pontapé do nosso
          projeto, estabelecemos as seguintes diretrizes para uma publicação ser
          aprovada:
        </Text>

        <List>
          <Item>
            Não aceitamos plágio. Temos um algoritmo que faz uma busca e, caso
            ache um texto parecido, não é validado. Se o seu é autoral e está
            publicado em outro lugar, nos avise;
          </Item>
          <Item>
            Damos prioridade às notícias e artigos que tem fontes. Não é todo
            dia que nasce um Einstein pra desembolar uma Teoria da Relatividade,
            né?
          </Item>
          <Item>
            Não queremos ser um microblog nem um bookpage, logo mantenha seu
            texto entre 600 e 1800 palavras;
          </Item>
          <Item>
            Caso seu texto seja rejeitado, você será devidamente comunicado bem
            como informado do motivo. Somos fieis à transparência;
          </Item>
          <Item>
            Você é o responsável por suas publicações. Notícia falsa é crime. O
            Opnion é uma comunidade aberta, quem publica é o autor. Nos
            isentamos de verificar a veracidade das informações prestadas;
          </Item>
          <Item>
            Por fim, mas não menos importante: ter opinião e posicionamento é
            diferente de qualquer ato de violência. Somos intolerantes com os
            intolerantes, é banimento na hora.
          </Item>
        </List>

        <CheckboxContainer>
          <Checkbox
            checked={checkedConditions}
            handleCheckboxChange={handleChangeConditions}
          ></Checkbox>
          <StrongText>
            Estou ciente das condições para publicar no Opnion.
          </StrongText>
        </CheckboxContainer>

        <Button disabled={disableButton}>Registrar</Button>
        <Button onClick={() => goCreatePost()} disabled={disableButton}>
          Registrar
        </Button>
      </Container>
    </>
  );
};

export default TermsArticlePage;
