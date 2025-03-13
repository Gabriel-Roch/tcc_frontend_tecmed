export enum HttpMethod {
	GET = 'get',
	POST = 'post',
	PUT = 'put',
	DELETE = 'delete',
	PATCH = 'PATCH'
}

export type HttpRequest = {
	endpoint?: string
	method: HttpMethod
	body?: any
	headers?: any
	URL_FULL?: string
}

export interface HttpClient {
	request: <R = unknown>(request: HttpRequest) => Promise<R>
}