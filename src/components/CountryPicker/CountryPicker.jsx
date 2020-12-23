import React,{useState,useEffect} from 'react'
import {NativeSelect,FormControl} from '@material-ui/core'
import styles from './CountryPicker.module.css'
import {fetchedCountries} from '../../api'

const CountryPicker = ({handleCountryChange}) => {
    const [fetchCountries,setFetchedCountries] = useState([])
    useEffect(()=>{
        const fetchAPI = async () =>{
            setFetchedCountries(await fetchedCountries())
        }
        fetchAPI()
    },[setFetchedCountries])
    console.log(fetchCountries);
    return (
        <div>
            <FormControl className={styles.formControl}>
                <NativeSelect defaultValue="" onChange={(e)=>handleCountryChange(e.target.value)}>
                    <option value="global">Global</option>
                    {fetchCountries.map((country,i)=><option key={i} value={country}>{country}</option>)}
                </NativeSelect>
            </FormControl>
        </div>
    )
}

export default CountryPicker
