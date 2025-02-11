import { IAccount } from "@/database/account.model";

import { fetchHandler } from "../handlers/fetch";

const API_BASE_URL =
  process.env.NEXT_PUBLIC_API_BASE_URL || "http://localhost:3000/api";

class ACCOUNTS_API {
  private ACCOUNTS = "accounts";
  private PROVIDER = "provider";

  getAll() {
    return fetchHandler(`${API_BASE_URL}/${this.ACCOUNTS}`);
  }

  getById(id: string) {
    return fetchHandler(`${API_BASE_URL}/${this.ACCOUNTS}/${id}`);
  }

  getByProvider(providerAccountId: string) {
    return fetchHandler(`${API_BASE_URL}/${this.ACCOUNTS}/${this.PROVIDER}/`, {
      method: "POST",
      body: JSON.stringify({ providerAccountId }),
    });
  }

  create(accountData: Partial<IAccount>) {
    return fetchHandler(`${API_BASE_URL}/${this.ACCOUNTS}`, {
      method: "POST",
      body: JSON.stringify(accountData),
    });
  }

  update(id: string, accountData: Partial<IAccount>) {
    return fetchHandler(`${API_BASE_URL}/${this.ACCOUNTS}/${id}`, {
      method: "PUT",
      body: JSON.stringify(accountData),
    });
  }

  delete(id: string) {
    return fetchHandler(`${API_BASE_URL}/${this.ACCOUNTS}/${id}`, {
      method: "DELETE",
    });
  }
}

const accountsAPI = new ACCOUNTS_API();

export default accountsAPI;
