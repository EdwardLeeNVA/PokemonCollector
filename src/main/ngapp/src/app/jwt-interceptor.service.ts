import { Injectable } from "@angular/core";
import {
  HttpInterceptor,
  HttpRequest,
  HttpHandler,
  HttpEvent
} from "@angular/common/http";
import { Observable } from "rxjs";
import { TokenService } from "./services/token.service";

@Injectable({
  providedIn: "root"
})
export class JwtInterceptorService {
  //Before any HTTP request is sent, it intercepts the HTTP request
  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    //If you are on the login page
    if (req.url.includes("login")) {
      return next.handle(req);
    }
    req = req.clone({
      headers: this.tokenService.getAuthorizedRequestHeader()
    });
  }

  //Injects tokenSerivce into JwtInterceptorService
  constructor(private tokenService: TokenService) {}
}
