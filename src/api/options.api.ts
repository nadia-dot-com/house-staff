import { OptionsResponse } from "@/types/api/options";
import { API_URL } from "@/api/config";

export const fetchOptions = async (): Promise<OptionsResponse> => {
  const res = await fetch(`${API_URL}/options`);

  const data = await res.json();

  if (!res.ok) {
    throw new Error(
      data?.message ??
        "Failed to fetch options. An unexpected Error was received from the server.",
    );
  }

  return data;
};
