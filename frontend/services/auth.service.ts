import { apiFetch } from "./api";

export async function login(
  cpf: string,
  password: string
) {
  const response = await apiFetch(
    "/auth/login",
    {
      method: "POST",
      body: JSON.stringify({
        cpf,
        password,
      }),
    }
  );
  if(!response.ok) {
    throw new Error("Falha no login");
  }

  return response.json();
}