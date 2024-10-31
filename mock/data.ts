import { defineMockData } from 'vite-plugin-mock-dev-server'

// defineMockData，用于在 mock 文件中使用 data.ts 作为共享数据源。
export default defineMockData('proses', [
  '🔖 CON CEBOLLA',
  '🔖 CON CECINA',
  '🔖 CON JAMON',
  '🔖 VEGETAL',
  '🔖 NORMAL ',
  '🔖 CON QUESO DE CABRA',
])
