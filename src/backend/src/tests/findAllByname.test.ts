import sinon from 'sinon';
import chai from 'chai';
import chaiHttp from 'chai-http';

import db from './mocks/db.json'

import {
    equipmentsModel,
    materialsModel,
    purchaseOrdersModel,
    salesOrdersModel,
    server,
    workforceModel }
from '../../index';

chai.use(chaiHttp);

const { expect } = chai;

describe('findAllByName ListTable', () => {
  before(() => {
    sinon
      .stub(equipmentsModel, 'findAllByName')
      .resolves(db.equipments as any);
    sinon
      .stub(materialsModel, 'findAllByName')
      .resolves(db.materials as any);
    sinon
      .stub(purchaseOrdersModel, 'findAllByName')
      .resolves(db.purchaseOrders as any);
    sinon
      .stub(salesOrdersModel, 'findAllByName')
      .resolves(db.salesOrders as any);
    sinon
      .stub(workforceModel, 'findAllByName')
      .resolves(db.workforce as any);
  });

  after(()=>{
    (equipmentsModel.findAllByName as sinon.SinonStub).restore();
    (materialsModel.findAllByName as sinon.SinonStub).restore();
    (purchaseOrdersModel.findAllByName as sinon.SinonStub).restore();
    (salesOrdersModel.findAllByName as sinon.SinonStub).restore();
    (workforceModel.findAllByName as sinon.SinonStub).restore();
  })

  it('Test /api/multiSearch Status 200 OK', (done) => {
    chai.request(server)
        .post('/api/multiSearch')
        .send({text: 'teste'})
        .end((_err, res) => {
          expect(res).to.have.status(200);
          expect(res).to.be.json;
          expect(res.text).to.be.equal(JSON.stringify({
            equipments: db.equipments,
            materials: db.materials,
            purchaseOrders: db.purchaseOrders,
            salesOrders: db.salesOrders,
            workforce: db.workforce,
          }));
          done();
    });
  });

  it('Test /api/multiSearch Status 400 Bad Request', (done) => {
    chai.request(server)
        .post('/api/multiSearch')
        .send({text: ''})
        .end((_err, res) => {
            expect(res).to.have.status(400);
            expect(res).to.be.json;
            // expect(res.body).to.be.a('object');
            expect(res.text).to.be.equal(JSON.stringify({ message: 'Texto inválido'}));
            done();
    });
  });
});