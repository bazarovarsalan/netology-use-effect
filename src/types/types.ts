

export interface IList {
    list: {id: number,
            name: string
        }[],
    active:number|null
}

export interface IInfo {
    id: number|null,
    name: string
}

export interface ListProps {
    list: {id: number,
        name: string
    }[],
    handler: (arg:any) => void,
    active:number|null
  
}


export type DetailsProps = {
    info: IInfo
}

export interface IDetails {
    id: number|null,
    name: string,
    avatar: string,
    details: {
            city: string,
            company: string,
            position: string
        }
}