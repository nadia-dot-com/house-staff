export async function handleResponse<T>(
  res: Response,
  fallbackMessage: string,
): Promise<T> {
  if (!res.ok) {
    let message = fallbackMessage;

    try {
      const errorBody = await res.json();
      if (errorBody?.message) message = errorBody.message;
    } catch {
      // response body wasn't valid JSON (HTML error page, empty body, etc.)
    }

    throw new Error(message);
  }

  const text = await res.text();
  return text ? (JSON.parse(text) as T) : (undefined as T);
}
