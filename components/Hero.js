import React from "react";
{/*import Image from "next/image"; */}
import { Container, Row, Col } from "reactstrap";
const Hero = () => {
  return (
    <section className="section position-relative">
      <Container>
        <Row className="align-items-center">
          <Col lg={6}>
            <div className="pr-lg-5">
              <p className="text-uppercase text-primary font-weight-medium f-14 mb-4">
                Politica da empresa
              </p>
              <h1 className="mb-4 font-weight-normal line-height-1_4">
                Transportadora boa{" "}
                <span className="text-primary font-weight-medium">Viagem</span>
              </h1>
                <p className="text-muted mb-4 pb-2">
                A Transportadora Boa Viagem através de uma frota moderna, busca
                a qualidade e eficácia no transporte dos produtos de seus
                clientes. Acreditando no comprometimento de seus colaboradores,
                visa a saúde, segurança, e patrimônio, garantindo a preservação
                do meio ambiente, atendendo a legislação, motivando a
                sustentabilidade econômica e social, de modo a superar a
                expectativa de seus clientes e melhoria continua de seus
                processos.
              </p>
              {/*           <a href="#" className="btn btn-warning">
                Find Out How <span className="ml-2 right-icon">&#8594;</span>
              </a>*/}
            </div>
          </Col>
          <Col lg={6}>
            <div className="mt-5 mt-lg-0">
 {/*              <Image
                src={"/images/transportadora-boa-viagem-01.jpg"}
                alt=""
                className="img-fluid mx-auto d-block"
                width={470}
                height={400}
              /> */}
              <img src="/images/transportadora-boa-viagem-01.jpg" alt="" className="img-fluid mx-auto d-block"/>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
export default Hero;
