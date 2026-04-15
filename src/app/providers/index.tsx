import { QueryProvider } from "./queryProvider/QueryProvider"

export const Providers = ({ children }: { children: React.ReactNode }) => (
  <QueryProvider>
    {children}
  </QueryProvider>
)