// Tipo para a tabela CLIENTE
export interface Cliente {
    nmCliente: string; // NM_CLIENTE
    nrCpf: number;     // NR_CPF
    nrRg: number;      // NR_RG
    dtNascimento: Date; // DT_NASCIMENTO
  }
  
  // Tipo para a tabela MECANICA
  export interface Mecanica {
    nmMecanico: string;  // NM_MECANICO
    nrLogradouro: number; // NR_LOGRADOURO
    nmLogradouro: string; // NM_LOGRADOURO
    nrCep: number;        // NR_CEP
    nmCliente?: string;   // NM_CLIENTE (chave estrangeira, pode ser opcional)
  }
  
  // Tipo para a tabela VEICULO
  export interface Veiculo {
    idVeiculo: string;  // ID_VEICULO
    marca: string;      // MARCA
    modelo: string;     // MODELO
    anoFabricacao: string; // ANO_FABRICACAO
  }
  
  // Tipo para a tabela SERVICO
  export interface Servico {
    idServico: string;   // ID_SERVICO
    dcServico: string;   // DC_SERVICO
    prServico: number;   // PR_SERVICO
    dtServico: Date;     // DT_SERVICO
  }
  
  // Tipo para a tabela CONSULTA
  export interface Consulta {
    motivo: string;    // MOTIVO
    data: Date;        // DATA
    hora: number;      // HORA
    local: string;     // LOCAL
  }
  