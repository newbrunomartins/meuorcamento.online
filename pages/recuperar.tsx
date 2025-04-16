// pages/recuperar.tsx
import Head from 'next/head'

export default function RecuperarSenhaPage() {
  return (
    <>
      <Head>
        <title>Recuperar senha | Meu Orçamento</title>
      </Head>
      <div className="min-h-screen flex items-center justify-center px-4 font-montserrat">
        <div className="w-full max-w-md p-8 bg-white rounded-xl border border-gray-200 shadow-md">
          <h1 className="text-2xl font-bold text-center text-primary mb-6">Recuperar senha</h1>
          <form className="space-y-6">
            <div className="form-control">
              <label className="label-custom">Email</label>
              <input type="email" className="input-custom" placeholder="seu@email.com" />
            </div>
            <button type="submit" className="btn-primary-custom w-full">
              Enviar link de recuperação
            </button>
            <div className="text-sm text-center mt-4">
              <a href="/entrar" className="text-accent hover:underline">Voltar para login</a>
            </div>
          </form>
        </div>
      </div>
    </>
  )
}
