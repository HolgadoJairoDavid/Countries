const validate = (state) => {
    const errors = {};
    if(state.name.length === 0) {
        errors.name = 'You must enter a name'
    }

    if(state.name.length > 50){
        errors.name = 'name too long'
    }

    if(state.difficulty === ''){
        errors.difficulty= 'Select a difficulty'
    }

    if(state.duration === ''){
        errors.duration= 'Enter a duration'
    }

    if(!state.season.length){
        errors.season= 'Select a season'
    }
    if(!state.countriesNames.length){
        errors.countriesNames = 'Select a country'
    }
    if(!state.image){
        errors.image = 'Upload a image'
    }
    return errors;
}

export default validate;