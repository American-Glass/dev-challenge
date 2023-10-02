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
import { IEquipments, IMaterials, IPurchaseOrder, ISalesOrders, IWorkforce } from '../Interface';

chai.use(chaiHttp);

const { expect } = chai;

describe('findAllByName ListTable', () => {
  before(() => {
    sinon
      .stub(equipmentsModel, 'findAllByName')
      .resolves(db.equipments as IEquipments[]);
    sinon
      .stub(materialsModel, 'findAllByName')
      .resolves(db.materials as IMaterials[]);
    sinon
      .stub(purchaseOrdersModel, 'findAllByName')
      .resolves(db.purchaseOrders as IPurchaseOrder[]);
    sinon
      .stub(salesOrdersModel, 'findAllByName')
      .resolves(db.salesOrders as ISalesOrders[]);
    sinon
      .stub(workforceModel, 'findAllByName')
      .resolves(db.workforce as IWorkforce[]);
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
            expect(res.text).to.be.equal(JSON.stringify({ message: 'Texto inválido'}));
            done();
    });
  });
});