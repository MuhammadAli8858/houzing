import { Container, Content, Icons } from "./style";

export const Footer = () => {
  return (
    <Container>
      <Content>
        <Content.Title>Contact Us</Content.Title>
        <Content.Item>
          <Icons.Logo /> Bunyodkor kochasi, Chilonzor 64-dom, 2-etaj, 1-hona,
          Webbrain Academy
        </Content.Item>
        <Content.Item>
          <Icons.Phone /> +998-(33)-087-58-58
        </Content.Item>
        <Content.Item>
          <Icons.Email />
          webbrainacademy@gmail.com
        </Content.Item>
      </Content>
      <Content>
        <Content.Title>Discover</Content.Title>
        <Content.Item>Uzbekistan</Content.Item>
        <Content.Item>India</Content.Item>
        <Content.Item>UAE</Content.Item>
        <Content.Item>Korea</Content.Item>
      </Content>
      <Content>
        <Content.Title>Lists by Category</Content.Title>
        <Content.Item>Frontend</Content.Item>
        <Content.Item>Backend</Content.Item>
        <Content.Item>Mobile</Content.Item>
        <Content.Item>Flutter</Content.Item>
        <Content.Item>Android</Content.Item>
      </Content>
      <Content>
        <Content.Title>Lists by Category</Content.Title>
        <Content.Item>t.me/webbrain_admin</Content.Item>
        <Content.Item>t.me/webbrain_ceo</Content.Item>
        <Content.Item>instagram.com/webbrain_admin</Content.Item>
        <Content.Item>instagram.com/sma_94</Content.Item>
      </Content>
    </Container>
  );
};

export default Footer;
