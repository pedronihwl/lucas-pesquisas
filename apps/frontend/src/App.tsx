function App() {
  return (
    <div className="min-h-screen bg-white flex items-center justify-center p-8">
      <div className="text-center max-w-md w-full space-y-8 rounded-3xl p-12" style={{ backgroundColor: '#9A6FE4' }}>
        <h1 className="text-white text-2xl font-normal mb-8">
          Olá
        </h1>

        <h2 className="text-white text-3xl font-bold leading-tight">
          Tudo certo com o seu aluguel
        </h2>

        <p className="text-white text-lg">
          Esse site está em construção
        </p>

        <button className="cursor-pointer bg-white text-gray-800 font-medium py-3 px-8 rounded-md hover:bg-gray-100 transition duration-200">
          Aperte esse botão para manter a fé
        </button>
      </div>
    </div>
  )
}

export default App
