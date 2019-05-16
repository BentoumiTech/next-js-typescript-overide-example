import { RenderPage, DocumentContext, NextPageContext } from 'next-server/dist/lib/utils';
import { Request, Response } from 'express';

declare module 'next-server/dist/lib/utils' {
  interface ExpressNextPageContext extends NextPageContext {
    req?: Request;
    res?: Response;
  }

  export declare type DocumentContext = ExpressNextPageContext & {
    renderPage: RenderPage;
  };

  export declare type test = string;
}
