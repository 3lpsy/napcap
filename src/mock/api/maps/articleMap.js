import {articleMockFactory} from "../../factories/articleMockFactory";

export const articleMap = () => {
    return {
        pattern: "/article",
        flags: '',
        factory: articleMockFactory,
        data: (url, count = 15) => {
            return articleMockFactory.generateManyArticles(count)
        },
        status: () => {

        }
    }
}
