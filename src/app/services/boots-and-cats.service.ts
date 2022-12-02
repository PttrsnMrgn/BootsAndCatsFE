import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Albums } from '../interfaces/album';
import { Album, SearchFeature } from '../interfaces/search-feature';

@Injectable({
  providedIn: 'root'
})
export class BootsAndCatsService {
private authorizationKey = 'Bearer BQBGdZHxCYldq3JkTXPSEGt7ZzY9_StCxVi41OJgCO8kS_5iWKEJUepcoKU89ChneSi30jmSZHWlcSeXrUtSvcW3N2mV6TzYYqYOXHY-bKyeaB6jm8vYtklyr5maNoBCYBQKMY02pcoBeNfKaKESTGMwqlrNxkNcqT3ICysaUK8'

private httpOptions = {
  headers: new HttpHeaders({
    'Accept': 'application/json',
    'Content-Type': 'application/json',
    'Authorization': this.authorizationKey
  })
}
// dependency injection
  constructor(private httpClient: HttpClient) { }

  //Method to get albums
  displayAlbums(): Observable<Albums>{
  const albumURL = 'https://api.spotify.com/v1/albums?limit=10&offset=5'
  // Not sure if this is the correct link. Added a limit of 10
    return this.httpClient.get<Albums>(albumURL, this.httpOptions);
  }

  // Method to search albums
  getAllAlbums(searchQuery: string): Observable<SearchFeature>{
  const albumURL = `https://api.spotify.com/v1/search?q=${searchQuery}&type=album&market=US&limit=10&offset=5`;
    return this.httpClient.get<SearchFeature>(albumURL, this.httpOptions);
  }

}