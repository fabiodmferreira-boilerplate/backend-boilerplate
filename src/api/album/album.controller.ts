import {
  controller, httpGet,
} from "inversify-express-utils";
import { inject } from "inversify";
import { Request } from "express";

import { AlbumRepository } from "src/domain/AlbumRepository";

import TYPES from "src/types";

@controller("/api/albums")
export class UserController {

  constructor(@inject(TYPES.AlbumRepository) private albumRepository: AlbumRepository) { }

  @httpGet("/")
  public findAlbums() {
    return this.albumRepository.list();
  }

  @httpGet("/photos")
  public findPhotosGrouppedByAlbum() {
    return this.albumRepository.listPhotosGroupedByAlbum();
  }

  @httpGet("/:id/photos")
  public async getAlbumPhotos(request: Request) {
    return this.albumRepository.listPhotosByAlbum(+request.params.id);
  }
}
