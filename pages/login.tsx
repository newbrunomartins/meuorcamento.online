// pages/login.tsx
import Head from 'next/head'

export default function LoginPage() {
  return (
    <>
      <Head>
        <title>Login | Meu Orçamento</title>
      </Head>
      <div className="min-h-screen flex items-center justify-center">
        <div className="w-full max-w-md p-8 bg-white rounded-xl">
          <h1 className="text-2xl font-bold text-center text-primary mb-6">Entrar</h1>
          <form className="space-y-4">
            <div>
              <label className="label">
                <span className="label-custom mb-1">Email</span>
              </label>
              <input type="email" className="input-custom w-full" placeholder="seu@email.com" />
            </div>
            <div>
              <label className="label">
                <span className="label-custom mb-1">Senha</span>
              </label>
              <input type="password" className="input-custom w-full" placeholder="••••••••" />
            </div>
            <button type="submit" className="btn btn-primary w-full">Entrar</button>
            <div className="text-sm text-center mt-4">
              <a href="/recuperar" className="text-accent">Esqueci minha senha</a>
            </div>
          </form>
        </div>
      </div>
    </>
  )
}
