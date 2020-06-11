export const base = 'transition duration-300 ease-in-out text-white bordered inline-flex items-center space-x-2 focus:outline-none focus:shadow-outline'

export enum sizes {
  sm = 'px-2 py-1 text-sm rounded-sm',
  md = 'px-4 py-2 rounded',
  lg = 'px-6 py-4 text-lg rounded',
}

export enum variants {
  primary = 'bg-blue-700 hover:bg-blue-800 border-blue-700 hover:border-blue-800',
  secondary = 'bg-green-700 hover:bg-green-800 border-green-700 hover:border-green-800',
  neutral = 'bg-gray-400 hover:bg-gray-500 border-gray-400 hover:border-gray-500 text-gray-900',
  danger = 'bg-red-700 hover:bg-red-800 border-red-700 hover:border-red-800',
}