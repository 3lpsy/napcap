import faker from 'faker';



const generateOnePublishedAt = () => {
    return {
        id: faker.number.random(),
        name: faker.lorem.word()
    }
}

const generateManyPublishedAts = (count) => {
    let mapper = Array.from(parseInt(count));
    return mapper.map((num) => {
        generateOnePublishedAt()
    })

}

const publishedAtMockFactory = {
    generateOnePublishedAt,
    generateManyPublishedAts
}

export {publishedAtMockFactory};
