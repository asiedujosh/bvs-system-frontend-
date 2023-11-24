import {
  UserIcon,
  PlusIcon,
  BuildingLibraryIcon,
  WrenchIcon,
} from "@heroicons/react/24/solid"

let IconClassName = "h-10 w-10 text-black"

const DASHBOARD_DEFAULTS = {
  one: {
    label: "Add Client",
    icon: () => <PlusIcon className={IconClassName} />,
    link: "/dashboard/createClient",
  },
  two: {
    label: "Individual",
    icon: () => <UserIcon className={IconClassName} />,
    link: "/dashboard/individual",
  },
  three: {
    label: "Company",
    icon: () => <BuildingLibraryIcon className={IconClassName} />,
    link: "/dashboard/company",
  },
  four: {
    label: "Others",
    icon: () => <WrenchIcon className={IconClassName} />,
    link: "/dashboard/others",
  },
}

export default DASHBOARD_DEFAULTS
