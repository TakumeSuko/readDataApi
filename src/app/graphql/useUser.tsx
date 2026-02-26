export async function getUsers() {
  const res = await fetch('https://dummyjson.com/users');
  if (!res.ok) throw new Error('Failed to fetch');
  return res.json();
}
