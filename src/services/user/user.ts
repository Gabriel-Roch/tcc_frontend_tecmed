import { HttpClient, HttpMethod } from "../../infra/http/httpClient.type"
import { IregisterUser, IupdateUser, IUsers } from "./user.type"

export interface IUserService {
    registerUser: (data: IregisterUser) => Promise<void>
    getUsers: () => Promise<Array<IUsers>>
    deleteUserById: (id: number) => Promise<void>
    updateUser: (data: IupdateUser) => Promise<void>
    getUserById: (idUser: number) => Promise<IUsers | []>
}

export class UserService implements IUserService {

    constructor(private readonly httpClient: HttpClient) { }

    async getUsers() {
        try {
            return await this.httpClient.request<Promise<IUsers[]>>({
                method: HttpMethod.GET,
                endpoint: "/users"
            })
        } catch (error) {
            throw error
        }
    }

    async registerUser(data: IregisterUser) {
        try {
            await this.httpClient.request<Promise<void>>({
                method: HttpMethod.GET,
                endpoint: "/users",
                body: data
            })
        } catch (error) {
            throw error
        }
    }

    async deleteUserById(id: number) {
        try {
            await this.httpClient.request<Promise<void>>({
                method: HttpMethod.DELETE,
                endpoint: `/users/${id}`,
            })
        } catch (error) {
            throw error
        }
    }

    async updateUser(data: IupdateUser) {
        try {
            await this.httpClient.request<Promise<void>>({
                method: HttpMethod.PATCH,
                endpoint: "/users",
                body: data
            })
        } catch (error) {
            throw error
        }
    }

    async getUserById(idUser: number): Promise<IUsers | []> {
        console.log(idUser)
        return []
    }

}



