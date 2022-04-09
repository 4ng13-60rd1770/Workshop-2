export const products = async(url) => {
  const respond = await fetch(url);
  const data = await respond.json();
  return data;
}