/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */

// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  // Software Hub sidebar
  softwareHubSidebar: [
    {
      type: 'category',
      label: 'Software Hub',
      link: {
        type: 'doc',
        id: 'software-hub/index',
      },
      items: [
        {
          type: 'category',
          label: 'Fleet Management',
          link: {
            type: 'doc',
            id: 'software-hub/fleet-management/index',
          },
          items: [],
        },
        {
          type: 'category',
          label: 'GPS Tracking',
          link: {
            type: 'doc',
            id: 'software-hub/gps-tracking/index',
          },
          items: [],
        },
        {
          type: 'category',
          label: 'Route Optimization',
          link: {
            type: 'doc',
            id: 'software-hub/route-optimization/index',
          },
          items: [],
        },
        {
          type: 'category',
          label: 'Maintenance',
          link: {
            type: 'doc',
            id: 'software-hub/maintenance/index',
          },
          items: [],
        },
      ],
    },
  ],

  // Hardware Hub sidebar
  hardwareHubSidebar: [
    {
      type: 'category',
      label: 'Hardware Hub',
      link: {
        type: 'doc',
        id: 'hardware-hub/index',
      },
      items: [
        {
          type: 'category',
          label: 'GPS Devices',
          link: {
            type: 'doc',
            id: 'hardware-hub/devices/index',
          },
          items: [],
        },
        {
          type: 'category',
          label: 'Gateways & Routers',
          link: {
            type: 'doc',
            id: 'hardware-hub/gateways/index',
          },
          items: [],
        },
      ],
    },
  ],

  // Protocol Hub sidebar
  protocolHubSidebar: [
    {
      type: 'category',
      label: 'Protocol Hub',
      link: {
        type: 'doc',
        id: 'protocol-hub/index',
      },
      items: [
        {
          type: 'category',
          label: 'Standard Protocols',
          link: {
            type: 'doc',
            id: 'protocol-hub/standards/index',
          },
          items: [],
        },
        {
          type: 'category',
          label: 'Custom & Proprietary',
          link: {
            type: 'doc',
            id: 'protocol-hub/custom/index',
          },
          items: [],
        },
      ],
    },
  ],

  // Insights sidebar
  insightsSidebar: [
    {
      type: 'category',
      label: 'Insights',
      link: {
        type: 'doc',
        id: 'insights/index',
      },
      items: [
        {
          type: 'category',
          label: 'Trends & Analysis',
          link: {
            type: 'doc',
            id: 'insights/trends/index',
          },
          items: [
            'insights/trends/2025-global-commercial-fleet-market-analysis',
            'insights/trends/2024-fleet-tech-landscape',
          ],
        },
        {
          type: 'category',
          label: 'Blog',
          link: {
            type: 'doc',
            id: 'insights/blog/index',
          },
          items: [],
        },
      ],
    },
  ],
};

module.exports = sidebars;
