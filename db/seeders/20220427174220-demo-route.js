module.exports = {
  async up(queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
    await queryInterface.bulkInsert('Routes', [{
      title: 'Patriki',
      city: 'Moscow',
      length: '5.0 km',
      author: 1,
      rating: 5,
      description: 'good road',
      start: 'arbat',
      end: 'balashikha',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      title: 'Arbat',
      city: 'Moscow',
      length: '3.0 km',
      author: 2,
      rating: 2,
      description: 'bad road',
      start: 'arbat',
      end: 'balashikha',
      createdAt: new Date(),
      updatedAt: new Date(),
    }], {});
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete('Routes', null, {});
  },
};
