import { StatusCodes } from "http-status-codes";

import { BaseError } from "./BaseError";

export class NotFoundError extends BaseError {
  constructor(message: string) {
    super(message, "NOT_FOUND", StatusCodes.NOT_FOUND);
  }
}
