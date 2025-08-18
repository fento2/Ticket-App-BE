export enum ErrorMessage {
  // Auth & Token
  INVALID_TOKEN = "Invalid token",
  TOKEN_EXPIRED = "Token has expired",
  UNAUTHORIZED = "Unauthorized access",
  FORBIDDEN = "Forbidden resource",

  // User
  USER_NOT_FOUND = "User not found",
  EMAIL_ALREADY_EXISTS = "Email already registered",
  USERNAME_ALREADY_EXISTS = "Username already taken",
  INVALID_CREDENTIALS = "Invalid username or password",

  // Validation
  VALIDATION_ERROR = "Validation error",
  MISSING_REQUIRED_FIELDS = "Missing required fields",
  INVALID_INPUT = "Invalid input data",

  // Resource
  NOT_FOUND = "Resource not found",
  DUPLICATE_RESOURCE = "Resource already exists",

  // Server
  INTERNAL_SERVER_ERROR = "Internal server error",
  SERVICE_UNAVAILABLE = "Service unavailable, please try again later",
}
