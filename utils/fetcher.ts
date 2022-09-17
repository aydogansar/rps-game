async function fetcher(url: string, options: any) {
  const res = await fetch(url, {
    headers: {
      "Content-Type": "application/json",
    },
    ...options,
    ...(options.body && { body: JSON.stringify(options.body) }),
  });

  const data = await res?.json();

  return data;
}
export default fetcher;
