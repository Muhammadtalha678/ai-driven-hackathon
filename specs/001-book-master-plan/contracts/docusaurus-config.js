/**
 * Docusaurus Configuration Contract
 * 
 * This schema describes the expected configuration structure for the textbook.
 * It serves as the "contract" between the infrastructure setup and the content.
 */

module.exports = {
  // Site Metadata
  title: 'Physical AI Humanoid Robotics Textbook',
  tagline: 'A 13-Week Curriculum for Industry Engineers',
  url: 'https://muhammadtalha678.github.io', // Placeholder, update with actual
  baseUrl: '/ai-driven-hackathon/', // Placeholder, update with actual repo name
  
  // Deployment Config
  organizationName: 'Muhammadtalha678', // GitHub Org/User
  projectName: 'ai-driven-hackathon', // Repo Name
  deploymentBranch: 'gh-pages',

  // Theme Config
  themeConfig: {
    navbar: {
      title: 'Physical AI Robotics',
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'tutorialSidebar',
          position: 'left',
          label: 'Textbook',
        },
        {to: '/blog', label: 'Updates', position: 'left'},
        {
          href: 'https://github.com/Muhammadtalha678/ai-driven-hackathon',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Curriculum',
          items: [
            { label: 'Foundations', to: '/docs/category/foundations-of-physical-ai' },
            { label: 'ROS 2', to: '/docs/category/ros-2' },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Physical AI Robotics Course. Built with Docusaurus.`,
    },
  },
};
