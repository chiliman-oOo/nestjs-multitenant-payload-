import { Inject, Injectable, Scope } from "@nestjs/common";
import { REQUEST } from "@nestjs/core";
import { Request } from "express";

@Injectable({ scope: Scope.REQUEST, durable: true })
export class AppService {
  constructor(@Inject(REQUEST) private request: Request) {}

  getHello() {
    return JSON.stringify(this.request)
  }
}
