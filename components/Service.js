import React from 'react';
import { Container, Row, Col } from "reactstrap";
const Service = () => {
  const services = [
    { title : "Rio Grande - RS", desc : "Telefone:(53) 98115-7311​​​​​​ Telefone:(53) 3232-0465 Gerente: Emerson Mielke emerson.mielke@transboaviagem.com.br filial.rs@transboaviagem.com.br" },
    { title : "Ponta Grossa", desc : "Telefone:(42) 3229-2153 Telefone:(42)8816-3117 Gerente: Juliano filial.pg@transboaviagem.com.br" },
    { title : "Campo Grande- MS", desc : "Telefone:(42) 3228-4900 Gerente: Juliano juliano@transboaviagem.com.br" },
    { title : "Votorantim - SP", desc : "Telefone:(42) 8840-5296 Gerente: Johnnatan Hudson johnnatan.hudson@transboaviagem.com.br" },
    { title : "Catalão - GO", desc : "Telefone:(34) 3311-1147 Telefone:(34) 99212-9845 Gerente: Tarcisio Oliveira tarcisio.oliveira@transboaviagem.com.br" },
    { title : "Viana-ES", desc : "Telefone:(42) 3228-4900 Gerente: Juliano juliano@transboaviagem.com.br" },

    { title : "Araquari-SC", desc : "Telefone:(53) 3232-0465 Gerente: Emerson Mielke filial.rs@transboaviagem.com.br" },
    { title : "Catantagalo_RJ", desc : "Telefone:(42) 3228-4900 Gerente: Juliano juliano@transboaviagem.com.br" },
    { title : "Cubatão-SP", desc : "Telefone:(13) 3367-1181 Telefone:(42) 8840-5296 Gerente: Johnnatan Hudson johnnatan.hudson@transboaviagem.com.br" },
    { title : "Uberaba-MG", desc : "Telefone:(34) 3311-1147 Telefone:(34) 99212-9845 Gerente: Tarcisio Oliveira tarcisio.oliveira@transboaviagem.com.br" },
    { title : "Araxa - MG", desc : "Telefone:(34) 3662-3609 Gerente: Leandro leandro.almeida@transboaviagem.com.br" },
    { title : "Itau de Minas- MG", desc : "Telefone:(42) 3228-4900 Gerente: Juliano juliano@transboaviagem.com.br" },
    { title : "São Francisco do Sul - SC", desc : "Telefone:(47) 99903-8830 Gerente: Romario filial.sfs@transboaviagem.com.br" },
    { title : "Laranjeiras-SE", desc : "Telefone:(42)3229-2153 Telefone:(42)8816-3117 Gerente: Eliel Macedo eliel.macedo@transboaviagem.com.br" },
    { title : "Paranaguá- PR", desc : "Telefone: (41) 3425-2707 Gerente: Cristiano Zanolla cristiano.zanolla@transboaviagem.com.br" },
 
  ]
  
  return (
    <section className="section" id="service">
      <Container>
        <Row className="justify-content-center">
          <Col lg={6} md={8}>
            <div className="title text-center mb-5">
              <h3 className="font-weight-normal text-dark"><span className="text-warning">Filiais</span></h3>
              <p className="text-muted">Conheça algumas de nossas filiais espalhadas pelo Brasil</p>
            </div>
          </Col>
        </Row>
        <Row>
          {
            services.map((service, key) =>
              <Col key={key} lg={4} md={6}>
                <div>
                  <div className="mb-5">
                      <i className={service.icon}></i>
                  </div>
                  <h5 className="text-dark font-weight-normal pt-1 mb-4">{service.title}</h5>
                  <p className="text-muted mb-4">{service.desc}</p>
                </div>
              </Col>
            )
          }
        </Row>
      </Container>
    </section>
  );
}
export default Service;