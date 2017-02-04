import faker from 'faker';



const generateOneAuthor = () => {
    return {
        id: faker.number.random(),
        firstName: faker.lorem.firstName(),
        lastName: faker.lorem.lastName()
    }
}

const generateManyAuthors = (count) => {
    let mapper = Array.from(parseInt(count));
    return mapper.map((num) => {
        generateOneAuthor()
    })

}


const authorMockFactory = {
    generateOneAuthor,
    generateManyAuthors
}

export {authorMockFactory};
