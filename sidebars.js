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
  userSidebar: [
    {
      type: "category",
      label: "Getting started",
      items: [
        {
          type: "doc",
          label: "Choose your path",
          id: "user/getting-started/choose-your-path",
        },
        {
          type: "doc",
          label: "Connect your dappnode to the router",
          id: "user/getting-started/connect-dappnode-to-the-router",
        },
        {
          type: "doc",
          label: "access DAppNode via WiFi",
          id: "user/getting-started/access-dappnode-via-wifi",
        },
        {
          type: "doc",
          id: "user/getting-started/setup",
        },
        {
          type: "doc",
          label: "next steps",
          id: "user/getting-started/next-steps",
        },
      ],
    },
    {
      type: "category",
      label: "Access my dappnode",
      items: [
        {
          type: "doc",
          label: "Overview",
          id: "user/access-my-dappnode/overview",
        },
        {
          type: "doc",
          label: "Wi-Fi",
          id: "user/access-my-dappnode/wifi",
        },
        {
          type: "category",
          label: "VPN",
          items: [
            {
              type: "doc",
              label: "Overview",
              id: "user/access-my-dappnode/vpn/overview",
            },
            {
              type: "doc",
              label: "OpenVPN",
              id: "user/access-my-dappnode/vpn/openvpn",
            },
            {
              type: "doc",
              label: "Wireguard",
              id: "user/access-my-dappnode/vpn/wireguard",
            },
          ],
        },
        {
          type: "doc",
          label: "Terminal (Advanced)",
          id: "user/access-my-dappnode/terminal",
        },
        {
          type: "doc",
          label: "Local Proxy (Recovery)",
          id: "user/access-my-dappnode/local",
        },
      ],
    },
    {
      type: "category",
      label: "Staking",
      items: [
        {
          type: "doc",
          id: "user/staking/introduction",
        },
        {
          type: "doc",
          id: "user/staking/solo",
        },
        {
          type: "doc",
          id: "user/staking/rocketpool",
        },
        {
          type: "doc",
          id: "user/staking/stakehouse",
        },
        {
          type: "doc",
          id: "user/staking/stakewise",
        },
      ],
    },
    {
      type: "category",
      label: "Ethical metrics",
      items: [
        {
          type: "autogenerated",
          dirName: "user/ethical-metrics",
        },
      ],
    },
    {
      type: "category",
      label: "Install",
      items: [
        {
          type: "doc",
          label: "DAppNode Home",
          id: "user/install/dappnode-home",
        },
        {
          type: "doc",
          label: "DAppNode Core",
          id: "user/install/dappnode-core",
        },
      ],
    },
    {
      type: "category",
      label: "Packages",
      items: [
        {
          type: "autogenerated",
          dirName: "user/packages",
        },
      ],
    },
    {
      type: "category",
      label: "Videos and tutorials",
      items: [
        {
          type: "autogenerated",
          dirName: "user/videos-and-tutorials",
        },
      ],
    },
    {
      type: "category",
      label: "FAQs",
      items: [
        {
          type: "autogenerated",
          dirName: "user/faqs",
        },
      ],
    },
  ],
  devSidebar: [
    "dev",
    {
      type: "doc",
      label: "Command line",
      id: "dev/cli",
    },
    {
      type: "doc",
      label: "Build",
      id: "dev/build",
    },
    {
      type: "doc",
      label: "Publish",
      id: "dev/publish",
    },
    {
      type: "category",
      label: "Files references",
      items: [
        {
          type: "autogenerated",
          dirName: "dev/references",
        },
      ],
    },
    {
      type: "doc",
      label: "Github Actions",
      id: "dev/github-actions",
    },
  ],
  smoothSidebar: [
    "smooth",
    {
      type: "doc",
      id: "smooth/Intro",
    },
  ],
  daoSidebar: ["dao", "dao/node-basics", "dao/liquidity-mining", "dao/faq"],
};

module.exports = sidebars;
