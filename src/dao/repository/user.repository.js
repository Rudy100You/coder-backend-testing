import { userSchema } from "../models/schema/user.schema.js";
import { CommonMDBRepository } from "./commonMDB.repository.js";

export default class UserRepository extends CommonMDBRepository {
  constructor() {
    super("users", userSchema);
  }
}