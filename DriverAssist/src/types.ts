// Tipo para a tabela CLIENTE

export type Cliente = {
  nmCliente: string; // NM_CLIENTE
  nrCpf: number;     // NR_CPF
  nrRg: number;      // NR_RG
  dtNascimento: Date; // DT_NASCIMENTO
}

// Tipo para a tabela MECANICA
export type Mecanica = {
  nmMecanico: string;  // NM_MECANICO
  nrLogradouro: number; // NR_LOGRADOURO
  nmLogradouro: string; // NM_LOGRADOURO
  nrCep: number;        // NR_CEP
  nmCliente?: string;   // NM_CLIENTE (chave estrangeira, pode ser opcional)
}

// Tipo para a tabela VEICULO
export type Veiculo = {
  idVeiculo: number;  // ID_VEICULO
  marca: string;      // MARCA
  modelo: string;     // MODELO
  anoFabricacao: string; // ANO_FABRICACAO
}

// Tipo para a tabela SERVICO
export type Servico = {
  idServico: string;   // ID_SERVICO
  dcServico: string;   // DC_SERVICO
  prServico: number;   // PR_SERVICO
  dtServico: Date;     // DT_SERVICO
}

// Tipo para a tabela CONSULTA
export type Consulta = {
  motivo: string;    // MOTIVO
  data: Date;        // DATA
  hora: number;      // HORA
  local: string;     // LOCAL
}



