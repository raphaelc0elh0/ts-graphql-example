import { StatusCodes } from "http-status-codes";

import { BaseError } from "./BaseError";

export class BadRequestError extends BaseError {
  constructor(message: string) {
    super(message, "BAD_REQUEST", StatusCodes.BAD_REQUEST);
  }
}
