import type { PackageSummary } from "../api/types/packageSummary";
import { Link } from "react-router-dom";

interface PackageListItemsProps {
  packageItem: PackageSummary;
}

export default function PackageListItem({ packageItem }: PackageListItemsProps) {
  const renderedKeywords = (packageItem.keywords || []).map((keyword) => {
    return <div key={keyword} className="border py-0.5 px-1 text-xs bg-slate-300 rounded">
      {keyword}
    </div>
  });

  return(
    <div className="border p-4 rounded flex justify-between items-center">
      <div className="flex flex-col gap-2">
        <Link to={`/packages/${packageItem.name}`} className="text-xl font-bold">
          {packageItem.name}
        </Link>
        <p className="text-sm text-gray-500">
          {packageItem.description}
        </p>
        <div className="flex gap-1">
          {renderedKeywords}
        </div>
      </div>
      <div className="mr-6">
        <Link to={`/packages/${packageItem}`} className="py-2 px-3 rounded bg-black text-white text-lg">
          View
        </Link>
      </div>
    </div>
  );
}