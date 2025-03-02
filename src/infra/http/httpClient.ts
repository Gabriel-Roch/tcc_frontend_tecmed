import { HttpClient, HttpRequest } from './httpClient.type'

const URL = import.meta.env.VITE_BASE_URL

export class HttpFetchAdapter implements HttpClient {
	async request<R>({ endpoint, method, body, headers }: HttpRequest): Promise<R> {
		try {
			const response = await fetch(`${URL}${endpoint}`, {
				method: method.toUpperCase(),
				headers: {
					'Content-Type': 'application/json',
					...headers,
				},
				body: body ? JSON.stringify(body) : undefined,
			});
			
			if (!response.ok) {
				const message = await response.json();
				throw new Error(`Request failed with status ${response.status}: ${message}`);
			}

			return await response.json();
		} catch (error) {
			console.log(error)
			throw new Error(`Request failed: ${error instanceof Error ? error.message : String(error)}`);
		}
	}
}