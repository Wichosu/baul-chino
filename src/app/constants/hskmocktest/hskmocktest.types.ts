type MockTestBundle = {
  title: string;
  filename: string;
  url: string;
};

export function createMockTestBundle(
  title: string,
  filename: string,
  url: string
): MockTestBundle {
  return {
    title,
    filename,
    url,
  };
}
