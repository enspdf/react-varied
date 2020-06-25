import { getGifs } from "../../helpers/getGifs";

describe("getGifs Search", () => {
  it("Should get 10 elements", async () => {
    const gifs = await getGifs("One Punch");
    expect(gifs.length).toBe(10);
  });

  it("Should get 0 elements", async () => {
    const gifs = await getGifs("");
    expect(gifs.length).toBe(0);
  });
});
