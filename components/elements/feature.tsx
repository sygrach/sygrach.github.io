import type { FC, ReactNode } from'react'

interface FeatureProps  {
  name: ReactNode;
  icon: ReactNode;
  description: ReactNode;
}

const feature:FC<FeatureProps> = ({ name, icon, description }) => {
  const Icon = icon;

  return (
    <div className="relative pl-16">
      <dt className="text-base font-semibold leading-7 text-gray-900">
        <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-600">
          { icon }
        </div>
        { name }
      </dt>
      <dd className="mt-2 text-base leading-7 text-gray-600">{ description }</dd>
    </div>
  );
  // return (
  //   <li className="flex items-center text-base leading-7 text-gray-900">
  //     <div className="flex h-10 w-10 mr-4 items-center justify-center rounded-lg bg-indigo-600">
  //       { icon }
  //     </div>
  //     { name }
  //   </li>
  // )
}

export default feature