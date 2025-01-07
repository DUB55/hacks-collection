const GITHUB_TOKEN = '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';

const REPOS = [
  {
    name: "dub55.github.io",
    url: "https://api.github.com/repos/DUB55/dub55.github.io/contents",
    description: "Personal GitHub Pages website"
  },
  {
    name: "Blooket-Hacks",
    url: "https://api.github.com/repos/DUB55/Blooket-Hacks/contents",
    description: "Blooket game hacks and utilities"
  }
];

export const getRepositories = () => REPOS;

export const fetchDirectoryContents = async (url: string) => {
  try {
    const response = await fetch(url, {
      headers: {
        'Authorization': `Bearer ${GITHUB_TOKEN}`,
        'Accept': 'application/vnd.github.v3+json'
      }
    });
    if (!response.ok) throw new Error('Failed to fetch directory contents');
    return await response.json();
  } catch (error) {
    console.error('Error fetching directory contents:', error);
    throw error;
  }
};

export const fetchFileContent = async (url: string) => {
  try {
    const response = await fetch(url, {
      headers: {
        'Authorization': `Bearer ${GITHUB_TOKEN}`,
        'Accept': 'application/vnd.github.v3+json'
      }
    });
    if (!response.ok) throw new Error('Failed to fetch file content');
    const data = await response.json();
    return atob(data.content);
  } catch (error) {
    console.error('Error fetching file content:', error);
    throw error;
  }
};

export const isCodeFile = (filename: string) => {
  const codeExtensions = ['.js', '.ts', '.jsx', '.tsx', '.css', '.html', '.md'];
  return codeExtensions.some(ext => filename.toLowerCase().endsWith(ext));
};