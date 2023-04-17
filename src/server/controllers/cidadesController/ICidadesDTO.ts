
export interface ICidadesDTO {
 id?: string
 name: string
}
export interface ICidadesRequestDTO {
 id?: string
  name: string
}

export interface ICidadesResponseDTO {
 id?: number
 name: string
}


export interface IQueryProps {
 page?: number | null
 limit?: number | null
 filter?: string | null
}