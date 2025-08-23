export enum ErrorMessage {
  // Auth & Token
  INVALID_TOKEN = "Invalid token",
  TOKEN_EXPIRED = "Token has expired",
  UNAUTHORIZED = "Unauthorized access",
  FORBIDDEN = "Forbidden resource",
  LOGIN_REQUIRED = "Login required",
  REFRESH_TOKEN_EXPIRED = "Refresh token expired",

  // User
  USER_NOT_FOUND = "User not found",
  EMAIL_ALREADY_EXISTS = "Email already registered",
  USERNAME_ALREADY_EXISTS = "Username already taken",
  INVALID_CREDENTIALS = "Invalid username or password",
  PASSWORD_TOO_WEAK = "Password too weak",
  PASSWORD_MISMATCH = "Passwords do not match",
  PROFILE_UPDATE_FAILED = "Failed to update profile",

  // Validation
  VALIDATION_ERROR = "Validation error",
  MISSING_REQUIRED_FIELDS = "Missing required fields",
  INVALID_INPUT = "Invalid input data",
  INVALID_EMAIL_FORMAT = "Invalid email format",
  INVALID_PHONE_NUMBER = "Invalid phone number",
  FIELD_TOO_SHORT = "Input is too short",
  FIELD_TOO_LONG = "Input is too long",
  TOKEN_NOT_PROVIDED = "Token not provided",

  // Resource
  NOT_FOUND = "Resource not found",
  DUPLICATE_RESOURCE = "Resource already exists",
  UPDATE_FAILED = "Failed to update resource",
  DELETE_FAILED = "Failed to delete resource",
  CREATE_FAILED = "Failed to create resource",

  // Payment / Transaction
  PAYMENT_FAILED = "Payment failed",
  INSUFFICIENT_FUNDS = "Insufficient funds",
  TRANSACTION_NOT_FOUND = "Transaction not found",
  TRANSACTION_ALREADY_PROCESSED = "Transaction already processed",
  COUPON_EXPIRED = "Coupon has expired",
  INVALID_COUPON = "Invalid coupon code",
  POINTS_EXPIRED = "Points have expired",
  INSUFFICIENT_POINTS = "Insufficient points",

  // Event
  EVENT_NOT_FOUND = "Event not found",
  EVENT_ALREADY_CANCELED = "Event already canceled",
  EVENT_FULL = "Event tickets are sold out",
  EVENT_EXPIRED = "Event already ended",
  TICKET_NOT_AVAILABLE = "Ticket not available",
  QUOTA_EXCEEDED = "Ticket quota exceeded",

  // Server
  INTERNAL_SERVER_ERROR = "Internal server error",
  SERVICE_UNAVAILABLE = "Service unavailable, please try again later",
  SERVER_MISSING_SECRET_KEY = "Server Missing Secret Key",
  DATABASE_CONNECTION_ERROR = "Database connection error",
  CACHE_CONNECTION_ERROR = "Cache connection error",
}

export enum ResponseMessage {
  SUCCESS = "Success",
  CREATED = "Created successfully",
  UPDATED = "Updated successfully",
  DELETED = "Deleted successfully",
  NOT_FOUND = "Data not found",
  UNAUTHORIZED = "Unauthorized",
  FORBIDDEN = "Forbidden",
  BAD_REQUEST = "Bad request",
  SERVER_ERROR = "Internal server error",
}
