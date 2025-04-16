// pages/register.tsx
import { useEffect, useState } from 'react'
import Head from 'next/head'

export default function RegisterPage() {
  const [tipoPessoa, setTipoPessoa] = useState<'cpf' | 'cnpj'>('cpf')
  const [cep, setCep] = useState('')
  const [endereco, setEndereco] = useState({
    logradouro: '',
    bairro: '',
    cidade: '',
    estado: ''
  })

  const buscarCep = async (cepDigitado: string) => {
    if (cepDigitado.length !== 8) return
    try {
      const response = await fetch(`https://viacep.com.br/ws/${cepDigitado}/json/`)
      const data = await response.json()
      if (!data.erro) {
        setEndereco({
          logradouro: data.logradouro || '',
          bairro: data.bairro || '',
          cidade: data.localidade || '',
          estado: data.uf || ''
        })
      }
    } catch (err) {
      console.error('Erro ao buscar CEP:', err)
    }
  }

  useEffect(() => {
    if (cep.length === 8) {
      buscarCep(cep)
    }
  }, [cep])

  return (
    <>
      <Head>
        <title>Cadastro | Meu Orçamento</title>
      </Head>
      <div className="min-h-screen flex items-center justify-center px-4 font-montserrat">
        <div className="w-full max-w-5xl p-10 rounded-2xl border border-gray-200">
          <h1 className="text-3xl font-bold text-center text-primary mb-8">Criar conta</h1>

          <div className="flex justify-center gap-4 mb-6">
            <button
              type="button"
              className={`btn ${tipoPessoa === 'cpf' ? 'btn-primary' : 'btn-outline'}`}
              onClick={() => setTipoPessoa('cpf')}
            >
              Pessoa Física (CPF)
            </button>
            <button
              type="button"
              className={`btn ${tipoPessoa === 'cnpj' ? 'btn-primary' : 'btn-outline'}`}
              onClick={() => setTipoPessoa('cnpj')}
            >
              Pessoa Jurídica (CNPJ)
            </button>
          </div>

          <form className="grid grid-cols-1 md:grid-cols-12 gap-4 text-[#5A5A5A]">
            {tipoPessoa === 'cpf' ? (
              <div className="form-control md:col-span-4">
                <label className="label-custom mb-1">CPF</label>
                <input type="text" className="input-custom" />
              </div>
            ) : (
              <div className="form-control md:col-span-4">
                <label className="label-custom mb-1">CNPJ</label>
                <input type="text" className="input-custom" />
              </div>
            )}

            <div className="form-control md:col-span-5">
              <label className="label-custom mb-1">Nome completo</label>
              <input type="text" className="input-custom" />
            </div>

            <div className="form-control md:col-span-3">
              <label className="label-custom mb-1">
                {tipoPessoa === 'cpf' ? 'Data de nascimento' : 'Data de abertura'}
              </label>
              <input type="date" className="input-custom" />
            </div>

            <div className="form-control md:col-span-6">
              <label className="label-custom mb-1">Email</label>
              <input type="email" className="input-custom" />
            </div>

            <div className="form-control md:col-span-6">
              <label className="label-custom mb-1">Telefone</label>
              <input type="tel" className="input-custom" />
            </div>

            <div className="form-control md:col-span-4">
              <label className="label-custom mb-1">CEP</label>
              <input
                type="text"
                className="input-custom"
                value={cep}
                onChange={(e) => setCep(e.target.value.replace(/\D/g, ''))}
              />
            </div>

            <div className="form-control md:col-span-6">
              <label className="label-custom mb-1">Rua</label>
              <input type="text" className="input-custom" value={endereco.logradouro} readOnly />
            </div>

            <div className="form-control md:col-span-2">
              <label className="label-custom mb-1">Número</label>
              <input type="text" className="input-custom" />
            </div>

            <div className="form-control md:col-span-4">
              <label className="label-custom mb-1">Bairro</label>
              <input type="text" className="input-custom" value={endereco.bairro} readOnly />
            </div>

            <div className="form-control md:col-span-4">
              <label className="label-custom mb-1">Cidade</label>
              <input type="text" className="input-custom" value={endereco.cidade} readOnly />
            </div>

            <div className="form-control md:col-span-4">
              <label className="label-custom mb-1">Estado</label>
              <input type="text" className="input-custom" value={endereco.estado} readOnly />
            </div>

            {tipoPessoa === 'cpf' && (
              <div className="form-control md:col-span-12">
                <label className="label-custom mb-1">Nome da empresa (opcional)</label>
                <input type="text" className="input-custom" />
              </div>
            )}

            {tipoPessoa === 'cnpj' && (
              <>
                <div className="form-control md:col-span-6">
                  <label className="label-custom mb-1">Razão Social</label>
                  <input type="text" className="input-custom" />
                </div>
                <div className="form-control md:col-span-6">
                  <label className="label-custom mb-1">Nome Fantasia</label>
                  <input type="text" className="input-custom" />
                </div>
              </>
            )}

            <div className="form-control md:col-span-12">
              <label className="label-custom mb-1">Logo da empresa</label>
              <input type="file" className="file-input-custom" />
            </div>

            <div className="form-control md:col-span-12 mt-4">
              <button className="btn btn-primary w-full">Cadastrar</button>
            </div>
          </form>
        </div>
      </div>
    </>
  )
}