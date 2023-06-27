import { useEffect } from "react"
import { useState } from "react";
import { DetailsProps, IDetails } from "../types/types";

const Details = ({info}: DetailsProps) => {
    const [details, setDetails] = useState<IDetails>({
        id: null,
        name: '',
        avatar: '',
        details: {
            city: '',
            company: '',
            position: ''
        }});
    const [isLoading, setIsLoading] = useState(false)

    const fetchDetails = async () => {
        try {
            setIsLoading(true)
            const res = await fetch(`https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/hooks-context/use-effect/data/${info.id}.json`)
            if(!res.ok) throw new Error('Something went wrong');
            const data = await res.json();
            setDetails(data)
            setIsLoading(false)
        } catch(error) {
            console.log(error)
        }
    }

    useEffect(() => {
        if (info.id) fetchDetails()
    }, [info.id]);


  return (
        <div className="Details">
            {isLoading ? <div> Loading...</div> : 
            details.id && <>
                    <img src={details.avatar} className="avatar" alt="..." />
                    <h5 className="detail-title">{details.name}</h5>
                    <ul className="detail-info">City:{details.details.city}</ul>
                    <ul className="detail-info">Company: {details.details.company}</ul>
                    <ul className="detail-info">Position: {details.details.position}</ul>
            </>
            }
        </div> 
  )
}

export default Details
