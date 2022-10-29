import React from "react";
import data from "../api/db-peluqueria.json";
import styled from "styled-components";

export const Peluqueria = () => {
  return (
    <section className="product" id="peluqueria">
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="product-bx wow zoomIn">
              <h2>Peluquería</h2>
              <br />
              <br />
              <br />
              <Grid>
                {data.map((datas) => {
                  return (
                    <GridItem key={datas.id}>
                      <div className="row">
                        <div className="col-12">
                          <div className="image">
                            <img
                              className="image__img"
                              src={datas.image}
                              alt={datas.image}
                            />
                            <div className="image__overlay">
                              <div className="image__title">{datas.name}</div>
                              <br />
                              <div className="image__description">
                                {datas.description}
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>

                      <br />
                      <hr />
                      <br />
                    </GridItem>
                  );
                })}
              </Grid>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
const Grid = styled.div`
  display: grid;
  flex-wrap: wrap;
  margin-left: 5%;
  margin-right: 5%;
`;

const GridItem = styled.div`
  justify-content: baseline;
  margin: auto;
`;
