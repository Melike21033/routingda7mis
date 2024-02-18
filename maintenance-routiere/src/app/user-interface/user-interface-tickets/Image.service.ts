import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Image } from '../user-interface-tickets/image';

@Injectable({
  providedIn: 'root'
})
export class ImageService {

  imageURL = 'http://localhost:8080/cloudinary/';

  constructor(private httpClient: HttpClient) { }

  public upload(image: File): Observable<any> {
    const formData = new FormData();
    formData.append('multipartFile', image);
    return this.httpClient.post<any>(this.imageURL + 'upload', formData);
  }

} 