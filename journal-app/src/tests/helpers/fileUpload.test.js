import cloudinary from "cloudinary";

const { fileUpload } = require("../../helpers/fileUpload");

cloudinary.config({
  cloud_name: "shackox",
  api_key: "829651858914971",
  api_secret: "YbN5F_7ue9o5xtYv-Lob4d4cE6M",
});

describe("Test File Upload", () => {
  it("Should upload a file and return the URL", async (done) => {
    const resp = await fetch(
      "https://res.cloudinary.com/shackox/image/upload/v1559524150/wrqlnykrynjmapaez7kf.png"
    );
    const blob = await resp.blob();
    const file = new File([blob], "image.png");
    const url = await fileUpload(file);
    const segments = url.split("/");
    const imageId = segments[segments.length - 1].replace(".png", "");

    expect(typeof url).toBe("string");

    cloudinary.v2.api.delete_resources(imageId, {}, () => {
      done();
    });
  });

  it("Should return an error", async () => {
    const file = new File([], "image.png");
    const url = await fileUpload(file);

    expect(url).toBe(null);
  });
});
