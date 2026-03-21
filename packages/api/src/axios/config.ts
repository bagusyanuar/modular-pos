export interface ApiConfig { baseURL: string }

let apiConfig: ApiConfig | null = null

export const setApiConfig = (config: ApiConfig): void => {
  apiConfig = config
}

export const getApiConfig = (): ApiConfig => {
  if (!apiConfig) {
    throw new Error('ApiConfig is not initialized. Call setApiConfig() before using API client.')
  }
  return apiConfig
}