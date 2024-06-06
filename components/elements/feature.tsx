import type { FC, ReactElement } from'react'

interface FeatureProps  {
  name: string;
  icon: ReactElement;
}

const feature:FC<FeatureProps> = ({ name, icon }) => {
  const Icon = icon;

  return (
    <li className="flex items-center text-base leading-7 text-gray-900">
      <div className="flex h-10 w-10 mr-4 items-center justify-center rounded-lg bg-indigo-600">
        <Icon className="h-6 w-6 text-white" aria-hidden="true" />
      </div>
      {name}
    </li>
  )
}

export default feature