import axios, { AxiosRequestConfig, AxiosResponse, AxiosError } from 'axios';

class ApiRequest {
  private axiosInstance;

  constructor(baseURL: string) {
    this.axiosInstance = axios.create({
      baseURL,
    });

    // Add any other global configurations or interceptors here
  }

  public async get<T>(url: string, config?: AxiosRequestConfig): Promise<T> {
    try {
      const response: AxiosResponse<T> = await this.axiosInstance.get(url, config);
      return response.data;
    } catch (error) {
      throw this.handleRequestError(error as AxiosError<any>);
    }
  }

  public async post<T>(url: string, data: any, config?: AxiosRequestConfig): Promise<T> {
    try {
      const response: AxiosResponse<T> = await this.axiosInstance.post(url, data, config);
      return response.data;
    } catch (error) {
      throw this.handleRequestError(error as AxiosError<any>);
    }
  }

  private handleRequestError(error: AxiosError<any>): Error {
    if (error.response) {
      // Request was made and server responded with a non-2xx status code
      const { status, data } = error.response;
      return new Error(`Request failed with status ${status}: ${JSON.stringify(data)}`);
    } else if (error.request) {
      // Request was made but no response was received
      return new Error('No response received from the server');
    } else {
      // Error occurred during the request setup
      return new Error('Error setting up the request');
    }
  }
}

export default ApiRequest;
