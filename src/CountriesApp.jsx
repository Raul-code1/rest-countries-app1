import { Header, Footer } from "./ui/Components";
import { DarkModeProvider } from "./context/DarkModeProvider";
import { AppRouter } from "./router/AppRouter";

export const CountriesApp = () => {
  return (
    <DarkModeProvider>
      <Header />
      <AppRouter />
      <Footer />
    </DarkModeProvider>
  );
};
