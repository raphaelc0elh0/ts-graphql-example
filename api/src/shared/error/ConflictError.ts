import { StatusCodes } from "http-status-codes";

import { BaseError } from "./BaseError";

export class ConflictError extends BaseError {
  constructor(message: string) {
    super(message, "CONFLICT", StatusCodes.CONFLICT);
  }
}
