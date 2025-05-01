import SideNav from "./components/Sidenav";
import MainLayout from "./layouts/MainLayout";
import EDocs from "./pages/EDocs";

function App() {
  return (
    <MainLayout>
      <SideNav/>
      <main className="main-layout__main">
        {/* pages' content are rendered here */}
        <EDocs/>
      </main>
    </MainLayout>
  );
}

export default App;
