import { HttpClient, HttpRequest } from './httpClient.type'

const URL = import.meta.env.VITE_BASE_URL

export class HttpFetchAdapter implements HttpClient {
	async request<R>({ endpoint, method, body, headers }: HttpRequest): Promise<R> {
		try {
			const response = await fetch(`${URL}${endpoint}`, {
				method: method.toUpperCase(),
				headers: {
					'Content-Type': 'application/json',
					'Authorization': "Bearer " + localStorage.getItem("token"),
					...headers,
				},
				body: body ? JSON.stringify(body) : undefined,
			});

			if (!response.ok) {
				const message = await response.json();
				throw new Error(`${message.message}`);
			}

			return await response.json();
		} catch (error) {
			throw new Error(`${error instanceof Error ? error.message : String(error)}`);
		}
	}
}