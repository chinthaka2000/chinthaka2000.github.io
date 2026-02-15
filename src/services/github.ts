export interface GitHubRepo {
  id: number;
  name: string;
  description: string;
  html_url: string;
  stargazers_count: number;
  language: string;
  updated_at: string;
}

export async function fetchGitHubRepos(username: string): Promise<GitHubRepo[]> {
  try {
    const response = await fetch(`https://api.github.com/users/${username}/repos?sort=updated&per_page=6`);
    
    if (!response.ok) {
      console.error("Failed to fetch GitHub repos:", response.statusText);
      return [];
    }

    const repos = await response.json();
    return repos;
  } catch (error) {
    console.error("Error fetching GitHub repos:", error);
    return [];
  }
}
