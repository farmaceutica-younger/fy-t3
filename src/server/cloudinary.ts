import { v2 } from "cloudinary";
import path from "path";
import { env } from "~/env.mjs";

export class Cloudinary {
  constructor(
    private readonly secret: string,
    private readonly baseFolder: string,
    private readonly apiKey: string,
    private readonly cloudName: string,
  ) {}

  async getUploadSignature(...folderPath: string[]) {
    const timestamp = Math.round(new Date().getTime() / 1000);
    const folder = path.join(this.baseFolder, ...folderPath);

    const toSign = {
      timestamp,
      folder,
    };

    const signature = v2.utils.api_sign_request({ ...toSign }, this.secret);
    return {
      timestamp,
      signature,
      folder,
      apiKey: this.apiKey,
      cloudName: this.cloudName,
    };
  }
}

export const cloudinary = new Cloudinary(
  env.CLOUDINARY_SECRET,
  env.CLOUDINARY_BASE_FOLDER,
  env.CLOUDINARY_KEY,
  env.CLOUDINARY_CLOUD_NAME,
);
