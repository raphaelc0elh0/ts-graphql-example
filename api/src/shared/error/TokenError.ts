import { StatusCodes } from "http-status-codes";
import { BaseError } from "./BaseError";

type TokenErrorCode = "TOKEN_EXPIRED" | "TOKEN_INVALID" | "TOKEN_MISSING";

export class TokenError extends BaseError {
  constructor(message: string, code: TokenErrorCode) {
    super(message, code, StatusCodes.UNAUTHORIZED);
  }
}
