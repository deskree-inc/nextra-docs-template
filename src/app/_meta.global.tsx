import type { MetaRecord } from "nextra";

export default {
  index: "Introduction",
  "getting-started-separator": {
    type: "separator",
    title: "Getting Started",
  },
  "connecting-to-tetrix-mcp": {
    title: "Connecting to Tetrix MCP",
    href: "/getting-started/connecting-to-tetrix-mcp",
  },
  prerequisites: {
    title: "Prerequisites",
    href: "/getting-started/prerequisites",
  },
  "quick-setup": {
    title: "Quick Setup Guide",
    href: "/getting-started/quick-setup",
  },
  "integrations-separator": {
    type: "separator",
    title: "Platform Integrations",
  },
  "claude-desktop": {
    title: "Claude Desktop",
    href: "/integrations/claude-desktop",
  },
  cursor: {
    title: "Cursor IDE",
    href: "/integrations/cursor",
  },
  "other-platforms": {
    title: "Other Platforms",
    href: "/integrations/other-platforms",
  },
  // Hide the directory index pages from navigation
  "getting-started": {
    display: "hidden",
  },
  integrations: {
    display: "hidden",
  },
  capabilities: "Capabilities",
  configuration: "Configuration",
  troubleshooting: "Troubleshooting",
  api: {
    title: "API Reference",
    type: "page",
  },
  "support-separator": {
    type: "separator",
    title: "Support & Help",
  },
  contact: {
    title: "Contact Us",
    href: "/contact",
  },
  "support-link": {
    title: "Community Discussions",
    href: "https://github.com/deskree-inc/tetrix-docs-platform/discussions",
  },
};
