import faker from 'faker';



const generateOneTag = () => {
    return {
        id: faker.number.random(),
        name: faker.lorem.word()
    }
}

const generateManyTags = (count) => {
    let mapper = Array.from(parseInt(count));
    return mapper.map((num) => {
        generateOneTag()
    })

}

const tagMockFactory = {
    generateOneTag,
    generateManyTags
}

export {tagMockFactory};
