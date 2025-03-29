import { I18nextProvider } from 'react-i18next'
import './App.css'
import { Layout } from './layout/Layout'
import i18n from './locale/i18n'

function App() {
  return (
    <I18nextProvider i18n={i18n}>
      <div className="w-full h-full p-0 m-0 bg-white overflow-x-hidden">
        <Layout />
      </div>
    </I18nextProvider>
  )
}

export default App
