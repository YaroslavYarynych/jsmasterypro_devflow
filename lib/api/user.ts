import { IUser } from "@/database/user.model";

import { fetchHandler } from "../handlers/fetch";

const API_BASE_URL =
  process.env.NEXT_PUBLIC_API_BASE_URL || "http://localhost:3000/api";

class USERS_API {
  private USERS = "users";
  private EMAIL = "email";

  getAll() {
    return fetchHandler(`${API_BASE_URL}/${this.USERS}`);
  }

  getById(id: string) {
    return fetchHandler(`${API_BASE_URL}/${this.USERS}/${id}`);
  }

  getByEmail(email: string) {
    return fetchHandler(`${API_BASE_URL}/${this.USERS}/${this.EMAIL}/`, {
      method: "POST",
      body: JSON.stringify({ email }),
    });
  }

  create(userData: Partial<IUser>) {
    return fetchHandler(`${API_BASE_URL}/${this.USERS}`, {
      method: "POST",
      body: JSON.stringify(userData),
    });
  }

  update(id: string, userData: Partial<IUser>) {
    return fetchHandler(`${API_BASE_URL}/${this.USERS}/${id}`, {
      method: "PUT",
      body: JSON.stringify(userData),
    });
  }

  delete(id: string) {
    return fetchHandler(`${API_BASE_URL}/${this.USERS}/${id}`, {
      method: "DELETE",
    });
  }
}

const userAPI = new USERS_API();

export default userAPI;
