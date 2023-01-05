import { GraphQLError } from "graphql";
import { StatusCodes } from "http-status-codes";

const defaultStatus = 500;
const defaultMessage = "Error";

const defaultError = {
  message: "Internal Server Error",
  code: "INTERNAL_SERVER_ERROR",
  status: StatusCodes.INTERNAL_SERVER_ERROR,
};

export class BaseError extends GraphQLError {
  constructor(
    message = defaultError.message,
    code = defaultError.code,
    status = defaultError.status,
    details?: Record<string, string>[]
  ) {
    super(message, {
      extensions: {
        code,
        status,
        details,
      },
    });

    console.log(this);
  }
}
