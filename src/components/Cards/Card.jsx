import React from 'react'
import styles from './Card.module.css'
import {Grid,CardContent,Typography,Card} from '@material-ui/core'
import CountUp from 'react-countup'
// import cx from 'classnames'
const Cards = ({data:{confirmed,recovered,deaths,lastUpdate}}) => {
    if (!confirmed){
        return 'Loading..'
    }

    return (
        <div className={styles.container}>
            <Grid container spacing={3} justify="center" >
                <Grid item component={Card} xs={12} md={3} className={styles.infected}>
                    <CardContent>
                        <Typography color="text-secondary" gutterBottom>Infected</Typography>
    <Typography variant="h5" ><CountUp start={0} end={confirmed.value} duration={3.5} seperator=","/></Typography>
    <Typography color="text-secondary" >{new Date(lastUpdate).toDateString()}</Typography>
                        <Typography variant="body2">number of active cases of covid-19</Typography>
                        
                    </CardContent>
                </Grid>
                <Grid item component={Card} xs={12} md={3} className={styles.recovered}>
                    <CardContent>
                        <Typography color="text-secondary" gutterBottom>Recovered</Typography>
                     <Typography variant="h5" ><CountUp start={0} end={recovered.value} duration={3.5} seperator=","/></Typography>
                     <Typography color="text-secondary" >{new Date(lastUpdate).toDateString()}</Typography>
                        <Typography variant="body2">number of active cases of covid-19</Typography>
                        
                    </CardContent>
                </Grid>
                <Grid item component={Card} xs={12} md={3}  className={styles.deaths}>
                    <CardContent>
                        <Typography color="text-secondary" gutterBottom>Deaths</Typography>
                        <Typography variant="h5" ><CountUp start={0} end={deaths.value} duration={3.5} seperator=","/></Typography>
                        <Typography color="text-secondary" >{new Date(lastUpdate).toDateString()}</Typography>
                        <Typography variant="body2">number of active cases of covid-19</Typography>
                        
                    </CardContent>
                </Grid>
            </Grid>
        </div>
    )
}

export default Cards
