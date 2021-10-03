import React from "react";
import { Container, Row, Col } from "reactstrap";
const Footer = () => {
  const links = [
    {
      id: 1,
      title: "Benefícios",
      child: [
        { title: "Frota moderna;", link: "#" },
        { title: "Seguro de vida em grupo;", link: "#" },
        { title: "Plano de saúde;", link: "#" },
        { title: "Convênio odontológico;", link: "#" },
        { title: "Cartão alimentação;", link: "#" },
        { title: "Alimentação, hospedagem e translado para funcionários em integração;", link: "#" },
        { title: "Relaciona interesses pessoais e organizacionais de forma coerente;", link: "#" },

      ],
    },
    {
      id: 2,
      title: "Requisitos",
      child: [
        { title: "Carteira E;", link: "/" },
        { title: "Curso Mopp;", link: "/" },
        { title: "Conhecimento com cargas e transportes graneis;", link: "/" },
        { title: "Disponibilidade para viagens longas;", link: "/" },
        { title: "Viagens interestaduais;", link: "/" },
      ],
    },
  ];

  return (
    <section className="footer section" id="work">
      <Container>
        <Row>
          <Col lg={4}>
            <div className="mb-4">
            <p className="text-muted mt-4 mb-2">Se estiver interessado, encaminhe seu currículo para o email </p>
              <p className="text-muted mt-4 mb-2">contato@transboaviagem.com.br</p>
              <h6 className="text-muted font-weight-normal">+55 (42)3228-4900</h6>
            </div>
          </Col>
          <Col lg={8}>
            <Row>
              {links.map((link, key) => (
                <Col key={key} md={4}>
                  <h6 className="text-dark mb-3">{link.title}</h6>
                  <ul className="list-unstyled company-sub-menu">
                    {link.child.map((fLink, key) => (
                      <li key={key}>
                       {/*<a href={fLink.link}>{fLink.title}</a> */} 
                       <p>{fLink.title}</p>
                      </li>
                    ))}
                  </ul>
                </Col>
              ))}

              <Col md={4}>
                <h6 className="text-dark mb-3">Nosso Endereço</h6>
                <p className="text-muted f-14">
                  Rua Bernardo Guimarães, 100, 84046-250
                </p>
                <p className="text-muted f-14">
                Ponta Grossa, Paraná, BR
                </p>
                <h6 className="text-muted pb-2">Email: contato@transboaviagem.com.br</h6>
                <ul className="list-unstyled footer-social-list mt-4">
                  <li className="list-inline-item">
                    <a href="#">
                      <i className="mdi mdi-facebook"></i>
                    </a>
                  </li>
                  <li className="list-inline-item">
                    <a href="#">
                      <i className="mdi mdi-instagram"></i>
                    </a>
                  </li>
                  <li className="list-inline-item">
                    <a href="#">
                      <i className="mdi mdi-linkedin"></i>
                    </a>
                  </li>
                </ul>
              </Col>
            </Row>
          </Col>
        </Row>
        <Row className="mt-5">
          <Col md={12}>
            <div className="text-center text-muted">
              <p className="mb-0 f-15">2021 © Transportadora Boa Viagem</p>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
export default Footer;
