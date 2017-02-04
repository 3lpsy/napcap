import faker from 'faker';



const generateOneMarkdownSection = () => {
    return {
        id: faker.random.number(),
        body: faker.lorem.sentence()
    }
}

const generateManyMarkdownSections = (count) => {
    let mapper = Array.from(parseInt(count));
    return mapper.map((num) => {
        generateOneMarkdownSection()
    })

}

const markdownSectionMockFactory = {
    generateOneMarkdownSection,
    generateManyMarkdownSections
}

export {markdownSectionMockFactory};
