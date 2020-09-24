function handleError(response) {
  if (!response.ok) {
    throw new Error(response.statusText);
  }

  return response;
}

export default handleError;
