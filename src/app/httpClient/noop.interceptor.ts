import {Injectable} from "@angular/core";
import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from "@angular/common/http";
import {Observable} from "rxjs/Observable";

@Injectable()
export class NoopInterceptor implements HttpInterceptor{
  //只是简单的转发请求而不做任何修改
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
   //next总是代表位于拦截器链中的下一个拦截器（如果有的话），
    // 如果没有更多拦截器了，它就会是最终的后端。
    return next.handle(req);
  }
}
