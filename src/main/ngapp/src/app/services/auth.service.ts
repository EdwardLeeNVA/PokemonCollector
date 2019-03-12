import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";
import { environment } from "src/environments/environment";

@Injectable({
  providedIn: "root"
})
export class AuthService {
  constructor(private http: HttpClient) {}

  /*
    This function takes in 2 parameters, the username and password and 
    returns an observable. It makes a HTTP POST request to the login endpoint
  */
  attemptLogin(username: string, password: string): Observable<any> {
    let credentials : FormData = new FormData();
    credentials.append("USERNAME", username);
    credentials.append("PASSWORD", password);
    return this.http.post(
      environment.api.login,
      credentials,
      {
        headers: this.getHttpHeaders(),
        observe: "response"
      }
    );
  }

  private getHttpHeaders(): HttpHeaders {
    //Creates headers for the HTTP post request to get around CORS filters
    const headers: HttpHeaders = new HttpHeaders();
    headers.append("Access-Control-Allow-Origin", "http://localhost:4200");
    return headers;
  }
}