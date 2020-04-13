import { HackerNewsAPI } from "../datasources/hackernews";
import {
  emptyReducerReturnValue,
  getAllArticleIdsStub,
  getArticlePostReducerStub,
  getArticlePreReducerStub,
} from "../fixtures/hackernews";

const ds = new HackerNewsAPI();
ds.get = jest.fn();

describe("[HackerNewsAPI.articleReducer]", () => {
  it("transformes using the article reducer", () => {
    expect(ds.articleReducer(getArticlePreReducerStub)).toEqual(
      getArticlePostReducerStub
    );
  });

  it("does not transform using the article reducer", () => {
    expect(ds.articleReducer()).toEqual(emptyReducerReturnValue);
  });
});

describe("[HackerNewsAPI.getArticle]", () => {
  it("get a single article from the HackerNewsAPI", async () => {
    ds.get.mockReturnValueOnce(getArticlePreReducerStub);
    const res = await ds.getArticle(21168365);

    expect(res).toEqual(getArticlePostReducerStub);
    expect(ds.get).toHaveBeenCalled();
    expect(ds.get).toBeCalledWith("item/21168365.json");
  });
});

describe("[HackerNewsAPI.getArticlesByIds]", () => {
  it("gets an array or articles from the HackerNewsAPI", async () => {
    ds.get.mockReturnValueOnce(getArticlePreReducerStub);
    const res = await ds.getArticlesByIds([21168365]);

    expect(res).toEqual([getArticlePostReducerStub]);
    expect(ds.get).toHaveBeenCalled();
    expect(ds.get).toBeCalledWith("item/21168365.json");
  });
});

describe("[HackerNewsAPI.getAllArticleIds]", () => {
  it("gets a array of article ids from HackerNewsAPI", async () => {
    ds.get.mockReturnValueOnce([getAllArticleIdsStub]);
    const res = await ds.getAllArticleIds([21168365]);

    expect(res).toEqual([getAllArticleIdsStub]);
    expect(ds.get).toHaveBeenCalled();
    expect(ds.get).toBeCalledWith("topstories.json");
  });
});

describe("[HackerNewsAPI.getAllArticles]", () => {
  it("gets an array all articles from the HackerNewsAPI", async () => {
    ds.getAllArticleIds = jest.fn();
    ds.getAllArticleIds.mockReturnValueOnce(getAllArticleIdsStub);
    ds.get.mockReturnValueOnce(getArticlePreReducerStub);
    const res = await ds.getAllArticles();

    expect(res).toEqual([getArticlePostReducerStub]);
    expect(ds.get).toHaveBeenCalled();
    expect(ds.get).toBeCalledWith("item/21168365.json");
  });
});
