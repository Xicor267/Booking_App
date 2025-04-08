import { I18nextProvider } from 'react-i18next'
import { Provider } from 'react-redux'
import './App.css'
import i18n from './locale/i18n'
import { store } from './redux/store'
import { RouteConfig } from './route/Router'

function App() {
  return (
    <Provider store={store}>
      <I18nextProvider i18n={i18n}>
        <div className="w-full h-full p-0 m-0 bg-white overflow-x-hidden">
          {/* <Layout /> */}
          <RouteConfig />
        </div>
      </I18nextProvider>
    </Provider>
  )
}

export default App
