import { RouterProvider } from 'react-router-dom'
import { router } from './app/routes/router'
import { useAppLoaderStore } from './entities/app-loader/model/slice';
import { Loader } from './shared/components/ui/Loader/ui/Loader';
import { Providers } from './app/providers';
import '@/App.css'

function App() {
  const isLoading = useAppLoaderStore((state) => state.isLoading);

  return (
    <Providers>
      {isLoading && <Loader />}
      <RouterProvider router={router} />
    </Providers>
  )
}

export default App