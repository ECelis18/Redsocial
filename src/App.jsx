
import Navbar from './components/Navbar'
import ColumnCentral from './components/ColumnCentral'
import ColumnDere from './components/ColumnDere'
import ColumnIzqu from './components/ColumnIzqu'
import Footer from './components/footer'
import Publicaciones from './components/publicaciones'

function App() {

  return (
    <>
      <Navbar />
      < div className="w3-container w3-content" style={{ maxWidth: "1400px", marginTop: "80px" }}>
        {/* <!-- The Grid --> */}
        < div className="w3-row" >
          {/* <!-- Left Column --> */}
          < div className="w3-col m3" >
            <ColumnIzqu />
          </div >
          <div className="w3-col m7">
            <ColumnCentral />
          <Publicaciones />
          </div>
          <div className="w3-col m2">
            <ColumnDere />
          </div>
        </div >
      </div >
      <Footer />
    </>
  )
}

export default App


