import { StatusCodes } from "http-status-codes";

import { BaseError } from "./BaseError";

export class InternalError extends BaseError {
  constructor(message: string) {
    super(message, "INTERNAL_SERVER_ERROR", StatusCodes.INTERNAL_SERVER_ERROR);
  }
}
