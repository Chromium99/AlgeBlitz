// NOTE : use this for encryption
import * as cryptoTS from "crypto-ts";

// Use this function for password encryption
// pretty basic password encryption
// @NOTE : Secret key needs to match for them both
export const encryptPassword = (
  plainTextPassword: string,
  secretKey: string
) => {
  return cryptoTS.AES.encrypt(plainTextPassword, secretKey);
};

// use this function for decrypting password
export const decryptPassword = (
  encryptedString: string | any,
  secretKey: string
) => {
  return cryptoTS.AES.decrypt(encryptedString.toString(), secretKey).toString(
    cryptoTS.enc.Utf8
  );
};
