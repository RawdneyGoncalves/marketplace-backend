import Application from '@ioc:Adonis/Core/Application';
import { cuid } from '@ioc:Adonis/Core/Helpers';
import { MultipartFileContract } from '@ioc:Adonis/Core/BodyParser';

export class UploadService {
  public async uploadImage(file: MultipartFileContract, folder: string): Promise<string> {
    const fileName = `${cuid()}.${file.extname}`;
    const filePath = `uploads/${folder}`;

    await file.move(Application.tmpPath(filePath), { name: fileName, overwrite: true });

    return `${filePath}/${fileName}`;
  }
}
