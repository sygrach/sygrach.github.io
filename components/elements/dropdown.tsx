import { type FC, useState, useRef, useEffect } from 'react';

interface DropdownProps {
  id: string,
  selectedValue: string,
  items: Array<{ value: string, name: string }>,
  onSelect: (value: string) => void
}

const Dropdown:FC<DropdownProps> = ({ id, selectedValue, items, onSelect }) => {
  const buttonRef  = useRef<HTMLDivElement>(null);
  const [isOpen, setIsOpen]  = useState<boolean>(false);
  
  const statusClassName = isOpen ? 'block' : 'hidden';

  const toggleDropdown = () => setIsOpen(state => !state);

  const handleSelect = (nextValue: string) => () => {
    setIsOpen(false);
    onSelect(nextValue);
  };

  return (
    <div ref={ buttonRef }>
      <button
        type="button"
        id={ `${ id }Button` }
        data-dropdown-toggle="dropdown" 
        onClick={ toggleDropdown }
        className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-lg font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white focus:ring-4 focus:outline-none focus:ring-blue-300">
        <span className="relative inline-flex items-center px-8 py-3.5 transition-all ease-in duration-75 text-nowrap bg-white rounded-md group-hover:bg-opacity-0">
          { selectedValue }
          <svg className="w-3 h-3 ms-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 4 4 4-4"/>
          </svg>
        </span>
      </button>
      <div id={ id } className={ `${ statusClassName } absolute z-10 bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700` }>
        <ul className="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby={ `${ id }Button` }>
          {
            items.map(item => (
              <li key={ item.value }>
                <button
                  type="button"
                  className="w-full px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                  onClick={ handleSelect(item.value)}
                >
                  { item.name }
                </button>
              </li>
            ))
          }
        </ul>
      </div>
    </div>
  );
};

export default Dropdown;