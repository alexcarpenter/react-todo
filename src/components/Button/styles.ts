export const base = 'transition duration-300 ease-in-out text-white border inline-flex items-center flex-shrink-0 space-x-2 focus:outline-none focus:shadow-outline';

export const sizes = {
  sm: 'px-2 py-1 text-sm rounded-sm',
  md: 'px-4 py-2 rounded',
  lg: 'px-6 py-4 text-lg rounded',
}

export const variants = {
  primary: {
    enabled: 'bg-blue-700 hover:bg-blue-800 border-blue-700 hover:border-blue-800',
    disabled: 'bg-blue-700 border-blue-700 opacity-50 cursor-not-allowed',
  },
  secondary: {
    enabled: 'bg-green-700 hover:bg-green-800 border-green-700 hover:border-green-800',
    disabled: 'bg-green-700 border-green-700 opacity-50 cursor-not-allowed',
  },
  neutral: {
    enabled: 'bg-gray-300 hover:bg-gray-400 border-gray-300 hover:border-gray-400 text-gray-800',
    disabled: 'bg-gray-300 border-gray-300 opacity-50 cursor-not-allowed text-gray-800',
  }
}