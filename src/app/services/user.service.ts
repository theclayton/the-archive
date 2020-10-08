import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment'
import { User } from '../models/user.model';

const API_BASE_URL = environment.apiUrl + "api/users"

@Injectable({ providedIn: "root" })

export class UserService {

  constructor(private httpClient: HttpClient) { }

  async getAllUsers() {
    try {
      let res = await this.httpClient.get<{ message: string, users: Array<any> }>(API_BASE_URL).toPromise()
      let users: Array<User> = res.users.map((user) => this.constructUserObject(user))
      return { message: res.message, users: users }

    } catch (ex) {
      return { success: false, message: ex.error.message }
    }
  }

  async createUser(name: string, email: string, password: string, authLevel: string) {
    const userCreds = { name: name, email: email, password: password, authLevel: authLevel }

    try {
      let res = await this.httpClient.post<{ message: string }>(API_BASE_URL + "/create", userCreds).toPromise()

      if (res.message === "success") {
        return { success: true, message: "Success! User was successfully created." }
      }
    } catch (ex) {
      return { success: false, message: ex.error.message }
    }
  }

  async modifyUser(name: string, email: string, authLevel: string) {
    const userCreds = { name: name, email: email, authLevel: authLevel }

    try {
      let res = await this.httpClient.post<{ message: string }>(API_BASE_URL + "/modify", userCreds).toPromise()

      if (res.message === "success") {
        return { success: true, message: "Success! User was successfully modified." }
      }
    } catch (ex) {
      return { success: false, message: ex.error.message }
    }
  }

  async deleteUser(email: string) {
    try {
      let res = await this.httpClient.delete<{ message: string }>(`${API_BASE_URL}/${email}`).toPromise()

      if (res.message === "success") {
        return { success: true, message: "Success! User was successfully deleted." }
      }
    } catch (ex) {
      return { success: false, message: ex.error.message }
    }
  }

  constructUserObject(user) {
    return {
      name: user.name,
      email: user.email,
      authLevel: user.authLevel
    }
  }

}