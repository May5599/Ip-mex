// // app/lib/navigation.ts

// export type NavItem = {
//   label: string;
//   href?: string;
//   children?: NavItem[];
// };

// export const NAVIGATION: NavItem[] = [
//   {
//     label: "Services",
//     children: [
//       { label: "Patents", href: "/services/patents" },
//       { label: "Trademarks", href: "/services/trademarks" },
//       {
//         label: "IP Strategy",
//         children: [
//           { label: "IP Audit", href: "/services/ip-audit" },
//           { label: "Valuation", href: "/services/valuation" },
//           { label: "Virtual Counsel", href: "/services/virtual-counsel" },
//         ],
//       },
//       {
//         label: "Enforcement",
//         children: [
//           { label: "Infringement", href: "/services/infringement" },
//           { label: "Litigation Support", href: "/services/litigation-support" },
//         ],
//       },
//       { label: "Education", href: "/services/education" },
//     ],
//   },
//   { label: "Industries", href: "/industries" },
//   { label: "Insights", href: "/insights" },
//   { label: "About", href: "/about" },
//   { label: "Contact", href: "/contact" },
// ];
import { SERVICES } from "./services";

export type NavItem = {
  label: string;
  href?: string;
  children?: NavItem[];
};

function buildServiceNav(): NavItem[] {
  return SERVICES.map(service => {
    if (service.children) {
      return {
        label: service.label,
        children: service.children.map(child => ({
          label: child.label,
          href: `/services/${child.slug}`,
        })),
      };
    }

    return {
      label: service.label,
      href: `/services/${service.slug}`,
    };
  });
}

export const NAVIGATION: NavItem[] = [
  {
    label: "Services",
    children: buildServiceNav(),
  },
  { label: "Industries", href: "/industries" },
  { label: "Insights", href: "/insights" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];