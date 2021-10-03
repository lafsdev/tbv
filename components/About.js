import React from 'react';
import { Container, Row, Col } from "reactstrap";
const About = () => {
return (
    <section className="section bg-light" id="about">
      <Container>
        <Row className="justify-content-center">
          <Col lg={6} md={8}>
            <div className="title text-center mb-5">
              <h3 className="font-weight-normal text-dark">Quem Som<span className="text-warning">os</span></h3>
              <p className="text-muted">Em 1998 a Transportadora Boa Viagem iniciou as atividades com a finalidade de atender a demanda do transporte de matéria prima para o mercado de cerâmicas no sul de Santa Catarina. Ao longo da sua trajetória de 18 anos, adquiriu experiência e tornou-se referência no transporte de  granéis sólidos. Com a evolução e exigência do mercado atual, seus processos são continuamente aprimorados, o que lhe garante elevados níveis de efetividade nas soluções logísticas que oferece, objetivando proporcionar os melhores resultados para seus clientes</p>
            </div>
          </Col>
        </Row>
        <Row>
          <Col md={4}>
            <h3 className="font-weight-light line-height-1_6 text-dark mb-4">Transportadora Boa Viagem</h3>
            <h2 className="font-weight-light line-height-1_6 text-dark mb-4">#VALORES</h2>
          </Col>
          <Col md={{ size:7, offset :1 }}>
            <Row>
              <Col md={6}>
                <h6 className="text-dark font-weight-light f-20 mb-3">Ética </h6>
                <p className="text-muted font-weight-light">Premissa que norteia os negócios da empresa.</p>
              </Col>
              <Col md={6}>
                <h6 className="text-dark font-weight-light f-20 mb-3">Transparência </h6>
                <p className="text-muted font-weight-light">Relacionamento indispensável para com os clientes, fornecedores, colaboradores e a comunidade.</p>
              </Col>
            </Row>
            <Row>
              <Col md={6}>
                <h6 className="text-dark font-weight-light f-20 mb-3">Clientes </h6>
                <p className="text-muted font-weight-light">Razão de nosso sucesso.</p>
              </Col>
              <Col md={6}>
                <h6 className="text-dark font-weight-light f-20 mb-3">Comprometimento </h6>
                <p className="text-muted font-weight-light"> Força necessária para que através da melhoria continua possamos nos projetar no mercado.</p>
              </Col>
            </Row>
            <Row>
              <Col md={6}>
                <h6 className="text-dark font-weight-light f-20 mb-3">Lucratividade  </h6>
                <p className="text-muted font-weight-light">O resultado de nosso trabalho e o meio de garantir o nosso desenvolvimento.</p>
              </Col>
              <Col md={6}>
                <h6 className="text-dark font-weight-light f-20 mb-3">Responsabilidade Social </h6>
                <p className="text-muted font-weight-light">  Interferir no entorno social e promover o desenvolvimento sustentável.</p>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </section>
  );
}
export default About;