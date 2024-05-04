import CapitalCountryGame from "./components/CapitalCountryGame";

const App = () => {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        width: '100vw',
        backgroundColor: 'lightblue',
      }}
    >
      <CapitalCountryGame 
        data={{
          Germany: 'Berlin',
          France: 'Paris',
        }}
      />
    </div>
  )
}

export default App;