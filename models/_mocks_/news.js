const SequelizeMock = require('sequelize-mock');
const dbMock = new SequelizeMock();

module.exports= dbMock.define('new', {
    id: 2,
    content: 'john@abc.com',
    name: 'John',
    image: 'John'
})