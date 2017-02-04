import faker from 'faker';
import {generateManyMarkdownSections} from './markdownSectionMockFactory';
import {authorMockFactory} from './authorMockFactory';
import {tagMockFactory} from './tagMockFactory';
import {publishedAtMockFactory} from './publishedAtMockFactory';

// factory.register('article', articleModel);

const generateOneArticle = () => {
    return {
        id: faker.random.number(),
        title: faker.lorem.sentence(),
        subTitle: faker.lorem.sentence(),
        reads: faker.random.number(),
        slug: faker.random.sentence(),
        publishedAt: publishedAtMockFactory.generateOnePublishedAt(),
        sections: generateManyMarkdownSections.generateManyMarkdownSections(3),
        author: authorMockFactory.generateOneAuthor(),
        tags: tagMockFactory.generateManyTags(3)
    }
}

const generateManyArticles = (count) => {
    let mapper = Array.from(parseInt(count));
    return mapper.map((num) => {
        generateOneArticle()
    })

}

const articleMockFactory = {
    generateManyArticles
}

export {articleMockFactory};
