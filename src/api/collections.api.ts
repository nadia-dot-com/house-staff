import { Collection } from "@/types/api/collection";
import { API_URL } from "@/api/config";

export const fetchCollections = async (): Promise<Collection[]> => {
  const res = await fetch(`${API_URL}/collections`);

  const data = await res.json();

  if (!res.ok) {
    throw new Error(
      data?.message ??
        "Failed to fetch collections. An unexpected Error was received from the server.",
    );
  }

  return data;
};
