export enum HttpStatus {
  // Success
  OK = 200, // sukses request
  CREATED = 201, // data berhasil dibuat
  NO_CONTENT = 204, // sukses tapi gak ada data dikirim balik

  // Client Error
  BAD_REQUEST = 400, // request salah (input gak valid, dll)
  UNAUTHORIZED = 401, // belum login / token invalid
  FORBIDDEN = 403, // login tapi gak punya akses
  NOT_FOUND = 404, // resource tidak ditemukan
  CONFLICT = 409, // konflik data (misalnya email sudah dipakai)
  UNPROCESSABLE_ENTITY = 422, // validasi gagal (sering dipakai di API modern)

  // Server Error
  INTERNAL_SERVER_ERROR = 500, // error internal server
  NOT_IMPLEMENTED = 501, // endpoint belum diimplementasi
  BAD_GATEWAY = 502, // error dari server lain
  SERVICE_UNAVAILABLE = 503, // server down/maintenance
  GATEWAY_TIMEOUT = 504, // server lama merespon
}
