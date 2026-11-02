import { UserData } from "@/types/userTypes";
import { API_URL } from "@/api/config";
import { handleResponse } from "@/api/handleResponse";

export const fetchUser = async (token: string): Promise<UserData> => {
  const res = await fetch(`${API_URL}/user`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return handleResponse<UserData>(
    res,
    "Failed to fetch user. An unexpected Error was received from the server.",
  );
};

export async function updateUserProfile(
  token: string,
  payload: Partial<UserData>,
): Promise<UserData> {
  const res = await fetch(`${API_URL}/user`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(payload),
  });

  return handleResponse<UserData>(
    res,
    "Failed to update user. An unexpected Error was received from the server.",
  );
}
