import { Collection } from "@/types/api/collection";
import { API_URL } from "@/api/config";
import { handleResponse } from "@/api/handleResponse";

export const fetchCollections = async (): Promise<Collection[]> => {
  const res = await fetch(`${API_URL}/collections`);

  return handleResponse<Collection[]>(
    res,
    "Failed to fetch collections. An unexpected Error was received from the server.",
  );
};
