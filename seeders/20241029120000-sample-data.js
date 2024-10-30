const { ko, Faker } = require("@faker-js/faker");
const faker = new Faker({ locale: [ko] });

// 로케일을 한국어로 설정
faker.locale = "ko";

module.exports = {
  async up(queryInterface, Sequelize) {
    // 사용자 데이터 삽입
    const users = Array.from({ length: 10 }, () => ({
      name: faker.person.fullName(),
      email: faker.internet.email(),
      createdAt: new Date(),
      updatedAt: new Date(),
    }));

    await queryInterface.bulkInsert("users", users);

    // 게시글 데이터 삽입
    const posts = Array.from({ length: 20 }, () => ({
      title: faker.lorem.sentence(),
      content: faker.lorem.paragraphs(),
      userId: faker.number.int({ min: 1, max: 10 }), // 사용자 ID
      createdAt: new Date(),
      updatedAt: new Date(),
    }));

    await queryInterface.bulkInsert("posts", posts);

    // 댓글 데이터 삽입
    const comments = Array.from({ length: 60 }, () => ({
      content: faker.lorem.sentence(),
      postId: faker.number.int({ min: 1, max: 20 }), // 게시글 ID
      userId: faker.number.int({ min: 1, max: 10 }), // 사용자 ID
      createdAt: new Date(),
      updatedAt: new Date(),
    }));

    await queryInterface.bulkInsert("comments", comments);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("comments", null, {});
    await queryInterface.bulkDelete("posts", null, {});
    await queryInterface.bulkDelete("users", null, {});
  },
};
