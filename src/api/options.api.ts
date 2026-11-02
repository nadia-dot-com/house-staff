import { OptionsResponse } from "@/types/api/options";
import { API_URL } from "@/api/config";
import { handleResponse } from "@/api/handleResponse";

export const fetchOptions = async (): Promise<OptionsResponse> => {
  const res = await fetch(`${API_URL}/options`);

  return handleResponse<OptionsResponse>(
    res,
    "Failed to fetch options. An unexpected Error was received from the server.",
  );
};
