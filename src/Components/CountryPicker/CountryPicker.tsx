import React, { useEffect, useState } from "react";
import { FormControl, NativeSelect, Grid } from "@material-ui/core";
import { fetchCountries } from "../../API";
import styles from './CountryPicker.module.css';


const CountryPicker = ({handleCountryChange}) => {
  const [fetchedCountries, setFetchedCountries] = useState([]);

  useEffect(() => {
    const fetchAPI = async () => {
      setFetchedCountries(await fetchCountries());
    };

    fetchAPI();
  }, [setFetchedCountries]);

  return (
    <div className={styles.root}>
      <Grid container justify="center">
        <Grid item md={8} xs={10}>
          <FormControl className={styles.formControl}>
            <NativeSelect defaultValue="" onChange={(e) => handleCountryChange(e.target.value)} >
              <option value="">Global</option>
              {fetchedCountries.map((country, i) => (
                <option key={i} value={country}>
                  {country}
                </option>
              ))}
            </NativeSelect>
          </FormControl>
        </Grid>
      </Grid>
    </div>
  );
};

export default CountryPicker;
