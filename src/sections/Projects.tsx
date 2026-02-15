"use client";

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { fetchGitHubRepos, GitHubRepo } from '@/services/github';
import { Github, Star, GitFork, ExternalLink } from 'lucide-react';

export default function Projects() {
  const [repos, setRepos] = useState<GitHubRepo[]>([]);
  const [loading, setLoading] = useState(true);

  // REPLACE THIS WITH YOUR GITHUB USERNAME
  const GITHUB_USERNAME = "chinthaka2000";

  useEffect(() => {
    async function loadRepos() {
      const data = await fetchGitHubRepos(GITHUB_USERNAME);
      setRepos(data);
      setLoading(false);
    }
    loadRepos();
  }, []);

  return (
    <section id="projects" className="min-h-screen py-24 bg-black relative">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold font-mono text-acid-lime mb-6 tracking-tight">
            OPEN SOURCE
          </h2>
          <p className="text-gray-400 max-w-2xl text-lg">
            My latest contributions and projects directly from GitHub.
          </p>
        </motion.div>

        {loading ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[1, 2, 3].map((i) => (
              <div key={i} className="h-64 rounded-2xl bg-white/5 animate-pulse border border-white/10"></div>
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {repos.map((repo, index) => (
              <motion.div
                key={repo.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <a
                  href={repo.html_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block h-full p-8 rounded-2xl bg-white/5 border border-white/10 hover:border-acid-lime/50 hover:bg-white/10 transition-all duration-300 group relative overflow-hidden"
                >
                  <div className="absolute top-0 right-0 p-4 opacity-50 group-hover:opacity-100 transition-opacity">
                    <ExternalLink className="w-5 h-5 text-acid-lime" />
                  </div>

                  <div className="flex items-center gap-3 mb-4 text-acid-lime">
                    <Github className="w-6 h-6" />
                    <span className="text-xs font-mono border border-acid-lime/30 px-2 py-1 rounded-full uppercase">
                      {repo.language || 'Code'}
                    </span>
                  </div>

                  <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-acid-lime transition-colors line-clamp-1">
                    {repo.name}
                  </h3>

                  <p className="text-gray-400 mb-6 line-clamp-3 text-sm leading-relaxed h-[60px]">
                    {repo.description || "No description provided."}
                  </p>

                  <div className="flex items-center gap-6 text-gray-400 text-sm">
                    <div className="flex items-center gap-2">
                      <Star className="w-4 h-4 text-yellow-500" />
                      <span>{repo.stargazers_count}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <GitFork className="w-4 h-4" />
                      <span>0</span> {/* Fork count not always in simple list, would need full object */}
                    </div>
                  </div>
                </a>
              </motion.div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
