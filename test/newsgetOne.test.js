//const db = require('../db')
const {db} = require("../models/index");
const mockery = require("mockery")
const request = require('supertest');
const newsController= require("../controllers/newController")



jest.mock ("../controllers/newController.js")

describe('Test Sequelize Mocking', () => {
	it('Should get value from mock model', async () => {
		const nw = await db.New.getNewOne(2)
		expect(nw.id).toEqual(2)
		expect(nw.name).toEqual('John')
	})
})